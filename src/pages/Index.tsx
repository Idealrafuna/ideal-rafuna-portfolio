import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchFocusSection from "@/components/ResearchFocusSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import StartupSection from "@/components/StartupSection";
import DBFKosovoSection from "@/components/DBFKosovoSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchFocusSection />
        <SkillsSection />
        <ProjectsSection />
        <TeachingSection />
        <StartupSection />
        <DBFKosovoSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 Ideal Rafuna • Systems Engineering • Digital Twins • Learning Control</p>
          <p className="text-xs mt-2 opacity-80">University Lecturer & Lab Supervisor • Pursuing PhD opportunities • Fall 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
