import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: "500K+", text: "Impressions achieved through client profiles" },
    { number: "150+", text: "Founders & execs we’ve helped build authority" },
    { number: "#1", text: "Ranked Top 1% for Marketing & Sales in the UK" },
  ];

  const logos = [
    { name: "Emirates", src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
    { name: "Folk", src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Folk_logo.svg" },
    { name: "IKEA", src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/IKEA_logo.svg" },
    { name: "Mitie", src: "https://upload.wikimedia.org/wikipedia/en/3/3d/Mitie_logo.svg" },
    { name: "Breitling", src: "https://upload.wikimedia.org/wikipedia/en/3/3e/Breitling_logo.svg" },
  ];

  return (
    <section className="bg-[#05020d] py-24 px-6 flex flex-col items-center">
      {/* Stats Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-28">
        {stats.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {item.number}
            </h2>
            <p className="text-[#a78bfa] text-lg font-medium max-w-[240px] mx-auto leading-tight">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Trust Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-white text-center text-lg font-medium mb-12 max-w-4xl opacity-90 leading-relaxed"
      >
        While Collaborating with Leaders Connected to Brands Like Notion, Kajabi, Amazon, Samsung & More:
      </motion.p>

      {/* Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-6xl w-full">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className="h-8 md:h-10 object-contain brightness-0 invert" // Forces logos to be white
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;