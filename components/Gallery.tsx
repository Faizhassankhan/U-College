
import React, { useState } from 'react';
import { galleryImages } from '../constants/data';
import SectionTitle from './SectionTitle';
import type { GalleryImage } from '../types';

const Lightbox: React.FC<{ image: GalleryImage | null; onClose: () => void }> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="max-w-full max-h-[90vh] rounded-lg" />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Campus Gallery" subtitle="A Glimpse into Life at Univera" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox image={selectedImage} onClose={closeLightbox} />
    </section>
  );
};

export default Gallery;
