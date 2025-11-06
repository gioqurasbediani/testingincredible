import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Incredible service! My luxury sedan was transported from LA to New York with perfect care. The team kept me updated throughout and delivery was right on time.",
    },
    {
      name: "Michael Chen",
      location: "Austin, TX",
      rating: 5,
      text: "Best auto transport experience I've had. Professional drivers, transparent pricing, and my truck arrived in perfect condition. Highly recommend!",
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Used The Incredibles 5 Corp for my cross-country move. They made the process so easy and stress-free. Will definitely use them again!",
    },
    {
      name: "David Thompson",
      location: "Seattle, WA",
      rating: 5,
      text: "Outstanding service from start to finish. The real-time tracking gave me peace of mind, and the price was very competitive. Five stars!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`absolute inset-0 p-8 md:p-10 bg-card border-border transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0 z-10"
                    : index === (activeIndex - 1 + testimonials.length) % testimonials.length
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
