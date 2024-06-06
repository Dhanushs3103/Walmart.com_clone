// packages
import React from 'react'

// local imports 
import './App.css'
import Navbar from './Components/Navbar.jsx' // importing the Navbar 
import HeroSection from './Components/HeroSection.jsx'


function App() {
  return (
    <div style={{position:"relative"}}>
      <Navbar />
      <HeroSection />
    </div>
  )
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

export default App
