import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { FreeMode, Navigation, Mousewheel } from "swiper/modules"; // import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { ProductsData } from "../Contexts/ProductsDataProvider.jsx";
import "../App.css"; // Ensure correct path

//local imports
import { CardComponent } from "./CardComponent.jsx";

const EllipsisText = styled.div`
  color: #2e2f32;
  margin-top: 10px;
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
  text-overflow: ellipsis;
`;

function VideoCard({ item }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  let { video, image, price, title } = item;

  return (
    <>
      <Box
        border={"1px solid lightgrey"}
        height={"670px"}
        borderRadius={"10px"}
        _hover={{ cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
         ref={videoRef}
          height={"640px"}
          width={"382px"}
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
          controls
        >
          <source
            src={video}
            type="video/mp4"
            style={{ _hover: { cursor: "pointer" } }}
          />
        </video>
        <Flex>
          <Image
            w={"50px"}
            h={"50px"}
            src={image}
            borderRadius={"10px"}
            mt={"15px"}
            ml={"20px"}
          />
          <Box ml={"20px"} width={"277px"}>
            <Text mb={1} mt={"5px"} fontSize={"18px"} fontWeight={"700"}>
              ${price}
            </Text>
            <EllipsisText style={{ margin: "0", marginBottom: "10px" }}>
              {title}
            </EllipsisText>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default function SocialMedia() {
  let { socialMedia } = useContext(ProductsData);

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
          Trending on social
        </h2>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "300",
            color: "#74767C",
            margin: "0",
          }}
        >
          Shop what creators are sharing.
        </p>
        {/* cards */}
        <Flex mt={"20px"} height={"fit-content"} borderRadius={"10px"}>
          <Swiper
            rewind={true}
            freeMode={true}
            spaceBetween={20}
            modules={[FreeMode, Navigation, Mousewheel]}
            className="mySwiper"
            slidesPerView={4}
            mousewheel={true}
            touchRatio={1}
            simulateTouch={true}
            touchStartPreventDefault={false}
            navigation={true}
          >
            {socialMedia.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <VideoCard key={item.id} item={item} />
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
