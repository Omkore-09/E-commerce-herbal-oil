import React from 'react';
import ShoppingHeader from './Header';
import Footer from './Footer';

const productBenefits = [
  {
    title: 'Promotes Hair Growth',
    description: 'Herbal oils like rosemary and peppermint are known to stimulate hair follicles, promoting hair growth and preventing hair loss.',
  },
  {
    title: 'Reduces Dandruff',
    description: 'Oils such as tea tree and neem have antifungal properties that help reduce dandruff and soothe an itchy scalp.',
  },
  {
    title: 'Strengthens Hair',
    description: 'Herbal oils like coconut and argan oil are rich in vitamins and fatty acids that strengthen hair, making it less prone to breakage.',
  },
  {
    title: 'Improves Scalp Health',
    description: 'Oils such as lavender and chamomile help improve scalp health by reducing inflammation and promoting relaxation.',
  },
  {
    title: 'Natural Shine',
    description: 'Herbal oils add a natural shine to your hair, making it look healthy and vibrant without the use of synthetic products.',
  },
  {
    title: 'Moisturizes Hair',
    description: 'Oils like jojoba and almond oil provide deep hydration to your hair, keeping it moisturized and preventing dryness.',
  },
];

const ProductBenefits = () => {
  return (
    <section >
      <div className="py-12 px-4 bg-gray-50 mt-6">
        <ShoppingHeader />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Benefits of Using Herbal Oils</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default ProductBenefits;
