import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-team.jpg";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (sectionRef.current && !isMobile) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        setScrollY(window.scrollY - sectionTop + window.innerHeight);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)',
            transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div 
            className={`space-y-6 order-2 md:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-primary">Who We Are</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                At <span className="text-primary font-semibold">The Incredibles 5 Corp</span>, 
                we specialize in safe, on-time auto transport across the U.S. Whether it's your 
                daily car, luxury vehicle, or dealership delivery, our team ensures a seamless 
                experience from pickup to drop-off.
              </p>
              <p>
                With years of experience and a commitment to excellence, we've built our reputation 
                on trust, reliability, and customer satisfaction. Every vehicle is treated with the 
                care it deserves, protected by comprehensive insurance and handled by experienced professionals.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground mt-2">Vehicles Shipped</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-2">On-Time Delivery</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-2">States Covered</div>
              </div>
            </div>
          </div>

          {/* Image with 3D Effect */}
          <div 
            className={`order-1 md:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-primary/20 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-2xl" />
              <img
                src={aboutImage}
                alt="The Incredibles 5 Corp team and transport operations"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 border-2 border-primary/20"
              />
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-primary p-6 rounded-2xl shadow-2xl shadow-primary/50 animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">15+</div>
                  <div className="text-xs text-primary-foreground/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
