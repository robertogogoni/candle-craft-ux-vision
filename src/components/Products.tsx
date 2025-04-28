
import { useState } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { products } from './products/productData';
import CategoryFilter from './products/CategoryFilter';
import ProductGrid from './products/ProductGrid';
import ProductActions from './products/ProductActions';

const Products = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section 
      id="collection" 
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12",
          isIntersecting ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark mb-4">
            Our Signature Collection
          </h2>
          <p className="text-gray-600">
            Each candle is handcrafted with premium ingredients, designed to create a perfect ambiance in your space
          </p>
        </div>
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          isIntersecting={isIntersecting}
        />
        
        <ProductGrid 
          products={filteredProducts}
          isIntersecting={isIntersecting}
        />
        
        <ProductActions isIntersecting={isIntersecting} />
      </div>
    </section>
  );
};

export default Products;
