import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "./Test";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import  Admin  from '../pages/Admin'
import {useParams} from 'react-router-dom'
import CheckoutPage from "../pages/CheckoutPage";
const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path="/diesel-clone" element={<Home />} />
      <Route path="/diesel-clone/test1" element={<Test />} />
      <Route path="/diesel-clone/login" element={<Login />} />
      <Route path="/diesel-clone/products/:type" element={<Products />} />
      <Route path="/diesel-clone/productdetails/:id" element={<ProductDetail />} />
      <Route path="/diesel-clone/userdetail" element={<UserDetails />} />
       <Route path='/diesel-clone/admin' element={<Admin/>}></Route>
       <Route path='/diesel-clone/checkout' element={<CheckoutPage/>}></Route>
       <Route path='/diesel-clone/profile' element={<UserDetails/>}></Route>

    </Routes>
  );
};

export default AllRoutes;
