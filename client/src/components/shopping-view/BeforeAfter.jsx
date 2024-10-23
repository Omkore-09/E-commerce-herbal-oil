import React, { useState, useEffect } from 'react';

import Customer1 from '../../assets/ba1.jpg'
import Customer2 from '../../assets/ba6.jpg'
import Customer3 from '../../assets/ba3.jpg'
import Customer4 from '../../assets/ba4.jpg'
import Customer5 from '../../assets/ba5.jpg'
import Customer6 from '../../assets/ba7.jpg'
import Customer7 from '../../assets/ba8.jpg'
import Customer8 from '../../assets/ba9.jpg'

const images = [
  {
    src: Customer1,
    name: 'Customer 1',
    problem: ' '
  },
  {
    src: Customer2,
    name: 'Customer 2',
    problem: ' '
  },
  {
    src: Customer3,
    name: 'Customer 3',
    problem: ' '
  },
  {
    src: Customer4,
    name: 'Customer 4',
    problem: ' '
  },
  {
    src: Customer5,
    name: 'Customer 5',
    problem: ' '
  },
  {
    src: Customer6,
    name: 'Customer 6',
    problem: ' '
  },
  {
    src: Customer7,
    name: 'Customer 7',
    problem: ' '
  },
  {
    src: Customer8,
    name: 'Customer 8',
    problem: ' '
  },
  
];

const BeforeAfterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { src, name, problem } = images[currentIndex];

  return (
    <div className="flex flex-col items-center mt-7">
        <h2 className="text-4xl font-bold text-center mb-8">
            {" "}
            Before and after using Adivasi Hair oil{" "}
          </h2>
      <div className="relative w-full max-w-3xl h-70  overflow-hidden rounded-lg shadow-lg">
        <img src={src} alt={`${name} - ${problem}`} className="w-full h-full object-cover px-2" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2">{problem}</p>
      </div>
      <div className="flex mt-4 space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
