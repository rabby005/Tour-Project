import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const demoPlaces = [
    {
        id: 1,
        title: 'Santorini, Greece',
        image: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg",
    },
    {
        id: 2,
        title: 'Kyoto, Japan',
        image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/8807808.webp",
    },
];

const DemoCard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container px-5 lg:px-10  mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8 roboto">Explore Demo Places</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoPlaces.map((place, index) => (
                    <div
                        key={place.id}
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        className="relative rounded-2xl overflow-hidden shadow-lg group h-72"
                    >
                        <img
                            src={place.image}
                            alt={place.title}
                            className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-1000"
                        />
                        <div className="absolute inset-0  transition duration-300"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-semibold mb-2">{place.title}</h3>
                            <button className="px-4 py-1 bg-red-500 text-white font-medium rounded-full hover:bg-yellow-400 transition duration-300">
                                10% Bonus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoCard;
