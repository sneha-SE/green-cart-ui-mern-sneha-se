import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import { UseAppContext } from './context/AppContext';
import Login from './components/login';
import AllProduct from './pages/AllProduct';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';

const App = () => {

  const isSellerPath = useLocation().pathname.includes('seller')
  const {showUserLogin} = UseAppContext();

  return (
    <div>
      {isSellerPath ? null : <NavBar/>}
      {showUserLogin ? <Login/> : null}
      
      <Toaster/>
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<AllProduct></AllProduct>}></Route>
          <Route path='/products/:category' element={<ProductCategory></ProductCategory>}></Route>
          <Route path='/products/:category/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/add-address' element={<AddAddress/>}></Route>
          <Route path='/my-orders' element={<MyOrders/>}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  );
};

export default App;