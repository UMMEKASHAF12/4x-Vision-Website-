import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  X,
  Loader2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SERVICES = [
  "Website Design",
  "Brand Identity",
  "LinkedIn Presence",
  "UI/UX Design",
  "Webflow Dev",
  "Design System",
];
const BUDGETS = ["< $1k", "$1k–$3k", "$3k–$8k", "$8k+"];
const NEXT_STEPS = [
  { step: "01", text: "We review your brief within 24h" },
  { step: "02", text: "A discovery call is scheduled" },
  { step: "03", text: "You receive a tailored proposal" },
];

const SOCIALS = [
  { icon: Linkedin, href: "linkedin.com/company/4x-vision" },
  { icon: Instagram, href: "#" },
  { icon: X, href: "#" },
  { icon: Facebook, href: "https://www.facebook.com/share/14agRdS8tFJ/" },
];

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

  return (
    <div className="relative w-full">
      <div
        className={`
        relative flex flex-col p-5 min-h-[60px] rounded-[14px] border transition-all duration-200
        ${
          focused
            ? "border-[#7B3FE4] ring-1 ring-[#7B3FE4] shadow-[0_0_24px_rgba(123,63,228,0.15)]"
            : "border-white/10 bg-[#13131a]/40"
        }
        ${multiline ? "min-h-[160px] pt-7" : ""}
      `}
      >
        <label
          className={`
          absolute left-5 transition-all duration-200 pointer-events-none
          ${
            active
              ? "top-2 text-[10px] uppercase tracking-widest text-[#9B6FFF]"
              : "top-1/2 -translate-y-1/2 text-sm text-white/30"
          }
        `}
        >
          {label}
        </label>
        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent border-none outline-none text-white text-[15px] resize-none"
            rows={5}
          />
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent border-none outline-none text-white text-[15px] pt-2"
          />
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [services, setServices] = useState([]);
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen bg-[#08080f] relative overflow-x-hidden font-['DM_Sans'] text-white">
      {/* NAVBAR */}
      <Navbar />

      <main className="relative z-10 pt-[120px] max-w-[1200px] mx-auto px-6 pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* LEFT COLUMN: FORM */}
          <div className="bg-[#0d0d1a]/60 border border-white/5 rounded-[32px] p-5 md:p-14 backdrop-blur-3xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-['Syne'] mb-4 tracking-tight">
              Start a project
            </h2>
            <p className="text-white/40 mb-12 text-sm">
              Fill in the details and we'll get back to you with a tailored
              proposal.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatInput
                  label="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <FloatInput
                  label="Email address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <FloatInput
                label="Company / Project name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <div className="space-y-4 my-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Services interested in
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() =>
                        setServices((prev) =>
                          prev.includes(s)
                            ? prev.filter((x) => x !== s)
                            : [...prev, s]
                        )
                      }
                      className={`px-5 py-2.5 rounded-full border text-[13px] transition-all duration-300 ${
                        services.includes(s)
                          ? "bg-[#7B3FE4]/20 border-[#7B3FE4] text-[#9B6FFF]"
                          : "bg-white/5 border-white/10 text-white/50 hover:border-[#7B3FE4]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <FloatInput
                label="Tell us about your project..."
                value={form.message}
                multiline
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <div className="space-y-4 my-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                  Estimated Budget
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`px-6 py-2.5 rounded-full border text-[13px] transition-all duration-300 ${
                        budget === b
                          ? "bg-[#7B3FE4]/20 border-[#7B3FE4] text-[#9B6FFF]"
                          : "bg-white/5 border-white/10 text-white/50 hover:border-[#7B3FE4]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full mt-4 py-5 rounded-2xl bg-[#6327e0] hover:bg-[#7236f1] text-white font-semibold flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(99,39,224,0.3)] transition-all active:scale-[0.98]"
              >
                {status === "sending" ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Send message <Send size={18} />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-white/20 mt-2">
                No spam. We reply within 24 hours.
              </p>
            </form>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="flex flex-col gap-6">
            {/* Status */}
            <div className="p-6 rounded-[24px] bg-[#051a14] border border-emerald-500/20 flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]" />
              <div>
                <p className="text-emerald-500 text-sm font-bold">
                  Currently accepting new projects
                </p>
                <p className="text-emerald-500/50 text-[11px]">
                  Next slot: May 2025
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: "Email us",
                  value: "4xvision14@gmail.com",
                },
                { icon: Phone, label: "Call us", value: "+1 (555) 000-0000" },
                {
                  icon: MapPin,
                  label: "Based in",
                  value: "Remote — Worldwide",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-6 rounded-[24px] bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7B3FE4]/50 transition-colors">
                    <item.icon
                      size={20}
                      className="text-white/70 group-hover:text-[#9B6FFF]"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                      {item.label}
                    </p>
                    <p className="text-[15px] font-medium text-white/90">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/5">
              <p className="font-['Syne'] font-bold text-lg mb-8">
                What happens next?
              </p>
              <div className="space-y-6">
                {NEXT_STEPS.map((step) => (
                  <div key={step.step} className="flex gap-5 items-start">
                    <span className="text-[11px] font-bold text-[#9B6FFF] bg-[#7B3FE4]/15 border border-[#7B3FE4]/30 w-8 h-8 flex items-center justify-center rounded-xl shrink-0">
                      {step.step}
                    </span>
                    <p className="text-[14px] text-white/50 leading-snug pt-1">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="p-4">
              <p className="text-[12px] uppercase tracking-[0.25em] text-white font-bold mb-4 ml-1 ">
                Follow Us
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((soc, i) => (
                  <a
                    key={i}
                    href={soc.href}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-[#7B3FE4] transition-all"
                  >
                    <soc.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
