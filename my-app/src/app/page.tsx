import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BrowseTheRange from "./components/BrowseTheRange";
import React from 'react'
import OurProducts from "./components/our-products/OurProducts";


const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <br /><br /><br /><br /><br /> <br /><br />
      <BrowseTheRange/>
      <OurProducts/>

    </div>
  )
}

export default Homepage
