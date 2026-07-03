import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface BeAlbanianProtectedCaseStudyProps {
  project: Project;
}

const BeAlbanianProtectedCaseStudy = ({ project }: BeAlbanianProtectedCaseStudyProps) => {
  const proofItems = project.metrics ?? [];
  const stackItems = ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Socket.IO"];

  return (
    <Card className="engineering-card overflow-hidden border-secondary/30 bg-card">
      <article className="flex flex-col p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="border-primary text-primary">Private product</Badge>
          <Badge variant="secondary">Active development</Badge>
          {project.role && <Badge variant="outline">{project.role}</Badge>}
        </div>

        <h3 className="mb-3 font-serif text-xl font-semibold leading-tight text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-5 grid gap-2 sm:grid-cols-3">
          {proofItems.map((item) => (
            <div
              key={item}
              className="rounded-md border border-border bg-academic-section px-3 py-2 text-xs font-semibold leading-relaxed text-foreground"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mb-5 rounded-md bg-secondary-muted px-3 py-2.5 text-sm font-medium leading-relaxed text-foreground">
          Proves: full-stack product engineering, real-time systems, cross-platform architecture, data-backed infrastructure.
        </p>

        <div className="space-y-2 border-t border-border pt-4">
          <p className="text-xs font-medium leading-relaxed text-muted-foreground">
            Pre-launch: visuals, flows, and product mechanics withheld.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Stack: {stackItems.join(" / ")}
          </p>
        </div>
      </article>
    </Card>
  );
};

export default BeAlbanianProtectedCaseStudy;
