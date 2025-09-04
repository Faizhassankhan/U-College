
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Welcome to Univera</h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-3xl mx-auto">Shaping the Future, One Student at a Time. Discover Your Potential.</p>
        <a 
          href="#admissions" 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Admissions
        </a>
      </div>
    </section>
  );
};

export default Hero;
