import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
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
          {projects.map((project) => (
            <Card key={project.id} className="p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground flex-1">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ml-2 ${
                      project.status === "Active Development" || project.status === "Active" 
                        ? "border-primary text-primary" :
                      project.status === "Commercial Launch" 
                        ? "border-secondary text-secondary" :
                      project.status === "Under Review"
                        ? "border-yellow-500 text-yellow-600" :
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
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
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
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                {project.github && (
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    variant="outline" 
                    className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => typeof project.demo === 'string' && project.demo.startsWith('http') 
                      ? window.open(project.demo, '_blank') 
                      : null}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {typeof project.demo === 'string' && project.demo.startsWith('http') ? 'Demo' : project.demo}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
