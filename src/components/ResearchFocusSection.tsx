import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Eye, Plane, Network } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const ResearchFocusSection = () => {
  const researchAreas = [
    {
      icon: Cpu,
      title: "Digital Twins",
      description: "Real-time system modeling, telemetry streaming, and virtual-physical synchronization for UAVs and robotics"
    },
    {
      icon: Zap,
      title: "Adaptive / Learning Control",
      description: "Reinforcement learning (PPO, SAC), sim-to-real transfer, safety constraints, and robust controller design"
    },
    {
      icon: Eye,
      title: "Diagnostics & Health Monitoring",
      description: "Predictive maintenance, system health assessment, and intelligent sensing for complex systems"
    },
    {
      icon: Plane,
      title: "UAV Systems & Robotics",
      description: "Autonomous navigation, aeroelasticity research, multispectral detection, and flight control systems"
    },
    {
      icon: Network,
      title: "Complex Systems & IE/OR",
      description: "Operations research methodologies applied to autonomous systems, optimization, and systems thinking"
    }
  ];

  const keywords = [
    "Digital Twins",
    "Reinforcement Learning",
    "PPO & SAC",
    "Sim-to-Real Transfer",
    "UAV Systems",
    "Robotics",
    "Adaptive Control",
    "System Health Monitoring",
    "Multispectral Detection",
    "Aeroelasticity",
    "Operations Research",
    "Complex Systems",
    "Intelligent Sensing"
  ];

  return (
    <section id="research" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Research Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            My research bridges digital twins, adaptive control, and intelligent automation—applying 
            systems engineering and operations research principles to UAVs and robotics.
          </p>
          <ul className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 list-disc list-inside space-y-2">
            <li>Co-authored a frequency-domain turbulence study using NUDFT to analyze multi-year, nonuniformly sampled wind records.</li>
          </ul>
        </AnimatedSection>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchAreas.map((area, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-academic p-3 rounded-lg mr-3">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {area.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Keywords Cloud */}
        <div className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Research Keywords
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {keywords.map((keyword, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchFocusSection;
