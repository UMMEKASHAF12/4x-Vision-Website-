import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const plans = [
    {
      title: "Basic Profile optimization",
      price: "$50",
      desc: ["Premium Banner Design" , "Featured Card Design","Optimized headline", "Skills formatting", "Profile guidance"]
    },
    {
      title: "Growth Plan",
      price: "$99",
      desc: ["Complete Profile optimization", "Banner design", "content Design 2x", "Engagement strategy"]
    },
    {
      title: "Premium Plan",
      price: "$199",
      desc: ["Advanced optimization", "Monthly content creation", "3x Post a week", "Personalized growth strategy", "Direct support"]
    },
    {
      title: "Starter Package",
      price: "$50",
      desc: ["Premium Banner Design" , "Featured Card Design","Optimized headline", "Skills formatting", "Profile guidance"]
    },
    {
      title: "Growth Plan",
      price: "$99",
      desc: ["Complete Profile optimization", "Banner design", "content Design 2x", "Engagement strategy"]
    },
    {
      title: "Premium Plan",
      price: "$199",
      desc: ["Advanced optimization", "Monthly content creation", "3x Post a week", "Personalized growth strategy", "Direct support"]
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 text-white bg-gradient-to-br from-[#0a001a] via-[#12002b] to-black">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-gray-400 max-w-xl"
        >
          We help you grow your brand with design, development, and strategy.
        </motion.p>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-[#0a001a] to-black text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          LinkedIn Profile Optimization
        </h2>

        <h2 className="text-3xl font-bold text-center mb-12">
          Website Design & Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, rotate: 1 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 border border-purple-500/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-700/30 transition-all"
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>

              <p className="text-3xl my-4 text-purple-400">
                {plan.price}
              </p>

              <ul className="text-gray-400 mb-6 space-y-2">
                {plan.desc.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-full transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white bg-gradient-to-t from-[#12002b] to-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Turn Your Brand Into Authority?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 mb-6"
        >
          Let’s build something powerful together.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700"
        >
          Book Free Consultation
        </motion.button>
      </section>

      <Footer />
    </>
  );
};

export default Services;