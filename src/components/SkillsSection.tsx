import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, SiPython, SiUnity, SiTypescript, 
  SiPostgresql, SiSupabase, SiPytorch, SiOpencv,
  SiTensorflow, SiFastapi, SiThreedotjs, SiNodedotjs
} from 'react-icons/si';
import { 
  Cpu, Brain, Layers, ScanEye, Box, Workflow, 
  Network, Code, Wifi, Atom, Target
} from 'lucide-react';

const skills = {
  "🤖 Robotics & Control": [
    { name: "ROS", icon: Cpu, color: "text-foreground" },
    { name: "MATLAB", icon: Code, color: "text-orange-500" },
    { name: "Simulink", icon: Layers, color: "text-orange-600" },
    { name: "Gymnasium", icon: Brain, color: "text-foreground" },
    { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
    { name: "PPO/SAC", icon: Brain, color: "text-foreground" },
  ],
  "🔬 Digital Twins & Simulation": [
    { name: "Unity", icon: SiUnity, color: "text-foreground" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-foreground" },
    { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
    { name: "WebSocket", icon: Wifi, color: "text-foreground" },
    { name: "Physics Modeling", icon: Atom, color: "text-foreground" },
  ],
  "👁️ Computer Vision & AI": [
    { name: "YOLOv8", icon: ScanEye, color: "text-foreground" },
    { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
    { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
    { name: "Object Detection", icon: Target, color: "text-foreground" },
  ],
  "✈️ Aerospace & CAD": [
    { name: "SolidWorks", icon: Box, color: "text-red-600" },
    { name: "ANSYS", icon: Workflow, color: "text-yellow-600" },
    { name: "CATIA", icon: Layers, color: "text-blue-600" },
    { name: "FEA/CFD", icon: Network, color: "text-foreground" },
  ],
  "💻 Full-Stack Development": [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Skills & Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             A comprehensive toolkit spanning robotics, AI, simulation, and full-stack development.
          </p>
        </motion.div>
        
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              {category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {items.map((skill, skillIdx) => (
                <Card 
                  key={`${category}-${skill.name}-${skillIdx}`}
                  className="p-4 flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default bg-background"
                >
                  <skill.icon className={`w-12 h-12 mb-3 ${skill.color}`} />
                  <p className="text-sm font-medium text-center text-foreground">{skill.name}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

