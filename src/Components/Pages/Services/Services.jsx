import React from 'react';
import { FaPlane, FaHotel, FaCar, FaConciergeBell } from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Flight Booking',
    icon: <FaPlane className="text-4xl text-blue-500" />,
    description: 'Book domestic and international flights at affordable prices.',
  },
  {
    id: 2,
    name: 'Hotel Booking',
    icon: <FaHotel className="text-4xl text-green-500" />,
    description: 'Find the best hotels and resorts for your stay in various destinations.',
  },
  {
    id: 3,
    name: 'Car Rentals',
    icon: <FaCar className="text-4xl text-yellow-500" />,
    description: 'Rent a car for your vacation or business trips with ease.',
  },
  {
    id: 4,
    name: 'Tour Packages',
    icon: <FaConciergeBell className="text-4xl text-red-500" />,
    description: 'Explore the world with exciting and customized tour packages.',
  },
];

const Services = () => {
  return (
    <div className="container bg-gray-100 w-full  py-16 px-5 lg:px-10 mx-auto text-center">
      <p className="text-orange-500 text-base font-medium mb-2">Our Services</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Explore Our Travel Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
