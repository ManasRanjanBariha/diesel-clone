import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


const Productcard = (prop) => {
  const { name, image } = prop;
  return (
    <Card sx={{}}>
      <CardMedia
        component={"img"}
        max-height={"80%"}
        
        image={image}
        alt={"Demo project"}
      ></CardMedia>
      <CardContent>
        <Typography variant={"h6"} textAlign={"center"}>{name}</Typography>
      </CardContent>
    </Card>

  );
};

export default Productcard;
