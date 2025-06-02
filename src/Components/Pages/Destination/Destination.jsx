import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: 4.8,
    popularFor: 'Eiffel Tower, Cafés',
    budget: '$1,500 - $2,500',
    bestTime: 'April to June',
  },
  {
    id: 2,
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://img.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.7,
    popularFor: 'Beaches, Surfing',
    budget: '$800 - $1,500',
    bestTime: 'May to September',
  },
  {
    id: 3,
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9',
    rating: 4.9,
    popularFor: 'Sunsets, White Houses',
    budget: '$1,200 - $2,200',
    bestTime: 'April to October',
  },
  {
    id: 4,
    name: 'Kyoto',
    location: 'Japan',
    image: 'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.6,
    popularFor: 'Temples, Culture',
    budget: '$1,300 - $2,000',
    bestTime: 'March to May',
  },
  {
    id: 5,
    name: 'Louvre Park',
    location: 'Unknown',
    image: 'https://img.freepik.com/free-photo/brunette-girl-sunglasses-is-sitting-fence-park-she-holds-yellow-laptop-smiling-camera_197531-25034.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.5,
    popularFor: 'Relaxation, Laptop Zones',
    budget: '$500 - $800',
    bestTime: 'Year-round',
  },
  {
    id: 6,
    name: 'Koh Nangyuan',
    location: 'Thailand',
    image: 'https://img.freepik.com/free-photo/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand_335224-1097.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.9,
    popularFor: 'Island Views, Hiking',
    budget: '$600 - $900',
    bestTime: 'November to March',
  },
  {
    id: 7,
    name: 'Nang Yuan Island',
    location: 'Thailand',
    image: 'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.7,
    popularFor: 'Snorkeling, Views',
    budget: '$700 - $1,200',
    bestTime: 'December to March',
  },
  {
    id: 8,
    name: 'Kelingking Beach',
    location: 'Bali, Indonesia',
    image: 'https://img.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    rating: 4.8,
    popularFor: 'Cliff Views, Adventures',
    budget: '$900 - $1,500',
    bestTime: 'May to October',
  }
];

const Destination = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container bg-white py-16 px-5 lg:px-10 mx-auto text-center">
      <p className="text-orange-500 text-base font-medium mb-2">Top Travel Spots</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Popular Destinations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {destinations.map((dest, index) => (
          <div
            key={dest.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden h-52">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-left space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{dest.name}</h3>
              <p className="text-sm text-gray-500">{dest.location}</p>
              <p className="text-sm"><span className="font-medium">Estimated Budget:</span> {dest.budget}</p>
              <p className="text-sm"><span className="font-medium">Best Time:</span> {dest.bestTime}</p>
              <div className="flex items-center text-yellow-500 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(dest.rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-xs text-gray-600 ml-2">{dest.rating}/5</span>
              </div>
              <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition">
                Explore <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
