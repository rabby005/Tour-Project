import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPaperPlane, FaCalendarAlt, FaSearch } from 'react-icons/fa';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiFillStar } from "react-icons/ai"; // ⭐ Rating star icon

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md z-10 cursor-pointer hover:bg-purple-200"
  >
    <MdOutlineKeyboardArrowLeft className='text-2xl' />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md z-10 cursor-pointer hover:bg-purple-200"
  >
    <MdOutlineKeyboardArrowRight className='text-2xl' />
  </div>
);

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('tourPlace.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className='bg-blue-50'>
      <div className="container relative pt-30 pb-12 px-5 lg:px-10 mx-auto ">
        <h2 className="container text-3xl font-bold text-center text-gray-800 mb-6 roboto ">
          Popular Destinations
        </h2>
        <Slider {...settings}>
          {destinations.map((place) => (
            <div key={place.id} className="p-3">
              <div className="bg-white rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative p-4">
                  <div className="overflow-hidden shadow-md ">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full  h-40 object-cover rounded transform hover:scale-110 duration-1000"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold px-3 py-2 rounded-full shadow">
                    Top Place
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div className='flex items-center justify-between'>
                    <h3 className=" font-bold text-gray-700 mb-1">
                      {place.name}
                    </h3>

                    {/* ⭐ Rating */}
                    <div className="flex items-center text-yellow-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar
                          key={i}
                          className={i < Math.round(place.rating) ? "text-yellow-400" : "text-yellow-300"}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({place.rating})</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 py-1">{place.description}</p>
                  <p className='text-gray-700 text-sm'>Duration: <span className='text-gray-500'>{place.duration}</span></p>
                  <p className='text-gray-700 '>Price : <span className='text-gray-500'>{place.price}</span></p>
                  <button className='font-semibold bg-blue-400  hover:bg-blue-600 text-white px-5 py-2 mt-3 border border-gray-400 rounded-md'>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Search Box */}
        <div className='container mx-auto px-5 lg:px-20 absolute -top-15 left-1/2 transform -translate-x-1/2 z-20'>
          <div className=" flex flex-col md:flex-row items-center bg-white rounded-full shadow p-7">
            {/* Destination */}
            <div className="flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <FaPaperPlane className="text-orange-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Destination</span>
                <span className="font-bold">Your City Or Region</span>
              </div>
            </div>
            {/* All Activity */}
            <div className="flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <FaPaperPlane className="text-orange-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">All Activity</span>
                <span className="font-bold">Choose Activity</span>
              </div>
            </div>
            {/* Departure Date */}
            <div className="flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <FaPaperPlane className="text-orange-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Departure Date</span>
                <span className="font-bold">Date Form</span>
              </div>
              <FaCalendarAlt className="ml-3 text-gray-500" />
            </div>
            {/* Guest */}
            <div className="flex items-center w-full px-4 py-2 border-b md:border-b-0 border-gray-200">
              <FaPaperPlane className="text-orange-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Guest</span>
                <span className="font-bold">Your Guest</span>
              </div>
            </div>
            {/* Search Button */}
            <button className="flex items-center justify-center bg-purple-600 text-white font-semibold px-6 py-2 rounded-full md:ml-6 mt-3 md:mt-0">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
