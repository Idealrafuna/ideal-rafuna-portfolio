import { Activity, Boxes, GraduationCap, Layers3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const valueCards = [
  {
    icon: Boxes,
    title: "Systems Integration",
    metric: "Physical + software systems",
    description:
      "Experience integrating UAV telemetry, backend APIs, real-time visualization, robotics workflows, and multidisciplinary engineering systems.",
  },
  {
    icon: Activity,
    title: "Digital Twin & Simulation",
    metric: "10 Hz telemetry",
    description:
      "Designed UAV digital twin architecture connecting DJI Tello telemetry, FastAPI services, WebSocket streaming, and React/Three.js visualization.",
  },
  {
    icon: GraduationCap,
    title: "Technical Leadership",
    metric: "70+ students",
    description:
      "Delivering engineering instruction and lab supervision across computer science, mechatronics, robotics, embedded systems, CAD, and aerospace lab projects.",
  },
  {
    icon: Layers3,
    title: "Product Engineering",
    metric: "Mobile + web + backend",
    description:
      "Built cross-platform mobile, web, backend, real-time synchronization, gamified learning, pronunciation, cultural content, and progress-tracking systems.",
  },
];

const EmployerValueSection = () => {
  return (
    <section id="value" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Engineering Value
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for roles where physical systems, software, simulation, and data meet.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {valueCards.map((card, index) => (
            <div
              key={card.title}
              className="h-full"
            >
              <Card className="engineering-card h-full p-6 shadow-soft hover:shadow-medium border-border/70 bg-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-academic p-3 rounded-lg">
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.04em] text-muted-foreground">
                    Proof
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4 leading-tight">
                  {card.metric}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployerValueSection;
