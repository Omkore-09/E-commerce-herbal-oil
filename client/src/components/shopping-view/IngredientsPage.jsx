import React from 'react';
import RosemaryImage from '../../assets/rosemary.jpeg'; // Replace with actual image paths
import PeppermintImage from '../../assets/peppermint.jpeg';
import CoconutImage from '../../assets/coconut.jpeg';
import ArganImage from '../../assets/argan.jpeg';
import LavenderImage from '../../assets/lavender.jpeg';
import TeaTreeImage from '../../assets/tea-tree.jpeg';
import IngredientsBanner from '../../assets/slide3.jpg'; // Replace with actual image path
import ShoppingHeader from './Header';

const ingredients = [
  {
    name: 'Rosemary',
    description: 'Rosemary oil is known for its ability to stimulate hair growth and improve scalp health.',
    image: RosemaryImage,
  },
  {
    name: 'Peppermint',
    description: 'Peppermint oil invigorates the scalp, promoting hair growth and providing a cooling sensation.',
    image: PeppermintImage,
  },
  {
    name: 'Coconut',
    description: 'Coconut oil deeply moisturizes hair, preventing dryness and damage while adding shine.',
    image: CoconutImage,
  },
  {
    name: 'Argan',
    description: 'Argan oil is rich in vitamins and fatty acids, helping to nourish and strengthen hair.',
    image: ArganImage,
  },
  {
    name: 'Lavender',
    description: 'Lavender oil is known for its calming properties and helps improve scalp health.',
    image: LavenderImage,
  },
  {
    name: 'Tea Tree',
    description: 'Tea tree oil has antifungal properties that help keep the scalp clean and reduce dandruff.',
    image: TeaTreeImage,
  },
];

const IngredientsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mt-[4rem]">
        <ShoppingHeader />
      {/* Banner Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img 
          src={IngredientsBanner} 
          alt="Herbal Ingredients" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Herbal Oil Ingredients</h1>
        </div>
      </div>

      {/* Ingredients Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Key Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="font-bold text-xl mb-2">{ingredient.name}</h3>
                <p className="text-gray-600">{ingredient.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngredientsPage;
