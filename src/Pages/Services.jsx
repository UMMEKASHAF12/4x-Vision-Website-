import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const tabFade = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.25 } },
};

/* ─────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────── */
const services = {
  design: {
    label: "Graphic Design",
    icon: "✦",
    color: "#c084fc",
    glow: "rgba(192,132,252,0.25)",
    subServices: {
      logo: {
        label: "Logo Design",
        plans: [
          {
            name: "Spark",
            tier: "Starter",
            price: "$149",
            delivery: "3-day delivery",
            features: ["1 logo concept", "2 revision rounds", "PNG + SVG files", "Light & dark version"],
            missing: ["Brand guidelines", "Social media kit"],
          },
          {
            name: "Identity",
            tier: "Growth",
            price: "$349",
            badge: "Most Popular",
            delivery: "5-day delivery",
            features: ["3 logo concepts", "Unlimited revisions", "All file formats", "Brand color palette", "Typography guide", "Social media kit"],
          },
          {
            name: "Empire",
            tier: "Pro",
            price: "$799",
            delivery: "7-day delivery",
            features: ["5 logo concepts", "Full brand guidelines (PDF)", "Brand strategy session", "Stationery mockups", "30-day support", "Source files (AI/PSD)"],
          },
        ],
      },
      brand: {
        label: "Brand Identity",
        plans: [
          {
            name: "Seed",
            tier: "Starter",
            price: "$499",
            delivery: "7-day delivery",
            features: ["Logo + icon mark", "Color palette (5 colors)", "Font pairing guide", "Business card design"],
            missing: ["Full brand guide", "Brand voice guide"],
          },
          {
            name: "Bloom",
            tier: "Growth",
            price: "$1,199",
            badge: "Most Popular",
            delivery: "10-day delivery",
            features: ["Everything in Seed", "Full brand guidelines (20pg)", "Brand voice + messaging", "Social media templates (10)", "Email signature design", "Brand pattern/texture"],
          },
          {
            name: "Dominate",
            tier: "Pro",
            price: "$2,499",
            delivery: "14-day delivery",
            features: ["Everything in Bloom", "Competitor brand audit", "Brand positioning strategy", "Full stationery suite", "60-day brand support", "Brand launch strategy"],
          },
        ],
      },
      social: {
        label: "Social Media Design",
        plans: [
          {
            name: "Launch",
            tier: "Starter",
            price: "$299/mo",
            delivery: "48hr per batch",
            features: ["12 post designs/month", "2 platform formats", "Story templates (4)", "Brand-consistent design"],
            missing: ["Reels cover design", "Animated posts"],
          },
          {
            name: "Momentum",
            tier: "Growth",
            price: "$599/mo",
            badge: "Most Popular",
            delivery: "24hr per batch",
            features: ["30 post designs/month", "All platform formats", "12 animated graphics", "Reels cover designs", "Highlight covers", "LinkedIn banners"],
          },
          {
            name: "Viral Engine",
            tier: "Pro",
            price: "$999/mo",
            delivery: "Same-day rush available",
            features: ["Unlimited designs", "Dedicated designer", "Content calendar design", "Motion graphics", "Campaign-specific kits", "Priority Slack support"],
          },
        ],
      },
      print: {
        label: "Print Design",
        plans: [
          {
            name: "Essentials",
            tier: "Starter",
            price: "$199",
            delivery: "4-day delivery",
            features: ["Business cards", "Flyer (single-sided)", "Print-ready PDF", "2 revision rounds"],
            missing: ["Multi-page brochure", "Trade show materials"],
          },
          {
            name: "Impact",
            tier: "Growth",
            price: "$549",
            badge: "Most Popular",
            delivery: "6-day delivery",
            features: ["Tri-fold brochure", "Roll-up banner", "Letterhead + envelope", "Double-sided flyer", "Poster design", "Unlimited revisions"],
          },
          {
            name: "Exhibition",
            tier: "Pro",
            price: "$1,299",
            delivery: "10-day delivery",
            features: ["Everything in Impact", "8-page catalogue", "Booth backdrop design", "Branded merchandise files", "Direct print vendor link", "Rush option available"],
          },
        ],
      },
      packaging: {
        label: "Packaging",
        plans: [
          {
            name: "Unbox",
            tier: "Starter",
            price: "$399",
            delivery: "5-day delivery",
            features: ["1 product label design", "Front + back label", "Print-ready files", "3 revision rounds"],
            missing: ["Box dieline design", "3D mockups"],
          },
          {
            name: "Shelf Stopper",
            tier: "Growth",
            price: "$899",
            badge: "Most Popular",
            delivery: "8-day delivery",
            features: ["Up to 3 SKU designs", "Box dieline + design", "3D product mockups", "Bag & pouch options", "Unlimited revisions", "Amazon-ready files"],
          },
          {
            name: "Brand Line",
            tier: "Pro",
            price: "$1,999",
            delivery: "14-day delivery",
            features: ["Up to 10 SKU designs", "Packaging system guide", "Photoshoot-ready mockups", "Retail display design", "Manufacturer-ready files", "30-day revision support"],
          },
        ],
      },
      illustration: {
        label: "Illustration",
        plans: [
          {
            name: "Sketch",
            tier: "Starter",
            price: "$249",
            delivery: "4-day delivery",
            features: ["1 custom illustration", "Flat vector style", "2 revision rounds", "PNG + SVG delivery"],
            missing: ["Character design", "Illustration system"],
          },
          {
            name: "Canvas",
            tier: "Growth",
            price: "$699",
            badge: "Most Popular",
            delivery: "7-day delivery",
            features: ["5 illustrations / set", "Custom brand character", "Scene illustrations", "Icon set (16 icons)", "Unlimited revisions", "Style guide included"],
          },
          {
            name: "Universe",
            tier: "Pro",
            price: "$1,799",
            delivery: "14-day delivery",
            features: ["15+ illustrations", "Character + expressions", "30+ icon set", "Pattern/texture design", "Illustration style guide", "Source Figma files"],
          },
        ],
      },
      presentation: {
        label: "Presentations",
        plans: [
          {
            name: "Pitch Ready",
            tier: "Starter",
            price: "$299",
            delivery: "4-day delivery",
            features: ["Up to 15 slides", "PowerPoint + PDF", "Branded master template", "Data visualisation"],
            missing: ["Animated transitions", "Keynote version"],
          },
          {
            name: "Deal Closer",
            tier: "Growth",
            price: "$699",
            badge: "Most Popular",
            delivery: "6-day delivery",
            features: ["Up to 30 slides", "Animated transitions", "PowerPoint + Keynote", "Narrative structuring", "Infographic slides", "Editable template"],
          },
          {
            name: "Boardroom",
            tier: "Pro",
            price: "$1,499",
            delivery: "10-day delivery",
            features: ["Unlimited slides", "Custom motion graphics", "All formats incl. Google Slides", "Speaker notes writing", "Content strategy consult", "Presenter coaching call"],
          },
        ],
      },
      uiux: {
        label: "UI/UX Design",
        plans: [
          {
            name: "Wireframe",
            tier: "Starter",
            price: "$499",
            delivery: "5-day delivery",
            features: ["Up to 8 screens", "User flow diagram", "Clickable prototype", "Figma source file"],
            missing: ["High-fidelity UI", "Design system"],
          },
          {
            name: "Interface",
            tier: "Growth",
            price: "$1,499",
            badge: "Most Popular",
            delivery: "10-day delivery",
            features: ["Up to 20 screens", "Hi-fi UI design", "Component library", "Interactive prototype", "Dev handoff (Figma)", "Mobile + desktop"],
          },
          {
            name: "Product",
            tier: "Pro",
            price: "$3,499",
            delivery: "18-day delivery",
            features: ["Unlimited screens", "UX research + audit", "Full design system", "Usability testing", "Motion/micro-animation", "30-day design support"],
          },
        ],
      },
    },
  },

  social: {
    label: "Social Media",
    icon: "◈",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.22)",
    plans: [
      {
        name: "Grow",
        tier: "Starter",
        price: "$499/mo",
        delivery: "2 platforms",
        features: ["12 posts/month", "Content calendar", "Caption copywriting", "Hashtag strategy", "Monthly report"],
        missing: ["Paid ads management", "Influencer outreach"],
      },
      {
        name: "Amplify",
        tier: "Growth",
        price: "$999/mo",
        badge: "Most Popular",
        delivery: "4 platforms",
        features: ["30 posts/month", "Stories + Reels scripts", "Community management", "Engagement strategy", "Competitor analysis", "Bi-weekly reporting", "Trend monitoring"],
      },
      {
        name: "Dominate",
        tier: "Pro",
        price: "$2,499/mo",
        delivery: "All platforms",
        features: ["Unlimited posts", "Paid ads management", "Influencer outreach", "Viral content strategy", "Weekly 1:1 strategy call", "Dedicated account manager", "Growth guarantee"],
      },
    ],
  },

  linkedin: {
    label: "LinkedIn Growth",
    icon: "⬡",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.25)",
    plans: [
      {
        name: "Starter",
        tier: "Starter",
        price: "$50",
        delivery: "2-day delivery",
        features: ["Banner design", "Headline optimization", "Skills formatting", "Profile tips"],
        missing: ["Content designs", "Growth strategy"],
      },
      {
        name: "Growth",
        tier: "Growth",
        price: "$99",
        badge: "Most Popular",
        delivery: "3-day delivery",
        features: ["Full profile optimization", "Content designs", "About rewrite", "Growth strategy", "Connection outreach plan"],
      },
      {
        name: "Premium",
        tier: "Pro",
        price: "$199",
        delivery: "5-day delivery",
        features: ["Advanced optimization", "Weekly posts (4/mo)", "Analytics dashboard", "Personal strategy", "Lead gen setup", "Authority content plan"],
      },
    ],
  },

  web: {
    label: "Web Development",
    icon: "◎",
    color: "#34d399",
    glow: "rgba(52,211,153,0.22)",
    plans: [
      {
        name: "Launch Pad",
        tier: "Starter",
        price: "$799",
        delivery: "7-day delivery",
        features: ["1-page landing site", "Mobile responsive", "Contact form", "Basic SEO setup", "Analytics install"],
        missing: ["E-commerce", "Blog/CMS"],
      },
      {
        name: "Business Site",
        tier: "Growth",
        price: "$2,499",
        badge: "Most Popular",
        delivery: "14-day delivery",
        features: ["Up to 8 pages", "CMS / blog setup", "Lead capture system", "Full SEO optimization", "Speed optimization", "30-day free support", "Custom animations"],
      },
      {
        name: "Revenue Engine",
        tier: "Pro",
        price: "$5,999",
        delivery: "21-day delivery",
        features: ["Unlimited pages", "E-commerce / payments", "Custom integrations", "CRO audit + optimization", "Email automation setup", "60-day support", "Hosting + domain setup"],
      },
    ],
  },

  content: {
    label: "Content & Copy",
    icon: "✐",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.22)",
    plans: [
      {
        name: "Voice",
        tier: "Starter",
        price: "$349",
        delivery: "5-day delivery",
        features: ["Homepage copy", "About page", "Tagline + value prop", "2 revision rounds"],
        missing: ["Blog articles", "Email sequences"],
      },
      {
        name: "Authority",
        tier: "Growth",
        price: "$799/mo",
        badge: "Most Popular",
        delivery: "Ongoing",
        features: ["4 SEO blog articles/mo", "Email newsletter (weekly)", "Social captions (20/mo)", "Content calendar", "Keyword research", "Performance report"],
      },
      {
        name: "Thought Leader",
        tier: "Pro",
        price: "$1,999/mo",
        delivery: "Ongoing",
        features: ["8 long-form articles/mo", "LinkedIn ghostwriting", "Email automation copy", "Press release writing", "Sales page copywriting", "Dedicated content strategist"],
      },
    ],
  },

  seo: {
    label: "SEO & Growth",
    icon: "◉",
    color: "#facc15",
    glow: "rgba(250,204,21,0.2)",
    plans: [
      {
        name: "Foundation",
        tier: "Starter",
        price: "$499/mo",
        delivery: "3-month min",
        features: ["Technical SEO audit", "On-page optimization (10pg)", "Keyword tracking", "Google Search Console", "Monthly ranking report"],
        missing: ["Link building", "Paid ads"],
      },
      {
        name: "Traction",
        tier: "Growth",
        price: "$1,299/mo",
        badge: "Most Popular",
        delivery: "6-month min",
        features: ["Everything in Foundation", "4 SEO articles/month", "Link building (10/mo)", "Local SEO", "Competitor gap analysis", "Conversion rate tips", "Bi-weekly strategy call"],
      },
      {
        name: "Market Leader",
        tier: "Pro",
        price: "$2,999/mo",
        delivery: "6-month min",
        features: ["Everything in Traction", "Google + Meta Ads", "Full funnel strategy", "A/B testing", "CRO optimization", "Revenue tracking dashboard", "Weekly growth calls"],
      },
    ],
  },
};

