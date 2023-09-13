import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SmallCard from "./SmallCard";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";


const SmallCardCrousel = () => {
  // const arr = [1, 2, 3, 4, 5, 7, 8, 9];
  const [products,setProducts]=useState([])
  async function fetchData() {
    let res = await fetch(
      "https://diesel-clone.onrender.com/ptype"
    );
    let data = await res.json();
    setProducts(data);
    console.log('data',products)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Stack display={"flex"} justifyContent={"center"} maxHeight={45}>
      <Container>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          autoplay={true}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("Working")}
        >
          {products.map((e) => {
            return (
              <SwiperSlide key={e}>
                <SmallCard {...e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default SmallCardCrousel;