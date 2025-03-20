
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initial animations
    const handleInitialAnimations = () => {
      document.body.classList.add('loaded');
    };
    
    window.addEventListener('load', handleInitialAnimations);
    
    return () => {
      window.removeEventListener('load', handleInitialAnimations);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
