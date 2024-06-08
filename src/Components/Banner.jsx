//Packages
import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";

//local imports
import "../App.css";

export default function Banner() {
  return (
    <>
      <Grid id="grid">
        {/* 1 */}
        <GridItem  borderRadius={"10px"} _hover={{ cursor: "pointer" }}>
          <Image src="/src/assets/heroSecImages/image1.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 2 */}
        <GridItem  borderRadius={"10px"} colSpan={2} rowSpan={2} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image2.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 3 */}
        <GridItem  borderRadius={"10px"} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image3.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 4 */}
        <GridItem  borderRadius={"10px"} rowSpan={2} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image4.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 5 */}
        <GridItem  borderRadius={"10px"} _hover={{ cursor: "pointer" }} >
        <Image src="/src/assets/heroSecImages/image10.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 6 */}
        <GridItem  borderRadius={"10px"} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image5.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 7 */}
        <GridItem  borderRadius={"10px"} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image6.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 8 */}
        <GridItem  borderRadius={"10px"} rowSpan={2} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image7.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 9 */}
        <GridItem  borderRadius={"10px"}_hover={{ cursor: "pointer" }} >
        <Image src="/src/assets/heroSecImages/image8.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        {/* 10 */}
        <GridItem   borderRadius={"10px"} colSpan={2} _hover={{ cursor: "pointer" }}>
        <Image src="/src/assets/heroSecImages/image9.png" h={"100%"} w={"100%"} borderRadius={"10px"}/>
        </GridItem>
        
      </Grid>
    </>
  );
}
