import React from 'react';
import Image from 'next/image';
import { ReviewCardProps } from "@/types";

const ReviewCard: React.FC<ReviewCardProps> = ({
  imgURL,
  designerName,
  shoutout,
}) => {
 

  return (
    <div 
      className={`flex justify-center items-center flex-col cursor-pointer hover:opacity-90 transition-opacity'`}

    >
      <Image
        src={imgURL}
        alt={`${designerName} profile picture`}
        width={300}
        height={300}
        className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-105"
      />
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {designerName}
      </h3>
      <p>{shoutout}</p>
    </div>
  );
};

export default ReviewCard;