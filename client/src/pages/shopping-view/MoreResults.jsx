import React from 'react';
import Customer1 from '../../assets/ba1.jpg';
import Customer2 from '../../assets/ba6.jpg';
import Customer3 from '../../assets/ba3.jpg';
import Customer4 from '../../assets/ba4.jpg';
import Customer5 from '../../assets/ba5.jpg';
import Customer6 from '../../assets/ba7.jpg';
import Customer7 from '../../assets/ba8.jpg';
import Customer8 from '../../assets/ba9.jpg';

const images = [
  {
    src: Customer1,
    name: 'Customer 1',
    problem: ' ',
  },
  {
    src: Customer2,
    name: 'Customer 2',
    problem: ' ',
  },
  {
    src: Customer3,
    name: 'Customer 3',
    problem: ' ',
  },
  {
    src: Customer4,
    name: 'Customer 4',
    problem: ' ',
  },
  {
    src: Customer5,
    name: 'Customer 5',
    problem: ' ',
  },
  {
    src: Customer6,
    name: 'Customer 6',
    problem: ' ',
  },
  {
    src: Customer7,
    name: 'Customer 7',
    problem: ' ',
  },
  {
    src: Customer8,
    name: 'Customer 8',
    problem: ' ',
  },
];

const MoreResults = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center mt-[4rem] text-green-600">Customer Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((customer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center"
          >
            <img
              src={customer.src}
              alt={customer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{customer.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreResults;
