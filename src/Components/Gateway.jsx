//packages
import React from 'react'
import { Grid,GridItem,Image } from '@chakra-ui/react'

//local imports
import "../App.css"

export default function Gateway() {
  return (
    <>
      <Grid templateColumns={"repeat(5,1fr)"} templateRows={"repeat(2,280px)"} gap={4} p={1} h={"fit-content"} mt={5}>
        {/* 1st gridCell */}
        <GridItem _hover={{cursor:"pointer"}} rowSpan={2} colSpan={2} borderRadius={"10px"}>
          <Image src='/src/assets/gateway/image1.png' alt='image1' h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 2nd gridCell */}
        <GridItem _hover={{cursor:"pointer"}} colSpan={2}  borderRadius={"10px"}>
        <Image src='/src/assets/gateway/image2.png' alt='image1' h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 3rd gridCell */}
        <GridItem _hover={{cursor:"pointer"}} rowSpan={2} w={"323px"} borderRadius={"10px"}>
        <Image src='/src/assets/gateway/image5.png' alt='image1' h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 4th gridCell */}
        <GridItem _hover={{cursor:"pointer"}} borderRadius={"10px"}>
        <Image src='/src/assets/gateway/image3.png' alt='image1' h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 5th gridCell */}
        <GridItem _hover={{cursor:"pointer"}} borderRadius={"10px"}>
        <Image src='/src/assets/gateway/image4.png' alt='image1' h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
      </Grid>
    </>
  )
}
