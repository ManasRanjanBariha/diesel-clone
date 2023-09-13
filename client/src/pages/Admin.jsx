import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import NavBar from "../components/navbarComponents/NavBar";



const Admin = () => {
  
  const [name,setName]=useState('')
  const [desc,setDesc]=useState('')
  const [image1,setImage1]=useState('')
  const [image2,setImage2]=useState('')
  const [image3,setImage3]=useState('')
  const [product,setProduct]=useState('')
  const [price,setPrice]=useState(0)
  const [category, setCategory] = React.useState("");
  const [size, setSize] = useState("");

  function handleProduct(event){
    setProduct(event.target.value)
  } 

  const handleCategory = (event) =>{
    setCategory(event.target.value);
    console.log(event.target.value)
  }

  const handleSize = (event) =>{
    setSize(event.target.value);
  }
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    else if (id === "desc") setDesc(value);
    else if (id === "image1") setImage1(value);
    else if (id === "image2") setImage2(value);
    else if (id === "image3") setImage3(value);
    else if (id === "price") setPrice(value);
  };
  function onSubmit()
  {
    if (
      name === "" ||
      desc === "" ||
      image1 === "" ||
      image2 === "" ||
      image3 === "" ||
      price === 0 ||
      category === "" ||
      size === "" ||
      product ===""
    ){
      alert('Enter all the field')
      return
    }
    dataPost()
    setName('')
    setCategory('')
    setDesc('')
    setImage1('')
    setImage2('')
    setImage3('')
    setPrice(0)
    setSize('')
    setProduct('')
  }
  
  async function dataPost()
  {
    
    
    const obj={
      name:name,
      desc:desc,
      image1:image1,
      image2:image2,
      image3:image3,
      price:price,
      product:product,
      category:category,
      size:size
    }
    let res = await fetch("https://diesel-clone.onrender.com/product", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      }
    });
    // console.log(obj)
    

  }

  return (
    <>
   <NavBar/>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" }, 
      }}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      paddingX={"20%"}
      noValidate
      autoComplete="off"
    >


      <TextField
        id="name"
        label="Product Name *"
        multiline
        maxRows={4}
        fullWidth 
        sx={{
          backgroundColor: "#87CEEB", 
        }}
        onChange={handleOnChange}
      />


      <TextField
        id="desc"
        label="Product Description *"
        multiline
        rows={5}
        // defaultValue="Default"
        fullWidth
        
        sx={{
          backgroundColor: "#87CEEB", 
        }}
        onChange={handleOnChange}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="image1"
        required
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="image2"
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />


      <TextField
        fullWidth // Make this text field full width
        label="Image link"
        id="image3"
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />


      <TextField
        id="price"
        label="$Price *"
        multiline
        maxRows={4}
        fullWidth // Make this text field full width
        sx={{
          backgroundColor: "#87CEEB", // Set your desired background color
        }}
        onChange={handleOnChange}
      />

      <Box sx={{ display: "flex", paddingX: "20%" }}>
        <FormControl fullWidth sx={{ backgroundColor: "#87CEEB" }}>
          <InputLabel id="demo-simple-select-label">Category *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleCategory}
          >
            <MenuItem value={"men"}>Men</MenuItem>
            <MenuItem value={"women"}>Women</MenuItem>
            <MenuItem value={"kid"}>Kid</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ backgroundColor: "#87CEEB" }}>
          <InputLabel id="demo-simple-select-label">Product *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="product"
            value={product}
            label="Size"
            onChange={handleProduct}
          >
            <MenuItem value={"jeans"}>Jeans</MenuItem>
            <MenuItem value={"accessories"}>Accessories</MenuItem>
            <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ backgroundColor: "#87CEEB" }}>
          <InputLabel id="demo-simple-select-label">Size *</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={handleSize}
          >
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
          </Select>
        </FormControl>
        
      </Box>
      <Box mb={2}></Box>
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </Box>
    </>
  );
};
 

export default Admin;