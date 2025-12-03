import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ["All", "Digital Twins & Control", "Computer Vision", "UAV Systems", "Startup & Product", "Robotics", "Research", "Data Science", "Leadership"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(selectedCategory));

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Projects & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into reality through systematic engineering design, 
            prototyping, and innovative problem-solving
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <Card 
                  className="p-6 shadow-soft hover:shadow-medium transition-all cursor-pointer h-full flex flex-col"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Thumbnail */}
                  {project.mediaType !== "none" && (
                    <div className="mb-4 relative bg-muted rounded-lg overflow-hidden aspect-video">
                      <img 
                        src={project.mediaSrc} 
                        alt={project.mediaAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  )}

                  <div className="flex-1">
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
                          project.status === "Under Review" || project.status.startsWith("Under Review")
                            ? "border-yellow-500 text-yellow-600" :
                          "border-muted-foreground text-muted-foreground"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex gap-2 pt-4 border-t mt-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </Button>
                    )}
                    {project.demo && typeof project.demo === 'string' && (project.demo.startsWith('http') || project.demo.startsWith('/')) && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo as string, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {project.demo.includes('.pdf') ? 'Manuscript' : 'Demo'}
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal 
        project={selectedProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;
