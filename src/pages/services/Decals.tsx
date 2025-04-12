import React from 'react';
import ServicePage from '../../components/ServicePage';

const Decals: React.FC = () => {
  return (
    <ServicePage
      title="Decals"
      description="Custom decals perfect for cars, laptops, windows, walls, and more. Made from high-quality vinyl, our decals are durable, weather-resistant, and easy to apply."
      bulletPoints={[
        'Vehicle Decals & Lettering',
        'Window Decals & Clings',
        'Wall Decals',
        'Laptop & Phone Stickers',
        'Floor Decals',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Decals+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Decal+1',
        'https://via.placeholder.com/300x200.png?text=Decal+2',
        'https://via.placeholder.com/300x200.png?text=Decal+3',
        'https://via.placeholder.com/300x200.png?text=Decal+4',
      ]}
    />
  );
};

export default Decals;
