
import React from 'react';
import { Star } from 'lucide-react';
import { Product } from './types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="glass-card group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-lumiaro-blue-dark">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < product.rating ? "fill-lumiaro-gold text-lumiaro-gold" : "text-gray-300"}
            />
          ))}
        </div>
        
        <h3 className="text-lg font-serif font-medium text-lumiaro-blue-dark group-hover:text-lumiaro-blue transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mt-1 mb-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-lumiaro-blue-dark">
            {product.price}
          </span>
          
          <button className="text-sm font-medium text-lumiaro-blue hover:text-lumiaro-blue-dark transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
