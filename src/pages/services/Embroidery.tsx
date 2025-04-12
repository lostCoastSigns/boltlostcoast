import React from 'react';
import ServicePage from '../../components/ServicePage';

const Embroidery: React.FC = () => {
  return (
    <ServicePage
      title="Embroidery"
      description="Custom embroidery services to add a professional and personal touch to apparel and accessories. Ideal for uniforms, hats, bags, and more, ensuring high-quality results."
      bulletPoints={[
        'Custom Logo Embroidery',
        'Apparel & Uniforms',
        'Hats & Caps',
        'Bags & Accessories',
        'Patches & Emblems',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Embroidery+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Embroidery+1',
        'https://via.placeholder.com/300x200.png?text=Embroidery+2',
        'https://via.placeholder.com/300x200.png?text=Embroidery+3',
        'https://via.placeholder.com/300x200.png?text=Embroidery+4',
      ]}
    />
  );
};

export default Embroidery;
