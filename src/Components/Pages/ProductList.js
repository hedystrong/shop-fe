import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';


export default function ProductList() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setData(res.data.result));
    }, []);
    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => navigate("/product")}>add product</button>
            <div className='table-responsive'>
                <table>
                    <tbody>
                        {data.map(({ price, productName, id, categoryId }, index) => (
                            <tr key={index}>
                                <td>{productName}</td>
                                <td>{price}</td>
                                <td>{categoryId}</td>
                                <td>
                                    <span className='btn btn-warning'>Edit</span>
                                    <span className='btn btn-danger'>Delete</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
