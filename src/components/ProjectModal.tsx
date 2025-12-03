import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentMedia = hasGallery ? project.gallery[currentImageIndex] : null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-serif mb-2">{project.title}</DialogTitle>
              <DialogDescription className="text-base">{project.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Media Section */}
          {project.mediaType !== "none" && (
            <div className="space-y-3">
              <div className="relative bg-muted rounded-lg overflow-hidden flex items-center justify-center min-h-[400px] max-h-[600px]">
                {currentMedia?.type === "image" ? (
                  <img 
                    src={encodeURI(currentMedia.src)} 
                    alt={currentMedia.alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-muted-foreground p-8 text-center">
                    <p className="text-lg font-medium mb-2">{project.mediaAlt}</p>
                    <p className="text-sm">Media placeholder - to be replaced</p>
                  </div>
                )}
              </div>
              
              {/* Gallery Navigation */}
              {hasGallery && project.gallery!.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery!.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded border-2 overflow-hidden transition-all ${
                        index === currentImageIndex ? "border-primary" : "border-border opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={encodeURI(media.src)} alt={media.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Status Badge */}
          <div className="flex gap-2">
            <Badge 
              variant="outline" 
              className={`text-xs ${
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
            {project.categories.map((cat, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Project Overview */}
          {project.overview && (
            <div>
              <h4 className="font-semibold text-foreground mb-3">Project Overview:</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-secondary w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
