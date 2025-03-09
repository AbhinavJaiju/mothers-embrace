
"use client";

import { motion } from "framer-motion";
import newborn from "../assets/newborn.jpg";
import pregnant from "../assets/pregnant.jpg";
import woman from "../assets/woman.jpg";

export default function CardComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-8 min-h-screen">
      {[woman, pregnant, newborn].map((image, index) => (
        <motion.div
          key={index}
          className="max-w-md rounded-xl border border-gray-300 overflow-hidden shadow-xl bg-white dark:bg-gray-800 transform transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          viewport={{ once: true }}
        >
          <img src={image} alt="alt" className="w-full h-56 object-cover" />
          <div className="p-5 bg-pink-100">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat cum dolores facilis nobis qui minima perspiciatis reprehenderit nesciunt.
            </h5>
            <p className="text-gray-700 dark:text-gray-400 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat. Illo non unde iusto quidem repellendus quas reiciendis odio dolor ullam.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
