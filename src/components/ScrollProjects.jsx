import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Luminary Studio",
    category: "Brand & Web Design",
    year: "2024",
    tags: ["UI/UX", "Branding"],
    accent: "#7B3FE4",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80",
  },
  {
    id: 2,
    num: "02",
    title: "Orbit Analytics",
    category: "Product Design",
    year: "2024",
    tags: ["SaaS", "Dashboard"],
    accent: "#9B6FFF",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    id: 3,
    num: "03",
    title: "Verdant Co.",
    category: "E-Commerce Redesign",
    year: "2024",
    tags: ["Shopify", "CRO"],
    accent: "#7B3FE4",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: 4,
    num: "04",
    title: "Forma Agency",
    category: "Digital Experience",
    year: "2023",
    tags: ["Web App", "System"],
    accent: "#9B6FFF",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80",
  },
  {
    id: 5,
    num: "05",
    title: "Solène Interiors",
    category: "Portfolio & 3D",
    year: "2023",
    tags: ["Next.js", "3D"],
    accent: "#7B3FE4",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80",
  },
];

// ─── Reusable Arrow SVG ───────────────────────────────────────────────────────
function ArrowIcon({ size = 14, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ display: "block", flexShrink: 0 }}>
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
      // Inline hover border via whileHover doesn't support non-animatable props,
      // so we use a CSS class approach handled by Tailwind group-hover below
    >
      {/* ── Image Block ── */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <motion.img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.7) saturate(0.8)" }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(8,8,15,0.92) 100%)",
          }}
        />

        {/* Project number — top left */}
        <span
          className="absolute left-6 top-5 font-mono text-xs font-bold tracking-widest"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.num}
        </span>

        {/* Tag badge — top right */}
        <span
          className="absolute right-5 top-5 rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            background: "rgba(123,63,228,0.18)",
            borderColor: "rgba(123,63,228,0.4)",
            color: "#9B6FFF",
          }}
        >
          {project.tags[0]}
        </span>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col gap-4 p-7">
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

        {/* Footer: year + arrow */}
        <div className="flex items-center justify-between pt-1">
          <span
            className="text-[11px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            {project.year}
          </span>

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

// ─── "See All" End Card ───────────────────────────────────────────────────────
function EndCard() {
  return (
    <motion.a
      href="#"
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
  // Ref attached to the tall outer container — Framer tracks scroll within it
  const containerRef = useRef(null);

  // ── HOW THE SCROLL ANIMATION WORKS ──────────────────────────────────────────
  //
  // 1. The outer <section> is intentionally VERY TALL (N × 110vh).
  //    This creates the scroll distance without the user actually going anywhere.
  //
  // 2. A `position: sticky` inner wrapper stays pinned to the top of the
  //    viewport while the parent scrolls. The user sees a fixed panel.
  //
  // 3. useScroll({ target: containerRef, offset: ["start start","end end"] })
  //    produces `scrollYProgress`: a MotionValue that goes 0 → 1 as the
  //    user scrolls from the top of the section to the bottom.
  //
  // 4. useTransform maps that 0→1 to horizontal pixels:
  //    scrollYProgress=0  → x=0       (cards start at natural position)
  //    scrollYProgress=1  → x=-TRAVEL (cards have moved fully left)
  //
  // 5. useSpring wraps the raw value for a buttery, organic feel.
  //    Higher stiffness = snappier. Higher damping = more lag/inertia.
  // ─────────────────────────────────────────────────────────────────────────────

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total horizontal distance the track travels (px).
  // Each card is ~440px wide including gap; subtract one viewport to keep
  // the first card visible at scroll=0.
  const CARD_STEP = 440;
  const TOTAL_TRAVEL = -(PROJECTS.length * CARD_STEP - CARD_STEP + 260); // +260 for end card

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, TOTAL_TRAVEL]);

  // Spring for smooth, weighted feel
  const x = useSpring(xRaw, {
    stiffness: 75,   // lower = lazier scroll follow
    damping: 20,     // lower = more bounce/overshoot
    restDelta: 0.001,
  });

  // Progress bar — same spring
  const progressScale = useSpring(scrollYProgress, { stiffness: 75, damping: 20 });

  return (
    <>
      {/* Font injection — move to index.html in production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/*
        ── OUTER SECTION ──
        Height = N × 110vh → this IS the scroll distance.
        Increase multiplier to give more scroll time per card.
        Tune: 5 cards × 110vh = 550vh total scroll height.
      */}
      <section
        ref={containerRef}
        style={{
          height: `${PROJECTS.length * 110}vh`,
          background: "#08080f",
          position: "relative",
        }}
      >
        {/*
          ── STICKY VIEWPORT ──
          Stays fixed at top:0 while parent scrolls.
          overflow: hidden clips the card track.
        */}
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
                  href="#"
                  whileHover={{ scale: 1.05, borderColor: "rgba(123,63,228,0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium text-white"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    borderColor: "rgba(255,255,255,0.18)",
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
          {/* overflow-visible so cards aren't clipped by the sticky container */}
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
              className="h-px max-w-[180px] flex-1 overflow-hidden rounded-full"
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

            <p
              className="text-[11px] uppercase tracking-widest"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(255,255,255,0.22)",
              }}
            >
              Scroll to explore
            </p>
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