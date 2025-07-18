const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">風</span>
              </div>
              <span className="text-xl font-bold">FengShui Calculator</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Bringing ancient Chinese wisdom to modern life through precise calculations and personalized insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Element Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Space Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Compatibility Check</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Daily Tips</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Feng Shui Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FengShui Calculator. All rights reserved. Built with ancient wisdom and modern technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;