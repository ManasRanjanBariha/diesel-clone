import React from 'react'


import NavBar from "../components/navbarComponents/NavBar";
import DropDown from '../components/productComponents/DropDown';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';


const Products = () => {
  useParams
  return (
    <div>
      <NavBar/>
      <DropDown/>
      <Footer/>
      {/* <ProductList/> */}
      {/* <ProductStyle/> */}
    </div>
  )
}

export default Products
