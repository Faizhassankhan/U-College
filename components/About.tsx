
import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Univera" subtitle="Our Commitment to Excellence" />
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" alt="College Campus" className="rounded-lg shadow-xl" />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Tradition of Innovation and Learning</h3>
            <p className="text-gray-600 mb-6">
              Founded on the principles of academic rigor and intellectual curiosity, Univera has been a beacon of higher education for over a century. We are dedicated to nurturing a diverse community of scholars, artists, and leaders who are equipped to tackle the challenges of a rapidly changing world.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h4>
                <p className="text-gray-600">To provide an accessible, high-quality education that empowers students to think critically, communicate effectively, and contribute meaningfully to society.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-2">Our Vision</h4>
                <p className="text-gray-600">To be a globally recognized institution renowned for its innovative research, transformative student experiences, and unwavering commitment to public service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
