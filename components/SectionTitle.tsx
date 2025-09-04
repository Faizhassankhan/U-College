
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800">{title}</h2>
      <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
      <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;
