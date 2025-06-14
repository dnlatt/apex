"use client";
import { services } from "@/constants";
import { ServiceCard } from "@/components";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,  // half second delay between cards
    },
  },
};

const Services = () => {
  return (
    <motion.section
      className="max-container flex justify-center flex-wrap gap-9"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;

