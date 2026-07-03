import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Bot,
  BrainCircuit,
  BoxSelect,
  Box,
  Cog,
  Cpu,
  Code,
  Combine,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Gauge,
  Layers,
  MemoryStick,
  Network,
  Plug,
  Radio,
  ScanEye,
  Scale,
  SlidersHorizontal,
  Satellite,
  Wifi,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  SiExpress,
  SiFastapi,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiReact,
  SiSocketdotio,
  SiSupabase,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

const roleFit = [
  "Systems Engineer",
  "Simulation Engineer",
  "Digital Twin Engineer",
  "Robotics Engineer",
  "Automotive Systems Engineer",
];

const skillGroups = [
  {
    icon: Network,
    title: "Systems Engineering",
    description: "Integration, requirements, interfaces, trade-offs, and validation.",
    skills: [
      { name: "Systems Integration", icon: Workflow, color: "text-foreground" },
      { name: "Requirements Analysis", icon: ClipboardCheck, color: "text-foreground" },
      { name: "Interface Design", icon: Plug, color: "text-foreground" },
      { name: "Trade-off Analysis", icon: Scale, color: "text-foreground" },
      { name: "Verification & Validation", icon: Gauge, color: "text-foreground" },
      { name: "Technical Documentation", icon: FileText, color: "text-foreground" },
    ],
  },
  {
    icon: Wrench,
    title: "Simulation & Engineering Tools",
    description: "Physical-system modelling and engineering analysis workflows.",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Simulink", icon: Layers, color: "text-orange-600" },
      { name: "ANSYS Fluent", icon: Workflow, color: "text-yellow-600" },
      { name: "SolidWorks", icon: Box, color: "text-red-600" },
      { name: "CATIA", icon: Layers, color: "text-blue-600" },
      { name: "STK", icon: Satellite, color: "text-foreground" },
      { name: "RoboDK", icon: Bot, color: "text-foreground" },
      { name: "MATLAB", icon: Code, color: "text-orange-500" },
    ],
  },
  {
    icon: Gauge,
    title: "Digital Twin & Real-Time Systems",
    description: "Telemetry pipelines, browser visualization, and live system state.",
    skills: [
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
      { name: "WebSocket", icon: Wifi, color: "text-foreground" },
      { name: "Three.js", icon: SiThreedotjs, color: "text-foreground" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "UAV Telemetry", icon: Radio, color: "text-foreground" },
      { name: "Telemetry Logging", icon: FileSpreadsheet, color: "text-foreground" },
      { name: "CSV Export", icon: FileText, color: "text-foreground" },
    ],
  },
  {
    icon: Bot,
    title: "Robotics & UAV Systems",
    description: "Lab robotics, UAV interfaces, embedded workflows, and control systems.",
    skills: [
      { name: "ROS", icon: Cpu, color: "text-foreground" },
      { name: "DJI Tello", icon: Radio, color: "text-foreground" },
      { name: "Mobile Robots", icon: Bot, color: "text-foreground" },
      { name: "Embedded Systems", icon: MemoryStick, color: "text-foreground" },
      { name: "Mechatronics", icon: Cog, color: "text-foreground" },
      { name: "Control Systems", icon: SlidersHorizontal, color: "text-foreground" },
    ],
  },
  {
    icon: Code,
    title: "Software & Data Systems",
    description: "Full-stack product engineering for real-time and data-backed systems.",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-foreground" },
      { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Prisma", icon: SiPrisma, color: "text-foreground" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-foreground" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Computer Vision",
    description: "Applied detection, fusion, and low-light monitoring pipelines.",
    skills: [
      { name: "YOLOv8", icon: ScanEye, color: "text-foreground" },
      { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "Multispectral Detection", icon: Layers, color: "text-foreground" },
      { name: "IR/VIS Fusion", icon: Combine, color: "text-foreground" },
      { name: "Weighted Boxes Fusion", icon: BoxSelect, color: "text-foreground" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A capabilities matrix for engineering roles that connect physical systems, simulation, software, and data.
          </p>
        </div>

        <div className="mb-12">
          <div className="rounded-lg border border-border bg-background p-4 shadow-soft">
            <p className="text-sm font-semibold tracking-[0.03em] text-muted-foreground text-center mb-4">
              Role Fit
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {roleFit.map((role) => (
                <Badge key={role} className="bg-primary text-primary-foreground">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-academic p-2.5 rounded-lg flex-shrink-0">
                  <group.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {group.skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 p-4 text-center bg-background hover:scale-105 hover:shadow-medium transition-all duration-300 cursor-default"
                  >
                    <skill.icon className={`h-7 w-7 ${skill.color}`} />
                    <span className="text-xs font-medium text-foreground leading-tight">{skill.name}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
