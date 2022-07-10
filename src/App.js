import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  const [authenticate, setAuthenticate] = useState(false); // true == 로그인, false == 비로그인

  useEffect(() => {
  }, [authenticate])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
