import React from "react";
import Logo from "../assets/logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Navigation", links: ["Home", "About", "Services", "Work"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
    { title: "Social", links: ["LinkedIn", "Instagram", "Facebook", "X"] },
  ];

  return (
    <footer className="bg-[#05020d] border-t border-white/10 pt-24 pb-12 px-[59px] relative overflow-hidden">
      {/* --- ANIMATED BACKGROUND BLOOPS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Violet Glow - Pulses */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />
        
        {/* Floating Accent Bloop 1 - Moves left to right */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full animate-[float_10s_ease-in-out_infinite]" />
        
        {/* Floating Accent Bloop 2 - Moves right to left */}
        <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-purple-500/10 blur-[80px] rounded-full animate-[float_15s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-white font-bold text-xl mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="tracking-tight">4x Vision</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              Elevating digital presence through precision design and strategy.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-7 opacity-90">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/40 hover:text-violet-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-white/20 text-[11px] uppercase tracking-widest">
            © {currentYear} 4x Vision Agency. All rights reserved.
          </p>
          
          <div className="flex gap-8">
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="text-white/20 hover:text-white text-[11px] uppercase tracking-widest transition-colors flex items-center gap-2 group"
             >
               Back to top 
               <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
             </button>
          </div>
        </div>
      </div>

      {/* Tailwind Keyframe Injection - Add this to your tailwind.config.js or a global CSS file */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -30px); }
        }
      `}</style>
    </footer>
  );
}