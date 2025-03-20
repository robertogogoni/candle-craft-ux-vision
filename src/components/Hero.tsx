
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ArrowDown, Flame } from 'lucide-react';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-lumiaro-gold-light/20 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-lumiaro-blue-light/20 rounded-full blur-2xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "order-2 lg:order-1 space-y-6 max-w-xl",
            isIntersecting ? "animate-fade-in-left" : "opacity-0"
          )}>
            <div className="inline-flex items-center space-x-2 bg-lumiaro-blue-light/10 px-3 py-1 rounded-full">
              <Flame size={16} className="text-lumiaro-gold" />
              <span className="text-sm font-medium text-lumiaro-blue-dark">Handcrafted with passion</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-lumiaro-blue-dark">
              Illuminate Your Space With <span className="text-lumiaro-blue">Elegance</span>
            </h1>
            
            <p className="text-lg text-gray-600">
              Discover our collection of premium handcrafted candles designed to transform any space into a sanctuary of calm and beauty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#collection" 
                className="inline-flex items-center justify-center px-6 py-3 bg-lumiaro-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue-dark hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Collection
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-6 py-3 border border-lumiaro-blue text-lumiaro-blue-dark font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue-light/10"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className={cn(
            "order-1 lg:order-2 relative",
            isIntersecting ? "animate-fade-in-right" : "opacity-0"
          )}>
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-lumiaro-gold-light/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 w-full h-full bg-[url('https://images.unsplash.com/photo-1603006905393-c279c4e5d65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#collection" className="flex flex-col items-center text-lumiaro-blue-dark">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
