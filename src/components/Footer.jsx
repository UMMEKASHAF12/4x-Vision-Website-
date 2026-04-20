import React from "react";
import Logo from "../assets/logo.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Work", url: "/work" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Cookies", url: "/cookies" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "LinkedIn", url: "https://linkedin.com/company/4x-vision" },
        { name: "Instagram", url: "https://instagram.com/4x_vision" },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/14agRdS8tFJ/",
        },
        { name: "Twitter", url: "https://x.com/4x_vision" },
      ],
    },
  ];

  return (
    <footer className="bg-[#05020d] border-t border-white/10 pt-15 pb-12 px-[59px] relative overflow-hidden">
      {/* --- ANIMATED BACKGROUND BLOOPS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-purple-500/10 blur-[80px] rounded-full animate-[float_15s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-white font-bold text-xl mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
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
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={section.title === "Social" ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-white/40 hover:text-violet-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-white/20 text-[11px] uppercase tracking-widest">
            © {currentYear} 4x Vision Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
