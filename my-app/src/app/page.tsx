import HeroSection from "./components/HeroSection";
import BrowseTheRange from "./components/BrowseTheRange";
import React from 'react'
import OurProducts from "./components/our-products/OurProducts";
import RoomsInspiration from "./components/Roomsinspiration/RoomsInspiration";


const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <br /><br /><br /><br /><br /> <br /><br />
      <BrowseTheRange/>
      <br />
      
      <OurProducts/>
      <RoomsInspiration/>

    </div>
  )
}

export default Homepage
