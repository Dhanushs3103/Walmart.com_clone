//packages
import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  Flex,
  Text,
  MenuList,
  Button,
  Input,
  background,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faUser } from "@fortawesome/free-regular-svg-icons"; 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
//local imports

export default function Navbar() {
  return (
    <div >
      {/* Navbar top */}
      <Flex justifyContent={'center'}  alignItems={'center'} bg={"#0071DC"} gap={6} p={"15px"}>
        {/* Navbar */}
        <Box  id="LogoImage" width={"fit-content"}>
          <a href="">
            <Image w={"40px"} h={"40px"} src="https://bit.ly/dan-abramov" borderRadius={'50px'} />
          </a>
        </Box>
        {/* select the order */}
        <Menu>
          <MenuButton
            bg="#004F9A"
            _hover={{ bg: "#002D59" }}
            as={Button}
            maxW={"fit-content"}
            p={"27px 10px"}
            rightIcon={<ChevronDownIcon color={"white"} fontSize={20} />}
            borderRadius={50}
            _active={{ bg: "#002D59" }}
          >
            <Flex justifyContent={"center"}>
              {/*logo next image*/}
              <Image
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                w={"40px"}
                h={"40px"}
                mt={2.5}
              />
              {/**/}
              <Box textAlign={"left"} ml={2} w={"fit-content"}>
                <Text mt="2" color="white" ml={1} textAlign={"left"}>
                  How do you want your items?
                </Text>
                <Flex p={1} justifyContent={"center"} gap={1}>
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "300",
                    }}
                  >
                    Sacramento, 95829
                  </span>
                  <span
                    style={{
                      color: "white",
                      padding: "0,5px",
                      marginBottom: "6px",
                    }}
                  >
                    •
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "300",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "120px",
                    }}
                  >
                    Sacramento Supercenter
                  </span>
                </Flex>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList
            bg={"#0071DC"}
            p={"30px 20px"}
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            borderRadius={5}
            border={0}
          >
            {/* menu items here of services */}
            <Flex gap={7} maxW={"fit-content"}>
              <Box
                textAlign={"center"}
                w={"fit-content"}
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w={"48px"}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png"
                  alt="shiping"
                  mb={3}
                />
                <Text fontSize={"13px"} color={"#FFFFFF"} fontWeight={700}>
                  Shiping
                </Text>
              </Box>
              <Box
                textAlign={"center"}
                w={"fit-content"}
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w={"48px"}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png"
                  alt="Pickup"
                  mb={3}
                />
                <Text fontSize={"13px"} color={"#FFFFFF"} fontWeight={700}>
                  Pickup
                </Text>
              </Box>
              <Box
                textAlign={"center"}
                w={"fit-content"}
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w={"48px"}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png"
                  alt="Delivery"
                  mb={3}
                />
                <Text fontSize={"13px"} color={"#FFFFFF"} fontWeight={700}>
                  Delivery
                </Text>
              </Box>
            </Flex>
            {/* address section */}
            <Box bg={"#FFFFFF"} w={"315px"} h={"110px"} borderRadius={10}>
              <Flex mb={1} width={"fit-content"} ml={5} mt={2}>
                {/* location icon */}
                <Image
                  w={"15px"}
                  h={"15px"}
                  mt={1}
                  mr={2}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-5249/k2-_71d3c250-050a-40b0-8fd7-c84c1df83204.v1.png"
                  alt="location"
                />
                {/* texts */}
                <Box>
                  <Text color={"#2E2F32"} fontSize={"12px"} fontWeight={700}>
                    Add an address for shipping and delivery
                  </Text>
                  <Text
                    color={"#2E2F32"}
                    fontSize={"12px"}
                    mt={1}
                    fontWeight={400}
                  >
                    Sacramento, CA 95829
                  </Text>
                </Box>
              </Flex>
              <Button
                bg={"#0071DC"}
                p={"1px 95px"}
                fontWeight={500}
                borderRadius={50}
                ml={5}
                fontSize={"14px"}
                color={"#FFFFFF"}
                _hover={{ bg: "#004F9A", cursor: "pointer" }}
              >
                Add address
              </Button>
            </Box>
            {/* city */}
            <Box bg={"#FFFFFF"} w={"315px"} h={"80px"} borderRadius={10}>
              <Flex mb={1} width={"fit-content"} ml={5} mt={3}>
                {/* location icon */}
                <Image
                  w={"15px"}
                  h={"15px"}
                  mt={1}
                  mr={2}
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-14f0/k2-_8ce34043-6050-4f39-afb2-3e76a554f8a3.v1.png"
                  alt="location"
                />
                {/* texts */}
                <Box>
                  <Text color={"#2E2F32"} fontSize={"12px"} fontWeight={700}>
                    Sacramento Supercenter
                  </Text>
                  <Text color={"#2E2F32"} fontSize={"12px"} fontWeight={400}>
                    8915 GERBER ROAD, Sacramento, CA
                  </Text>
                  <Text color={"#2E2F32"} fontSize={"12px"} fontWeight={400}>
                    95829
                  </Text>
                </Box>
                <ChevronRightIcon
                  fontSize={25}
                  mt={3}
                  ml={8}
                  color={"#353535"}
                  fontWeight={100}
                  _hover={{ cursor: "pointer" }}
                />
              </Flex>
            </Box>
          </MenuList>
        </Menu>
        {/* serach bar */}
        <Flex
          borderRadius={50}
          w={"35%"}
          gap={3}
          p={2}
          bg={"#FFFFFF"}
        >
          <Input
            border={"none"}
            _focus={{
              outline: "none",
              boxShadow: "none",
            }}
            type="text"
            placeholder="Search everything in Wallmart online and in-store"
            p={"20px 20px"}
            borderRadius={50}
          />
          <Box
            width={"30px"}
            borderRadius={"80px"}
            p={"10px 21px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#FFC220"}
          >
            <SearchIcon _hover={{ cursor: "pointer" }} />
          </Box>
        </Flex>
        {/* Re-orders */}
        <Flex w={"fit-content"} borderRadius={50} p={'2px 18px'} bg={'#0071DC'} _hover={{cursor:'pointer',bg:'#002D58'}}>
        <FontAwesomeIcon icon={faHeart} style={{marginTop:'15px',marginRight:'10px', color:'white'}} />
        <Box>
          <Text fontSize={'16px'} color={'#FFFFFF'} fontWeight={350}>Reorder</Text>
          <Text fontWeight={600} color={'#FFFFFF'} fontSize={'16px'}>My Items</Text>
        </Box>
        </Flex>
        {/* profile */}
        <Flex w={"fit-content"} borderRadius={50}  p={'2px 18px'} bg={'#0071DC'} _hover={{cursor:'pointer',bg:'#002D58'}}>
        <FontAwesomeIcon icon={faUser} style={{marginTop:'15px',marginRight:'10px', color:'white'}} />
        <Box>
          <Text fontSize={'16px'} color={'#FFFFFF'} fontWeight={350}>Sign In</Text>
          <Text fontWeight={600} color={'#FFFFFF'} fontSize={'16px'}>Account</Text>
        </Box>
        </Flex>
        {/* cart */}
        <Flex w={"fit-content"} borderRadius={50}  p={'5px 18px'} bg={'#0071DC'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} _hover={{cursor:'pointer',bg:'#002D58'}}>
        <FontAwesomeIcon icon={faCartShopping}  style={{marginRight:'6px', color:'white'}}  />
        <Box>
          <Text fontSize={'16px'} color={'#FFFFFF'} fontWeight={350}>$0.00</Text>
        </Box>
        </Flex>
      </Flex>
      {/* Navbar below */}
    </div>
  );
}
