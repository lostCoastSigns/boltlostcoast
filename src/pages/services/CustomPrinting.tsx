import React from 'react';
import ServicePage from '../../components/ServicePage';

const CustomPrinting: React.FC = () => {
  return (
    <ServicePage
      title="Custom Printing"
      description="High-quality custom printing services tailored to your specific needs. From business cards to flyers, we handle it all with precision and care. Let us bring your designs to life with vibrant colors and durable materials."
      bulletPoints={[
        'Business Cards & Stationery',
        'Flyers & Brochures',
        'Posters & Presentations',
        'Variable Data Printing',
        'Wide Range of Paper Stocks',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Custom+Printing+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Print+Example+1',
        'https://via.placeholder.com/300x200.png?text=Print+Example+2',
        'https://via.placeholder.com/300x200.png?text=Print+Example+3',
        'https://via.placeholder.com/300x200.png?text=Print+Example+4',
      ]}
    />
  );
};

export default CustomPrinting;
