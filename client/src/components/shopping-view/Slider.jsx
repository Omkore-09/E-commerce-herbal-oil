import React, { useState, useEffect } from 'react';
import BannerOne from "../../assets/s2.jpg";
import BannerTwo from "../../assets/banner-3.webp";
import BannerThree from "../../assets/dumi.jpg";

const images = [
  BannerOne,
  BannerTwo,
  BannerThree
  // Add more as needed
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
    <div className="w-full h-auto ">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden p-2 mt-10">
        <img src={currentImage} alt="Slide" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullWidthImageSlider;
