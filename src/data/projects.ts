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
    mediaSrc: "/media/tellotwin/dashboard-live.png",
    mediaAlt: "TelloTwin UAV Digital Twin Dashboard - Real-time telemetry visualization",
    gallery: [
      { type: "image", src: "/media/tellotwin/dashboard-live.png", alt: "Dashboard Interface - Live Mode" },
      { type: "image", src: "/media/tellotwin/dashboard-sim.png", alt: "Dashboard Interface - Simulation Mode" },
      { type: "image", src: "/media/tellotwin/3d-model-1.png", alt: "3D Model View 1" },
      { type: "image", src: "/media/tellotwin/3d-model-2.png", alt: "3D Model View 2" },
      { type: "image", src: "/media/tellotwin/real-life-1.jpg", alt: "Real Life Setup - View 1" },
      { type: "image", src: "/media/tellotwin/real-life-2.jpg", alt: "Real Life Setup - View 2" },
      { type: "image", src: "/media/tellotwin/real-life-3.jpg", alt: "Real Life Setup - View 3" },
      { type: "image", src: "/media/tellotwin/real-life-4.jpg", alt: "Real Life Setup - View 4" }
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
    status: "Published",
    demo: "Presented on Oct 18, 2025 at the UBT International Conference",
    categories: ["Computer Vision", "Research"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/yolov8-detection.png",
    mediaAlt: "YOLOv8 Multispectral Detection Results",
    gallery: [
      { type: "image", src: "/media/yolov8/detection-grid.png", alt: "Adaptive Fusion Detection Results (Visible, Infrared, Fusion)" },
      { type: "image", src: "/media/yolov8/analysis-graph.png", alt: "Brightness vs Detection Confidence Analysis" }
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
    mediaSrc: "/media/BeAlbanian/landing-hero.png",
    mediaAlt: "BeAlbanian AR Experience",
    gallery: [
      { type: "image", src: "/media/BeAlbanian/landing-hero.png", alt: "Landing Page" },
      { type: "image", src: "/media/BeAlbanian/ar-explorer-1.png", alt: "AR Explorer - 3D Landmark Visualization" },
      { type: "image", src: "/media/BeAlbanian/dance-sensor.png", alt: "AI Dance Analysis - Foot Tracking" },
      { type: "image", src: "/media/BeAlbanian/learning-path.png", alt: "Learning Path Dashboard" },
      { type: "image", src: "/media/BeAlbanian/games.png", alt: "Gamified Learning Hub" },
      { type: "image", src: "/media/BeAlbanian/historical-figures.png", alt: "Cultural Heritage - Historical Figures" },
      { type: "image", src: "/media/BeAlbanian/profile.png", alt: "User Profile & Gamification Stats" },
      { type: "image", src: "/media/BeAlbanian/cities.png", alt: "Virtual City Exploration" }
    ]
  },
  {
    id: "dbf-kosovo",
    title: "DBF Kosovo – AIAA Design-Build-Fly Team",
    description: "Pioneering aerospace initiative to establish the first AIAA Design-Build-Fly competition team in the Balkans. Currently leading the initial phase of team structure, student recruitment, and curriculum development.",
    highlights: [
      "Spearheading initiative for first DBF team in the Balkans",
      "Structuring multidisciplinary team (Structures, Avionics, Propulsion)",
      "Initiating academic partnerships for technical mentorship",
      "Defining systems engineering workflows & documentation standards",
      "Building foundational aerospace engineering capacity"
    ],
    technologies: ["SolidWorks", "ANSYS", "MATLAB", "Project Management", "Systems Engineering"],
    status: "Active Initiative",
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
  mediaSrc: "/media/nasa-rascal/satellite-thermal.png",
  mediaAlt: "Satellite thermal management concept visualization",
  gallery: [
    { type: "image", src: "/media/nasa-rascal/satellite-thermal.png", alt: "Satellite with thermal gradient overlay" }
  ]
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
