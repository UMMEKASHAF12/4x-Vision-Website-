import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/kashaf.jpeg";
import team2 from "../assets/imama.jpeg";
import team3 from "../assets/abiha.jpeg";


const team = [
  {
    name: "Umme Kashaf",
    role: "Lead Designer",
    img: team1,
  },
  {
    name: "Imama",
    role: "Lead Developer",
    img: team2,
  },
  {
    name: "Abiha",
    role: "Social Media Manager",
    img: team3,
  },
  {
    name: "Filza",
    role: "Outreach Specialist",
    img: "/team4.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#070711] text-white font-[Inter] overflow-hidden">

      {/* ================= ABOUT SECTION ================= */}
      <div className="flex flex-col md:flex-row">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-20 py-24"
        >
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.35em] text-purple-400 uppercase">
              About 4X Vision
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mt-4">
              We don’t just design — we{" "}
              <span className="text-purple-500">build digital identity</span>
            </h1>

            <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
              Websites, brands, and systems that are engineered for performance,
              aesthetics, and conversion — not just visuals.
            </p>

            <div className="mt-8 w-24 h-[2px] bg-purple-500"></div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-1/2 relative"
        >
          <img
            src="/about.jpg"
            alt="About 4X Vision"
            className="w-full h-full object-cover min-h-[500px] md:min-h-screen"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#070711] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-purple-500/10"></div>
        </motion.div>
      </div>

      {/* ================= TEAM SECTION ================= */}
      <section className="w-full py-28 bg-[#070711] relative">

        {/* background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

        {/* heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-purple-400">
            Meet the Team
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            The minds behind 4X Vision
          </p>
        </div>

        {/* grid */}
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[#0f0f1a] border border-purple-500/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/60"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>

                {/* arrow */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition">
                  →
                </div>
              </div>

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/5 transition"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
