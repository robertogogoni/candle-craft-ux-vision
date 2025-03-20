
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Classic Collection", href: "#" },
        { name: "Signature Series", href: "#" },
        { name: "Limited Editions", href: "#" },
        { name: "Gift Sets", href: "#" },
        { name: "Accessories", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "FAQs", href: "#" },
        { name: "Shipping Policy", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];
  
  return (
    <footer 
      className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-10"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16",
            isIntersecting ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/83cde5b6-444d-48f5-b961-80a67379ff82.png" 
                alt="Velas Lumiarò Logo" 
                className="h-14"
              />
            </a>
            
            <p className="text-gray-600 mb-6 max-w-md">
              Velas Lumiarò crafts premium candles designed to elevate your space and create moments of tranquility and beauty in your daily life.
            </p>
            
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="p-2 rounded-full bg-lumiaro-blue-light/10 hover:bg-lumiaro-blue-light/20 transition-colors duration-300"
                >
                  <img 
                    src={`https://simpleicons.org/icons/${social}.svg`} 
                    alt={social}
                    className="h-5 w-5 opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-serif font-medium text-lg text-lumiaro-blue-dark mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-lumiaro-blue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div 
          className={cn(
            "pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm",
            isIntersecting ? "animate-fade-in [animation-delay:200ms]" : "opacity-0"
          )}
        >
          <p>&copy; 2023 Velas Lumiarò. All rights reserved.</p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <p>Made with</p>
            <Heart className="h-4 w-4 mx-1 text-lumiaro-blue fill-lumiaro-blue" />
            <p>for elegant spaces</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
