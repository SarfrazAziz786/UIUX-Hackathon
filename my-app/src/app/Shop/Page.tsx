import React from 'react'
import Image from 'next/image'
import FilterBar from '../components/shoppageComponent/filterbar';
import Link from 'next/link';
import OurProducts from '../components/our-products/OurProducts';
import ProductCard from '../components/productsCards/ProductCard';
import Pagination from '../components/shoppageComponent/Pagination';
import Features from '../components/shoppageComponent/Features';
import ShopBanner from '../components/shoppageComponent/ShopBanner';






const ShopPage = () => {
  return (
    <div>
      
    
          <ShopBanner/>
      <FilterBar/>

      <div className='sm:w-[1440px] sm:h-[2051px] w-[330px] h-[4700px] mx-auto sm:p-12 py-2 '>
      <ProductCard/>
      <br /><br /><br /> <br /><br />
      <br /><br /><br /> <br /><br />
      <br /><br /><br /> <br /><br />
      <br /><br /><br /> <br /><br />
      <ProductCard/>
        <div className='mt-[450px]  flex justify-center  '>
          <Pagination/>
        </div>


      </div>

      <div>
          <Features/>  
      </div>    
    
    
    
    
    </div>

  );
};










export default ShopPage