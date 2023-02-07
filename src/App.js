import AdminLayout from './Components/AdminLayout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<AdminLayout />}>
          <Route index path='/' element={<Admin />} />
        </Route>


      </Routes>


    </div>
  );
}

export default App;
