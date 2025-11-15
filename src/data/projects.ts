export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "tellotwin",
    title: "TelloTwin – UAV Digital Twin System",
    description: "Real-time digital twin system for UAV telemetry visualization and monitoring with robust low-latency data architecture achieving ~20 Hz update rates.",
    highlights: [
      "Real-time telemetry streaming at ~20 Hz",
      "3D visualization with Three.js",
      "FastAPI backend with WebSocket support",
      "React-based dashboard",
      "System reliability testing and validation"
    ],
    technologies: ["FastAPI", "React", "Three.js", "WebSocket", "Python"],
    status: "Active Development",
    github: "https://github.com/Idealrafuna"
  },
  {
    id: "rl-robot-twin",
    title: "RL Robot Twin – Graduate Robotics Course",
    description: "Co-built reinforcement learning digital twin for robotics and UAV systems with focus on stability, safety constraints, and robustness.",
    highlights: [
      "PPO and SAC controller implementation",
      "Stability and safety constraint integration",
      "Robustness testing in simulation",
      "Co-teaching and student guidance",
      "Sim-to-real transfer research"
    ],
    technologies: ["Python", "PyTorch", "Gymnasium", "ROS", "MATLAB"],
    status: "Completed",
    github: "https://github.com/Idealrafuna"
  },
  {
    id: "yolov8-multispectral",
    title: "YOLOv8 Multispectral Pedestrian Detection",
    description: "Advanced pedestrian detection system using IR/VIS fusion with Weighted Boxes Fusion, achieving ~0.97 precision in low-light conditions.",
    highlights: [
      "IR and visible spectrum fusion",
      "Weighted Boxes Fusion implementation",
      "~0.97 precision in low-light scenarios",
      "Real-time inference optimization",
      "Under review for publication"
    ],
    technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch"],
    status: "Under Review",
    demo: "To be presented Oct 28, 2025"
  },
  {
    id: "bealbanian",
    title: "BeAlbanian – AR Language & Heritage Platform",
    description: "Unity AR platform with React frontend and Supabase backend for gamified Albanian language learning with speech recognition.",
    highlights: [
      "Unity AR core with location-based features",
      "React web application",
      "Supabase + PostgreSQL backend",
      "Speech-to-text integration",
      "Gamified learning experience"
    ],
    technologies: ["Unity", "AR", "React", "Supabase", "PostgreSQL", "Speech-to-Text"],
    status: "Commercial Launch",
    demo: "https://bealbanian.com"
  },
  {
    id: "dbf-kosovo",
    title: "DBF Kosovo – AIAA Design-Build-Fly Team",
    description: "Founded and lead the first AIAA Design-Build-Fly competition team in the Balkans with 15-student cross-disciplinary team.",
    highlights: [
      "First DBF team in Balkans",
      "15-student team across structures, avionics, control",
      "Weekly design reviews and documentation",
      "International collaboration with Calvin University",
      "Systems engineering leadership"
    ],
    technologies: ["SolidWorks", "ANSYS", "MATLAB", "Arduino", "CAD"],
    status: "Active",
    github: "https://github.com/DBF-Kosovo"
  },
  {
    id: "nasa-rascal",
    title: "NASA RASC-AL – Multinational Team Lead",
    description: "Managed thermodynamics subgroup for NASA Revolutionary Aerospace Systems Concepts Academic Linkage competition.",
    highlights: [
      "Multinational team coordination",
      "Thermodynamics analysis leadership",
      "International systems engineering collaboration",
      "Technical documentation and reporting"
    ],
    technologies: ["MATLAB", "CAD", "Thermal Analysis"],
    status: "Completed"
  },
  {
    id: "clarkson-aeroelastic",
    title: "Clarkson Aeroelastic & Acoustics Research",
    description: "Undergraduate research on butterfly wing biomimicry using ANSYS FEA and Fluent for aeroelastic and acoustic response analysis.",
    highlights: [
      "ANSYS FEA modeling of butterfly wings",
      "Fluent CFD simulations",
      "Acoustic response analysis of 3D-printed materials",
      "MATLAB FFT and waveform analysis",
      "Biomimicry applications"
    ],
    technologies: ["ANSYS", "Fluent", "MATLAB", "3D Printing", "FEA"],
    status: "Completed"
  }
];
