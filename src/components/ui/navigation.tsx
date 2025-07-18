import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center glow-pulse">
              <span className="text-primary-foreground font-bold text-lg">風</span>
            </div>
            <span className="text-xl font-bold">FengShui Calculator</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-smooth">
              Calculator
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex">
              Log in
            </Button>
            <Button className="gradient-primary text-primary-foreground border-0 shadow-elegant hover:shadow-glow transition-smooth">
              Get started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;