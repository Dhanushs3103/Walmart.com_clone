import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Box,Flex ,Image,Text} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import {FreeMode, Navigation,Mousewheel } from "swiper/modules"; // import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { ProductsData } from "../Contexts/ProductsDataProvider.jsx";
import "../App.css"; // Ensure correct path

//local imports
import {CardComponent} from "./CardComponent.jsx";

function CategoriesComp({item}) {
    if(!item) return null;

    let {image,title} = item;
    return (
        <>
        <Box  w={"120px"}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={"10px"} _hover={{cursor:"pointer"}}>
            <Image w={'120px'} h={'120px'} src={image} alt="image1"/>
            <Text fontSize={'13px'} textAlign={'center'}>{title}</Text>
        </Box>
        </>
    )
}

export default function Category() {
  let { categories } = useContext(ProductsData);

  return (
    <>
      <Box w={"97%"} margin={"auto"} mt={"10px"} mb={"30px"}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#000000",
            margin: "0",
            height: "fit-content",
          }}
        >
          Get it all right here.
        </h2>
        {/* cards */}
        <Flex
          mt={"20px"}
          height={"fit-content"}
        >
          <Swiper
            rewind={true}
            freeMode={true}
            spaceBetween={1}
            modules={[FreeMode,Navigation,Mousewheel]}
            className="mySwiper"
            slidesPerView={9}
            mousewheel={true}
            touchRatio={1}
            simulateTouch={true}
            touchStartPreventDefault={false}
          >
            {categories.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CategoriesComp  key={item.id} item={item}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex> 
      </Box>
    </>
  );
}
