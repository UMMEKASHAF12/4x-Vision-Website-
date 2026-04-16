import { useRef, useState, useEffect, Suspense } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  X,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── THEME TOKENS 
const T = {
  bg: "#08080f",
  bg2: "#0d0d1a",
  purple: "#7B3FE4",
  purpleLight: "#9B6FFF",
  purpleDim: "rgba(123,63,228,0.15)",
  purpleBorder: "rgba(123,63,228,0.35)",
  white: "#ffffff",
  w60: "rgba(255,255,255,0.60)",
  w40: "rgba(255,255,255,0.40)",
  w20: "rgba(255,255,255,0.20)",
  w10: "rgba(255,255,255,0.10)",
  w06: "rgba(255,255,255,0.06)",
  w04: "rgba(255,255,255,0.04)",
};
const SYNE = "'Syne', sans-serif";
const DM = "'DM Sans', sans-serif";

// ─── EASING 
const EASE = [0.22, 1, 0.36, 1];

// ─── THREE.JS — FLOATING ORB 
function AnimatedOrb() {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.09;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.13;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={mesh} args={[1, 128, 128]}>
        <MeshDistortMaterial
          color="#7B3FE4"
          attach="material"
          distort={0.55}
          speed={2.2}
          roughness={0}
          metalness={0.1}
          opacity={0.18}
          transparent
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useRef();
  const count = 420;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((s) => {
    if (points.current) points.current.rotation.y = s.clock.elapsedTime * 0.025;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#9B6FFF"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

// ─── MAGNETIC BUTTON ─────────────────────────────────────────────────────────
function MagneticBtn({ children, className, style, onClick, type = "button" }) {
  const ref = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.28);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      className={className}
      style={{ ...style, x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

// ─── FLOATING LABEL INPUT ─────────────────────────────────────────────────────
function FloatInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  required,
  multiline,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value?.length > 0;

  const baseStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    fontFamily: DM,
    fontSize: 15,
    color: T.white,
    resize: "none",
    paddingTop: multiline ? 24 : 0,
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Animated border container */}
      <motion.div
        animate={{
          borderColor: focused ? T.purple : active ? T.purpleLight : T.w20,
          boxShadow: focused
            ? `0 0 0 1px ${T.purple}, 0 0 24px rgba(123,63,228,0.15)`
            : "none",
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: "relative",
          borderRadius: 14,
          border: `1px solid ${T.w20}`,
          background: T.w04,
          padding: multiline ? "28px 20px 16px" : "0 20px",
          minHeight: multiline ? 140 : 58,
          display: "flex",
          alignItems: multiline ? "flex-start" : "center",
        }}
      >
        {/* Floating label */}
        <motion.label
          animate={{
            top: active ? (multiline ? 10 : 10) : multiline ? 20 : "50%",
            y: active ? 0 : multiline ? 0 : "-50%",
            fontSize: active ? 10 : 14,
            color: focused ? T.purpleLight : T.w40,
            letterSpacing: active ? "0.12em" : "0",
            textTransform: active ? "uppercase" : "none",
          }}
          transition={{ duration: 0.22, ease: EASE }}
          style={{
            position: "absolute",
            left: 20,
            fontFamily: DM,
            pointerEvents: "none",
            transformOrigin: "left center",
          }}
        >
          {label}
        </motion.label>

        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={baseStyle}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...baseStyle, paddingTop: 18, paddingBottom: 4 }}
          />
        )}
      </motion.div>
    </div>
  );
}

// ─── SERVICE PILL ─────────────────────────────────────────────────────────────
const SERVICES = [
  "Website Design",
  "Brand Identity",
  "LinkedIn Presence",
  "UI/UX Design",
  "Webflow Dev",
  "Design System",
];

function ServicePill({ label, selected, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={{
        background: selected ? T.purpleDim : T.w04,
        borderColor: selected ? T.purple : T.w10,
        color: selected ? T.purpleLight : T.w60,
      }}
      transition={{ duration: 0.2 }}
      style={{
        fontFamily: DM,
        fontSize: 12,
        padding: "8px 16px",
        borderRadius: 999,
        border: `1px solid ${T.w10}`,
        cursor: "pointer",
        letterSpacing: "0.03em",
      }}
    >
      {label}
    </motion.button>
  );
}

