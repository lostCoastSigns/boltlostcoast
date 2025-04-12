import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  author: string;
  title: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      author: 'J. Kime',
      title: 'Local Guide',
      text:
        'Thanx so much to Lost Coast Signs and Swag for making the super cool Team Goddess car magnets for the upcoming Kinetic Grand Championship. ' +
        "I can't wait for the Team Goddess to drive around town during the Race showing these babies off. THANX! Goddess Jen-O (aka Jenette Kime)",
    },
    {
      author: 'N. Krela',
      title: '',
      text:
        'Sean was fantastic! He was able to finish 2 banners for us last minute for an event! He even pointed out a misspelled word and saved the day! ' +
        'Our business will use him in the future and highly recommend others do as well!',
    },
    {
      author: 'E. Teraoka',
      title: '',
      text:
        'Lost Coast Signs and Swag was great! Sean did great work and helped us come up with a last minute, creative design solution. ' +
        'We got so many compliments on the swag he created for our event. We really appreciated that the mugs were not packaged in Styrofoam. ' +
        'Everything was delivered on time and looked great. It was wonderful to work with him!',
    },
    {
      author: 'Scott',
      title: 'Local Guide',
      text:
        'This sign shop is great. I needed a sign asap and I had it sooner than I could imagine. The prices are fantastic and the owner was very kind and thoughtful. ' +
        'I will be back for many more signs. Great place to buy from',
    },
    {
      author: 'Graham Charleston',
      title: '',
      text:
        'Lost Coast Sings and Swag is my go to for sure! Sean and his artists got my banners made last minute in record time and did some great stickers for us too. ' +
        'We needed them done quickly for an event we agreed to late in the game and they came through for us getting our stuff done on time and gave good advice for future needs. ' +
        'Thanks guys! Highly recommend . Good people with an eye and a passion for what they do. And totally reasonable cost well!',
    },
  ]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextTestimonial();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Ensure the slider is scrolled to the correct position on index change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentTestimonialIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentTestimonialIndex]);

  return (
    <div className="relative py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="relative">
          <div className="overflow-x-auto scroll-smooth" ref={sliderRef}>
            <div className="flex snap-x gap-4 py-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="snap-start w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 text-center">"{testimonial.text}"</p>
                    <div className="flex flex-col items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                        {testimonial.title && <p className="text-gray-600">{testimonial.title}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToPreviousTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={goToNextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
