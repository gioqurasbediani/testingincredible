import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { QuoteForm } from "@/components/QuoteForm";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <QuoteForm />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
