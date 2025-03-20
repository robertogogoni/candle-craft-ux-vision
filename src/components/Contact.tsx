
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="contact" 
      className="py-24 bg-white"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16",
          isIntersecting ? "animate-fade-in" : "opacity-0"
        )}>
          <div className="inline-flex items-center space-x-2 bg-lumiaro-blue-light/10 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-lumiaro-blue-dark">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lumiaro-blue-dark mb-4">
            Contact Us
          </h2>
          
          <p className="text-gray-600">
            Have questions about our products or want to place a custom order? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={cn(
              "bg-gradient-to-br from-lumiaro-blue-light/10 to-lumiaro-gold-light/10 rounded-2xl p-8 md:p-10",
              isIntersecting ? "animate-fade-in-left" : "opacity-0"
            )}
          >
            <div className="space-y-6 md:pr-12">
              <h3 className="text-2xl font-serif font-medium text-lumiaro-blue-dark mb-6">
                We're Here For You
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-sm">
                    <MapPin className="h-5 w-5 text-lumiaro-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lumiaro-blue-dark mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Candle Lane, Luminous City, LC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-sm">
                    <Mail className="h-5 w-5 text-lumiaro-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lumiaro-blue-dark mb-1">Email Us</h4>
                    <p className="text-gray-600">hello@velaslumiaro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-sm">
                    <Phone className="h-5 w-5 text-lumiaro-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lumiaro-blue-dark mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-lumiaro-blue-dark mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="p-2 bg-white rounded-full shadow-sm hover:bg-lumiaro-blue-light/10 transition-colors duration-300"
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
            </div>
          </div>
          
          <div 
            className={cn(
              "glass-card p-8 md:p-10",
              isIntersecting ? "animate-fade-in-right" : "opacity-0"
            )}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-lumiaro-blue-dark mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lumiaro-blue/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-lumiaro-blue-dark mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lumiaro-blue/30"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-lumiaro-blue-dark mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  id="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lumiaro-blue/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lumiaro-blue-dark mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lumiaro-blue/30"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-lumiaro-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-lumiaro-blue-dark hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
