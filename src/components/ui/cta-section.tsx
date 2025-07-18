import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands who have discovered the power of feng shui. 
            Start your journey to harmony and prosperity today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gradient-secondary text-secondary-foreground px-10 py-4 text-lg font-semibold shadow-gold hover:shadow-glow transition-bounce border-0"
            >
              Start Free Calculation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg transition-smooth"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Years of Wisdom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;