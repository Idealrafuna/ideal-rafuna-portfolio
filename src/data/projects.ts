export interface Project {
  id: string;
  title: string;
  description: string;
  overview?: string;
  highlights: string[];
  technologies: string[];
  status: string;
  github?: string;
  demo?: string;
  pdf?: string;
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
    overview: "Built a real-time digital twin system to bridge physical DJI Tello drones with live 3D visualization for monitoring and diagnostics. Achieved sub-50ms latency at 20 Hz streaming rates using FastAPI websockets and optimized Three.js rendering.",
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
    overview: "Co-designed and taught a graduate-level course where students implement deep reinforcement learning controllers for robotic manipulation tasks. Course curriculum covers PPO and SAC algorithms with domain randomization for robust sim-to-real transfer.",
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
    overview: "Developed an adaptive fusion framework combining infrared and visible spectrum imaging for pedestrian detection in low-light urban surveillance scenarios. Achieved 0.97 precision using brightness-guided Weighted Boxes Fusion, with results presented at UBT International Conference 2024.",
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
    id: "wind-coherence",
    title: "Wind Coherence Analysis – National Airspace System",
    description: "Spectral analysis of multi-year wind velocity records across six major U.S. airports to characterize spatial and temporal coherence patterns in the national airspace.",
    overview: "Analyzed nonuniform wind time-series data spanning multiple years from six geographically distributed U.S. airports using nonuniform discrete Fourier transform (NUDFT). Research revealed scale- and distance-dependent coherence structures across the national airspace system, contributing to understanding of atmospheric dynamics at infrastructure scale.",
    highlights: [
      "Processed multi-year wind velocity records from 6 major U.S. airports",
      "Implemented nonuniform discrete Fourier transform (NUDFT) for spectral analysis",
      "Developed frequency-domain correlation methods for irregular time series",
      "Identified scale-dependent coherence patterns across 1000+ km distances",
      "Co-authored manuscript submitted to Physics of Fluids (AIP Publishing)"
    ],
    technologies: ["Python", "MATLAB", "Spectral Analysis", "NUDFT", "Time-Series Processing", "Scientific Computing"],
    status: "Under Review - Physics of Fluids",
    demo: "Manuscript submitted to Physics of Fluids (Q1, AIP Publishing)",
    pdf: "/papers/wind-coherence-2025.pdf",
    categories: ["Research", "Data Science"],
    mediaType: "image",
    mediaSrc: "/media/wind-coherence/coherence-visualization.png",
    mediaAlt: "Wind Coherence Analysis - National Airspace System Visualization",
    gallery: [
      { type: "image", src: "/media/wind-coherence/wind-rose-plots.png", alt: "Wind Rose Plots - Wind Speed and Direction Distribution Across Six Airports" },
      { type: "image", src: "/media/wind-coherence/spectral-density-plots.png", alt: "Spectral Density Analysis - Power Spectra with -5/3 Kolmogorov Slope" },
      { type: "image", src: "/media/wind-coherence/coherence-analysis-plots.png", alt: "Coherence Analysis - Cumulative Cross-Correlation and Frequency-Domain Metrics" }
    ]
  },
  {
    id: "bealbanian",
    title: "BeAlbanian – AR Language & Heritage Platform",
    description: "Unity AR platform with React frontend and Supabase backend for gamified Albanian language learning with speech recognition.",
    overview: "Founded AlbaBridge Tech to build an AR-based platform for teaching Albanian language through gamified cultural experiences and location-based storytelling. Integrated Unity AR, speech recognition, and Supabase backend to create an immersive learning ecosystem. Platform includes AI-powered dance training and learning modules with hand and foot pose detection sensors.",
    highlights: [
      "Unity AR core with location-based features",
      "React web application",
      "Supabase + PostgreSQL backend",
      "Speech-to-text integration",
      "AI-powered dance training with hand and foot pose detection sensors",
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
      { type: "image", src: "/media/BeAlbanian/Hand_sensor_1.jpg", alt: "Hand Pose Detection - Gesture Recognition" },
      { type: "image", src: "/media/BeAlbanian/Hand_sensor_2.jpg", alt: "Hand Pose Detection - Real-time Tracking" },
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
    overview: "Spearheading the establishment of Kosovo's first AIAA Design-Build-Fly competition team, building aerospace engineering capacity in the Western Balkans. Leading team structure, recruitment, and technical mentorship to prepare for 2026 competition participation.",
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
    overview: "Led thermodynamics subgroup for NASA's Revolutionary Aerospace Systems Concepts Academic Linkage competition, coordinating analysis across partner universities in three continents. Managed technical deliverables and cross-cultural collaboration between Khalifa University and RMIT teams.",
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
    overview: "Investigated biomimetic aerodynamic principles through computational analysis of butterfly wing structures using ANSYS FEA and Fluent CFD. Research explored aeroelastic response and acoustic signatures of 3D-printed bio-inspired geometries.",
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
