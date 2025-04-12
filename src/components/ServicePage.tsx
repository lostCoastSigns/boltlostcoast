import React from 'react';
import RequestQuoteBanner from './RequestQuoteBanner';

interface ServicePageProps {
  title: string;
  description: string;
  bulletPoints: string[];
  mainImage: string;
  galleryImages: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  bulletPoints,
  mainImage,
  galleryImages,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      
      <div className="mb-12">
        <img 
          src={mainImage} 
          alt={`${title} main image`} 
          className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((imgSrc, index) => (
            <img 
              key={index} 
              src={imgSrc} 
              alt={`${title} gallery image ${index + 1}`} 
              className="w-full h-48 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <RequestQuoteBanner />
    </div>
  );
};

export default ServicePage;
