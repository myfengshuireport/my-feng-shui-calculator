import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Personal Element Calculator",
    description: "Discover your five elements based on birth date and time using traditional Chinese astrology",
    icon: "🧭"
  },
  {
    title: "Space Harmony Analysis", 
    description: "Get personalized recommendations for your home and office layout to maximize positive energy",
    icon: "🏠"
  },
  {
    title: "Color & Direction Guide",
    description: "Learn which colors and directions are most auspicious for your personal feng shui profile",
    icon: "🎨"
  },
  {
    title: "Lucky Numbers & Dates",
    description: "Find your most fortunate numbers and optimal dates for important decisions and events",
    icon: "🔢"
  },
  {
    title: "Compatibility Checker",
    description: "Analyze feng shui compatibility between people for relationships and business partnerships",
    icon: "💫"
  },
  {
    title: "Daily Feng Shui Tips",
    description: "Receive personalized daily guidance to maintain harmony and positive energy flow",
    icon: "📅"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ancient Wisdom, Modern Precision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive feng shui calculator combines traditional Chinese metaphysics 
            with cutting-edge algorithms to provide accurate, personalized insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-smooth cursor-pointer border-border/50 hover:border-accent/50"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;