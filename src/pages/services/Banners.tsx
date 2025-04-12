import React from 'react';
import ServicePage from '../../components/ServicePage';

const Banners: React.FC = () => {
  return (
    <ServicePage
      title="Banners"
      description="Eye-catching banner designs to effectively promote your events, sales, or campaigns. We offer various sizes and materials suitable for both indoor and outdoor use."
      bulletPoints={[
        'Vinyl Banners',
        'Mesh Banners for Windy Areas',
        'Retractable Banner Stands',
        'Fabric Banners',
        'Pole Banners',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Banners+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Banner+1',
        'https://via.placeholder.com/300x200.png?text=Banner+2',
        'https://via.placeholder.com/300x200.png?text=Banner+3',
        'https://via.placeholder.com/300x200.png?text=Banner+4',
      ]}
    />
  );
};

export default Banners;
