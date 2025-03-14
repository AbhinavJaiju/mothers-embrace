
"use client";

import { motion } from "framer-motion";
import CardData from "./cardData";


export default function CardComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-8 min-h-screen" id="about">
      {CardData.map((data, index) => (
        <motion.div
          key={index}
          className="max-w-md rounded-xl border border-gray-300 overflow-hidden shadow-xl bg-white dark:bg-gray-800 transform transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          viewport={{ once: true }}
        >
          <img src={data.image} alt="alt" className="w-full h-56 object-cover" />
          <div className="p-5 bg-pink-100">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
              {data.title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400 text-base">
              <ul>

              
              {data.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
              </ul>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
