import React, { useState, useEffect } from 'react';
import BannerOne from "../../assets/ll.jpg";
import BannerTwo from "../../assets/p4.jpg";
import BannerThree from "../../assets/s3.jpg";

const images = [
  BannerOne,
  BannerTwo,
  BannerThree  // Add more as needed
];

const FullWidthImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-screen overflow-hidden">
        <img src={currentImage} alt="Slide" className="w-full h-full object-contain" />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
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

export default FullWidthImageSlider;
