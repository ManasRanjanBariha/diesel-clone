import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Hidden } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const img="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/product/410279568029/665/410279568034_1_8604.webp"



const ProductStyle=(prop)=> {
  const nav=useNavigate()
  const { name, image1,price } = prop;
  return (
    <Grid marginTop={"3%"}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>{
        nav(`/diesel-clone/productdetails/${prop.id}`)
      }}>
        <CardMedia
          component="img"
          height="80%"
          image={image1}
          alt="product_images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ₹{price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{whiteSpace: "nowrap", overflow: "hidden",textOverflow: "ellipsis"}}>
            {name}
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    </Grid>
  );
}
export default ProductStyle;
