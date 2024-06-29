import React from 'react';
import './index.css'
import Header from './components/Header/Header';
import Products from './components/page/Products/Products'
import { Routes, Route } from 'react-router-dom'
import Details from './components/page/Detail/Details'
import Cart from './components/page/Cart/Cart'
import About from './components/page/About/About'
import Home from './components/Home/Home'
import Footer from './components/Home/footer';
import ShopCategory from './components/page/SHop/ShopCategory';
import Address from './components/page/Address/Address';
import Sanpham from './components/page/San Pham/sanPham';
import Login from './components/page/Login/log in/login';
import Register from './components/page/Register/Register';




function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Address" element={<Address/>} />
        <Route path="/products" element={<Products children={<Sanpham/>} />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/shop/:id" element={<Products children = {<ShopCategory/>} />} />
        <Route path="/shop/:id" element={<Products children = {<ShopCategory/>} />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Cart" element={<Cart/>} />

      </Routes>
      <Footer/>
    </div>





  );
}

export default App;


//  json-server --watch data.json