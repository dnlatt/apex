'use client';

import { ReviewCard } from '../components';
import { reviews } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

import {
  CircleChevronLeft,
  CircleChevronRight,
} from 'lucide-react';

import { Review } from "@/types"; // if you're using path alias

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};


const OurDesigners = () => {
  
  return (
    <section
      className="relative max-container py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/our-designers-bg.png')",
      }}
      id="designers"
    >
      <motion.h3
        className="font-palanquin text-center text-4xl font-bold"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="text-coral-red">APEX</span> CULTURE
      </motion.h3>

      <motion.p
        className="m-auto mt-4 max-w-md text-center info-text"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        We pour creativity and passion into every pair of Apex Shoes, crafting footwear that not only looks stunning but also delivers unmatched comfort
      </motion.p>

      <div className="mt-20 relative px-10">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -left-4 z-20  lg:block">
          <div className="swiper-button-prev-custom text-slate-700 hover:text-coral-red cursor-pointer">
            <CircleChevronLeft size={36} />
          </div>
        </div>
        <div className="absolute top-1/2 -right-4 z-20 lg:block">
          <div className="swiper-button-next-custom text-slate-700 hover:text-coral-red cursor-pointer">
            <CircleChevronRight size={36} />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          loop={true}
          
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {(reviews as Review[]).map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                imgURL={review.imgURL}
                designerName={review.designerName}
                shoutout={review.shoutout}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-8 flex justify-center gap-2" />
      </div>
    </section>
  );
};

export default OurDesigners;
