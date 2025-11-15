import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-systems.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Systems Engineering" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Ideal Rafuna
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
          Systems Engineering • Digital Twins • Learning Control • UAV/Robotics
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          I build digital-twin systems, adaptive/learning-based control algorithms, and intelligent 
          sensing pipelines for UAVs and robotics. I lead the Aerospace Laboratory and co-teach advanced 
          robotics courses at UBT in Kosovo, while founding technology initiatives including DBF Kosovo 
          and the BeAlbanian AR platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            onClick={() => window.open('/Ideal_Rafuna_CV.pdf', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download CV
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg"
            onClick={() => window.open('https://github.com/Idealrafuna', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            onClick={() => window.open('https://linkedin.com/in/idealrafuna', '_blank')}
          >
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
