import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const education = [
    {
      degree: "M.S. Aerospace Engineering",
      institution: "University of Illinois at Urbana-Champaign (UIUC)",
      year: "2024",
      details: "Accelerated non-thesis program; focus on systems integration and technology management"
    },
    {
      degree: "B.S. Mechanical & Aerospace Engineering",
      institution: "Clarkson University",
      year: "2023",
      details: "Minor in Mathematics; Sigma Gamma Tau Honor Society"
    }
  ];

  const roles = [
    {
      icon: Briefcase,
      title: "Lecturer & Aerospace Lab Supervisor",
      organization: "UBT, Kosovo",
      description: "Leading advanced robotics courses, managing aerospace laboratory operations, and mentoring students in systems engineering research."
    },
    {
      icon: Award,
      title: "Founder - AlbaBridge Tech",
      organization: "BeAlbanian AR Platform",
      description: "Developing innovative augmented reality solutions for cultural education and language learning."
    },
    {
      icon: GraduationCap,
      title: "Founder & Team Lead",
      organization: "DBF Kosovo (AIAA Design-Build-Fly)",
      description: "Established the first AIAA DBF competition team in the Balkans, leading 15+ engineering students."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Systems engineer at the intersection of digital twins, control systems, and robotics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                  <h4 className="font-semibold text-lg text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-secondary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Roles */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              Current Roles
            </h3>
            <div className="space-y-6">
              {roles.map((role, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-muted p-3 rounded-lg">
                      <role.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground mb-1">
                        {role.title}
                      </h4>
                      <p className="text-secondary font-medium mb-2">
                        {role.organization}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* PhD Aspirations */}
        <Card className="p-8 shadow-soft bg-academic-highlight">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            PhD Aspirations
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            I am pursuing a <strong>PhD in Industrial Engineering & Operations Research (IE/OR)</strong> at the 
            <strong> University of Illinois Chicago (UIC)</strong> for <strong>Fall 2026</strong>. My research 
            interests lie at the intersection of digital twins, adaptive control systems, and intelligent 
            automation—applying operations research methodologies to complex robotic and UAV systems.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
