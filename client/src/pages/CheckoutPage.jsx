import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import NavBar from "../components/navbarComponents/NavBar";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const nav=useNavigate()
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
function onBuy(){
    alert('order confirmed')
    localStorage.clear('cartItems')
    nav('/diesel-clone')
}


  return (
    <div>
      <NavBar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={2}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <img src={item.image} alt={item.name} height="80" />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography>₹{item.price}</Typography>
                    <Typography>Size: {item.size}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom>
          Total Price: ₹{totalPrice}
        </Typography>
        <Button variant="contained" color="primary" onClick={()=>{
            onBuy()
            
        }}>
          Buy Now
        </Button>
      </Container>
    </div>
  );
};

export default CheckoutPage;
