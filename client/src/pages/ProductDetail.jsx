import React, { useState,useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { Star, StarHalf, ShoppingCart } from "@mui/icons-material";
import NavBar from "../components/navbarComponents/NavBar";
import "../styles/detailstyle.css";
import {useNavigate, useParams} from 'react-router-dom'

const img1 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373974001/665/410373974001_1_1917.webp";
const img2 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373972001/665/410373972001_1_8798.webp";
const img3 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410345130003/665/410345130003_1_4681.webp";
const img4 =
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410373981002/665/410373981002_1_8495.webp";
const ProductDetail = (props) => {
  const nav=useNavigate()
  const [img,setImg]=useState('')
  const [selectedSize, setSelectedSize] = useState("");
  const [prod,setProd]=useState({})
  const x=useParams()
  async function fetchData(){
    let res= await fetch(`https://diesel-clone.onrender.com/product/${x.id}`)
    let data=  await res.json()
    setProd(data)
    setImg(prod.image1)
  }
  const addToCart = () => {
    if(selectedSize=='')
    {
      alert('select a size')
      return;
    }
    const login=localStorage.getItem('login')
    console.log(login);
    if(login==null)
    {
      nav('/diesel-clone/login')
      return;
    }
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const item = {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      size: selectedSize,
      image: img,
    };
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
    nav('/diesel-clone/checkout')
  };

  useEffect(()=>{
    fetchData()
    setImg(prod.image1)
  },[])
  useEffect(()=>{
    setImg(prod.image1)
  },[prod])
  return (
    <Box>
      <NavBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="slider">
              <div className="product">
                <img src={prod.image1} onClick={()=>{
                  setImg(prod.image1)
                }} alt="" />
                <img src={prod.image2} alt=""  onClick={()=>{
                  setImg(prod.image2)
                }}/>
                <img src={prod.image3} alt="" onClick={()=>{
                  setImg(prod.image3)
                }} />
              </div>
              <div className="preview">
                <img src={img} id="imagebox" alt="" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="content">
              <Typography variant="h4">
                {prod.name}
              </Typography>
             
              <Typography className="price">₹{prod.price}</Typography>
              <Typography>
                Size:{" "}
                <Select
                  name="size"
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                >
                  <MenuItem value="">Select size</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                </Select>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                onClick={()=>{
                  addToCart()
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Grid>
        </Grid>
        {/* Related Items */}
        <Typography variant='h5'>
                {prod.desc}
        </Typography>
      </Container>
    </Box>
  );
};
export default ProductDetail;
