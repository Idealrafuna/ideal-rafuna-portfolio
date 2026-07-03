import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, ChartLine, FlaskConical, GraduationCap, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    icon: GraduationCap,
    organization: "University for Business and Technology",
    role: "Lecturer & Aerospace Laboratory Supervisor",
    period: "Oct 2025 - Present",
    metrics: ["10 lecture/lab contact hours per week", "70+ students", "7 technical course areas"],
    description:
      "Deliver engineering instruction and laboratory supervision across Computer Science I/II, Electrical Science, Mechatronics, Mobile Robots, Autonomous Robotics, and CAD. Supervise aerospace lab activities supporting UAV design, robotics experimentation, embedded systems, mechatronics, and control-focused projects.",
    capabilities: [
      "Systems integration",
      "Lab leadership",
      "UAV systems",
      "Robotics",
      "Embedded systems",
      "CAD",
      "Technical mentoring",
    ],
  },
  {
    icon: Rocket,
    organization: "UBT Labs",
    role: "TelloTwin - UAV Digital Twin System",
    period: "Sep 2025 - Present",
    metrics: ["3-component architecture", "10 Hz telemetry", "12 REST endpoints", "1 WebSocket stream"],
    description:
      "Designed and integrated real-time UAV digital twin architecture for telemetry acquisition, backend APIs, and browser-based 3D visualization.",
    capabilities: ["Digital twins", "FastAPI", "React", "Three.js", "Telemetry", "WebSocket"],
  },
  {
    icon: Building2,
    organization: "AlbaBridge Tech",
    role: "Lead Developer / Part-Time Product Engineering Project",
    period: "Jan 2025 - Present",
    metrics: ["iOS + Android + Web + Backend", "Real-time services", "Progress tracking"],
    description:
      "Built cross-platform learning ecosystem with real-time multiplayer, gamified learning, pronunciation, cultural content, backend APIs, and progress-tracking data flows. Detailed product screenshots and feature flows are intentionally withheld pre-launch.",
    capabilities: ["Product engineering", "React Native", "Node.js", "Socket.IO", "PostgreSQL", "Supabase"],
  },
  {
    icon: ChartLine,
    organization: "UIUC",
    role: "Research Assistant - Atmospheric Flow Analysis",
    period: "Aug 2023 - Dec 2025",
    metrics: ["6 U.S. airports", "Multi-year records", "NUDFT analysis"],
    description:
      "Developed frequency-domain correlation methods using NUDFT to analyze multi-year atmospheric wind datasets from multiple U.S. airports, supporting a published Physics of Fluids article.",
    capabilities: ["Time-series analysis", "Python", "MATLAB", "Scientific computing", "Engineering data"],
  },
  {
    icon: FlaskConical,
    organization: "Clarkson University",
    role: "Research Assistant - Aerodynamic / Structural Simulation",
    period: "Aug 2022 - May 2023",
    metrics: ["CFD", "FEA", "Aeroelastic analysis"],
    description:
      "Performed CFD and structural simulation of butterfly-wing-inspired geometries using ANSYS tools to evaluate aeroelastic behavior and aerodynamic performance.",
    capabilities: ["ANSYS Fluent", "FEA", "CFD", "Aeroelasticity", "Mechanical analysis"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Experience & Technical Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering leadership across lab supervision, systems projects, product development, and research.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.organization}-${experience.role}`}
            >
              <Card className="engineering-card p-6 md:p-8 shadow-soft hover:shadow-medium">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-72 flex-shrink-0">
                    <div className="bg-gradient-academic p-3 rounded-lg w-fit mb-4">
                      <experience.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold tracking-[0.03em] text-muted-foreground mb-2">
                      {experience.organization}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-secondary font-medium">{experience.period}</p>
                  </div>

                  <div className="flex-1">
                    <div className="grid sm:grid-cols-3 gap-3 mb-5">
                      {experience.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-lg border border-border bg-academic-section px-4 py-3 text-sm font-semibold text-foreground"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.capabilities.map((capability) => (
                        <Badge key={capability} variant="outline" className="text-xs">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
