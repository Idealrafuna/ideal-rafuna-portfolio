import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/data/projects";
import BeAlbanianProtectedCaseStudy from "./BeAlbanianProtectedCaseStudy";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const statusClassName = (status: string) => {
  if (status === "Active Development" || status === "Active Product" || status.startsWith("Private Product")) {
    return "border-primary text-primary";
  }
  if (status === "Published") {
    return "border-green-500 text-green-600";
  }
  if (status.startsWith("Under Review")) {
    return "border-amber-500 text-amber-600";
  }
  return "border-muted-foreground text-muted-foreground";
};

const SectionBlock = ({ title, children }: { title: string; children: string }) => (
  <div className="rounded-lg border border-border bg-academic-section p-4">
    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  if (project.id === "bealbanian") {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <BeAlbanianProtectedCaseStudy project={project} />
        </DialogContent>
      </Dialog>
    );
  }

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentMedia =
    hasGallery && project.gallery
      ? project.gallery[currentImageIndex]
      : project.mediaSrc
        ? { type: "image" as const, src: project.mediaSrc, alt: project.mediaAlt ?? project.title }
        : null;

  const caseStudyBlocks = [
    { title: "Problem", value: project.problem },
    { title: "System / Architecture", value: project.system },
    { title: "Technical Contribution", value: project.contribution },
    { title: "Employer Relevance", value: project.employerRelevance },
  ].filter((block): block is { title: string; value: string } => Boolean(block.value));

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-serif mb-2">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {project.mediaType !== "none" && currentMedia && (
            <div className="space-y-3">
              <div className="relative bg-muted rounded-lg overflow-hidden flex items-center justify-center w-full min-h-[240px] md:min-h-[420px] max-h-[75vh]">
                {currentMedia.type === "image" ? (
                  <img
                    src={encodeURI(currentMedia.src)}
                    alt={currentMedia.alt}
                    className="w-full h-auto max-h-[75vh] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-muted-foreground p-8 text-center">
                    <p className="text-lg font-medium mb-2">{project.mediaAlt}</p>
                    <p className="text-sm">Media placeholder</p>
                  </div>
                )}
              </div>

              {hasGallery && project.gallery!.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery!.map((media, index) => (
                    <button
                      key={`${media.src}-${index}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`pressable flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded border-2 overflow-hidden ${
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-border opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Show media ${index + 1}`}
                    >
                      <img
                        src={encodeURI(media.src)}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className={`text-xs ${statusClassName(project.status)}`}>
              {project.status}
            </Badge>
            {project.role && (
              <Badge variant="outline" className="text-xs border-secondary text-secondary">
                Role: {project.role}
              </Badge>
            )}
            {project.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          {project.privacyNote && (
            <div className="rounded-lg border border-secondary/30 bg-secondary-muted/40 p-4 text-sm text-muted-foreground">
              {project.privacyNote}
            </div>
          )}

          {project.metrics && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-soft"
                >
                  {metric}
                </div>
              ))}
            </div>
          )}

          {caseStudyBlocks.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudyBlocks.map((block) => (
                <SectionBlock key={block.title} title={block.title}>
                  {block.value}
                </SectionBlock>
              ))}
            </div>
          )}

          {project.overview && (
            <div>
              <h4 className="font-semibold text-foreground mb-3">Overview</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start">
                  <div className="bg-secondary w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.demo && typeof project.demo === "string" && !project.demo.startsWith("http") && !project.demo.startsWith("/") && (
            <div className="text-sm text-muted-foreground rounded-lg border border-border bg-academic-section p-4">
              {project.demo}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
            {project.github && (
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            )}
            {project.pdf && (
              <Button
                variant="outline"
                className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open(project.pdf, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Manuscript
              </Button>
            )}
            {project.demo && typeof project.demo === "string" && (project.demo.startsWith("http") || project.demo.startsWith("/")) && (
              <Button
                variant="outline"
                className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
