
import React from 'react';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';
import { Product } from './types';

interface ProductGridProps {
  products: Product[];
  isIntersecting: boolean;
}

const ProductGrid = ({ products, isIntersecting }: ProductGridProps) => {
  return (
    <div className="relative">
      <div 
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          isIntersecting ? "stagger-animate in-view" : "stagger-animate"
        )}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
