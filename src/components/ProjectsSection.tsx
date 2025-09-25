import { Plane, Box, Smartphone, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Plane,
      title: "Advanced UAV Design Platform",
      description: "Comprehensive UAV design and simulation platform featuring aerodynamic optimization, flight path planning, and real-time performance monitoring.",
      technologies: ["MATLAB", "SolidWorks", "Python", "ROS"],
      status: "Active Research",
      highlights: [
        "Autonomous navigation algorithms",
        "Real-time flight dynamics simulation",
        "Custom airframe optimization"
      ]
    },
    {
      icon: Box,
      title: "Industrial Digital Twin System",
      description: "End-to-end digital twin solution for manufacturing systems, enabling predictive maintenance and performance optimization through IoT integration.",
      technologies: ["IoT Sensors", "Machine Learning", "Cloud Computing", "3D Modeling"],
      status: "Prototype Complete",
      highlights: [
        "Real-time system monitoring",
        "Predictive failure analysis", 
        "Performance optimization algorithms"
      ]
    },
    {
      icon: Smartphone,
      title: "BeAlbanian AR Platform",
      description: "Cultural heritage augmented reality application showcasing Albanian history and traditions through immersive mobile experiences.",
      technologies: ["Unity", "ARCore", "C#", "3D Graphics"],
      status: "Commercial Launch",
      highlights: [
        "Interactive historical experiences",
        "Cultural education modules",
        "Location-based AR features"
      ]
    },
    {
      icon: Cog,
      title: "Mechatronics Integration Lab",
      description: "Laboratory setup for integrated mechatronics research, combining mechanical systems with electronics and control algorithms.",
      technologies: ["Arduino", "LabVIEW", "CAD", "Control Systems"],
      status: "Ongoing Development",
      highlights: [
        "Multi-axis robotic systems",
        "Sensor fusion algorithms",
        "Human-machine interfaces"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Projects & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into reality through systematic engineering design, 
            prototyping, and innovative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-academic p-3 rounded-lg mr-4">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      project.status === "Active Research" ? "border-primary text-primary" :
                      project.status === "Commercial Launch" ? "border-secondary text-secondary" :
                      "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <div className="bg-secondary w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 shadow-soft bg-academic-highlight">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Innovation Approach
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              My project methodology emphasizes <strong>iterative design</strong>, <strong>user-centered solutions</strong>, 
              and <strong>interdisciplinary collaboration</strong>. Each project begins with thorough requirement analysis, 
              progresses through rapid prototyping phases, and culminates in rigorous testing and validation.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Projects
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;