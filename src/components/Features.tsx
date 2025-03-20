
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Feather, Flame, Leaf, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-lumiaro-blue" />,
    title: "Natural Ingredients",
    description: "Our candles are made from 100% soy wax, ensuring a clean, non-toxic burn that's better for you and the environment."
  },
  {
    icon: <Feather className="h-8 w-8 text-lumiaro-blue" />,
    title: "Handcrafted Quality",
    description: "Each candle is meticulously handcrafted in small batches to ensure the highest quality and attention to detail."
  },
  {
    icon: <Flame className="h-8 w-8 text-lumiaro-blue" />,
    title: "Long-Lasting Burn",
    description: "Enjoy up to 50 hours of burn time with our expertly designed candles that melt evenly and maintain their scent."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-lumiaro-blue" />,
    title: "Ethically Sourced",
    description: "We're committed to ethical sourcing practices and environmentally friendly production methods."
  }
];

const Features = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="features" 
      className="py-24 bg-white"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16",
          isIntersecting ? "animate-fade-in" : "opacity-0"
        )}>
          <div className="inline-flex items-center space-x-2 bg-lumiaro-blue-light/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-lumiaro-blue-dark">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark mb-4">
            Crafted with Passion &amp; Purpose
          </h2>
          
          <p className="text-gray-600">
            We believe that candles should enhance both your space and well-being. That's why we create products with intention and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-panel rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                isIntersecting ? `animate-fade-in [animation-delay:${index * 100}ms]` : "opacity-0"
              )}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lumiaro-blue-light/10 mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-serif font-medium text-lumiaro-blue-dark mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          isIntersecting ? "animate-fade-in [animation-delay:400ms]" : "opacity-0"
        )}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-lumiaro-blue-light/20 to-lumiaro-gold-light/20 blur-xl opacity-70 rounded-xl"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1636459821100-9e28fd5ae3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Candle making process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark">
              Our Commitment to Excellence
            </h2>
            
            <p className="text-gray-600">
              At Velas Lumiarò, we believe in creating more than just candles. Each product represents our dedication to craftsmanship, sustainability, and creating moments of tranquility in your daily life.
            </p>
            
            <ul className="space-y-3">
              {[
                "Premium botanical fragrances",
                "Eco-friendly packaging",
                "Rigorous quality testing",
                "Sustainable production methods"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="h-2 w-2 rounded-full bg-lumiaro-blue"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-lumiaro-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue-dark hover:shadow-lg"
            >
              Learn About Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
