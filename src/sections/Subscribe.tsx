'use client';

import { Button } from "../components";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Subscribe = () => {
  return (
    <section
      id='subscribe'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <motion.h3
        className='text-4xl leading-[68px] font-palanquin font-bold text-center max-lg:text-left'
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Sign Up for
        <span className='text-coral-red'> Updates & Newsletter</span>
      </motion.h3>

      <motion.div
        className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <input type='text' placeholder='johndoe@gmail.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
