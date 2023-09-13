import React, { useEffect, useState } from "react";
import Productcard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const GenderButton = styled(Button)(({ theme }) => ({
  fontWeight: "bolder",
  color: "secondary",
  borderColor: "black",
  size: "large",
}));


const ProductTypes = () => {
  const [malejeans,setMalejeans]=useState([])
  const [femalejeans,setFemalejeans]=useState([])
  const [male, setMale] = useState(true);
  async function fetchData(){
    let res= await fetch('https://diesel-clone.onrender.com/jeans')
    let data= await res.json();
    console.log(data)
    setFemalejeans(data.womenjeans)
    setMalejeans(data.menjeans)
  }
  const nav=useNavigate()
  useEffect(()=>{
    fetchData()
    
  },[])
  return (
    <Stack
      display={"flex"}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
      alignItems={"center"}
      mt={5}
    >
      <Box textAlign={"center"} flex={2}>
        <Typography variant="h4">Find Your Fit</Typography>
        <Box>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="large"
            color="black"
            border="2"
            bordercolor="secondary"
          >
            <GenderButton
              onClick={() => {
                setMale(true);
              }}
              color={male ? "error" : "black"}
            >
              Male
            </GenderButton>
            <GenderButton
              onClick={() => {
                setMale(false);
              }}
              color={male ? "black" : "error"}
            >
              Female
            </GenderButton>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography>
            Find your next denim among a wide range
          </Typography>
          <Typography>
            of timeless denim washes, icons of low impact style,
          </Typography>
          <Typography> better for people and the planet.</Typography>
        </Box>
      </Box>

      {!male && (
        <Container fixed>
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            spaceBetween={0}
            slidesPerView={5}
            autoplay={true}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("Working")}
          >
            {femalejeans.map((e) => {
              return (
                <Box sx={{ maxHeight: { lg: "250px", md: "none" } }}>
                  <SwiperSlide key={e.image} onClick={()=>{
                    nav('/diesel-clone/products/women')
                  }}>
                    <Box maxHeight={"5%"}>
                      <Productcard name={e.name} image={e.image} />
                    </Box>
                  </SwiperSlide>
                </Box>
              );
            })}
          </Swiper>
        </Container>
      )}

      {male && (
        <Container>
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {malejeans.map((e) => {
              return (
                <SwiperSlide key={e.name} onClick={()=>{
                  nav('/diesel-clone/products/men')
                }}>
                  <Productcard name={e.name} image={e.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      )}
    </Stack>
  );
};

export default ProductTypes;
