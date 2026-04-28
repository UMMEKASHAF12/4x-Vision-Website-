import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IceAndSpice from "../assets/projects/ice-and-spice.png";
import Graphic1 from "../assets/projects/graphic1.jpg";
import Graphic2 from "../assets/projects/graphic2.jpg";

const ProjectCard = ({ index, imageUrl }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div
      ref={container}
      className="h-screen sticky top-0 flex items-center justify-center px-4"
    >
      <motion.div
        style={{
          scale,
          opacity,
          backgroundColor: "#0a0818",
          // The cards stack with a slight visible edge at the top
          top: `calc(10% + ${index * 30}px)`,
        }}
        className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] rounded-[30px] md:rounded-[50px] border border-white/10 overflow-hidden shadow-2xl shadow-black/80"
      >
        <div className="absolute inset-0 w-full h-full group">
          <img
            src={imageUrl}
            alt={`Project ${index + 1}`}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0818] via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-10 left-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#7c3aed]" />
              <span className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase">
                Project 0{index + 1}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] opacity-20 rounded-full bg-[#7c3aed]" />
      </motion.div>
    </div>
  );
};

export default function Graphics() {
  const projects = [
    {
      color: "#7c3aed",
      url: Graphic1, 
    },
    {
      color: "#8b5cf6",
      url: Graphic2,
    },
    {
      color: "#7c3aed",
      url: IceAndSpice,
    },
    {
      color: "#8b5cf6",
      url: IceAndSpice,
    },
  ];

  return (
    <div className="bg-[#0a0818] relative">
      <div className="h-[60vh] flex flex-col items-center justify-end text-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Graphic designing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] italic">
              sample
            </span>
          </h1>
        </motion.div>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            imageUrl={project.url}
          />
        ))}
      </div>

      <div className="h-[30vh]" />
    </div>
  );
}