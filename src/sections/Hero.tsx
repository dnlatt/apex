"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/apex_shoes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center text-center w-full max-xl:px-6 pt-18 rounded-lg p-6 shadow-lg bg-white/80 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 font-palanquin text-8xl max-sm:text-[44px] max-sm:leading-[82px] font-bold"
        >
          <span className="text-coral-red inline-block mt-3">
            FALL COLLECTIONS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish arrivals, quality comfort, and innovation for your active life.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
