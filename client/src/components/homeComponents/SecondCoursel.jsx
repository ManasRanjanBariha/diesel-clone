import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ProductCard2 from "./ProductCard2";
import styled from "@emotion/styled";
import { useState } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

const arr = [1, 2, 3, 4, 5, 6];
const GenderButton = styled(Button)(({ theme }) => ({
  fontWeight: "bolder",
  color: "secondary",
  borderColor: "black",
  size: "large",
}));

const SecondCoursel = () => {
  const nav = useNavigate();
  const [male, setMale] = useState(true);
  const [products, setProducts] = useState([]);
  //Function to fetch data from api
  async function fetchDataWomen() {
    let res = await fetch(
      "https://diesel-clone.onrender.com/product?category=women&_limit=6"
    );
    let data = await res.json();
    setProducts(data);
  }
  async function fetchDataMen() {
    let res = await fetch(
      "https://diesel-clone.onrender.com/product?category=men&_limit=5"
    );
    let data = await res.json();
    setProducts(data);
    console.log("data", products);
  }

  //function to navigate
  function navigate() {
    male ? nav("/diesel-clone/products/men") : nav("/diesel-clone/products/women");
  }

  //Fetch data when loads
  useEffect(() => {
    fetchDataMen();
  }, []);

  //Fetch data when change button clicks
  useEffect(() => {
    male ? fetchDataMen() : fetchDataWomen();
    console.log(products);
  }, [male]);
  return (
    <Stack
      display={"flex"}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
      alignItems={"center"}
      mt={5}
    >
      <Box textAlign={"center"} flex={2}>
        <Typography variant="h4">Whats new</Typography>
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
      </Box>

      
      <Container>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={true}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("Working")}
        >

        
          {products.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <ProductCard2 {...e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default SecondCoursel;
