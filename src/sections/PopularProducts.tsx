// PopularProducts.tsx
'use client';

import { products } from '../constants';
import { PopularProductCard } from '../components';
import { Product } from "@/types"; 
import { motion } from "framer-motion";


const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div
        className="flex flex-col justify-start gap-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Fall </span> Collections
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {(products as Product[]).map((product, index) => (
          <motion.div
            key={`${product.name}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
</motion.div>
    </section>
  );
};

export default PopularProducts;
