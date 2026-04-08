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
      <nav className="z-50 flex items-center justify-between px-6 md:px-[59px] py-[15px] bg-[#05020d]/50 border-b border-white/10 backdrop-blur-lg fixed top-0 left-0 w-full">
        {/* Logo */}
        <div className="flex items-center text-white font-semibold text-lg gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          4x Vision
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-3 gap-5">
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

        {/* Desktop CTA */}
        <button className="hidden md:block bg-white text-[#05020d] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors">
          Schedule 1:1 meeting
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
          <span className="block w-6 h-0.5 bg-white rounded" />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[99] transition-opacity duration-300 md:hidden
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0f0f17] border-l border-white/10 z-[100]
        flex flex-col p-6 transition-transform duration-500 ease-in-out md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* --- NEW CROSS BUTTON INSIDE SIDEBAR --- */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setOpen(false)}
            className="text-white/50 hover:text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-2">
          {links.map((l) => (
            <div
              key={l}
              onClick={() => {
                setActive(l);
                setOpen(false);
              }}
              className={`px-4 py-4 rounded-xl text-lg cursor-pointer transition-all duration-200
                ${
                  active === l
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white"
                }`}
            >
              {l}
            </div>
          ))}
        </div>

        <button className="mt-auto mb-4 bg-white text-[#05020d] font-semibold text-base py-4 rounded-xl active:scale-95 transition-transform">
          Get Started →
        </button>
      </div>
    </>
  );
}
