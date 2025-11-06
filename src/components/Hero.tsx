import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'blur(2px) brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* 3D Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)',
            animationDelay: '1s',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)',
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/30 rounded-lg animate-rotate-3d"
          style={{
            transform: `perspective(1000px) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.2}deg)`,
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse-glow"
          style={{
            transform: `perspective(1000px) rotateZ(${scrollY * 0.15}deg)`,
          }}
        />
      </div>

      {/* Content */}
      <div 
        className="container relative z-10 mx-auto px-4 py-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-foreground drop-shadow-2xl">Nationwide Auto Transport</span>
              <span className="block text-primary glow mt-2">You Can Trust</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-semibold">⚡ Same-Day Pickup</span>
              </div>
              <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-semibold">🛡️ Fully Insured</span>
              </div>
              <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-semibold">📍 GPS Tracking</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
            Fast, reliable, and affordable car shipping with <span className="text-primary font-semibold">The Incredibles 5 Corp</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToQuote}
              className="relative group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span className="relative flex items-center gap-2">
                Get Instant Quote
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/20 backdrop-blur-sm border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-primary text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Vehicles Shipped</div>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-[5]">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center p-2 shadow-lg shadow-primary/50">
          <div className="w-2 h-4 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
