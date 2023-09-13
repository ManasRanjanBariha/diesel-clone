import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const img="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1692282522FW23_DROP_1_2_LOOKBOOK___OPC_SELL_OUT_CROPS_RAW_EDGES_(FL)___NEON_TOUCH_DENIM_(ML)_1_1_DIESEL__997.webp"
const SmallCard = (props) => {
  const nav=useNavigate()
  const {name,image}=props
  return (

    <Card >
    <CardActionArea onClick={()=>{
      nav(`/products/${name}`);
    }}>
    <CardMedia 
    component={"img"}
    max-height={"80%"}
    
    image={image}
    alt={"Demo project"}
    />
    <CardContent>
        <Typography variant={"h6"} textAlign={"center"}>
          {name}
        </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default SmallCard