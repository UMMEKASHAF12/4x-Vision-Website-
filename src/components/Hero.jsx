import React, { useEffect, useRef } from "react";

function BgCanvas() {
  const cvs = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const c = cvs.current;
    const ctx = c.getContext("2d");
    let w, h;

    const fit = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#05020d";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(139,92,246,0.05)";
      const step = 80;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        w * 0.6
      );
      grad.addColorStop(0, "rgba(88, 28, 235, 0.15)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      raf.current = requestAnimationFrame(draw);
    };

    fit();
    window.addEventListener("resize", fit);
    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return <canvas ref={cvs} className="absolute inset-0 z-[1]" />;
}

export default function Hero() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const mv = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", mv);

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      requestAnimationFrame(tick);
    };

    tick();
    return () => window.removeEventListener("mousemove", mv);
  }, []);

  return (
    <div className="bg-[#05020d] min-h-screen font-['Inter',sans-serif] text-white overflow-hidden selection:bg-violet-500/30">
      <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
        <BgCanvas />
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
          {/* Badge Text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/80 mb-8 backdrop-blur-lg">
            <span className="text-[#a78bfa]">✦</span> Optimize Your Weak Brand
          </div>

          {/* Heading Text */}
          <h1 className="text-[clamp(32px,5.5vw,82px)] font-normal leading-[1.1] tracking-[-0.04em] text-white mb-6 text-center w-full max-w-[1000px] inline-block break-keep">
            Turn Your Weak Brand Into a Digital Authority
          </h1>

          {/* Subheading Text */}
          <p className="text-lg font-normal text-white/50 max-w-[550px] mx-auto mb-10 leading-[1.4] tracking-[-0.02em]">
            We build websites, design, and LinkedIn presence that boost
            credibility and attract clients.
          </p>

          {/* Buttons Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-9 py-4 rounded-full font-semibold text-base flex items-center gap-2.5 transition-all duration-300 active:scale-95 shadow-lg shadow-violet-500/20">
              Book Your Free Consultation →
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-lg active:scale-95">
              View Our Work →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
