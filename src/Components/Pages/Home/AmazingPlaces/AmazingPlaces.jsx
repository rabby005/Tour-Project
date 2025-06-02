import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const tabs = ['All', 'New', 'Featured', 'Discount', 'Popular'];

const AmazingPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        fetch('tourPlace.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);

    const filteredPlaces =
        activeTab === 'All' ? places : places.filter(place => place.category === activeTab);

    const displayedPlaces = activeTab === 'All' ? filteredPlaces.slice(0, 8) : filteredPlaces.slice(0, 3);

    return (
        <div className="container text-center py-12 px-5 lg:px-10 mx-auto bg-white">
            <p className="text-orange-500 text-base font-medium mb-2">Popular Tour</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-10 roboto">Amazing Tour Places</h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition border-b-2
              ${activeTab === tab
                                ? 'text-green-600 bg-green-50 border-green-500'
                                : 'text-gray-700 bg-green-50 border-transparent hover:border-green-300'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedPlaces.map(place => (
                    <div  data-aos="fade-up"
                        key={place.id}
                        className="bg-white rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300  "
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-56 object-cover rounded-t-2xl "
                        />
                        <div className="p-5 text-left">
                            <div className='flex items-center justify-between'>
                                <h3 className="text-md font-bold text-gray-700">{place.name}</h3>
                                <div className="flex items-center text-yellow-500 text-sm mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < place.rating ? 'text-yellow-500' : 'text-yellow-300'} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 ">{place.description}</p>
                            <p className=" font-semibold ">Price :{place.price}</p>
                            <p className="text-gray-500 text-sm font-semibold ">Duration :{place.duration}</p>
                            <div>
                                <button className='font-semibold text-white bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded-md mt-2
                                '>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmazingPlaces;
