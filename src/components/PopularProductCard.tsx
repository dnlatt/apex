'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PopularProductCard: React.FC<Product> = ({
  imgURL,
  name,
  price,
  description
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-1 flex-col justify-center items-center w-full max-sm:w-full cursor-pointer hover:opacity-90 transition-opacity ">
          <Image 
            src={imgURL} 
            alt={name} 
            width={241}
            height={170}
            className="object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
          </h3>
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-1 flex-col justify-center items-center w-full md:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">{name}</DialogTitle>
        </DialogHeader>

        <Image 
          src={imgURL} 
          alt={name} 
          width={400}
          height={300}
          className="object-cover rounded-xl mx-auto"
        />

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {description}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PopularProductCard;
