"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceCardProps } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <motion.div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
      variants={cardVariants}
    >
      <div className="w-10 h-10 flex justify-center items-center bg-coral-red rounded-full">
        <Image src={imgURL} alt={label} width={20} height={20} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </motion.div>
  );
};

export default ServiceCard;
