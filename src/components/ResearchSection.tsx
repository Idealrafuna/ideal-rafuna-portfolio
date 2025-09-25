import { Plane, Cpu, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResearchSection = () => {
  const projects = [
    {
      icon: Plane,
      title: "UAV/Drone Design & Optimization",
      description: "Advanced unmanned aerial vehicle design focusing on aerodynamic efficiency, autonomous navigation, and mission-specific customization for various applications.",
      keywords: ["Aerodynamics", "Autonomous Systems", "Flight Control"]
    },
    {
      icon: Cpu,
      title: "Digital Twin Development",
      description: "Creating comprehensive digital replicas of physical systems to enable real-time monitoring, predictive maintenance, and performance optimization.",
      keywords: ["IoT Integration", "Machine Learning", "Simulation"]
    },
    {
      icon: Zap,
      title: "Aeroelasticity Research", 
      description: "Investigating the interaction between aerodynamic forces and structural flexibility in aircraft and UAV systems for enhanced safety and performance.",
      keywords: ["Structural Analysis", "Computational Fluid Dynamics", "Material Science"]
    },
    {
      icon: Globe,
      title: "BeAlbanian AR Platform",
      description: "Innovative augmented reality startup developing cultural and educational experiences, bridging traditional heritage with cutting-edge technology.",
      keywords: ["Augmented Reality", "Cultural Tech", "Mobile Development"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Research & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of systems engineering through interdisciplinary research 
            that combines theoretical rigor with practical impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-academic p-4 rounded-xl mr-4">
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword, keyIndex) => (
                  <Badge key={keyIndex} variant="secondary" className="bg-secondary-muted text-secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-academic-highlight p-8 rounded-2xl shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Research Philosophy
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              My research approach centers on <strong>systems thinking</strong> - understanding how individual 
              components interact within complex networks to create emergent behaviors. I believe the most 
              impactful innovations occur at the intersection of disciplines, where aerospace engineering 
              meets artificial intelligence, where mechanical systems integrate with digital twins, and 
              where traditional engineering wisdom combines with cutting-edge computational methods.
            </p>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default ResearchSection;