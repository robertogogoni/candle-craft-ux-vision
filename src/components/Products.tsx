
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/lib/animations';
import { ChevronLeft, ChevronRight, Star, Gallery } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Serenity Blue",
    description: "A calming blend of lavender and chamomile",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1608181831718-17161e5189bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    category: "Relaxation"
  },
  {
    id: 2,
    name: "Golden Amber",
    description: "Warm amber and vanilla with woody undertones",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1646697106915-78509afdc764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4,
    category: "Luxury"
  },
  {
    id: 3,
    name: "Ocean Breeze",
    description: "Fresh sea salt and coconut essence",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1636459821103-0679c44ed7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    category: "Fresh"
  },
  {
    id: 4,
    name: "Midnight Rose",
    description: "Elegant rose and patchouli blend",
    price: "$26.99",
    image: "https://images.unsplash.com/photo-1605651202774-7d9d214ea826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4,
    category: "Floral"
  },
  {
    id: 5,
    name: "Citrus Sunshine",
    description: "Vibrant bergamot and lemon zest",
    price: "$23.99",
    image: "https://images.unsplash.com/photo-1632845514151-1d78e46f5a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    category: "Energizing"
  },
  {
    id: 6,
    name: "Nordic Pine",
    description: "Crisp pine and cedar wood notes",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1607644158449-c34e6b978f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4,
    category: "Woodland"
  }
];

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

const Products = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
        
        <div className="relative">
          <div 
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              isIntersecting ? "stagger-animate in-view" : "stagger-animate"
            )}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
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
            <Gallery className="mr-2 h-5 w-5" />
            Explore AI-Generated Imagery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
