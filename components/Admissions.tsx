
import React from 'react';

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your journey towards a brighter future starts here. Explore our programs, learn about the application process, and take the first step.
        </p>
        <a 
          href="#contact" 
          className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Admissions;
