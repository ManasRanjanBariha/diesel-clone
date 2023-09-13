import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Stack, Typography } from "@mui/material";
import ProductStyle from "./ProductStyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DropDown() {
  const x = useParams();
  const [category, setCategory] = React.useState("");
  const [size, setSize] = React.useState("");
  const [prod, setProd] = React.useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  async function fetchData() {
    let res = await fetch(`https://diesel-clone.onrender.com/product/?category=${x.type}`);
    let data = await res.json();
    setProd(data);
    // console.log(data)
  }
  async function fetchSearch() {
    let res = await fetch(`https://diesel-clone.onrender.com/product/?q=${x.type}`);
    let data = await res.json();
    setProd(data);
  }

  useEffect(() => {
    if (x.type === "men" || x.type === "women" || x.type === "kid") fetchData();
    else {
      fetchSearch();
    }
  }, [x]);

  useEffect(() => {
    const filteredProducts = prod.filter((product) => {
      if (!category && !size) {
        return true;
      }
      if (category && size) {
        return product.product === category && product.size === size;
      }
      if (category) {
        return product.product === category;
      }
      if (size) {
        return product.size === size;
      }
    });
    setFilteredProd(filteredProducts);
  }, [category, size, prod]);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleSize = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} marginTop={"2%"}>
        <Box sx={{ padding: "1%", fontWeight: "bold" }}>Filter By</Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={"accessories"}>accessories</MenuItem>
              <MenuItem value={"jeans"}>jeans</MenuItem>
              <MenuItem value={"t-shirt"}>t-shirt</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={handleSize}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={"Small"}>Small</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Large"}>Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent={"center"}
        gap={"3"}
      >
        {filteredProd.length == 0 ? (
          <Container>
          <Box
          sx={{
            width: "100%",
            height: "35vw",
            background: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width:"100%",
              height:"35vw",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="image">
              <Typography variant="h1">Product not found</Typography>
            </div>
          </Box>
        </Box>
          </Container>
        ) : (
          filteredProd.map((el) => (
            <Box key={el.id}>
              <ProductStyle {...el} />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
