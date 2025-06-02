import React from 'react';
import { FaPlane, FaHotel, FaCar, FaConciergeBell } from 'react-icons/fa';
const services = [
    {
        id: 1,
        name: 'Flight Booking',
        icon: <FaPlane className="text-2xl text-white" />,
    },
    {
        id: 2,
        name: 'Hotel Booking',
        icon: <FaHotel className="text-2xl text-white" />,
    },
    {
        id: 3,
        name: 'Car Rentals',
        icon: <FaCar className="text-2xl  text-white" />,
    },
    {
        id: 4,
        name: 'Tour Packages',
        icon: <FaConciergeBell className="text-2xl  text-white" />,
    },
];

const Facility = () => {
    return (
        <div className='bg-red-500'>
            <div className=' container px-5 lg:px-10 mx-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  ">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex items-center gap-4  rounded-xl py-6 mx-auto "
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className=" font-semibold  text-white mb-2">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facility;