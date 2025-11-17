export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
  categories: string[];
  mediaType?: "image" | "video" | "embed" | "none";
  mediaSrc?: string;
  mediaAlt?: string;
  gallery?: Array<{ type: "image" | "video"; src: string; alt: string }>;
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
    github: "https://github.com/Idealrafuna",
    categories: ["Digital Twins & Control", "UAV Systems"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/tellotwin-hero.png",
    mediaAlt: "TelloTwin UAV Digital Twin Dashboard - Real-time telemetry visualization",
    gallery: [
      { type: "image", src: "/media/placeholders/tellotwin-dashboard.png", alt: "Dashboard Interface" },
      { type: "image", src: "/media/placeholders/tellotwin-3d.png", alt: "3D Visualization" }
    ]
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
    github: "https://github.com/Idealrafuna",
    categories: ["Digital Twins & Control", "Robotics"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/rl-robot-twin.png",
    mediaAlt: "RL Robot Twin Simulation Environment",
    gallery: [
      // Photos
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm side view.jpg", alt: "Robot arm side view" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view.jpg", alt: "Robot arm front view" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view 2.jpg", alt: "Robot arm front view 2" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Back view .jpg", alt: "Robot arm back view" },
      // 3D CAD Drawings
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING BACK VIEW .png", alt: "3D CAD Drawing - Back View" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING FRONT VIEW .png", alt: "3D CAD Drawing - Front View" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW .png", alt: "3D CAD Drawing - Side View" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW 2.png", alt: "3D CAD Drawing - Side View 2" }
    ]
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
    demo: "To be presented Oct 28, 2025",
    categories: ["Computer Vision", "Research"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/yolov8-detection.png",
    mediaAlt: "YOLOv8 Multispectral Detection Results",
    gallery: [
      { type: "image", src: "/media/placeholders/yolov8-ir.png", alt: "IR Spectrum Detection" },
      { type: "image", src: "/media/placeholders/yolov8-fusion.png", alt: "Fusion Results" }
    ]
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
    demo: "https://bealbanian.com",
    categories: ["Startup & Product", "AR/VR"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/bealbanian-ar.png",
    mediaAlt: "BeAlbanian AR Experience",
    gallery: [
      { type: "image", src: "/media/placeholders/bealbanian-app.png", alt: "Mobile App Interface" },
      { type: "image", src: "/media/placeholders/bealbanian-web.png", alt: "Web Platform" }
    ]
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
    github: "https://github.com/DBF-Kosovo",
    categories: ["UAV Systems", "Leadership"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/dbf-aircraft.png",
    mediaAlt: "DBF Kosovo Aircraft Design",
    gallery: [
      { type: "image", src: "/media/placeholders/dbf-team.png", alt: "Team Workshop" },
      { type: "image", src: "/media/placeholders/dbf-cad.png", alt: "CAD Design" }
    ]
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
    status: "Completed",
    categories: ["Aerospace", "Leadership"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/nasa-rascal.png",
    mediaAlt: "NASA RASC-AL Project"
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
    status: "Completed",
    categories: ["Research", "Aerospace"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/aeroelastic-wing.png",
    mediaAlt: "Butterfly Wing Aeroelastic Analysis"
  }
];
