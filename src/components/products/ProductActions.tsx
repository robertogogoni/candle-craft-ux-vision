
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ImageIcon } from 'lucide-react';

interface ProductActionsProps {
  isIntersecting: boolean;
}

const ProductActions = ({ isIntersecting }: ProductActionsProps) => {
  return (
    <div className={cn(
      "flex justify-center mt-12 gap-4",
      isIntersecting ? "animate-fade-in" : "opacity-0"
    )}>
      <a 
        href="#" 
        className="inline-flex items-center justify-center px-6 py-3 border border-lumiaro-blue text-lumiaro-blue font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue hover:text-white hover:shadow-md"
      >
        View All Products
      </a>
      
      <Link 
        to="/generated-images" 
        className="inline-flex items-center justify-center px-6 py-3 bg-lumiaro-blue-light/10 text-lumiaro-blue-dark font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue-light/20"
      >
        <ImageIcon className="mr-2 h-5 w-5" />
        Explore AI-Generated Imagery
      </Link>
    </div>
  );
};

export default ProductActions;
