import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useNavigate} from 'react-router-dom'
const ProductCard2 = (props) => {
  const nav=useNavigate()
  return (
    <Card sx={{ position: "relative" }} >
      <CardActionArea onClick={()=>{
        nav(`/diesel-clone/productdetails/${props.id}`)
      }}>
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
        aria-label="add to wishlist"
      >
        <FavoriteIcon />
      </IconButton>

      <CardHeader />
      <CardMedia
        component={"img"}
        max-height={"80%"}
        width={"%"}
        image={props.image1}
        alt={"Demo project"}
      ></CardMedia>
      <CardContent>
        <Typography variant={"p"} textAlign={"center"}>
          {props.name}
        </Typography>
        
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard2;
