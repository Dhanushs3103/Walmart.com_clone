import React, { useContext } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { FreeMode, Navigation, Mousewheel } from "swiper/modules"; // Import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { ProductsData } from "../Contexts/ProductsDataProvider.jsx";
import "../App.css"; // Ensure correct path

export default function Trending() {
  let { entertainment } = useContext(ProductsData);

  return (
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
        Check out what creators are sharing
      </p>
      {/* cards */}
      <Flex mt={"20px"} height={"fit-content"} >
        <Swiper
          rewind={true}
          freeMode={true}
          spaceBetween={30}
          modules={[FreeMode, Navigation, Mousewheel]}
          className="mySwiper"
          slidesPerView={3}
          mousewheel={true}
          touchRatio={1}
          simulateTouch={true}
          touchStartPreventDefault={false}
        >
          <SwiperSlide>
            <Image src="/public/trending/img1.png" alt="image1" borderRadius={"10px"}  />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img2.png" alt="image1" borderRadius={"10px"} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img3.png" alt="image1" borderRadius={"10px"} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img4.png" alt="image1" borderRadius={"10px"} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img5.png" alt="image1" borderRadius={"10px"} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img6.png" alt="image1"  borderRadius={"10px"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img7.png" alt="image1"  borderRadius={"10px"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img8.png" alt="image1" borderRadius={"10px"} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img9.png" alt="image1"  borderRadius={"10px"}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/trending/img10.png" alt="image1"  borderRadius={"10px"}/>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
}
