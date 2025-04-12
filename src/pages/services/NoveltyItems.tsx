import React from 'react';
import ServicePage from '../../components/ServicePage';

const NoveltyItems: React.FC = () => {
  return (
    <ServicePage
      title="Novelty Items"
      description="Unique and custom novelty items perfect for special occasions, gifts, or just for fun. Let your creativity shine with personalized items that bring joy."
      bulletPoints={[
        'Custom Keychains & Pins',
        'Personalized Gifts',
        'Event Giveaways',
        'Fun & Quirky Items',
        'Themed Merchandise',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Novelty+Items+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Novelty+1',
        'https://via.placeholder.com/300x200.png?text=Novelty+2',
        'https://via.placeholder.com/300x200.png?text=Novelty+3',
        'https://via.placeholder.com/300x200.png?text=Novelty+4',
      ]}
    />
  );
};

export default NoveltyItems;
