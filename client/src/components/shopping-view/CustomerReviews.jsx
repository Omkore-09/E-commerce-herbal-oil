import React from 'react';

const reviews = [
  { name: 'Customer A', review: 'Great product! I found it very useful and would highly recommend it to others.', rating: 5 },
  { name: 'Customer B', review: 'Loved it! The quality exceeded my expectations. Will definitely purchase again.', rating: 4 },
  { name: 'Customer C', review: 'Would buy again. The features are amazing and it fits perfectly into my daily routine.', rating: 5 },
];

const ReviewCard = ({ name, review, rating }) => (
  <div className="p-6 bg-white w-[400px] h-[300px] text-center rounded shadow-xl m-4 flex flex-col items-center justify-center">
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="mt-4 font-medium text-lg">{review}</p>
    <div className="flex mt-4">
      {Array.from({ length: rating }, (_, i) => (
        <span key={i} className="text-yellow-500 text-xl">★</span>
      ))}
    </div>
  </div>
);

const ReviewSection = () => (
  <div className="flex flex-wrap justify-center">
    {reviews.map((rev, index) => (
      <ReviewCard key={index} {...rev} />
    ))}
  </div>
);

export default ReviewSection;
