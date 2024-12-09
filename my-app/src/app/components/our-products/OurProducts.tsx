import React from 'react';
import Image from 'next/image';

import product1 from '@/app/assets/products/product-1.png';
import product2 from '@/app/assets/products/product-2.png';
import product3 from '@/app/assets/products/product-3.png';
import product4 from '@/app/assets/products/product-4.png';
import product5 from '@/app/assets/products/product-5.png';
import product6 from '@/app/assets/products/product-6.png';
import product7 from '@/app/assets/products/product-7.png';
import product8 from '@/app/assets/products/product-8.png';

interface Card {
  title: string;
  disc: string;
  price: string;
  oldPrice?: string;
  image: StaticImageData;
}

const Data: Card[] = [
  {
    title: "Syltherine",
    disc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: product1,
  },
  {
    title: "Leviosa",
    disc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: product2,
  },
  {
    title: "Lolito",
    disc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: product3,
  },
  {
    title: "Respira",
    disc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: product4,
  },
  {
    title: "Grifo",
    disc: "Night lamp",
    price: "Rp 1.500.000",
    image: product5,
  },
  {
    title: "Muggo",
    disc: "Small mug",
    price: "Rp 150.000",
    image: product6,
  },
  {
    title: "Pingky",
    disc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: product7,
  },
  {
    title: "Potty",
    disc: "Minimalist flower pot",
    price: "Rp 500.000",
    image: product8,
  },
];

export default function OurProducts() {
  return (
    <>
      <div className="w-[1236px] h-[1084px]  relative">
        <h2 className="absolute text-center font-bold top-[1610px] left-[588px] text-[40px] leading-[48px] text-[#3A3A3A]">Our Product</h2>
        
        <div className="w-[1236px] h-[446px] top-[1690px] left-[102px] gap-8 relative flex flex-wrap ">
          {Data.map((card, index) => (
            <div key={index} className="w-[285px] h-[446px] relative">
              <Image src={card.image} alt={card.title} width={285} height={301} />
              <div className=" w-[285px] h-[145px] top-[301px] flex flex-col ">
                <h1 className="w-[123px] h-[29px] top-[317px] left-[16px]">{card.title}</h1>
                <p className="w-[160px] h-[66px] top-[346px] left-[16px]">{card.disc}</p>
                <div className='flex'>
                <p className="w-[123px] h-[29px] top-[412px] left-[16px]">{card.price}</p>
                {card.oldPrice && (
                  <p className="w-[123px] h-[29px] top-[441px] left-[16px] line-through">{card.oldPrice}</p>
                )}
                </div>
                </div>
            </div>
          ))}
        
        </div>
        
        <button className="productBtn absolute text-[#B88E2F] p-2 border-[1px] border-[#B88E2F] w-[245px] h-[48px] top-[2646px] left-[598px]
                            font-Poppins font-semibold text-base leading-6">Show More</button>
      </div>
    </>
  );
}