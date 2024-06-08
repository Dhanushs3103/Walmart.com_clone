// packages
import React from "react";
import { Container } from "@chakra-ui/react";

// local imports
import "./App.css";
import Navbar from "./Components/Navbar.jsx"; // importing the Navbar
import Banner from "./Components/Banner.jsx";
import FlashDeals from "./Components/FlashDeals.jsx";
import ScreenTime from "./Components/screenTime.jsx";
import Gateway from "./Components/Gateway.jsx" ;
import GatewayCards from "./Components/GatewayCards.jsx"
import CapParty from "./Components/CapParty.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
import Category from "./Components/Category.jsx";
import Entertainment from "./Components/Entertainment.jsx";
import EntertainmentCards from "./Components/EntertainmentCard.jsx";
import Trending from "./Components/Trending.jsx";
import MoreBrands from "./Components/MoreBrands.jsx";
import MoreBrandsCards from "./Components/MoreBrandsCards.jsx";
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {/* container */}
      <Container  maxW={"8xl"}   style={{ marginTop: "140px",marginBottom:"20px" }}>
        {/* Banner component */}
        <Banner />
        {/* FlashDeals component */}
        <FlashDeals/>
        {/* ScreenTime component */}
        <ScreenTime/>
        {/* Gateway component */}
        <Gateway/>
        {/* GatewayCards component */}
        <GatewayCards/>
        {/* CapParty component */}
        <CapParty/>
        {/* SocialMedia component */}
        <SocialMedia/>
        {/* Category component */}
        <Category/>
        {/* Entertainment Component */}
        <Entertainment/>
        {/* EntertainmentCards Component */}
        <EntertainmentCards/>
        {/* Trending Component */}
        <Trending/>
        {/* moreBrand Component */}
        <MoreBrands/>
        {/* moreBrandCards Component */}
        <MoreBrandsCards/>
      </Container>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
