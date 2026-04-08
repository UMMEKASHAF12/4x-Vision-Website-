import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Services",
    "Testimonials",
    "FAQs",
    "Contact",
  ];

  return (
    <>
      <nav className="z-50 flex items-center justify-between px-[59px] py-[15px] bg-[#05020d]/50 border-b backdrop-blur-lg fixed w-full">
        {/* Logo */}
        <div className="flex items-center text-white font-semibold text-lg gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={Logo} alt="Logo" />
          </div>
          4x Vision
        </div>

        {/* Desktop pill */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-[8px] py-[12px] gap-5">
          {links.map((l) => (
            <div
              key={l}
              onClick={() => setActive(l)}
              className={`px-3.5 py-1.5 rounded-full text-sm cursor-pointer transition-all duration-200
                ${
                  active === l
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
            >
              {l}
            </div>
          ))}
        </div>

        {/* Desktop CTA  */}
        <button className="hidden md:block bg-white text-[#05020d] font-semibold text-sm px-[15px] py-[10px] rounded-full">
          Shedule 1:1 meeting
        </button>

        {/* Hamburger  */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 z-[101] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-transform duration-250
            ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-opacity duration-200
            ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-transform duration-250
            ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-250 md:hidden
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0f0f17] border-l border-white/10 z-[100]
        flex flex-col pt-20 px-5 pb-8 gap-1.5 transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((l) => (
          <div
            key={l}
            onClick={() => {
              setActive(l);
              setOpen(false);
            }}
            className={`px-4 py-2.5 rounded-xl text-[15px] cursor-pointer transition-all duration-200
              ${
                active === l
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
          >
            {l}
          </div>
        ))}

        <button className="mt-4 bg-white text-[#05020d] font-semibold text-sm py-3 rounded-xl">
          Contact →
        </button>
      </div>
    </>
  );
}
