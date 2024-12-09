import React from 'react'
import Image from 'next/image'
import interiormockup from '@/app/assets/herosection.jpeg'

const HeroSection = () => {
  return (
    
      <div className="absolute w-[1440px] h-[716.83px] left-0 sm:top-[95.7px] top-[50px]  flex flex-row">

        <Image src={interiormockup}  alt='interior-mockup'  className=' sm:w-[1440px] sm:h-[1007.93px] sm:top-[-75px] w-[100vw] h-[50vh] '/>
          
          
          <div className="absolute sm:w-[643px] sm:h-[443px] sm:left-[739px] sm:top-[253px] w-[200px] h-[280px] left-[200px] top-[100px]
                          rounded-[10px] bg-[#FFF3E3] flex justify-around items-center">
                
                <div className="  sm:w-[561px] sm:h-[344px] sm:left-[778px] sm:top-[315px] w-[180px] h-[220px]  
                                  flex flex-col justify-between">
                  <h2 className='   top-[315px] left-[780px] font-Poppins font-semibold sm:text-base sm:leading-6 sm:tracking-[3px]
                                    text-sm leading-3 tracking-[1px]
                                     text-black' >New Arrival</h2>
                  <h1 className='sm:h-[127px] sm:left-[780px]  sm:top-[343px] 
                                  font-poppins font-bold sm:text-[52px] sm:leading-[65px]
                                   text-2xl leading-8
                                  text-[#B88E2F]'>Discover Our New Collection</h1>
                  <p className='sm:h-[52px] sm:w-[546px] sm:left-[780px]  sm:top-[487px] 
                                  font-poppins font-medium  sm:text-[18px] sm:leading-[24px]
                                  text-sm leading-4
                                  text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <div className=" flex flex-row items-start sm:p-[25px_72px] gap-[10px] font-Poppins font-bold text-base leading-6 text-white
                                    w-[100px] h-[50px] rounded-md p-[10px_10px]
                                sm:w-[222px] sm:h-[74px] sm:left-[778px] sm:top-[585px] bg-[#B88E2F]">BUY NOW</div>

                </div>

         </div>

      </div>
    
  )
}

export default HeroSection
