import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Project, projects } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";
import BeAlbanianProtectedCaseStudy from "./BeAlbanianProtectedCaseStudy";
import ProjectModal from "./ProjectModal";

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

interface ProjectCarouselCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const ProjectCarouselCard = ({ project, onOpenDetails }: ProjectCarouselCardProps) => {
  if (project.id === "bealbanian") {
    return (
      <div className="mx-auto max-w-4xl">
        <BeAlbanianProtectedCaseStudy project={project} />
      </div>
    );
  }

  const visibleMetrics = project.metrics?.slice(0, 3) ?? [];
  const visibleTechnologies = project.technologies.slice(0, 5);
  const hasExternalDemo = typeof project.demo === "string" && (project.demo.startsWith("http") || project.demo.startsWith("/"));

  return (
    <Card className="mx-auto max-w-5xl overflow-hidden border-primary/15 bg-card shadow-soft">
      <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {project.mediaType !== "none" && project.mediaSrc && (
          <div className="relative h-36 bg-muted md:h-auto md:min-h-[300px]">
            <img
              src={encodeURI(project.mediaSrc)}
              alt={project.mediaAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 hidden flex-wrap gap-2 sm:flex">
              {(project.proofBadges ?? []).slice(0, 3).map((badge) => (
                <Badge key={badge} className="bg-background/90 text-foreground hover:bg-background">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col p-4 sm:p-5 md:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={`text-xs ${statusClassName(project.status)}`}>
              {project.status}
            </Badge>
            {project.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          <h3 className="mb-2 font-serif text-xl font-semibold leading-tight text-foreground md:text-2xl">
            {project.title}
          </h3>
          <p className="mb-4 overflow-hidden text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
            {project.description}
          </p>

          {visibleMetrics.length > 0 && (
            <div className="mb-4 grid gap-2 sm:grid-cols-3">
              {visibleMetrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-md border border-border bg-academic-section px-3 py-2 text-xs font-semibold leading-snug text-foreground"
                >
                  {metric}
                </div>
              ))}
            </div>
          )}

          {project.impact && (
            <p className="mb-4 hidden rounded-md bg-secondary-muted px-3 py-2 text-sm font-medium leading-relaxed text-foreground md:block">
              {project.impact}
            </p>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {visibleTechnologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto grid gap-2 border-t border-border pt-4 sm:grid-cols-2 lg:flex">
            <Button className="h-10 flex-1" onClick={() => onOpenDetails(project)}>
              View details
            </Button>
            {project.github && (
              <Button
                variant="outline"
                className="h-10 flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            )}
            {hasExternalDemo && (
              <Button
                variant="outline"
                className="h-10 flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open(project.demo as string, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                Open
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

const ProjectsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    updateCurrentSlide();
    api.on("select", updateCurrentSlide);
    api.on("reInit", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      api.off("reInit", updateCurrentSlide);
    };
  }, [api]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="overflow-x-hidden bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-5xl">
            Featured Engineering Projects
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            One high-signal project at a time.
          </p>
        </AnimatedSection>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <ProjectCarouselCard project={project} onOpenDetails={handleProjectClick} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-[calc(100%+1rem)] h-10 w-10 md:left-4 lg:-left-12 lg:top-1/2" />
          <CarouselNext className="right-2 top-[calc(100%+1rem)] h-10 w-10 md:right-4 lg:-right-12 lg:top-1/2" />
        </Carousel>

        <div className="mt-16 flex flex-col items-center gap-4 lg:mt-6">
          <p className="text-sm font-medium text-muted-foreground">
            Project {currentSlide + 1} of {projects.length}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Show project ${index + 1}: ${project.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
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
