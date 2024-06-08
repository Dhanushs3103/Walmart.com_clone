import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Box,Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import {FreeMode, Navigation,Mousewheel } from "swiper/modules"; // import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { ProductsData } from "../Contexts/ProductsDataProvider.jsx";
import "../App.css"; // Ensure correct path

//local imports
import {CardComponent} from "./CardComponent.jsx";

export default function MoreBrandsCards() {
  let { moreBrands } = useContext(ProductsData);

  return (
    <>
      <Box w={"97%"} margin={"auto"} mt={"10px"} mb={"30px"}>
        <h2
          style={{
            fontSize: "21px",
            fontWeight: "600",
            color: "#000000",
            margin: "0",
            height: "fit-content",
          }}
        >
          More LGBTQIA+ brands
        </h2>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "300",
            color: "#74767C",
            margin: "0",
          }}
        >
          Celebrate all year long.
        </p>
        {/* cards */}
        <Flex
          mt={"20px"}
          height={"fit-content"}
        >
          <Swiper
            rewind={true}
            freeMode={true}
            spaceBetween={10}
            modules={[FreeMode,Navigation,Mousewheel]}
            className="mySwiper"
            slidesPerView={6}
            mousewheel={true}
            touchRatio={1}
            simulateTouch={true}
            touchStartPreventDefault={false}
          >
            {moreBrands.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardComponent item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>  
      </Box>
      <hr />
    </>
  );
}
