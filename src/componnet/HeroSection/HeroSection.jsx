import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: 'https://img.lazcdn.com/us/domino/4e350b22-999f-40f3-b186-4d18de192e05_PK-1976-688.jpg_2200x2200q80.jpg',
    },
    {
      id: 2,
      image: 'https://img.lazcdn.com/us/domino/7738454e-55af-4c2a-8808-ed4bdd7fd16c_PK-1976-688.jpg_2200x2200q80.jpg',
    },
    {
      id: 3,
      image: 'https://img.lazcdn.com/us/domino/3a190557-27fd-4d9f-a0cc-4c51cda71160_PK-1976-688.jpg_2200x2200q80.jpg',
    },
    {
      id: 4,
      image: 'https://img.lazcdn.com/us/domino/1787bd76-4ee5-4c17-ba38-56b64ee7bc61_PK-1976-688.jpg_2200x2200q80.jpg',
    },
    {
      id: 5,
      image: 'https://img.lazcdn.com/us/domino/db8f39aa-542b-4b2b-92a3-cb8ab25f53c6_PK-1976-688.jpg_2200x2200q80.jpg',
    },
    {
      id: 6,
      image: 'https://img.lazcdn.com/us/domino/6fc85a7f-128f-414a-9249-7f5eae1c7252_PK-1976-688.jpg_2200x2200q80.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full   flex flex-col justify-center items-center m-2">
      {/* Image Container */}
      <div className="flex justify-center items-center w-full h-3/4 md:h-3/5 overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="object-cover w-full h-full opacity-80 border rounded-3xl"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center w-full px-4 md:px-8 mt-4">
        <button
          onClick={prevSlide}
          className="text-white text-xl sm:text-4xl relative -top-32 sm:-top-64 bg-gray-400 bg-opacity-50 p-2 sm:p-5 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-xl sm:text-4xl relative -top-32 sm:-top-64 bg-gray-400 bg-opacity-50 p-2 sm:p-5 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
