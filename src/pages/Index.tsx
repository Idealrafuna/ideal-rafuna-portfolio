import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EmployerValueSection from "@/components/EmployerValueSection";
import EngineeringFocusSection from "@/components/EngineeringFocusSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <EmployerValueSection />
        <EngineeringFocusSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <PublicationsSection />
        <ContactSection />
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2026 Ideal Rafuna • Systems Engineering • Digital Twins • Robotics • Simulation
          </p>
          <p className="text-xs mt-2 opacity-80">
            UK work authorization: HPI visa • No employer sponsorship required
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
