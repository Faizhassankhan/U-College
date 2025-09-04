
import React from 'react';
import { faculty } from '../constants/data';
import SectionTitle from './SectionTitle';
import type { FacultyMember } from '../types';

const TwitterIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);

const LinkedInIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
);

const EmailIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.003 5.884L10 11.882l7.997-5.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 6-8-6V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
);


const FacultyCard: React.FC<{ member: FacultyMember }> = ({ member }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200" />
      <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
      <p className="text-orange-500 font-semibold mb-4">{member.designation}</p>
      <div className="flex justify-center space-x-4">
        {member.social.twitter && <a href={member.social.twitter} className="text-gray-500 hover:text-blue-500"><TwitterIcon className="w-6 h-6" /></a>}
        {member.social.linkedin && <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-700"><LinkedInIcon className="w-6 h-6" /></a>}
        {member.social.email && <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-red-500"><EmailIcon className="w-6 h-6" /></a>}
      </div>
    </div>
  );
};


const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Faculty" subtitle="Meet Our Expert Educators and Researchers" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <FacultyCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
