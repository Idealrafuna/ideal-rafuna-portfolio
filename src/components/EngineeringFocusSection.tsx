import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  BrainCircuit,
  Cpu,
  Eye,
  Network,
  Plane,
  Workflow,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const focusAreas = [
  {
    icon: Workflow,
    title: "Systems Engineering & Integration",
    description:
      "Requirements-driven thinking, interface design, subsystem integration, trade-off analysis, and multidisciplinary engineering coordination.",
  },
  {
    icon: Network,
    title: "Digital Twin Systems",
    description:
      "Real-time telemetry pipelines, virtual-physical synchronization, WebSocket streaming, 3D visualization, and simulation fallback systems.",
  },
  {
    icon: Plane,
    title: "UAV & Robotics Systems",
    description:
      "UAV telemetry, robotics lab supervision, mobile robot systems, embedded systems, control workflows, and real-time monitoring.",
  },
  {
    icon: Cpu,
    title: "Simulation & Modelling",
    description:
      "Python-based analysis, spectral methods, CFD/FEA background, Simulink, ANSYS, and data-driven modelling of physical systems.",
  },
  {
    icon: Eye,
    title: "AI & Computer Vision",
    description:
      "YOLOv8, multispectral detection, infrared-visible fusion, and applied computer vision for low-light monitoring.",
  },
  {
    icon: BrainCircuit,
    title: "Product & Software Systems",
    description:
      "React, TypeScript, FastAPI, Node.js, PostgreSQL, Supabase, Socket.IO, and architecture for real-time, cross-platform applications.",
  },
];

const capabilities = [
  "Systems Integration",
  "Requirements Analysis",
  "Interface Design",
  "Verification & Validation",
  "Digital Twins",
  "UAV Telemetry",
  "WebSocket Streaming",
  "Simulation",
  "Robotics",
  "Python",
  "FastAPI",
  "React / TypeScript",
  "Three.js",
  "ROS",
  "ANSYS",
  "Simulink",
  "Computer Vision",
  "PostgreSQL",
];

const EngineeringFocusSection = () => {
  return (
    <section id="focus" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Engineering Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Core areas where I apply systems thinking, simulation, software, and physical engineering.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="h-full"
            >
              <Card className="engineering-card p-6 h-full shadow-soft hover:shadow-medium bg-background">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-academic p-3 rounded-lg mr-3">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground leading-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Core Capabilities
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((capability) => (
              <Badge
                key={capability}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {capability}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EngineeringFocusSection;
