
import React, { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Product } from './types';

const ProductCard = ({ product }: { product: Product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Modern parallax effect on mouse move
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the card
      const y = e.clientY - rect.top; // y position within the card
      
      // Calculate rotation based on mouse position
      const xRotation = ((y - rect.height / 2) / rect.height) * 10;
      const yRotation = ((x - rect.width / 2) / rect.width) * -10;
      
      // Apply transformations
      card.style.transition = 'transform 0.1s ease-out';
      card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
      
      // Add subtle shimmer based on angle
      const gradient = `linear-gradient(${Math.atan2(y, x) * (180 / Math.PI)}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)`;
      card.style.backgroundImage = gradient;
    };
    
    const handleMouseLeave = () => {
      if (!card) return;
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.backgroundImage = 'none';
      setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className="glass-card group overflow-hidden transition-all duration-300 hover:shadow-xl relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Decorative frame shape */}
      <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-lumiaro-gold/30 rounded-tr-lg transform transition-all duration-500 group-hover:scale-110"></div>
      <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-lumiaro-blue/30 rounded-bl-lg transform transition-all duration-500 group-hover:scale-110"></div>
      
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
        
        {/* Progressive border reveal on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-lumiaro-blue to-lumiaro-gold group-hover:w-full transition-all duration-700"></div>
          <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-lumiaro-gold to-lumiaro-blue-light group-hover:h-full transition-all duration-700 delay-100"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-lumiaro-blue-light to-lumiaro-gold-light group-hover:w-full transition-all duration-700 delay-200"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-lumiaro-gold-light to-lumiaro-blue group-hover:h-full transition-all duration-700 delay-300"></div>
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
