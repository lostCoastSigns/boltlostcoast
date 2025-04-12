import React from 'react';
import ServicePage from '../../components/ServicePage';

const VehicleWraps: React.FC = () => {
  return (
    <ServicePage
      title="Vehicle Wraps"
      description="Transform your vehicle into a mobile billboard with our stunning full and partial wraps. High-resolution printing and expert installation ensure a professional look that lasts."
      bulletPoints={[
        'Full Vehicle Wraps',
        'Partial Wraps & Graphics',
        'Fleet Branding',
        'Color Change Wraps',
        'Expert Installation',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Vehicle+Wraps+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Wrap+1',
        'https://via.placeholder.com/300x200.png?text=Wrap+2',
        'https://via.placeholder.com/300x200.png?text=Wrap+3',
        'https://via.placeholder.com/300x200.png?text=Wrap+4',
      ]}
    />
  );
};

export default VehicleWraps;
