import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    id: 1,
    name: 'Sadia Rahman',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    comment: 'My travel experience was amazing! Everything was well-organized and on time. Highly recommended!',
  },
  {
    id: 2,
    name: 'Tanvir Ahmed',
    image: 'https://i.pravatar.cc/150?img=23',
    rating: 4,
    comment: 'The guide and tour planning were great. Could be even better with improved hotel services.',
  },
  {
    id: 3,
    name: 'Mitu Akter',
    image: 'https://i.pravatar.cc/150?img=31',
    rating: 5,
    comment: 'One of the best trips of my life. Thank you for such a memorable experience!',
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const aosAnimations = ['fade-right', 'fade-up', 'fade-left'];

  return (
    <div className="container  py-15 px-5 lg:px-10 mx-auto text-center">
      <p className="text-orange-500 text-sm font-medium mb-2">What Our Travelers Say</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            data-aos={aosAnimations[index]}
            className="bg-white rounded-xl p-6 shadow-md  hover:shadow-lg transition duration-300 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full border object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={starIndex < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{testimonial.comment} Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est obcaecati tempora vel voluptates beatae aliquid eaque nostrum quo unde!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
