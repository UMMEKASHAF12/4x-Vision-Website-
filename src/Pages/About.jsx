// import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/kashaf.jpeg";
import team2 from "../assets/imama.png";
import team3 from "../assets/abiha.jpeg";
import about from "../assets/about.jpg";import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
  { name: "Umme Kashaf", role: "Lead Designer", img: team1 },
  { name: "Imama", role: "Lead Developer", img: team2 },
  { name: "Abiha", role: "Social Media Manager", img: team3 },
  { name: "Filza", role: "Outreach Specialist", img: "/team4.jpg" },
];

const testimonials = [
  { name: "Naveed Malik", role: "Head of Partnership in Monday", img: "/testimonial1.jpg", text: "Excellent service, quality, and all-round support. I'd highly recommend for any Linkedin Optimization service." },
  { name: "Ahmed Raza", role: "Graphic Designer", img: "/testimonial2.jpg", text: "It was very nice working with the 4X Vision team. They really know what they're doing. Highly professional and creative." },
  { name: "Fareeha Abbasi", role: "Marketing Manager", img: "/testimonial3.jpg", text: "Lightning fast and incredibly cool. They work at my pace and deliver beyond expectations every single time." },
  { name: "Nadim", role: "CEO at Nexus Digital", img: "/testimonial4.jpg", text: "The attention to detail and creative vision they bring is unmatched. Our brand identity has never looked better." },
  { name: "Layla Hassan", role: "Marketing Director at BrightWave", img: "/testimonial5.jpg", text: "From concept to execution, 4X Vision delivered exactly what we envisioned — and then some. Absolutely brilliant." },
  { name: "James Ortega", role: "Co-Founder at Stackify", img: "/testimonial6.jpg", text: "Professional, responsive, and wildly talented. The website they built for us converted like crazy from day one." },
];

// Duplicate for seamless infinite scroll
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
              We don't just design{" "}
              <span className="text-purple-500">we build digital identity</span>
            </h1>
            <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
              Websites, brands, and systems that are engineered for performance,
              aesthetics, and conversion — not just visuals.
            </p>
            <div className="mt-8 w-24 h-[2px] bg-purple-500"></div>
          </div>
        </motion.div>
    <>
    {/* NAVBAR */}
      <Navbar />

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
                Websites, brands, and systems that are engineered for
                performance, aesthetics, and conversion — not just visuals.
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
            src={about}
            alt="About 4X Vision"
            className="w-full h-full object-cover min-h-[500px] md:min-h-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#070711] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-purple-500/10"></div>
        </motion.div>
      </div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>
        {/* ================= TEAM SECTION ================= */}
        <section className="w-full py-28 bg-[#070711] relative">
          {/* background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-purple-400">
            Meet the Team
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            The minds behind 4X Vision
          </p>
        </div>
          {/* heading */}
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
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition">
                  →
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/5 transition"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="w-full py-24 bg-black relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_65%)]"></div>

        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-xs tracking-[0.35em] text-purple-400 uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Real words from real partners
          </p>
        </div>

        {/* Scrolling Track */}
        <div
          className="relative z-10 w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)" }}
        >
          <style>{`
            @keyframes scroll-left {
              0%   { transform: translateX(0); }
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
              position: relative;
              flex-shrink: 0;
              width: 320px;
              border-radius: 18px;
              padding: 28px;
              background: linear-gradient(135deg, #1a0a2e 0%, #2d1155 50%, #1e0d3d 100%);
              border: 1px solid rgba(168,85,247,0.35);
              cursor: default;
              overflow: hidden;
              transition: border-color 0.3s, transform 0.3s;
              font-family: 'Inter', sans-serif;
            }
            .t-card::before {
              content: '';
              position: absolute;
              top: -40px; right: -40px;
              width: 130px; height: 130px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
              pointer-events: none;
            }
            .t-card:hover { border-color: rgba(192,132,252,0.7); transform: translateY(-4px); }
            .t-quote {
              position: absolute; top: 14px; right: 22px;
              font-size: 60px; line-height: 1;
              font-family: Georgia, serif;
              color: rgba(192,132,252,0.2);
              user-select: none;
            }
            .t-text { font-size: 13px; line-height: 1.75; color: #d8b4fe; margin-bottom: 20px; position: relative; z-index: 1; }
            .t-divider { width: 100%; height: 1px; background: linear-gradient(to right, rgba(168,85,247,0.5), transparent); margin-bottom: 16px; }
            .t-author { display: flex; align-items: center; gap: 12px; }
            .t-avatar {
              width: 42px; height: 42px; border-radius: 50%;
              border: 1.5px solid rgba(192,132,252,0.5);
              display: flex; align-items: center; justify-content: center;
              font-size: 13px; font-weight: 600; flex-shrink: 0;
              background: linear-gradient(135deg, #6d28d9, #a855f7);
              color: #f3e8ff; overflow: hidden;
            }
            .t-name { font-size: 13px; font-weight: 600; color: #f3e8ff; }
            .t-role { font-size: 11px; color: #9f7aea; margin-top: 3px; }
          `}</style>

          <div className="testimonial-track">
            {duplicated.map((t, i) => (
              <div key={i} className="t-card">
                <span className="t-quote">"</span>
                <p className="t-text">{t.text}</p>
                <div className="t-divider" />
                <div className="t-author">
                  <div className="t-avatar">
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default About;