import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import QuranSabaq from "../assets/WebProjects/Quran-Sabaq.png";
import ZakiaRukia from "../assets/WebProjects/ZakiaRukia.png";
import IceAndSpice from "../assets/WebProjects/ice-and-spice.png";
import AsadHotChicken from "../assets/WebProjects/AsadHotChicken.png";
import Antra from "../assets/WebProjects/antra.png";

// ─── Project Data
const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Quran Sabaq",
    category: "Brand & Web Design",
    tags: ["React", "Tailwind"],
    accent: "#7B3FE4",
    img: QuranSabaq,
  },
  {
    id: 2,
    num: "02",
    title: "Zakia Rukia Salon",
    category: "Product Design",
    tags: ["React", "Tailwind"],
    accent: "#7B3FE4",
    img: ZakiaRukia,
  },
  {
    id: 3,
    num: "03",
    title: "Ice & Spice",
    category: "E-Commerce Design",
    tags: ["React", "Tailwind"],
    accent: "#7B3FE4",
    img: IceAndSpice,
  },
  {
    id: 4,
    num: "04",
    title: "Asad Hot Chicken",
    category: "Resturant Branding",
    tags: ["React", "Tailwind"],
    accent: "#7B3FE4",
    img: AsadHotChicken,
  },
  {
    id: 5,
    num: "05",
    title: "Antra",
    category: "Real Estate Web Design",
    tags: ["React", "Tailwind"],
    accent: "#7B3FE4",
    img: Antra,
  },
];

// ─── Reusable Arrow SVG ───────────────────────────────────────────────────────
function ArrowIcon({ size = 14, color = "white" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.article
      // Staggered entrance as each card enters viewport
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      // Hover lift
      whileHover={{ y: -10, scale: 1.018 }}
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[24px]"
      style={{
        width: "clamp(300px, 28vw, 420px)",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.35s",
      }}
    >
      {/* ── Image Block ── */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <motion.img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Project number — top left */}
        <span
          className="absolute left-6 top-5 font-mono text-xs font-bold tracking-widest"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {project.num}
        </span>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col gap-4 p-5">
        {/* Title + Category */}
        <div>
          <h3
            className="mb-1.5 text-xl font-extrabold leading-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.48)",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-[10px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer arrow */}
        <div className="flex items-center justify-end">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: project.accent }}
            whileHover={{ rotate: 45, scale: 1.18 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            <ArrowIcon size={13} />
          </motion.div>
        </div>
      </div>

      {/* Subtle inset purple glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 70px rgba(123,63,228,0.07)" }}
      />
    </motion.article>
  );
}

// ─── "See All" End Card
function EndCard() {
  return (
    <motion.a
      href="/Projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -10,
        background: "rgba(123,63,228,0.14)",
        borderColor: "rgba(123,63,228,0.55)",
      }}
      className="flex-shrink-0 flex flex-col items-center justify-center gap-5 cursor-pointer rounded-[24px] border"
      style={{
        width: "clamp(200px, 18vw, 260px)",
        minHeight: 420,
        background: "rgba(123,63,228,0.06)",
        borderColor: "rgba(123,63,228,0.28)",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <motion.div
        className="flex h-14 w-14 items-center justify-center rounded-full border"
        style={{
          borderColor: "rgba(123,63,228,0.45)",
          background: "rgba(123,63,228,0.15)",
        }}
        whileHover={{ rotate: 45, scale: 1.12 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <ArrowIcon size={18} color="#9B6FFF" />
      </motion.div>
      <div className="text-center px-8">
        <p
          className="mb-1 text-lg font-bold text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          See all projects
        </p>
        <p
          className="text-xs"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(255,255,255,0.32)",
          }}
        >
          12 case studies →
        </p>
      </div>
    </motion.a>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ScrollProjects() {
  // Ref attached to the tall outer container to track scroll progress
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const CARD_STEP = 440;
  const TOTAL_TRAVEL = -(PROJECTS.length * CARD_STEP - CARD_STEP + 260); // +260 for end card

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, TOTAL_TRAVEL]);

  // Spring for smooth, weighted feel
  const x = useSpring(xRaw, {
    stiffness: 75, // lower = lazier scroll follow
    damping: 20, // lower = more bounce/overshoot
    restDelta: 0.001,
  });

  // Progress bar — same spring
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 20,
  });

  return (
    <>
      {/* Font injection — move to index.html in production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/*
        ── OUTER SECTION ─ */}
      <section
        ref={containerRef}
        style={{
          height: `${PROJECTS.length * 110}vh`,
          background: "#08080f",
          position: "relative",
        }}
      >
        {/*
          ── STICKY VIEWPORT ──  */}
        <div
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
          style={{ background: "#08080f" }}
        >
          {/* Ambient purple glow — matches your hero arc */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(123,63,228,0.11) 0%, transparent 68%)",
            }}
          />

          {/* ── HEADER ── */}
          <motion.div
            className="relative px-8 md:px-16 lg:px-24"
            style={{ marginBottom: "clamp(40px, 5vh, 56px)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between gap-8">
              {/* Left */}
              <div>
                <div
                  className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#9B6FFF",
                  }}
                >
                  <span style={{ fontSize: 8 }}>✦</span>
                  Selected work
                </div>

                <h2
                  className="font-extrabold leading-none text-white"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(38px, 5.5vw, 68px)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Our Latest
                  <br />
                  <span style={{ color: "#9B6FFF" }}>Projects</span>
                </h2>
              </div>

              {/* Right — desktop only */}
              <div className="hidden flex-col items-end gap-4 md:flex">
                <p
                  className="max-w-[230px] text-right text-sm leading-relaxed"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.42)",
                  }}
                >
                  We craft digital experiences that build authority and attract
                  high-value clients.
                </p>

                <motion.a
                  href="/Projects"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(123,63,228,0.6)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium text-white"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    borderColor: "rgba(123,63,228,0.6)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  View all work
                  <ArrowIcon size={12} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ── CARD TRACK ── */}
          <div className="relative overflow-visible">
            <motion.div
              style={{ x }}
              className="flex gap-5 pl-8 md:pl-16 lg:pl-24"
            >
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
              <EndCard />
            </motion.div>
          </div>

          {/* ── PROGRESS BAR ── */}
          <div
            className="relative flex items-center gap-4 px-8 md:px-16 lg:px-24"
            style={{ marginTop: "clamp(28px, 4vh, 48px)" }}
          >
            {/* Rail */}
            <div
              className="h-px max-w-[1400px] flex-1 overflow-hidden rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="h-full origin-left rounded-full"
                style={{
                  scaleX: progressScale,
                  background: "linear-gradient(to right, #7B3FE4, #9B6FFF)",
                }}
              />
            </div>
          </div>

          {/* ── MOBILE CTA ── */}
          <div className="mt-6 px-8 md:hidden">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              View all work <ArrowIcon size={12} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
