
import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Interior Designer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "The Velas Lumiarò candles have become an essential part of my design process. The quality and attention to detail is unmatched, and my clients always ask where they can get them!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "I've tried many luxury candle brands, but Velas Lumiarò stands out for their incredible scent throw and long burn time. The Serenity Blue has become my evening ritual.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Wellness Coach",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "I recommend these candles to all my clients. The natural ingredients and calming scents make them perfect for creating a mindful space. Absolutely worth every penny!",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Boutique Owner",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "We've been stocking Velas Lumiarò in our shop for over a year now, and they're consistently our best-selling items. The packaging is beautiful and the quality speaks for itself.",
    rating: 4
  }
];

const Testimonials = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-b from-white to-blue-50"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16",
          isIntersecting ? "animate-fade-in" : "opacity-0"
        )}>
          <div className="inline-flex items-center space-x-2 bg-lumiaro-blue-light/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-lumiaro-blue-dark">What People Say</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark mb-4">
            Customer Experiences
          </h2>
          
          <p className="text-gray-600">
            Discover why our customers love Velas Lumiarò candles and how they've transformed their spaces and moments
          </p>
        </div>
        
        <div className="relative">
          <div 
            className={cn(
              "absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden md:block",
              isIntersecting ? "animate-fade-in" : "opacity-0"
            )}
          >
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-lumiaro-blue-light/10 transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-lumiaro-blue-dark" />
            </button>
          </div>
          
          <div 
            className={cn(
              "absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden md:block",
              isIntersecting ? "animate-fade-in" : "opacity-0"
            )}
          >
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-lumiaro-blue-light/10 transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-lumiaro-blue-dark" />
            </button>
          </div>
          
          <div 
            ref={sliderRef}
            className={cn(
              "flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory",
              isIntersecting ? "animate-fade-in" : "opacity-0"
            )}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-full max-w-md snap-start"
              >
                <div className="glass-card h-full flex flex-col p-8">
                  <Quote className="h-10 w-10 text-lumiaro-blue opacity-20 mb-4" />
                  
                  <p className="text-gray-700 flex-grow mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "fill-lumiaro-gold text-lumiaro-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-lumiaro-blue-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={cn(
          "mt-16 bg-gradient-to-r from-lumiaro-blue-light to-lumiaro-blue rounded-2xl overflow-hidden shadow-xl",
          isIntersecting ? "animate-fade-in [animation-delay:300ms]" : "opacity-0"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Join Our Community
              </h3>
              <p className="mb-6">
                Subscribe to our newsletter for exclusive offers, new product launches, and candle care tips
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-lumiaro-blue font-medium rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1592952014316-7e5c8f08c342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Candle arrangement"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
