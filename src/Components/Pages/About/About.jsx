import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover_1 from '../../../assets/cover_1.png';
import cover from '../../../assets/cover.png';
import plan from '../../../assets/plane_shape.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });

    // Refresh AOS to ensure animations trigger on load
    AOS.refresh();
  }, []);

  return (
    <div className="bg-base-200 py-20 px-5 lg:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image Section */}
        <div className="relative w-full lg:w-[50%]" data-aos="fade-right">
          <img
            src={cover_1}
            alt="Main Cover"
            className="h-full w-full max-w-md lg:max-w-lg mx-auto rounded-2xl"
          />
          <img
            src={cover}
            alt="Floating Cover"
            className="absolute bottom-0 right-0 w-32 lg:w-40 rounded-xl"
          />
          <img
            src={plan}
            alt="Plane Shape"
            className="absolute bottom-36 left-10 w-20 lg:w-28 rotate-12"
          />
        </div>

        {/* Right Side - Text Section */}
        <div
          className="w-full lg:w-[50%] text-center lg:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 ">
            About <span className="text-pink-500">Our Journey</span>
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-6">
            We are a passionate team of travelers who believe in exploring the world and sharing the beauty of every destination. With years of experience, we help people plan unforgettable trips.
          </p>
          <ul className="text-black space-y-2 mb-6 text-sm md:text-base">
            <li>✅ Over 100+ destinations covered</li>
            <li>✅ Experienced local guides</li>
            <li>✅ Personalized travel experiences</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
