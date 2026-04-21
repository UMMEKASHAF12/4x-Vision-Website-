import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqData = [
  {
    id: "01",
    question: "What exactly does 4X Vision Agency do?",
    answer:
      "We specialize in scaling digital brands through high-performance creative and strategic marketing. Our team handles everything from visual identity to full-funnel acquisition.",
    type: "tags",
    tags: ["Branding", "Growth", "Creative"],
  },
  {
    id: "02",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope, but most visual identity projects launch within 4-6 weeks, while growth partnerships are ongoing monthly engagements.",
    type: "stats",
    stat: "4-6 Weeks",
    label: "Average Launch",
  },
  {
    id: "03",
    question: "What makes 4X Vision different from other agencies?",
    answer:
      "We don't just deliver assets; we deliver ROI-focused systems. Our 'Vision-First' approach ensures every pixel contributes to your bottom line.",
    type: "quote",
    author: "Founder, 4X Vision",
  },
  {
    id: "04",
    question:
      "Do you work with early-stage startups or only established brands?",
    answer:
      "We are selective with our partners. We work with both early-stage startups with strong funding and established brands looking to modernize their digital presence.",
    type: "cta",
  },
];

// Variants for the staggered entrance on page load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-white/10 transition-colors hover:bg-white/[0.02]"
    >
      <button
        onClick={onClick}
        className="flex items-center w-full py-8 text-left focus:outline-none group px-4 cursor-pointer"
      >
        <span className="text-[#7c3aed] font-mono text-xs font-bold tracking-widest mr-8">
          {item.id}
        </span>
        <span
          className={`text-lg md:text-xl font-medium flex-1 transition-colors duration-300 ${
            isOpen ? "text-white" : "text-gray-400 group-hover:text-white"
          }`}
        >
          {item.question}
        </span>

        {/* Animated Icon Ring */}
        <motion.div
          animate={{
            backgroundColor: isOpen ? "#7c3aed" : "transparent",
            borderColor: isOpen ? "#7c3aed" : "#374151",
          }}
          className="w-10 h-10 rounded-full border flex items-center justify-center ml-4 shrink-0"
        >
          <motion.div
            animate={{
              rotate: isOpen ? 45 : 0,
              color: isOpen ? "#ffffff" : "#7c3aed",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Plus size={20} />
          </motion.div>
        </motion.div>
      </button>

      {/* Animated Content Area */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-20 pr-12">
              <div className="border-l-2 border-[#7c3aed] pl-6 space-y-4">
                <p className="text-gray-400 leading-relaxed text-base">
                  {item.answer}
                </p>

                {/* Specific layouts based on item type */}
                {item.type === "tags" && (
                  <div className="flex gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#7c3aed]/10 text-[#8b5cf6] text-xs rounded-full border border-[#7c3aed]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.type === "quote" && (
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b5cf6] font-bold">
                    — {item.author}
                  </p>
                )}

                {item.type === "stats" && (
                  <div className="inline-block p-3 bg-white/[0.03] rounded-lg border border-white/10">
                    <div className="text-[#7c3aed] font-bold text-lg">
                      {item.stat}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-tighter">
                      {item.label}
                    </div>
                  </div>
                )}

                {item.type === "cta" && (
                  <button className="mt-2 text-sm font-bold text-white bg-[#7c3aed] hover:bg-[#8b5cf6] px-5 py-2 rounded-lg transition-all active:scale-95">
                    Book free consultation
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* FAQ CONTENT */}
      <div className="min-h-screen bg-[#0a0818] text-white selection:bg-[#7c3aed]/30 py-24 px-6 font-sans">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 mb-6">
              <div className="w-1 h-1 rounded-full bg-[#7c3aed] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#8b5cf6] uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Everything you need <br />
              <span className="text-[#7c3aed]">to know</span>
            </h1>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
              Clear answers to the most common questions about working with 4X
              Vision Agency.
            </p>
          </motion.div>

          {/* Accordion Container */}
          <div className="border-t border-white/10">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                item={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center text-sm text-gray-500"
          >
            <div className="inline-block w-1.5 h-1.5 rounded-full bg-[#7c3aed] mr-2" />
            Still have questions?
            <a
              href="#"
              className="ml-2 text-[#7c3aed] font-bold hover:text-[#8b5cf6] transition-colors underline-offset-4 hover:underline"
            >
              Schedule a 1:1 call →
            </a>
          </motion.div>
        </motion.div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
