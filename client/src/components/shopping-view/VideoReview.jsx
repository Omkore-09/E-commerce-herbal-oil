import React, { useState, useEffect } from 'react';

const videos = [
  {
    src: 'path/to/video1.mp4',
    name: 'Customer A',
    problem: 'Problem A'
  },
  {
    src: 'path/to/video2.mp4',
    name: 'Customer B',
    problem: 'Problem B'
  },
  {
    src: 'path/to/video3.mp4',
    name: 'Customer C',
    problem: 'Problem C'
  },
  // Add more as needed
];

const CustomerVideoReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // Change video every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { src, name, problem } = videos[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl h-64 overflow-hidden rounded-lg shadow-lg">
        <video src={src} className="w-full h-full object-cover" controls />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2">{problem}</p>
      </div>
      <div className="flex mt-4 space-x-4">
        {videos.map((_, index) => (
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

export default CustomerVideoReview;
