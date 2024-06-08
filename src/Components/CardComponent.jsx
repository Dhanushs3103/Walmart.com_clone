// packages
import React, { useState } from "react";
import styled from "styled-components";
import { Box, Image, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "../App.css"; // Ensure correct path


const StyledIcon = styled(({ isActive, ...props }) => (
    <FontAwesomeIcon {...props} />
  ))`
    margin-top: 15px;
    margin-right: 10px;
    color: ${({ isActive }) => (isActive ? "red" : "lightgrey")};
    font-size: 20px;
    border-radius: 50%;
    background-color: white;
    padding: 3px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 160px;
    z-index: 1;
  `;
  
  const EllipsisText = styled.div`
    color: #2e2f32;
    margin-top: 10px;
    text-align: left;
    font-size: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
    text-overflow: ellipsis;
  `;
  
  export function CardComponent({ item }) {
    const [isActive, setIsActive] = useState(false);
  
    let { image, descrip, title, price } = item;
  
    const handleClick = () => {
      setIsActive(!isActive);
    };
  
    return (
      <Box
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
        height={"fit-content"}
        w={"200px"}
        p={1}
        position={"relative"}
        mt={"10px"}
      >
        <StyledIcon icon={faHeart} isActive={isActive} onClick={handleClick} />
        <Image
          src={image}
          w={"200px"}
          h={"190px"}
          ml={"auto"}
          mr={"auto"}
          _hover={{ cursor: "pointer" }}
        />
        <Text color={"#2A8724"} fontWeight={"500"}>
          ${price}
        </Text>
        {descrip ? (
          <Text
            color={"#000000"}
            fontWeight={"300"}
            fontSize={"13px"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            mb={"5px"}
          >
            {descrip}
          </Text>
        ) : null}
        <EllipsisText style={{ margin: "0", marginBottom: "10px" }}>
          {title}
        </EllipsisText>
        <ButtonGroup>
          <Button
            w={"fit-content"}
            h={"fit-content"}
            colorScheme="black"
            variant="outline"
            fontSize={"14px"}
            padding={"7px 15px"}
            fontWeight={"600"}
            border={"1px solid black"}
            borderRadius={"50px"}
            _hover={{ cursor: "pointer" }}
          >
            options
          </Button>
          <Button
            w={"fit-content"}
            h={"fit-content"}
            colorScheme="black"
            variant="outline"
            fontSize={"14px"}
            padding={"7px 13px"}
            fontWeight={"600"}
            border={"1px solid black"}
            borderRadius={"50px"}
            _hover={{ cursor: "pointer" }}
          >
            + Add
          </Button>
        </ButtonGroup>
      </Box>
    );
  }