// src/components/Card.js
import React from 'react';

interface CardProps {

  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string; // Existing prop
  className?: string; // Add className prop
}

const Card: React.FC<CardProps> = ({

  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor, // This prop receives the full background class string e.g. "bg-gradient-to-r from-blue-500 to-green-500"
  className,       // This prop receives classes like "flex flex-col justify-between"
}) => {
  return (
    // Ensure backgroundColor is applied correctly and className from props is included.
    // The outer conditional `backgroundColor && (...)` means the card won't render if backgroundColor is not provided.
    backgroundColor && (
      <div className={`max-w-sm rounded overflow-hidden shadow-lg ${backgroundColor} ${className || ''}`}>

        <div className="px-6 py-4 flex-grow">
          {title && (
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#b3cfff] via-white to-[#b3cfff] bg-clip-text text-transparent leading-tight drop-shadow-lg">{title}</div>
          )}
          {description && (
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-automt-6 text-lg text-white/80 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        {buttonText && buttonLink && (
          <div className="px-6 pt-4 pb-2">
            <a
              href={buttonLink}
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              {buttonText}
            </a>
          </div>
        )}
        {/* You can also add tags or other elements here */}
        {/* Example:
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
      */}
      </div>)
  );
};

export default Card;