// ─── INFO CARD ────────────────────────────────────────────────────────────────
function InfoCard({ icon: Icon, label, value, href }) {
  return (
    <motion.a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -4, borderColor: T.purpleBorder }}
      transition={{ duration: 0.28, ease: EASE }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 22px",
        borderRadius: 16,
        background: T.w04,
        border: `1px solid ${T.w10}`,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: T.purpleDim,
          border: `1px solid ${T.purpleBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={17} color={T.purpleLight} />
      </div>
      <div>
        <p
          style={{
            fontFamily: DM,
            fontSize: 11,
            color: T.w40,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 3,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: DM,
            fontSize: 14,
            color: T.white,
            fontWeight: 500,
          }}
        >
          {value}
        </p>
      </div>
    </motion.a>
  );
}

// ─── SOCIAL LINK ──────────────────────────────────────────────────────────────
function SocialLink({ icon: Icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, borderColor: T.purple }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: T.w04,
        border: `1px solid ${T.w10}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "border-color 0.25s",
      }}
      title={label}
    >
      <Icon size={16} color={T.w60} />
    </motion.a>
  );
}

// ─── STAGGER CONTAINER ────────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

// ─── MAIN CONTACT PAGE ────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const cursorRef = useRef();
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const scx = useSpring(cx, { stiffness: 120, damping: 16 });
  const scy = useSpring(cy, { stiffness: 120, damping: 16 });

  // Custom cursor
  useEffect(() => {
    const move = (e) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleService = (s) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call — replace with your backend/formspree/emailjs
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", company: "", message: "" });
      setServices([]);
    }, 4000);
  };

  return (
    <div
      style={{
        background: T.bg,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08080f; }
        textarea { line-height: 1.6; }
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #0d0d1a inset !important;
          -webkit-text-fill-color: #fff !important;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #08080f; }
        ::-webkit-scrollbar-thumb { background: rgba(123,63,228,0.4); border-radius: 3px; }
        ::selection { background: rgba(123,63,228,0.4); }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: T.purple,
          pointerEvents: "none",
          zIndex: 9999,
          x: scx,
          y: scy,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "screen",
        }}
      />

      {/* ── THREE.JS CANVAS BACKGROUND ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#7B3FE4" />
          <pointLight position={[-5, -3, -5]} intensity={0.6} color="#9B6FFF" />
          <Suspense fallback={null}>
            <AnimatedOrb />
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* ── RADIAL AMBIENT GLOWS ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 700,
            background:
              "radial-gradient(ellipse, rgba(123,63,228,0.09) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "-10%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(123,63,228,0.07) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── PAGE CONTENT ── */}
      <main style={{ position: "relative", zIndex: 10, paddingTop: 100 }}>
        {/* ── MAIN GRID: FORM + SIDEBAR ── */}
        <section
          id="form"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "20px 24px 120px",
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 32,
            alignItems: "start",
          }}
        >
          {/* ════ LEFT — CONTACT FORM ════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Form card */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "rgba(13,13,26,0.7)",
                border: `1px solid ${T.w10}`,
                borderRadius: 28,
                padding: "48px 48px 52px",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Card header */}
              <motion.div variants={fadeUp} style={{ marginBottom: 40 }}>
                <h2
                  style={{
                    fontFamily: SYNE,
                    fontWeight: 800,
                    fontSize: "clamp(26px, 3vw, 34px)",
                    color: T.white,
                    letterSpacing: "-0.02em",
                    marginBottom: 10,
                  }}
                >
                  Start a project
                </h2>
                <p
                  style={{
                    fontFamily: DM,
                    fontSize: 14,
                    color: T.w40,
                    lineHeight: 1.6,
                  }}
                >
                  Fill in the details and we'll get back to you with a tailored
                  proposal.
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "60px 0",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.1,
                      }}
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "rgba(123,63,228,0.18)",
                        border: `1px solid ${T.purpleBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 24,
                      }}
                    >
                      <CheckCircle2 size={32} color={T.purpleLight} />
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: SYNE,
                        fontWeight: 800,
                        fontSize: 26,
                        color: T.white,
                        marginBottom: 12,
                      }}
                    >
                      Message received!
                    </h3>
                    <p
                      style={{
                        fontFamily: DM,
                        fontSize: 15,
                        color: T.w60,
                        maxWidth: 320,
                        lineHeight: 1.6,
                      }}
                    >
                      We'll review your project details and reach out within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    {/* Row: Name + Email */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <FloatInput
                        label="Full name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <FloatInput
                        label="Email address"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Company */}
                    <FloatInput
                      label="Company / Project name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                    />

                    {/* Services selector */}
                    <div>
                      <p
                        style={{
                          fontFamily: DM,
                          fontSize: 11,
                          color: T.w40,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: 12,
                        }}
                      >
                        Services interested in
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                      >
                        {SERVICES.map((s) => (
                          <ServicePill
                            key={s}
                            label={s}
                            selected={services.includes(s)}
                            onClick={() => toggleService(s)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <FloatInput
                      label="Tell us about your project…"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      multiline
                    />

                    {/* Budget row */}
                    <div>
                      <p
                        style={{
                          fontFamily: DM,
                          fontSize: 11,
                          color: T.w40,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: 10,
                        }}
                      >
                        Estimated budget
                      </p>
                      <div
                        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
                      >
                        {["< $1k", "$1k–$3k", "$3k–$8k", "$8k+"].map((b) => (
                          <motion.button
                            key={b}
                            type="button"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                              fontFamily: DM,
                              fontSize: 12,
                              padding: "8px 18px",
                              borderRadius: 999,
                              border: `1px solid ${T.w10}`,
                              background: T.w04,
                              color: T.w60,
                              cursor: "pointer",
                            }}
                          >
                            {b}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <div style={{ marginTop: 8 }}>
                      <MagneticBtn
                        type="submit"
                        style={{
                          width: "100%",
                          padding: "18px 32px",
                          borderRadius: 14,
                          border: "none",
                          background: `linear-gradient(135deg, ${T.purple} 0%, #5a28c4 100%)`,
                          color: T.white,
                          fontFamily: DM,
                          fontSize: 15,
                          fontWeight: 500,
                          cursor: status === "sending" ? "wait" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                          boxShadow: `0 0 40px rgba(123,63,228,0.35)`,
                          transition: "box-shadow 0.3s",
                        }}
                      >
                        {status === "sending" ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Loader2 size={18} />
                            </motion.div>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <Send size={16} />
                          </>
                        )}
                      </MagneticBtn>
                    </div>

                    <p
                      style={{
                        fontFamily: DM,
                        fontSize: 12,
                        color: T.w20,
                        textAlign: "center",
                        marginTop: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      No spam. We reply within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* ════ RIGHT — SIDEBAR ════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 22px",
                borderRadius: 16,
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#10B981",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: DM,
                    fontSize: 13,
                    color: "#10B981",
                    fontWeight: 500,
                  }}
                >
                  Currently accepting new projects
                </p>
                <p
                  style={{
                    fontFamily: DM,
                    fontSize: 11,
                    color: "rgba(16,185,129,0.6)",
                    marginTop: 2,
                  }}
                >
                  Next slot: May 2025
                </p>
              </div>
            </motion.div>

            {/* Contact info cards */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <InfoCard
                icon={Mail}
                label="Email us"
                value="4xvision14@gmail.com"
                href="mailto:4xvision14@gmail.com"
              />
              <InfoCard
                icon={Phone}
                label="Call us"
                value="+1 (555) 000-0000"
                href="tel:+15550000000"
              />
              <InfoCard
                icon={MapPin}
                label="Based in"
                value="Remote — Worldwide"
              />
            </motion.div>

            {/* Response time */}
            <motion.div
              variants={fadeUp}
              style={{
                padding: "24px",
                borderRadius: 20,
                background: T.w04,
                border: `1px solid ${T.w10}`,
              }}
            >
              <p
                style={{
                  fontFamily: SYNE,
                  fontWeight: 700,
                  fontSize: 15,
                  color: T.white,
                  marginBottom: 18,
                }}
              >
                What happens next?
              </p>
              {[
                { step: "01", text: "We review your brief within 24h" },
                { step: "02", text: "A discovery call is scheduled" },
                { step: "03", text: "You receive a tailored proposal" },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: 14,
                    marginBottom: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SYNE,
                      fontWeight: 700,
                      fontSize: 11,
                      color: T.purpleLight,
                      letterSpacing: "0.1em",
                      background: T.purpleDim,
                      border: `1px solid ${T.purpleBorder}`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      flexShrink: 0,
                    }}
                  >
                    {step}
                  </span>
                  <p
                    style={{
                      fontFamily: DM,
                      fontSize: 13,
                      color: T.w60,
                      lineHeight: 1.55,
                      paddingTop: 2,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontFamily: DM,
                  fontSize: 11,
                  color: T.w20,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Follow us
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <SocialLink icon={Linkedin} label="LinkedIn" href="#" />
                <SocialLink icon={Instagram} label="Instagram" href="#" />
                <SocialLink icon={X} label="X" href="#" />
                <SocialLink icon={Facebook} label="Facebook" href="#" />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 900px) {
          section[id="form"] > div:first-child,
          section[id="form"] > div:last-child { grid-column: 1 / -1 !important; }
          section[id="form"] { grid-template-columns: 1fr !important; }
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          nav > div:nth-child(2) { display: none !important; }
          main > section:first-child { padding: 60px 20px 40px !important; }
          section[id="form"] { padding: 16px 16px 80px !important; }
        }
      `}</style>
    </div>
  );
}
