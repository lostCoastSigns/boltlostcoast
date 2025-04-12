import React from 'react';
import ServicePage from '../../components/ServicePage';

const PromotionalProducts: React.FC = () => {
  return (
    <ServicePage
      title="Promotional Products"
      description="A wide array of promotional products to effectively market your business. From pens and mugs to tech gadgets, we can brand items that leave a lasting impression."
      bulletPoints={[
        'Apparel & Wearables',
        'Drinkware & Mugs',
        'Tech Accessories',
        'Office Supplies & Pens',
        'Bags & Totes',
      ]}
      mainImage="https://via.placeholder.com/1200x400.png?text=Promo+Products+Showcase"
      galleryImages={[
        'https://via.placeholder.com/300x200.png?text=Promo+Item+1',
        'https://via.placeholder.com/300x200.png?text=Promo+Item+2',
        'https://via.placeholder.com/300x200.png?text=Promo+Item+3',
        'https://via.placeholder.com/300x200.png?text=Promo+Item+4',
      ]}
    />
  );
};

export default PromotionalProducts;
