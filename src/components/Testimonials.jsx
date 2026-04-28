import React from "react";

const testimonials = [
  {
    name: "Naveed Malik",
    role: "Head of Partnership",
    img: "/testimonial1.jpg",
    text: "Excellent service, quality, and all-round support.",
  },
  {
    name: "Ahmed Raza",
    role: "Graphic Designer",
    img: "/testimonial2.jpg",
    text: "Highly professional and creative team.",
  },
  {
    name: "Fareeha Abbasi",
    role: "Marketing Manager",
    img: "/testimonial3.jpg",
    text: "Lightning fast and incredibly cool.",
  },
  {
    name: "Nadim",
    role: "CEO at Nexus Digital",
    img: "/testimonial4.jpg",
    text: "The attention to detail is unmatched.",
  },
  {
    name: "Layla Hassan",
    role: "Marketing Director",
    img: "/testimonial5.jpg",
    text: "Delivered exactly what we envisioned.",
  },
  {
    name: "James Ortega",
    role: "Co-Founder at Stackify",
    img: "/testimonial6.jpg",
    text: "Wildly talented. The website converted like crazy.",
  },
];

const duplicated = [...testimonials, ...testimonials];

// Helper Component for individual cards
const TestimonialCard = ({ testimonial }) => (
  <div className="t-card">
    <p className="t-text">"{testimonial.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-purple-600 overflow-hidden">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="t-name">{testimonial.name}</p>
        <p className="text-[10px] text-purple-300">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_65%)]"></div>

      <div className="text-center mb-16 relative z-10">
        <p className="text-xs tracking-[0.35em] text-purple-400 uppercase mb-3">
          Client Feedback
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          What Our Clients Say
        </h2>
      </div>

      <div
        className="relative z-10 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonial-track {
            display: flex;
            gap: 1.25rem;
            width: max-content;
            animation: scroll-left 30s linear infinite;
            padding: 12px 4px;
          }
          .testimonial-track:hover { animation-play-state: paused; }
          .t-card {
            flex-shrink: 0; width: 320px; border-radius: 18px; padding: 28px;
            background: linear-gradient(135deg, #1a0a2e 0%, #2d1155 50%, #1e0d3d 100%);
            border: 1px solid rgba(168,85,247,0.35); transition: 0.3s;
          }
          .t-text { font-size: 13px; color: #d8b4fe; margin-bottom: 20px; }
          .t-name { font-size: 13px; font-weight: 600; color: #f3e8ff; }
        `}</style>

        <div className="testimonial-track">
          {duplicated.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
