import AdminLayout from './Components/AdminLayout';
import { Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/Pages/ProductList';
import Product from './Components/Pages/Product';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path='/' element={<Admin />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
        </Route>


      </Routes>


    </div>
  );
}

export default App;
