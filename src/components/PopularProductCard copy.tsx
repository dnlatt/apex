import React from 'react';
import Image from 'next/image';
import { Product } from "@/types"; 

const PopularProductCard: React.FC<Product> = ({
  imgURL,
  name,
  price,
  description
}) => {
  return (
    <div 
      className={`flex flex-1 flex-col justify-center items-center w-full max-sm:w-full cursor-pointer hover:opacity-90 transition-opacity}`}
      
    >
      <Image 
        src={imgURL} 
        alt={name} 
        width={241}
        height={170}
        className="object-cover rounded-lg"
      />
      
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      {/*
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        ${price}
      </p>
      */}
    </div>
  );
};

export default PopularProductCard;