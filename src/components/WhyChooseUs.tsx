import { useEffect, useRef, useState } from "react";
import { Clock, Shield, MapPin, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards in sequence
            [0, 1, 2, 3].forEach((index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "On-time pickup and delivery with real-time tracking throughout the journey.",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-primary/30",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage protects your vehicle every mile of the way.",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-primary/30",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Know exactly where your vehicle is at all times with our advanced GPS tracking.",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-primary/30",
    },
    {
      icon: Users,
      title: "Experienced Drivers",
      description: "Professional, certified drivers with years of experience in vehicle transport.",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary",
      shadowColor: "hover:shadow-primary/30",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float-slow" style={{ background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #bbf77f 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-primary glow">Why Choose Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium auto transport services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className={`${feature.bgColor} backdrop-blur-sm border-2 ${feature.borderColor} ${feature.hoverBorder} rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl ${feature.shadowColor} hover:-translate-y-3 relative overflow-hidden`}>
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className={`relative text-primary w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${feature.bgColor} shadow-lg border border-primary/20`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="relative text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-all">
                    {feature.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Corner Element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 text-primary opacity-5 group-hover:opacity-10 transition-opacity`}>
                    <Icon className="w-full h-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
