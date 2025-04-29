
import { useEffect, useRef } from 'react';

interface FloatingFrame {
  top: string;
  left: string;
  width: string;
  height: string;
  borderRadius: string;
  borderColor: string;
  delay: number;
  duration: number;
  rotation: number;
}

const frames: FloatingFrame[] = [
  {
    top: '15%',
    left: '10%',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    borderColor: 'rgba(255, 100, 51, 0.4)', // More vibrant orange-red
    delay: 0,
    duration: 10, // Faster animation
    rotation: 10
  },
  {
    top: '30%',
    left: '85%',
    width: '120px',
    height: '120px',
    borderRadius: '12px',
    borderColor: 'rgba(30, 136, 255, 0.4)', // Brighter blue
    delay: 1,
    duration: 12,
    rotation: -8
  },
  {
    top: '70%',
    left: '5%',
    width: '180px',
    height: '100px',
    borderRadius: '16px',
    borderColor: 'rgba(30, 255, 136, 0.4)', // Bright green
    delay: 0.5,
    duration: 15,
    rotation: 5
  },
  {
    top: '85%',
    left: '75%',
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    borderColor: 'rgba(255, 50, 51, 0.4)', // Bright red
    delay: 1.5,
    duration: 12,
    rotation: -12
  },
  {
    top: '50%',
    left: '50%',
    width: '200px',
    height: '200px',
    borderRadius: '20px',
    borderColor: 'rgba(178, 73, 255, 0.4)', // Bright purple
    delay: 1,
    duration: 18,
    rotation: 15
  },
];

const FloatingFrames = () => {
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Set up initial positions and animations
    frameRefs.current.forEach((frame, index) => {
      if (!frame) return;
      
      const { delay, duration, rotation } = frames[index];
      
      // Apply initial styles
      frame.style.opacity = '0';
      frame.style.transform = `rotate(${rotation}deg)`;
      
      // Create animation with more dramatic movements
      setTimeout(() => {
        frame.style.transition = `opacity 1s ease-out, transform ${duration}s ease-in-out`;
        frame.style.opacity = '1';
        
        // Start the floating animation with more noticeable movement
        let isAlternating = true;
        
        const animateFrame = () => {
          if (!frame) return;
          
          const translateX = isAlternating ? '30px' : '-30px'; // More dramatic movement
          const translateY = isAlternating ? '-25px' : '25px'; // More dramatic movement
          const newRotation = isAlternating ? rotation * 1.5 : -rotation * 1.5; // More dramatic rotation
          
          frame.style.transform = `translate(${translateX}, ${translateY}) rotate(${newRotation}deg)`;
          isAlternating = !isAlternating;
        };
        
        // Run animation initially and then set interval
        animateFrame();
        setInterval(animateFrame, duration * 1000);
      }, delay * 1000);
    });
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {frames.map((frame, index) => (
        <div
          key={index}
          ref={el => frameRefs.current[index] = el}
          className="absolute border-4" // Thicker border for visibility
          style={{
            top: frame.top,
            left: frame.left,
            width: frame.width,
            height: frame.height,
            borderRadius: frame.borderRadius,
            borderColor: frame.borderColor,
            opacity: 0,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' // Added glow effect
          }}
        />
      ))}
    </div>
  );
};

export default FloatingFrames;
