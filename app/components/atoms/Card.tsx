import React from 'react';
import Image from 'next/image'; 

interface CardProps {
  image: string;
  courseName: string;
  price: string;
  rating: number;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, courseName, price, rating, link }) => {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 6; i++) {
      const isYellow = i <= roundedRating;
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${isYellow ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full max-w-xs bg-white border border-orange-300 rounded-lg overflow-hidden transform transition-transform duration-300 hover:border-black hover:scale-105">
      <a href="#">
        <Image width={500} height={500} className="p-8 rounded-t-lg" src={image} alt="course image" />
      </a>
      <div className="px-5 pb-5">
        <a href={link} className="block">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">{courseName}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">{renderStars()}</div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">{price}</span>
          <a
            href={link}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
