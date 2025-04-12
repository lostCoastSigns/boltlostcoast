import React from 'react';
import { Link } from 'react-router-dom';

const RequestQuoteBanner: React.FC = () => {
  return (
    <div className="mt-16 mb-8">
      <Link to="/custom">
        <img 
          src="https://via.placeholder.com/1200x300.png?text=Need+Something+Custom?+Request+a+Quote!" 
          alt="Request a Quote Banner" 
          className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </Link>
    </div>
  );
};

export default RequestQuoteBanner;
