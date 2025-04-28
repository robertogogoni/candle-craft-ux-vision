
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isIntersecting: boolean;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory, isIntersecting }: CategoryFilterProps) => {
  return (
    <div className={cn(
      "flex flex-wrap justify-center gap-3 mb-10",
      isIntersecting ? "animate-fade-in" : "opacity-0"
    )}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category
              ? "bg-lumiaro-blue text-white shadow-md"
              : "bg-white/80 backdrop-blur-sm text-lumiaro-blue-dark hover:bg-lumiaro-blue-light/20"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
