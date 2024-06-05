//packages
import React from 'react'
import { Box, Image, Menu, MenuButton, Flex, Text, MenuList, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <div style={{border:"1px solid black", height:"100px"}}>
      <>
      {/* Navbar */}
      <Box border={"1px solid red"} id="LogoImage" width={"fit-content"}>
        <a href=""><Image w={"38px"} h={"38px"} src='https://bit.ly/dan-abramov'/></a>
      </Box>
      {/* select the order */}
      <Menu>
        <MenuButton bg='#002D58' as={Button} maxW={"342px"} p="30px 10px" rightIcon={<ChevronDownIcon />} borderRadius="50pc">
          <Flex>
            {/*logo next image*/}
            <Image src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" h="fit-content"/>
            {/**/}
            <Box>
              <Text mt="2" color="white">How do you want your items?</Text>
              <Flex>
                <span style={{color:"white", fontSize:"15px", fontWeight:"300", marginLeft:"8px", marginTop:"1px"}}>Sacramento, 95829</span>
                <span style={{color:"white"}}>•</span>
                <span style={{color:"white", fontSize:"15px", fontWeight:"300", marginTop:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"fit-content"}}>Sacramento Supercenter</span>
              </Flex>
            </Box>
          </Flex>
        </MenuButton>
        <MenuList>
          {/* Add menu items here */}
        </MenuList>
      </Menu>
      </>
    </div>
  )
}
