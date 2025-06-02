import React from 'react';
import { motion } from 'framer-motion';
import hero_2 from '../../../../assets/hero_2.jpg'; // ✅ Importing hero_2 image

const Banner = () => {
  return (
    <div className='relative w-screen h-[90vh] overflow-hidden'>

      {/* ✅ Background Image with Zoom Animation */}
      <motion.img
        src={hero_2}
        alt="Banner"
        className='w-full h-full object-cover'
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
      />

      {/* ✅ Dark Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      {/* ✅ Animated Text and Button */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center z-20 px-4'
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'
        >
          Explore The World With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white text-base md:text-lg mb-6"
        >
          Discover breathtaking destinations and create unforgettable memories.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="px-6 py-3 bg-orange-500 text-white font-medium text-sm sm:text-base rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
