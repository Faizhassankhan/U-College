
import React from 'react';
import { courses } from '../constants/data';
import SectionTitle from './SectionTitle';
import type { Course } from '../types';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 h-16">{course.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Duration: {course.duration}</span>
        </div>
        <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
          Read More
        </a>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Courses" subtitle="Explore Our Diverse Academic Programs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
