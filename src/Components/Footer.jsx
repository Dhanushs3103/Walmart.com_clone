// Packages
import React from 'react'
import { Box,Flex,Image,Button,Text } from '@chakra-ui/react'

//local imports

export default function Footer() {
  return (
    <div style={{marginTop:'70px'}}>
        {/* Footer Top */}
      <Box display={"flex"} flexDirection={"column"} p={2} h={'130px'} bg={"#E6F1FC"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"14px"} mt={3} mb={4}>We'd love to hear what you think!</Text>
        <Button colorScheme='black' variant={'outline'} fontSize={"14px"} p={"8px 23px"} bg={'white'} borderRadius={"50px"} h={"fit-content"}  _hover={{border:"2px solid black",cursor:"pointer"}}>Give feedback</Button>
      </Box>
      {/* Footer bottom */}
      <Box bg={"#004F9A"} padding={5}>
        {/* 1st line */}
      <Flex justifyContent={'center'} gap={3} >
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>All Department</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Store Dictionery</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Careers</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Our Company</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Sell on Wallmart.com</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Help</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Product Recalls</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Accesseibility</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Tax exemption programm</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Get the Walmart App</Text>
      </Flex>
      {/* 2nd line */}
      <Flex justifyContent={'center'} gap={3} mt={1} >
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>signUp for email</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Safety Data Sheet</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Terms of Use</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Privacy & Security</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>California Supply Chain Act</Text>
        <Box display={"flex"} gap={1}>
            <img style={{width:"fit-content",height:"15px",marginTop:"2px"}} src="https://i5.walmartimages.com/dfwrs/76316474-f70e/k2-_67001355-c576-4ca2-989d-260a2673c41a.v1.png" alt="privacy" />
            <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Your Privacy Choices</Text>
        </Box> 
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Notice at Collection</Text>
      </Flex>
      {/* 3rd line */}
      <Flex justifyContent={'center'} gap={3} mt={1} >
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>NV Consumer Health Data Privacy Notice</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>WA Consumer Health Data Privacy Notice</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Request My Personal Information</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Brand Shop Directory</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Pharmacy</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>Walmart Business</Text>
        <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"}>#IYWYK</Text>
      </Flex>
      {/* 4th line */}
      <Text fontSize={"13px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"} textAlign={'center'} mt={1}>Delete Account</Text>
      {/* 5th line */}
      <Text fontSize={"11px"} color={"#FFFFFF"} _hover={{cursor:"pointer"}} fontWeight={"300"} textAlign={'center'} mt={5}>© 2024 Walmart. All Rights Reserved.</Text>
      </Box>
    </div>
  )
}
