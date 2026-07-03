import { Activity, Database, Gauge, Plane, Server, SquareCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface TelloTwinFeatureProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const metrics = [
  "3-component architecture",
  "10 Hz telemetry streaming",
  "17-field flight-state model",
  "12 REST endpoints",
  "1 WebSocket stream",
  "Real DJI Tello + simulation fallback",
];

const architecture = [
  { icon: Plane, label: "DJI Tello / Simulator" },
  { icon: Server, label: "FastAPI Backend" },
  { icon: Activity, label: "WebSocket / REST APIs" },
  { icon: SquareCode, label: "React + Three.js Dashboard" },
  { icon: Database, label: "Telemetry Logging / CSV Export" },
];

const TelloTwinFeature = ({ project, onOpenDetails }: TelloTwinFeatureProps) => {
  return (
    <div className="mb-14">
      <Card className="overflow-hidden shadow-medium border-primary/30 bg-gradient-to-br from-card via-card to-academic-highlight">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
              <Badge variant="outline" className="border-secondary text-secondary">
                UAV Digital Twin
              </Badge>
              <Badge variant="outline">Systems Integration</Badge>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              TelloTwin - UAV Digital Twin System
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Real-time UAV telemetry, FastAPI backend, WebSocket streaming, and browser-based
              3D visualization.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="flex items-center gap-2 rounded-lg border border-border bg-background/70 px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <Gauge className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => onOpenDetails(project)}
            >
              View TelloTwin Case Study
            </Button>
          </div>

          <div className="p-6 md:p-8 lg:p-10 bg-background/55 border-t lg:border-t-0 lg:border-l border-border">
            <p className="text-sm font-semibold tracking-[0.03em] text-muted-foreground mb-5">
              Coded Architecture
            </p>
            <div className="space-y-3">
              {architecture.map((node, index) => (
                <div key={node.label}>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-soft">
                    <div className="bg-gradient-academic p-2.5 rounded-md">
                      <node.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">{node.label}</span>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="ml-6 h-5 border-l border-dashed border-primary/50" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TelloTwinFeature;
