// packages
import React from "react";
import { Container } from "@chakra-ui/react";

// local imports
import "./App.css";
import Navbar from "./Components/Navbar.jsx"; // importing the Navbar
import Banner from "./Components/Banner.jsx";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Container  maxW={"8xl"}   style={{ marginTop: "140px",marginBottom:"20px" }}>
        <Banner />
      </Container>
    </div>
  );
}

// <Box border={"1px solid black"} p={"10px"} bg={"red"} >
//   {/* <Image src={"../assets/image1.png"} alt=""/>
//   <Image src={"../assets/image2.png"} alt=""/>
//   <Image src={"../assets/image3.png"} alt=""/>
//   <Image src={"../assets/image4.png"} alt=""/>
//   <Image src={"../assets/image5.png"} alt=""/>
//   <Image src={"../assets/image6.png"} alt=""/>
//   <Image src={"../assets/image7.png"} alt=""/>
//   <Image src={"../assets/image8.png"} alt=""/>
//   <Image src={"../assets/image9.png"} alt=""/>
//   <Image src={"../assets/image10.png"} alt=""/> */}
// </Box>

export default App;
