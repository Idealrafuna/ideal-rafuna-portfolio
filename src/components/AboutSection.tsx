import { GraduationCap, Briefcase, Award, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const AboutSection = () => {
  const education = [
    {
      degree: "Master of Science: Aerospace Engineering",
      institution: "University of Illinois Urbana-Champaign (UIUC)",
      year: "2024",
      details: "Accelerated non-thesis program focused on systems integration and technology management"
    },
    {
      degree: "Bachelor of Science: Mechanical and Aerospace Engineering, Minor in Mathematics",
      institution: "Clarkson University",
      year: "2023",
      details: "Inducted into Sigma Gamma Tau Aerospace Honor Society"
    }
  ];

  const roles = [
    {
      icon: Briefcase,
      title: "Lecturer, Teaching Assistant & Aerospace Laboratory Supervisor",
      organization: "University for Business and Technology, Pristina, Kosovo",
      period: "December 2024 - Current",
      description: "Design and deliver lectures in Computer Science I and Introduction to Mechatronics. Develop lab modules and supervise projects as TA for Embedded Systems I. Supervise the Aerospace Laboratory, a specialized division within the Mechatronics Lab, focusing on UAV design, systems integration, and control research. Founded DBF Kosovo, pioneering the first AIAA Design-Build-Fly team in the Balkans. Mentor interdisciplinary research teams in robotics, automation, and control systems."
    },
    {
      icon: Award,
      title: "Founder & Lead Developer",
      organization: "AlbaBridge Tech - BeAlbanian AR Platform",
      period: "January 2025 - Current",
      description: "Founded AlbaBridge Tech, an education technology startup developing BeAlbanian, a gamified AR platform for learning Albanian language and culture. Designed and implemented an ecosystem integrating augmented reality (Unity platform), gamification, and speech recognition to promote cultural learning and preservation. Built using React, Unity, Supabase, PostgreSQL, and Google Cloud Speech-to-Text for real-time interactivity and data-driven learning analytics."
    },
    {
      icon: GraduationCap,
      title: "TelloTwin – UAV Digital Twin System",
      organization: "UBT Labs, Pristina",
      period: "September 2025 - Current",
      description: "Developed real-time telemetry and 3D visualization system for DJI Tello drones using FastAPI, React, and Three.js at 20 Hz data streaming rate. Engineered robust architecture to enhance system performance and reliability. Conducted thorough testing to validate functionality and optimize user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Systems engineer at the intersection of digital twins, control systems, and robotics
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.2}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
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
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              Current Roles
            </h3>
            <div className="space-y-6">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-muted p-3 rounded-lg">
                        <role.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-1">
                          {role.title}
                        </h4>
                        <p className="text-secondary font-medium mb-1">
                          {role.organization}
                        </p>
                        {role.period && (
                          <p className="text-sm text-muted-foreground mb-2 italic">
                            {role.period}
                          </p>
                        )}
                        <p className="text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <Card className="p-8 shadow-soft bg-academic-highlight">
            <div className="flex items-center justify-center mb-4">
              <ArrowRight className="h-6 w-6 text-primary mr-2" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Research Directions
              </h3>
            </div>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-4">
              Pursuing advanced research opportunities in <strong>Industrial Engineering & Operations Research</strong>, 
              with focus on digital twins, adaptive control, and intelligent automation for complex systems.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="border-primary text-primary">PhD Applications</Badge>
              <Badge variant="outline" className="border-secondary text-secondary">Fall 2026</Badge>
              <Badge variant="outline" className="border-primary text-primary">UIC IE/OR</Badge>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
