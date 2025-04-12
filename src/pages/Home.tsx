import React from 'react';
import { Link } from 'react-router-dom';
import { Sticker, Upload, Star, Truck, Palette, Type, PenLine, Badge, Flag, Car } from 'lucide-react';

const Home = () => {
  const services = [
    {
      name: 'Custom Tees and Apparel',
      icon: Type,
      color: 'purple',
      path: '/services/custom-printing',
      description: 'Empower Your Style: Discover Our Custom Tees and Apparel Collection – Ignite Creativity with Iron-Ons, On-Demand Prints, and Expert Screen Printing for Bulk Orders.'
    },
    {
      name: 'Signature Sign Solutions',
      icon: PenLine,
      color: 'pink',
      path: '/services/signage',
      description: 'Where Craftsmanship Meets Impact – Transform, Direct, and Elevate with Distinctive Signs Crafted to Reflect Your Individuality and your Business Objectives.'
    },
    {
      name: 'Promo Products',
      icon: Badge,
      color: 'yellow',
      path: '/services/promotional-products',
      description: 'Imprint Your Logo on Countless Items for Lasting Impressions. Leave Your Mark Everywhere: Explore Our Vast Array of Promotional Products.'
    },
    {
      name: 'Signs for Your Fun Spaces!',
      icon: Star,
      color: 'green',
      path: '/services/novelty-items',
      description: 'Deck out your man cave, she shed, game room, or pool area with personality! We create unique, fun, and customizable novelty signs perfect for adding character to your favorite hangouts. Your space, your sign!'
    },
    {
      name: 'Banners',
      icon: Flag,
      color: 'blue',
      path: '/services/banners',
      description: 'Unlock Vibrant Custom Banners: Elevate Your Brand with Eye-Catching Designs and Quality Printing – Your Go-To Source for Tailored Banners That Leave a Lasting Impression!'
    },
    {
      name: 'Decals',
      icon: Sticker,
      color: 'orange',
      path: '/services/decals',
      description: "Unleash Your Brand's Potential: Discover Limitless Possibilities with Custom Decals, Stickers and food grade labels – From Quirky to Professional, We Bring Your Ideas to Life in Every Shape and Size."
    },
    {
      name: 'Drive Your Brand: Vehicle Magnets & Lettering',
      icon: Car,
      color: 'teal',
      path: '/services/vehicle-wraps',
      description: 'Turn your work vehicles into mobile billboards! Our durable, high-quality vehicle magnets and custom vinyl lettering boost brand visibility and professionalism wherever you go. Affordable, effective advertising on the move.'
    },
    {
      name: 'Graphic Design That Builds Brands',
      icon: Palette,
      color: 'lime',
      path: '/services/graphic-design',
      description: 'We craft compelling visuals that do more than just look good – they build your brand identity. From logos to marketing materials, our professional graphic design services help you connect with your audience and stand out.'
    },
    {
      name: 'Professional Embroidery Services', // Updated Name
      icon: Type, // Consider changing icon if Type is already used prominently
      color: 'emerald',
      path: '/services/embroidery',
      description: 'Elevate your brand or personalize your gear with expert embroidery. Ideal for adding logos to caps and hats, creating team wear, or customizing apparel. We ensure precise, high-quality stitching for a lasting impression.' // Updated Description
    },
  ];

  return (
    <div>
      <div className="hero-gradient text-white py-24 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Ideas Into
              <span className="block">Beautiful Stickers & More</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              From custom stickers to banners, vehicle wraps, and promotional swag,
              we provide premium quality products tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                <Sticker className="mr-2 h-5 w-5" />
                Browse Online Shop
              </Link>
              <Link to="/custom" className="btn-secondary">
                <Upload className="mr-2 h-5 w-5" />
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="card p-8 text-center group flex flex-col"> {/* Added flex flex-col */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${service.color}-100 flex items-center justify-center
                group-hover:bg-${service.color}-600 transition-colors duration-300`}>
                <service.icon className={`h-8 w-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow"> {/* Added flex-grow */}
                {service.description}
              </p>
              <Link to={service.path} className="text-indigo-600 hover:text-indigo-800 font-medium mt-auto inline-block">
                Learn more here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
