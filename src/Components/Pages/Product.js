import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import FormControl from "react-bootstrap/formControl";
import FormLabel from "react-bootstrap/formLabel";
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Product() {
    const init = {
        productName: "",
        categoryId: 0,
        price: 0,
        thumbImage: "",
        images: [],
        salePercent: 0,
        quantity: 0,
        desc: "",
    };
    const [productItem, setProductItem] = useState(init);
    const navigate = useNavigate();
    const onSave = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/product", productItem)
            .then((res) => {
                if (res.data.status) {
                    navigate("/products")
                } else {
                    alert("Hadgalahad aldaa garsan bna")
                }
            });
    };

    return (
        <div>
            <div className='row'>
                <div className='col-md-6 '>
                    <Form>
                        <FormGroup>
                            <FormLabel>ProductName</FormLabel>
                            <FormControl value={productItem.productName} onChange={(e) =>
                                setProductItem({ ...productItem, productName: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Price</FormLabel>
                            <FormControl value={productItem.price} onChange={(e) =>
                                setProductItem({ ...productItem, price: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Category</FormLabel>
                            <Form.Select value={productItem.categoryId} onChange={(e) =>
                                setProductItem({ ...productItem, categoryId: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Thumb image</FormLabel>
                            <FormControl
                                type='file'
                                value={productItem.thumbImage}
                                onChange={(e) =>
                                    setProductItem({ ...productItem, categoryId: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Slide Images</FormLabel>
                            <FormControl
                                multiple
                                type='file'
                                value={productItem.images}
                                onChange={(e) =>
                                    setProductItem({ ...productItem, categoryId: e.target.value })} />
                        </FormGroup>
                        <Button onClick={onSave}>Save</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
