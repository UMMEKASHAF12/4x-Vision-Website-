import React, { useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

html, body {
  width:100%; min-height:100%;
  font-family: 'Inter', sans-serif;
  background:#05020d;
  color:#fff;
  overflow-x:hidden;
  cursor: none;
}

/* Custom Cursor */
#ca { position:fixed; width:6px; height:6px; border-radius:50%; background:#fff; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); transition: transform 0.1s ease; }
#cb { position:fixed; width:34px; height:34px; border-radius:50%; border:1px solid rgba(167,139,250,0.5); pointer-events:none; z-index:9998; transform:translate(-50%,-50%); transition: width 0.3s, height 0.3s; }

/* Hero Section */
.hero {
  position:relative; width:100vw; height:100vh;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  text-align:center; overflow:hidden;
}

/* Glass Arc */
.glass-arc {
  position: absolute;
  top: 15%;
  width: 140%;
  height: 1000px;
  border-radius: 100%;
  border-top: 1px solid rgba(255,255,255,0.25);
  background: radial-gradient(circle at center top, rgba(139,92,246,0.15) 0%, transparent 40%);
  z-index: 2;
  pointer-events: none;
}

#bg-canvas { position:absolute; inset:0; z-index:1; }

/* Content */
.h-inner { 
  position:relative; 
  z-index:10; 
  width: 100%;
  max-width: 1200px;
  padding: 0 40px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display:inline-flex; align-items:center; gap:8px;
  padding:6px 16px; border-radius:999px;
  background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);
  font-size:13px; font-weight:500; color:rgba(255,255,255,0.8);
  margin-bottom:32px; backdrop-filter:blur(10px);
}

.h-title {
  font-size: clamp(32px, 5.5vw, 82px); 
  font-weight: 400; 
  line-height: 1.1; 
  letter-spacing: -0.04em;
  color: #fff; 
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  display: inline-block;
  word-break: keep-all; 
}

.h-sub {
  font-size: 18px; 
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.4; 
  letter-spacing: -0.02em;
  text-align: center;
}

.btns { display:flex; align-items:center; justify-content:center; gap:16px; }

.btn-p {
  background:#7c3aed; color:#fff; border:none; padding:16px 36px;
  border-radius:999px; font-weight:600; font-size:16px; cursor:pointer;
  display:flex; align-items:center; gap:10px; transition: 0.3s;
}

.btn-s {
  background:rgba(255,255,255,0.05); color:#fff; border:1px solid rgba(255,255,255,0.1);
  padding:16px 36px; border-radius:999px; font-weight:600; font-size:16px; cursor:pointer;
  transition: 0.3s; backdrop-filter: blur(10px);
}
.btn-s:hover { background: rgba(255,255,255,0.1); }
`;

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
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w*0.6);
      grad.addColorStop(0, "rgba(88, 28, 235, 0.15)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,w,h);

      raf.current = requestAnimationFrame(draw);
    };

    fit();
    window.addEventListener("resize", fit);
    raf.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener("resize", fit); };
  }, []);

  return <canvas ref={cvs} id="bg-canvas" />;
}

export default function Hero() {
  const { heroData } = useContext(GlobalContext);

  const dotRef = useRef(null), ringRef = useRef(null);
  const mouse = useRef({ x:-100, y:-100 });
  const ring = useRef({ x:-100, y:-100 });

  useEffect(() => {
    const mv = e => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
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
    <>
      <style>{CSS}</style>
      <div id="ca" ref={dotRef} />
      <div id="cb" ref={ringRef} />

      <section className="hero">
        <BgCanvas />
        <div className="glass-arc" />

        <div className="h-inner">
          <div className="badge">
            <span style={{color: '#a78bfa'}}>✦</span> {heroData.badge}
          </div>

          <h1 className="h-title">{heroData.heading}</h1>

          <p className="h-sub">{heroData.subheading}</p>

          <div className="btns">
            <button className="btn-p">{heroData.primaryBtn}</button>
            <button className="btn-s">{heroData.secondaryBtn}</button>
          </div>
        </div>
      </section>
    </>
  );
}