import React from 'react';
import ServicePage from '../../components/ServicePage';

const GraphicDesign: React.FC = () => {
  return (
    <ServicePage
      title="Graphic Design"
      description="Professional graphic design services to create compelling visuals for your brand. From logos to marketing materials, our designers help you make a strong visual impact."
      bulletPoints={[
        'Logo Design & Branding',
        'Marketing Material Design',
        'Illustration & Custom Graphics',
        'Print & Digital Ad Design',
        'Layout & Typesetting',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Graphic+Design+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Design+1',
        'https://via.placeholder.com/300x200.png?text=Design+2',
        'https://via.placeholder.com/300x200.png?text=Design+3',
        'https://via.placeholder.com/300x200.png?text=Design+4',
      ]}
    />
  );
};

export default GraphicDesign;
