import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Places to Visit in Europe',
    image: 'https://img.freepik.com/free-photo/brunette-girl-sunglasses-is-sitting-fence-park-she-holds-yellow-laptop-smiling-camera_197531-25034.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Explore the beauty of Europe with our top 10 destinations to visit in 2023.',
    link: '/blog/top-10-places-to-visit-in-europe',
  },
  {
    id: 2,
    title: 'How to Travel on a Budget',
    image: 'https://img.freepik.com/free-photo/adventure-seeker-employee-meeting-with-workmates-video-call_482257-117927.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Traveling doesn’t have to break the bank. Here are some tips to travel on a budget.',
    link: '/blog/how-to-travel-on-a-budget',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Traveling Solo',
    image: 'https://img.freepik.com/free-photo/business-scene-with-nature_23-2151244564.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Thinking about solo travel? Check out our ultimate guide to traveling alone safely and enjoyably.',
    link: '/blog/the-ultimate-guide-to-traveling-solo',
  },
  {
    id: 4,
    title: 'Exploring Hidden Gems in Asia',
    image: 'https://img.freepik.com/free-photo/full-shot-woman-working-laptop_23-2149046392.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Discover some lesser-known but incredible destinations in Asia that will blow your mind.',
    link: '/blog/exploring-hidden-gems-in-asia',
  },
  {
    id: 5,
    title: 'Top 10 Places to Visit in Europe',
    image: 'https://img.freepik.com/free-photo/full-shot-smiley-woman-taking-selfie_23-2149818239.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Explore the beauty of Europe with our top 10 destinations to visit in 2023.',
    link: '/blog/top-10-places-to-visit-in-europe',
  },
  {
    id: 6,
    title: 'How to Travel on a Budget',
    image: 'https://img.freepik.com/free-photo/top-view-hands-holding-phone-photos_23-2149617680.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Traveling doesn’t have to break the bank. Here are some tips to travel on a budget.',
    link: '/blog/how-to-travel-on-a-budget',
  },
  {
    id: 7,
    title: 'Top 10 Places to Visit in Europe',
    image: 'https://img.freepik.com/free-photo/high-angle-man-working-travel-agency_52683-136450.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Explore the beauty of Europe with our top 10 destinations to visit in 2023.',
    link: '/blog/top-10-places-to-visit-in-europe',
  },
  {
    id: 8,
    title: 'How to Travel on a Budget',
    image: 'https://img.freepik.com/free-photo/overhead-view-travelling-bag-map-camera-pair-footwear-wooden-table_23-2147856134.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    description: 'Traveling doesn’t have to break the bank. Here are some tips to travel on a budget.',
    link: '/blog/how-to-travel-on-a-budget',
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container bg-white w-full py-16 px-5 lg:px-10 mx-auto text-center">
      <p className="text-orange-500 text-base font-medium mb-2">Travel Blog</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Latest Travel Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-green-600 font-medium hover:text-green-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
