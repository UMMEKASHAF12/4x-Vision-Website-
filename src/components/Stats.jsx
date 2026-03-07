import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { num: "500K+", text: "Impressions achieved through client profiles" },
    { num: "50+", text: "Trusted Global Clients" },
    { num: "26%", text: "Ranked for Linkedin Expert in the Worldwide" }
  ];

  return (
<section className="w-full bg-black text-white pt-44 pb-32 px-6 font-inter flex justify-center h-10vh">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-24">

        {/* Heading Section */}
        <div className="max-w-2xl flex flex-col gap-8">
          
          <h1 className="text-4xl md:text-[44px] font-semibold leading-tight tracking-tight">
            Most businesses are visible
            <br />
            Very few are positioned to win.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            At 4x Vision, we craft strategic websites, powerful branding,
            and LinkedIn positioning that transform weak digital presence
            into real authority.
          </p>

        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center gap-3"
            >

              <h2 className="text-4xl md:text-[42px] font-semibold tracking-tight">
                {item.num}
              </h2>

              <p className="text-[16px] leading-snug max-w-[240px] text-purple-500">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;