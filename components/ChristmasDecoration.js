'use client'
import React, { useEffect, useRef } from 'react';

const ChristmasDecoration = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let snowflakes = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Snowflake class
    class Snowflake {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
      }
      
      update() {
        this.y += this.speed;
        this.x += this.wind;
        
        if (this.y > canvas.height) {
          this.reset();
          this.y = -10;
        }
        
        if (this.x > canvas.width + 10) {
          this.x = -10;
        } else if (this.x < -10) {
          this.x = canvas.width + 10;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    // Create snowflakes based on screen size
    const snowflakeCount = window.innerWidth < 768 ? 50 : 100;
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(new Snowflake());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <>
      {/* Snowfall Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />
      
      {/* Bottom Decorations */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 10 }}>
        {/* Christmas Tree - Left Bottom */}
        <div className="absolute -bottom-14 left-4 md:left-8">
          <svg
            viewBox="0 0 120 160"
            className="w-20 h-28 md:w-32 md:h-40 lg:w-40 lg:h-52"
            fill="none"
          >
            {/* Tree layers */}
            <path d="M60 20 L40 50 L50 50 L35 75 L45 75 L30 100 L90 100 L75 75 L85 75 L70 50 L80 50 Z" fill="#2D5016"/>
            <path d="M60 20 L45 45 L52 45 L40 67 L48 67 L35 90 L85 90 L72 67 L80 67 L68 45 L75 45 Z" fill="#3A6B1F"/>
            {/* Ornaments */}
            <circle cx="50" cy="60" r="3" fill="#DC2626"/>
            <circle cx="70" cy="65" r="3" fill="#EAB308"/>
            <circle cx="55" cy="80" r="3" fill="#DC2626"/>
            <circle cx="65" cy="85" r="3" fill="#3B82F6"/>
            <circle cx="45" cy="90" r="3" fill="#EAB308"/>
            {/* Star on top */}
            <path d="M60 10 L62 18 L70 18 L64 23 L66 31 L60 26 L54 31 L56 23 L50 18 L58 18 Z" fill="#FBBF24"/>
            {/* Trunk */}
            <rect x="52" y="100" width="16" height="20" fill="#6B4423" rx="2"/>
            {/* Snow on tree */}
            <ellipse cx="60" cy="50" rx="20" ry="3" fill="white" opacity="0.8"/>
            <ellipse cx="60" cy="75" rx="25" ry="3" fill="white" opacity="0.8"/>
            <ellipse cx="60" cy="100" rx="30" ry="3" fill="white" opacity="0.9"/>
          </svg>
        </div>
        
        {/* Gift Boxes and Snowman - Right Bottom */}
        <div className="absolute bottom-0 right-2 md:right-8 flex items-end  ">
          {/* Gift Box 1 */}
          <svg
            viewBox="0 0 60 70"
            className="w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24"
            fill="none"
          >
            <rect x="10" y="25" width="40" height="40" fill="#DC2626" rx="2"/>
            <rect x="10" y="20" width="40" height="8" fill="#EAB308" rx="1"/>
            <rect x="28" y="20" width="4" height="45" fill="#FBBF24"/>
            <path d="M30 20 Q25 15 20 18 Q25 21 30 20 Z" fill="#FBBF24"/>
            <path d="M30 20 Q35 15 40 18 Q35 21 30 20 Z" fill="#FBBF24"/>
            {/* Shadow */}
            <ellipse cx="30" cy="65" rx="20" ry="3" fill="black" opacity="0.2"/>
          </svg>
          
          {/* Snowman */}
          <svg
            viewBox="0 0 80 120"
            className="w-16 h-24 md:w-20 md:h-32 lg:w-24 lg:h-36"
            fill="none"
          >
            {/* Bottom snowball */}
            <circle cx="40" cy="95" r="22" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
            {/* Middle snowball */}
            <circle cx="40" cy="65" r="17" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
            {/* Top snowball (head) */}
            <circle cx="40" cy="35" r="13" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
            {/* Hat */}
            <rect x="30" y="20" width="20" height="8" fill="#1F2937" rx="1"/>
            <rect x="33" y="15" width="14" height="6" fill="#1F2937" rx="1"/>
            {/* Eyes */}
            <circle cx="36" cy="33" r="1.5" fill="#1F2937"/>
            <circle cx="44" cy="33" r="1.5" fill="#1F2937"/>
            {/* Carrot nose */}
            <path d="M40 36 L48 37 L40 38 Z" fill="#F97316"/>
            {/* Smile */}
            <path d="M36 40 Q40 42 44 40" stroke="#1F2937" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            {/* Buttons */}
            <circle cx="40" cy="60" r="2" fill="#1F2937"/>
            <circle cx="40" cy="68" r="2" fill="#1F2937"/>
            <circle cx="40" cy="90" r="2" fill="#1F2937"/>
            {/* Scarf */}
            <rect x="32" y="46" width="16" height="4" fill="#DC2626" rx="1"/>
            <rect x="44" y="48" width="8" height="12" fill="#DC2626" rx="1"/>
            {/* Arms (sticks) */}
            <line x1="23" y1="60" x2="15" y2="55" stroke="#6B4423" strokeWidth="2" strokeLinecap="round"/>
            <line x1="57" y1="60" x2="65" y2="55" stroke="#6B4423" strokeWidth="2" strokeLinecap="round"/>
            <line x1="15" y1="55" x2="12" y2="52" stroke="#6B4423" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="65" y1="55" x2="68" y2="52" stroke="#6B4423" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Shadow */}
            <ellipse cx="40" cy="117" rx="25" ry="3" fill="black" opacity="0.2"/>
          </svg>
          
          {/* Gift Box 2 */}
          <svg
            viewBox="0 0 60 70"
            className="w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24"
            fill="none"
          >
            <rect x="10" y="25" width="40" height="40" fill="#3B82F6" rx="2"/>
            <rect x="10" y="20" width="40" height="8" fill="#10B981" rx="1"/>
            <rect x="28" y="20" width="4" height="45" fill="#34D399"/>
            <path d="M30 20 Q25 15 20 18 Q25 21 30 20 Z" fill="#34D399"/>
            <path d="M30 20 Q35 15 40 18 Q35 21 30 20 Z" fill="#34D399"/>
            {/* Shadow */}
            <ellipse cx="30" cy="65" rx="20" ry="3" fill="black" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </>
  );
};
export default ChristmasDecoration;