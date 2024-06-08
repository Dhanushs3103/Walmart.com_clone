import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Box, Flex,Text,Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { FreeMode, Navigation,Mousewheel } from "swiper/modules"; // import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { ProductsData } from "../Contexts/ProductsDataProvider.jsx";
import "../App.css"; // Ensure correct path

//local imports
import { CardComponent } from "./CardComponent.jsx";

export default function ScreenTime() {
  let { capParty } = useContext(ProductsData);

  return (
    <Box  display={"flex"} justifyContent={"center"} gap={7} mt={6}>
      <Box
        w={"50%"}
        mt={"10px"}
        ml={"10px"}
        mb={"30px"}
      >
        {/* top section with flex */}
        <Flex justifyContent={"space-between"} p={1}>
          <Box>
            <h2
              style={{
                fontSize: "21px",
                fontWeight: "600",
                color: "#000000",
                margin: "0",
                height: "fit-content",
              }}
            >
              Cap toss, party on
            </h2>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "300",
                color: "#74767C",
                margin: "0",
              }}
            >
              Gift ideas, decor & much more.
            </p>
          </Box>
          <Text height={"fit-content"} p={0} m={0} w={"fit-content"} fontSize={"12px"} borderBottom={"1px solid"} _hover={{cursor:"pointer"}}>view all</Text>
        </Flex>

        {/* cards */}
        <Flex mt={"20px"} height={"fit-content"}>
          <Swiper
            rewind={true}
            freeMode={true}
            spaceBetween={10}
            modules={[FreeMode,Navigation,Mousewheel]}
            className="mySwiper"
            slidesPerView={3}
            navigation={true}
            mousewheel={true}
            touchRatio={1}
            simulateTouch={true}
            touchStartPreventDefault={false}
          >
            {capParty.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardComponent item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>
      </Box>
      <Image src='/public/capParty/capParty.png' alt="screen" style={{width:"650px", height:"421px", marginTop:"10px", borderRadius:"10px",}} _hover={{cursor:"pointer"}}/>
    </Box>
  );
}
