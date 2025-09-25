import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <TeachingSection />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2024 Ideal Rafuna. Built with passion for systems engineering and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;