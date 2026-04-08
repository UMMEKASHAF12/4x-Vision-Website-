import React from "react";

const About = () => {
  return (
    <section className="bg-white font-inter py-16 px-6 md:px-16">
      
      {/* Top Logos */}
      <div className="flex flex-wrap justify-center gap-10 opacity-60 mb-12">
        <span className="text-gray-500 font-semibold">HubSpot</span>
        <span className="text-gray-500 font-semibold">Auping</span>
        <span className="text-gray-500 font-semibold">Heineken</span>
        <span className="text-gray-500 font-semibold">Expomark</span>
        <span className="text-gray-500 font-semibold">Astra-Net</span>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <span className="bg-purple-100 text-primary px-4 py-1 rounded-full text-sm font-medium">
            About us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4 leading-snug">
            Our Journey, <br />
            Vision, And Values
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type
            Specimen Book.
          </p>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition">
            Get Started →
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="team"
            className="rounded-3xl w-full h-[400px] object-cover"
          />

          {/* Rating Badge */}
          <div className="absolute top-4 left-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-primary">⭐</span>
            <span className="text-sm font-medium text-dark">5 Star</span>
          </div>

          {/* Purple Glow */}
          <div className="absolute -z-10 w-full h-full bg-purple-200 rounded-3xl top-4 left-4 blur-2xl opacity-40"></div>
        </div>

      </div>
    </section>
  );
};

export default About;