
import React, { useState, useRef } from 'react';
import { events } from '../constants/data';
import SectionTitle from './SectionTitle';
import type { EventItem } from '../types';

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <p className="text-orange-500 font-semibold text-sm mb-2">{event.date}</p>
          <h3 className="text-xl font-bold text-blue-800 mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : events.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < events.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.offsetWidth * index;
        scrollContainerRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
  };


  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Events & News" subtitle="Stay Updated with Campus Happenings" />
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 -ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 -mr-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
