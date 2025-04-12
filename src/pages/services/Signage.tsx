import React from 'react';
import ServicePage from '../../components/ServicePage';

const Signage: React.FC = () => {
  return (
    <ServicePage
      title="Signage"
      description="Professional signage solutions to boost your brand's visibility. We create durable and eye-catching signs for indoor and outdoor use, helping your business stand out."
      bulletPoints={[
        'Storefront Signs',
        'Directional & Wayfinding Signs',
        'Real Estate Signs',
        'Event Signage',
        'ADA Compliant Signs',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Signage+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Sign+Example+1',
        'https://via.placeholder.com/300x200.png?text=Sign+Example+2',
        'https://via.placeholder.com/300x200.png?text=Sign+Example+3',
        'https://via.placeholder.com/300x200.png?text=Sign+Example+4',
      ]}
    />
  );
};

export default Signage;
