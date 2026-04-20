import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/kashaf.jpeg";
import team2 from "../assets/imama.png";
import team3 from "../assets/abiha.jpeg";
import aboutImg from "../assets/about.jpg"; // Renamed to avoid confusion with component name
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
  { name: "Umme Kashaf", role: "Lead Designer", img: team1 },
  { name: "Imama", role: "Lead Developer", img: team2 },
  { name: "Abiha", role: "Social Media Manager", img: team3 },
  { name: "Filza", role: "Outreach Specialist", img: "/team4.jpg" },
];

const testimonials = [
  {
    name: "Naveed Malik",
    role: "Head of Partnership",
    img: "/testimonial1.jpg",
    text: "Excellent service, quality, and all-round support.",
  },
  {
    name: "Ahmed Raza",
    role: "Graphic Designer",
    img: "/testimonial2.jpg",
    text: "Highly professional and creative team.",
  },
  {
    name: "Fareeha Abbasi",
    role: "Marketing Manager",
    img: "/testimonial3.jpg",
    text: "Lightning fast and incredibly cool.",
  },
  {
    name: "Nadim",
    role: "CEO at Nexus Digital",
    img: "/testimonial4.jpg",
    text: "The attention to detail is unmatched.",
  },
  {
    name: "Layla Hassan",
    role: "Marketing Director",
    img: "/testimonial5.jpg",
    text: "Delivered exactly what we envisioned.",
  },
  {
    name: "James Ortega",
    role: "Co-Founder at Stackify",
    img: "/testimonial6.jpg",
    text: "Wildly talented. The website converted like crazy.",
  },
];

const duplicated = [...testimonials, ...testimonials];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#070711] text-white font-[Inter] overflow-hidden">
        {/* ================= ABOUT SECTION ================= */}
        <section className="flex flex-col md:flex-row">
          {/* LEFT CONTENT */}
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
                We don't just design{" "}
                <span className="text-purple-500">
                  we build digital identity
                </span>
              </h1>
              <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
                Websites, brands, and systems that are engineered for
                performance, aesthetics, and conversion.
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
              src={aboutImg}
              alt="About 4X Vision"
              className="w-full h-full object-cover min-h-[500px] md:min-h-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#070711] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-purple-500/10"></div>
          </motion.div>
        </section>

        {/* ================= TEAM SECTION ================= */}
        <section className="w-full py-28 bg-[#070711] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-purple-400">
              Meet the Team
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              The minds behind 4X Vision
            </p>
          </div>

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
                <div className="overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section className="w-full py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_65%)]"></div>

          <div className="text-center mb-16 relative z-10">
            <p className="text-xs tracking-[0.35em] text-purple-400 uppercase mb-3">
              Client Feedback
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              What Our Clients Say
            </h2>
          </div>

          <div
            className="relative z-10 w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
            }}
          >
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .testimonial-track {
                display: flex;
                gap: 1.25rem;
                width: max-content;
                animation: scroll-left 30s linear infinite;
                padding: 12px 4px;
              }
              .testimonial-track:hover { animation-play-state: paused; }
              .t-card {
                flex-shrink: 0; width: 320px; border-radius: 18px; padding: 28px;
                background: linear-gradient(135deg, #1a0a2e 0%, #2d1155 50%, #1e0d3d 100%);
                border: 1px solid rgba(168,85,247,0.35); transition: 0.3s;
              }
              .t-text { font-size: 13px; color: #d8b4fe; margin-bottom: 20px; }
              .t-name { font-size: 13px; font-weight: 600; color: #f3e8ff; }
            `}</style>

            <div className="testimonial-track">
              {duplicated.map((t, i) => (
                <div key={i} className="t-card">
                  <p className="t-text">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="t-name">{t.name}</p>
                      <p className="text-[10px] text-purple-300">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
