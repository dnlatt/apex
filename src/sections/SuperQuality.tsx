"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../components";

export default function SuperQuality() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-6 lg:gap-12 w-full max-container"
    >
      {/* Left Content */}
      <motion.div
        className="flex flex-1 flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </motion.h2>

          <motion.p className="mt-4 lg:max-w-lg info-text" variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </motion.p>

          <motion.p className="mt-6 lg:max-w-lg info-text" variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}>
            Our dedication to detail and excellence ensures your satisfaction
          </motion.p>
        </motion.div>

        <motion.div className="mt-11" variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}>
          <Button label="View details" />
        </motion.div>
      </motion.div>

      {/* Orbit Image */}
      <motion.div
        className="relative flex-1 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating text above the image */}
        <motion.svg
          className="absolute z-20 w-[600px] h-[600px] max-sm:w-[300px] max-sm:h-[300px] pointer-events-none"
          viewBox="0 0 200 200"
          animate={{ rotate: isHovered ? 0 : 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
          </defs>

          <text
            fill="rgb(255,100,82)"
            fontSize="11"
            fontWeight="600"
          >
            <textPath href="#circlePath" startOffset="0%">
              Ultimate Collections • Ultimate Collections • Ultimate Collections • Ultimate Collections •
            </textPath>
          </text>
        </motion.svg>

        {/* Product Image */}
        <div className="relative z-10 w-[400px] h-[400px] max-sm:w-[250px] max-sm:h-[250px] rounded-full overflow-hidden group transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_40px_#ff7754]">
        <Image
          src="/assets/images/super-quality.png"
          alt="product detail"
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-full transition-all duration-500"
        />
      </div>

      </motion.div>
    </section>
  );
}
