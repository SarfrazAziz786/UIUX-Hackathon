import HeroSection from "./components/HeroSection";
import BrowseTheRange from "./components/BrowseTheRange";
import React from 'react'
import OurProducts from "./components/our-products/OurProducts";
import RoomsInspiration from "./components/Roomsinspiration/RoomsInspiration";
import FuniroFurniture from "./components/FuniroFurniture/FuniroFurniture";


const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <br />
      <BrowseTheRange/>
            <br />
      <OurProducts/>
      <RoomsInspiration/>
      
      <FuniroFurniture/>

    </div>
  )
}

export default Homepage