/* ─────────────────────────────────────────
   PLAN CARD COMPONENT
───────────────────────────────────────── */
const PlanCard = ({ plan, color, glow }) => (
  <motion.div
    variants={fadeUp}
    custom={0}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className="relative flex flex-col rounded-2xl border p-6"
    style={{
      borderColor: plan.badge ? color : "#1e1e2e",
      background: plan.badge
        ? `linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
        : "rgba(255,255,255,0.02)",
      boxShadow: plan.badge ? `0 0 40px ${glow}, inset 0 1px 0 rgba(255,255,255,0.06)` : "inset 0 1px 0 rgba(255,255,255,0.04)",
      backdropFilter: "blur(12px)",
    }}
  >
    {/* Popular Badge */}
    {plan.badge && (
      <span
        className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
        style={{ background: color, color: "#000", letterSpacing: "0.06em" }}
      >
        {plan.badge}
      </span>
    )}

    {/* Tier label */}
    <p className="text-xs tracking-widest uppercase mb-2" style={{ color: plan.badge ? color : "#555" }}>
      {plan.tier}
    </p>

    {/* Name */}
    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>

    {/* Price */}
    <p className="text-4xl font-extrabold text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
      {plan.price}
    </p>

    {/* Delivery */}
    <div className="flex items-center gap-1.5 text-xs mb-5 mt-1" style={{ color: "#555" }}>
      <span style={{ color }}>◷</span>
      {plan.delivery}
    </div>

    {/* Divider */}
    <div className="border-t mb-5" style={{ borderColor: "#1e1e2e" }} />

    {/* Features */}
    <ul className="flex-1 space-y-2.5 mb-6">
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
          <span className="mt-0.5 shrink-0 text-xs" style={{ color }}>✓</span>
          {f}
        </li>
      ))}
      {(plan.missing || []).map((f, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "#383848" }}>
          <span className="mt-0.5 shrink-0 text-xs">✗</span>
          {f}
        </li>
      ))}
    </ul>

    {/* CTA */}
    <button
      className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
      style={
        plan.badge
          ? { background: color, color: "#000" }
          : { background: "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid #2a2a3e" }
      }
      onMouseEnter={(e) => {
        if (!plan.badge) e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        if (!plan.badge) e.currentTarget.style.borderColor = "#2a2a3e";
      }}
    >
      Get Started →
    </button>
  </motion.div>
);

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTab, setActiveTab] = useState("design");
  const [activeSub, setActiveSub] = useState("logo");

  const active = services[activeTab];
  const isDesign = activeTab === "design";
  const currentPlans = isDesign ? active.subServices[activeSub]?.plans : active.plans;

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a001a 0%, #0d0020 50%, #000 100%)" }}
      >
        {/* Ambient orbs */}
        <div
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 right-[-10%] w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(192,132,252,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-3xl">
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-xs tracking-[0.25em] text-indigo-400 uppercase mb-5 font-medium"
          >
            4x Vision Agency · Services & Pricing
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Services Built to{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Scale 4x
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-gray-400 max-w-xl mx-auto text-lg mb-10 font-light"
          >
            Design, development, social media, content & SEO — everything engineered for compounding growth.
          </motion.p>

          {/* Hero stats */}
          <motion.div
            variants={stagger} initial="hidden" animate="show"
            className="flex flex-wrap justify-center gap-8 mt-4"
          >
            {[
              { num: "6", label: "Service Categories" },
              { num: "30+", label: "Packages" },
              { num: "0→100k", label: "Revenue Goal" },
              { num: "6mo", label: "Timeline" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="text-center">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text" style={{ letterSpacing: "-0.02em" }}>
                  {s.num}
                </div>
                <div className="text-xs text-gray-600 tracking-widest uppercase mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN SERVICE TABS ── */}
      <section className="bg-black pt-20 pb-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Primary tab strip */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
            {Object.entries(services).map(([key, svc]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  if (key === "design") setActiveSub("logo");
                }}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200"
                style={{
                  borderColor: activeTab === key ? svc.color : "#1e1e2e",
                  color: activeTab === key ? svc.color : "#555",
                  background: activeTab === key ? `${svc.color}12` : "transparent",
                  boxShadow: activeTab === key ? `0 0 20px ${svc.glow}` : "none",
                }}
              >
                <span style={{ fontSize: 13 }}>{svc.icon}</span>
                <span className="hidden sm:inline">{svc.label}</span>
                <span className="sm:hidden">{svc.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Section heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-heading"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-center mb-10"
            >
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: active.color }}>
                {active.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2" style={{ letterSpacing: "-0.02em" }}>
                {isDesign ? "Choose Your Design Specialty" : `${active.label} Packages`}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Design sub-tabs */}
          <AnimatePresence>
            {isDesign && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {Object.entries(active.subServices).map(([key, sub]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSub(key)}
                      className="px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200"
                      style={{
                        borderColor: activeSub === key ? active.color : "#1e1e2e",
                        color: activeSub === key ? "#000" : "#666",
                        background: activeSub === key ? active.color : "transparent",
                      }}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (isDesign ? activeSub : "")}
              variants={stagger}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {currentPlans?.map((plan, i) => (
                <PlanCard key={i} plan={plan} color={active.color} glow={active.glow} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CUSTOM OFFER SECTION ── */}
      <section className="py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.22em] text-center uppercase text-purple-400 mb-4"
            >
              Custom Packages
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4"
              style={{ letterSpacing: "-0.025em" }}
            >
              Build Your Own{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Growth Stack
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-center mb-16 max-w-lg mx-auto font-light"
            >
              Bundle multiple services and get up to 25% off. We design a growth plan around your exact goals.
            </motion.p>

            {/* Bundle cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {[
                {
                  title: "Brand Starter Bundle",
                  discount: "15% off",
                  color: "#c084fc",
                  glow: "rgba(192,132,252,0.2)",
                  includes: ["Logo Design", "Social Media Design", "Brand Identity Basics"],
                  from: "From $799",
                  icon: "✦",
                },
                {
                  title: "Growth Accelerator",
                  discount: "20% off",
                  color: "#818cf8",
                  glow: "rgba(129,140,248,0.2)",
                  includes: ["Business Website", "SEO Traction Plan", "Content Authority Package", "LinkedIn Optimization"],
                  from: "From $2,499",
                  icon: "⬡",
                  badge: "Best Value",
                },
                {
                  title: "Full Agency Suite",
                  discount: "25% off",
                  color: "#34d399",
                  glow: "rgba(52,211,153,0.18)",
                  includes: ["Complete Branding", "Social Media Management", "Web Development", "Content + SEO", "Ads Management"],
                  from: "From $4,999",
                  icon: "◉",
                },
              ].map((bundle, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl border p-6 flex flex-col"
                  style={{
                    borderColor: bundle.badge ? bundle.color : "#1e1e2e",
                    background: bundle.badge
                      ? "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
                      : "rgba(255,255,255,0.02)",
                    boxShadow: bundle.badge ? `0 0 40px ${bundle.glow}` : "none",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {bundle.badge && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                      style={{ background: bundle.color, color: "#000" }}
                    >
                      {bundle.badge}
                    </span>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xl" style={{ color: bundle.color }}>{bundle.icon}</span>
                      <h3 className="text-lg font-bold text-white mt-2">{bundle.title}</h3>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0"
                      style={{ background: `${bundle.color}18`, color: bundle.color, border: `1px solid ${bundle.color}30` }}
                    >
                      {bundle.discount}
                    </span>
                  </div>

                  <ul className="flex-1 space-y-2 mb-6">
                    {bundle.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-xs" style={{ color: bundle.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t mb-5" style={{ borderColor: "#1e1e2e" }} />

                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{bundle.from}</span>
                    <button
                      className="px-4 py-2 rounded-xl text-xs font-semibold"
                      style={{ background: bundle.color, color: "#000" }}
                    >
                      Claim Bundle →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom offer CTA strip */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border overflow-hidden p-8 sm:p-10"
              style={{
                borderColor: "#2a1a4e",
                background: "linear-gradient(135deg, rgba(129,140,248,0.08) 0%, rgba(192,132,252,0.05) 50%, rgba(0,0,0,0) 100%)",
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(129,140,248,0.1), transparent)",
                }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(129,140,248,0.15)", color: "#818cf8", border: "1px solid rgba(129,140,248,0.2)" }}
                    >
                      Limited Spots — 6 of 10 Remaining
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
                    Can't find what you need?
                  </h3>
                  <p className="text-gray-500 font-light max-w-md">
                    Tell us your goals, budget, and timeline. We'll build a fully custom package that grows your revenue — guaranteed.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["Free strategy call", "No commitment", "Results in 30 days"].map((t) => (
                      <span key={t} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="text-indigo-400">✓</span>{t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-3 shrink-0">
                  <button
                    className="group flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #818cf8, #c084fc)",
                      color: "#000",
                      boxShadow: "0 0 30px rgba(129,140,248,0.3)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(129,140,248,0.5)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(129,140,248,0.3)")}
                  >
                    Request Custom Offer
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                  <span className="text-xs text-gray-700">Usually responds in under 2 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-4 sm:px-6 bg-black border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={fadeUp} className="text-xs tracking-[0.22em] text-center uppercase text-indigo-400 mb-3">
              Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14" style={{ letterSpacing: "-0.02em" }}>
              How We Work
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: "01", title: "Discovery Call", desc: "We learn your goals, audience, and what you've tried before.", color: "#818cf8" },
                { step: "02", title: "Custom Strategy", desc: "We map out your 6-month growth plan with clear KPIs.", color: "#c084fc" },
                { step: "03", title: "Execution", desc: "Our team executes weekly with updates and check-ins.", color: "#f472b6" },
                { step: "04", title: "Scale & Repeat", desc: "We double down on what's working to hit $100k faster.", color: "#34d399" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="p-5 rounded-2xl border"
                  style={{ borderColor: "#1e1e2e", background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-4xl font-extrabold" style={{ color: `${step.color}22`, letterSpacing: "-0.03em" }}>{step.step}</span>
                  <h4 className="text-white font-bold mt-2 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{step.desc}</p>
                  <div className="mt-4 w-8 h-0.5 rounded-full" style={{ background: step.color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-28 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #000 0%, #0a001a 50%, #12002b 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(129,140,248,0.12), transparent)" }}
        />
        <motion.div
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-xs tracking-[0.22em] uppercase text-indigo-400 mb-4">
            Let's Grow Together
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-extrabold text-white mb-5"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              4x Your Brand?
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mb-10 font-light text-lg">
            Book a free 30-min strategy call. No pitch. Just a real conversation about your growth.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-9 py-4 rounded-xl font-bold text-sm transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                color: "#000",
                boxShadow: "0 0 40px rgba(129,140,248,0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 60px rgba(129,140,248,0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(129,140,248,0.3)")}
            >
              Book Free Consultation →
            </button>
            <button
              className="px-9 py-4 rounded-xl font-bold text-sm border transition-all duration-200"
              style={{ borderColor: "#2a2a3e", color: "#888" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#818cf8";
                e.currentTarget.style.color = "#818cf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a3e";
                e.currentTarget.style.color = "#888";
              }}
            >
              View All Packages
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Services;