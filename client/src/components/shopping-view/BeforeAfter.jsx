import React, { useState, useEffect } from 'react';
import RosemaryImage from '../../assets/befor.jpg'; // Replace with actual image paths
import PeppermintImage from '../../assets/ba4.jpg';
import CoconutImage from '../../assets/ba3.jpg';

const images = [
  {
    src: RosemaryImage,
    name: 'Customer A',
    problem: 'Problem A'
  },
  {
    src: CoconutImage,
    name: 'Customer B',
    problem: 'Problem B'
  },
  {
    src: PeppermintImage,
    name: 'Customer C',
    problem: 'Problem C'
  },
  // Add more as needed
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
