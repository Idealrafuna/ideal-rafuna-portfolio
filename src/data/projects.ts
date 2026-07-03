export interface Project {
  id: string;
  title: string;
  description: string;
  overview?: string;
  highlights: string[];
  technologies: string[];
  status: string;
  role?: string;
  privacyNote?: string;
  demonstrates?: string[];
  github?: string;
  demo?: string;
  pdf?: string;
  categories: string[];
  mediaType?: "image" | "video" | "embed" | "none";
  mediaSrc?: string;
  mediaAlt?: string;
  gallery?: Array<{ type: "image" | "video"; src: string; alt: string }>;
  metrics?: string[];
  proofBadges?: string[];
  impact?: string;
  problem?: string;
  system?: string;
  contribution?: string;
  employerRelevance?: string;
}

export const projects: Project[] = [
  {
    id: "tellotwin",
    title: "TelloTwin - UAV Digital Twin System",
    description:
      "Real-time UAV digital twin platform integrating DJI Tello telemetry, FastAPI services, WebSocket streaming, and React/Three.js visualization for live flight monitoring.",
    overview:
      "Designed and integrated a 3-component UAV digital twin architecture connecting drone telemetry acquisition, backend APIs, and browser-based 3D visualization. The system supports real-time flight-state monitoring, simulation fallback, mission planning, emergency controls, telemetry history, CSV logging, and interactive playback.",
    highlights: [
      "Designed 3-component architecture: UAV interface, FastAPI backend, React/Three.js dashboard",
      "Implemented 10 Hz telemetry streaming with a 17-field flight-state model",
      "Built 12 REST endpoints and 1 WebSocket telemetry stream",
      "Integrated real DJI Tello support with simulation fallback",
      "Added mission planning, emergency controls, historical playback, and CSV telemetry export",
    ],
    technologies: ["FastAPI", "Python", "React", "TypeScript", "Three.js", "WebSocket", "DJI Tello"],
    status: "Active Development",
    github: "https://github.com/Idealrafuna",
    categories: ["Digital Twin", "UAV / Robotics", "Systems Engineering", "Software Systems"],
    mediaType: "image",
    mediaSrc: "/media/tellotwin/dashboard-live.png",
    mediaAlt: "TelloTwin UAV digital twin dashboard with live telemetry visualization",
    metrics: ["10 Hz telemetry", "17-field state model", "12 REST endpoints", "1 WebSocket stream"],
    proofBadges: ["Real-time", "Systems Integration", "Digital Twin", "UAV", "Full-stack"],
    impact:
      "Demonstrates integration across physical drone telemetry, backend interfaces, real-time streaming, and browser-based 3D monitoring.",
    problem:
      "Need to monitor UAV flight state in real time through a browser-based digital twin.",
    system:
      "UAV telemetry acquisition + FastAPI backend + WebSocket + React/Three.js frontend.",
    contribution:
      "Real-time streaming, flight-state model, command endpoints, simulation fallback, telemetry history, emergency controls, and CSV export.",
    employerRelevance:
      "Demonstrates systems integration, interface design, telemetry pipelines, real-time visualization, and validation thinking.",
    gallery: [
      { type: "image", src: "/media/tellotwin/dashboard-live.png", alt: "Dashboard interface in live mode" },
      { type: "image", src: "/media/tellotwin/dashboard-sim.png", alt: "Dashboard interface in simulation mode" },
      { type: "image", src: "/media/tellotwin/3d-model-1.png", alt: "TelloTwin 3D model view 1" },
      { type: "image", src: "/media/tellotwin/3d-model-2.png", alt: "TelloTwin 3D model view 2" },
      { type: "image", src: "/media/tellotwin/real-life-1.jpg", alt: "Real DJI Tello setup view 1" },
      { type: "image", src: "/media/tellotwin/real-life-2.jpg", alt: "Real DJI Tello setup view 2" },
      { type: "image", src: "/media/tellotwin/real-life-3.jpg", alt: "Real DJI Tello setup view 3" },
      { type: "image", src: "/media/tellotwin/real-life-4.jpg", alt: "Real DJI Tello setup view 4" },
    ],
  },
  {
    id: "bealbanian",
    title: "BeAlbanian — Cross-Platform Learning Platform",
    description:
      "Albanian learning platform spanning mobile, web, backend APIs, live multiplayer, and progress systems.",
    overview:
      "Detailed product visuals, feature flows, and core product mechanics are intentionally withheld pre-launch.",
    highlights: [
      "Mobile, web, and backend architecture",
      "Real-time multiplayer quiz sessions",
      "Progress tracking and content systems",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    status: "Private Product Engineering Project · Active Development",
    role: "Lead Developer",
    privacyNote: "Detailed product visuals, feature flows, and core product mechanics are intentionally withheld pre-launch.",
    demonstrates: [
      "Full-stack product engineering",
      "Real-time systems design",
      "Cross-platform architecture",
      "Scalable backend and data infrastructure",
    ],
    categories: ["Software Systems", "Product Engineering", "Real-Time Systems"],
    mediaType: "none",
    metrics: ["Mobile + Web + API", "Real-time multiplayer", "Progress systems"],
    proofBadges: [
      "Full-stack product engineering",
      "Real-time systems design",
      "Cross-platform architecture",
      "Scalable backend and data infrastructure",
    ],
    impact:
      "Shows product execution across mobile, web, backend, real-time synchronization, and database-backed learning systems without exposing product strategy.",
    problem:
      "Need a cross-platform learning product for Albanian language and culture.",
    system: "Mobile apps + web surface + backend API + database + real-time synchronization layer.",
    contribution:
      "Lead developer for full-stack architecture, mobile/web integration, real-time services, backend APIs, progress-tracking workflows, and product-safe implementation planning.",
    employerRelevance:
      "Demonstrates full-stack architecture, real-time synchronization, product execution, and scalable data systems.",
  },
  {
    id: "wind-coherence",
    title: "Wind Coherence Analysis - Atmospheric Time-Series Modelling",
    description:
      "Frequency-domain analysis of multi-year wind velocity records from six U.S. airports using NUDFT methods for irregularly sampled atmospheric datasets.",
    overview:
      "Analyzed nonuniform wind time-series data spanning multiple years from six geographically distributed U.S. airports using nonuniform discrete Fourier transform methods. The work supports engineering-scale atmospheric data analysis and was published in Physics of Fluids.",
    highlights: [
      "Analyzed multi-year wind velocity records from 6 major U.S. airports",
      "Developed frequency-domain correlation methods for irregularly sampled time-series data",
      "Used NUDFT-based spectral methods to study spatial and temporal coherence",
      "Co-authored publication in Physics of Fluids",
      "Applied Python/MATLAB workflows for engineering-scale atmospheric data analysis",
    ],
    technologies: ["Python", "MATLAB", "NUDFT", "Spectral Analysis", "Time-Series Processing", "Scientific Computing"],
    status: "Published",
    demo: "Published in Physics of Fluids",
    pdf: "/papers/wind-coherence-2025.pdf",
    categories: ["Simulation", "Data Analysis", "Research Evidence"],
    mediaType: "image",
    mediaSrc: "/media/wind-coherence/coherence-visualization.png",
    mediaAlt: "Wind coherence analysis visualization",
    metrics: ["6 airports", "Multi-year records", "NUDFT methods"],
    proofBadges: ["Simulation", "Published Research", "Data Analysis"],
    impact:
      "Evidence of rigorous numerical analysis, atmospheric data processing, and scientific computing for physical systems.",
    problem:
      "Need to characterize spatial and temporal coherence in irregularly sampled atmospheric wind records.",
    system: "Multi-year airport wind datasets + NUDFT spectral analysis + Python/MATLAB analysis workflows.",
    contribution:
      "Frequency-domain correlation methods, irregular time-series processing, coherence interpretation, and manuscript support.",
    employerRelevance:
      "Demonstrates engineering data analysis, numerical methods, model interpretation, and research-level problem solving.",
    gallery: [
      { type: "image", src: "/media/wind-coherence/wind-rose-plots.png", alt: "Wind rose plots across six airports" },
      { type: "image", src: "/media/wind-coherence/spectral-density-plots.png", alt: "Spectral density analysis plots" },
      { type: "image", src: "/media/wind-coherence/coherence-analysis-plots.png", alt: "Coherence analysis plots" },
    ],
  },
  {
    id: "yolov8-multispectral",
    title: "Multispectral Pedestrian Detection - YOLOv8 IR/VIS Fusion",
    description:
      "Computer vision pipeline combining visible and infrared imagery with YOLOv8 and brightness-guided Weighted Boxes Fusion for low-light pedestrian detection.",
    overview:
      "Built an adaptive fusion framework combining infrared and visible spectrum imaging for pedestrian detection in low-light monitoring scenarios. The pipeline uses YOLOv8 and brightness-guided Weighted Boxes Fusion to improve detection robustness under challenging illumination.",
    highlights: [
      "Built IR/VIS fusion framework for low-light detection",
      "Implemented brightness-guided Weighted Boxes Fusion",
      "Achieved approximately 0.97 precision in low-light scenarios",
      "Published through UBT International Conference MSER track",
      "Applied computer vision methods to real-time smart-city surveillance use cases",
    ],
    technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Weighted Boxes Fusion"],
    status: "Published",
    demo: "Presented on Oct 18, 2025 at the UBT International Conference",
    pdf: "/papers/multispectral-detection-2025.pdf",
    categories: ["Computer Vision", "Software Systems", "Research Evidence"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/yolov8-detection.png",
    mediaAlt: "YOLOv8 multispectral pedestrian detection results",
    metrics: ["~0.97 precision", "IR/VIS fusion", "YOLOv8 pipeline"],
    proofBadges: ["Computer Vision", "Published Research", "AI"],
    impact:
      "Shows applied AI for sensor fusion, low-light detection, and practical monitoring workflows.",
    problem:
      "Need robust pedestrian detection when visible-light imagery is degraded by low illumination.",
    system: "Visible imagery + infrared imagery + YOLOv8 models + brightness-guided Weighted Boxes Fusion.",
    contribution:
      "Model training, fusion logic, low-light evaluation, confidence analysis, and publication methodology.",
    employerRelevance:
      "Demonstrates applied computer vision, sensor fusion, metric-driven validation, and deployable AI pipeline thinking.",
    gallery: [
      { type: "image", src: "/media/yolov8/detection-grid.png", alt: "Adaptive fusion detection results" },
      { type: "image", src: "/media/yolov8/analysis-graph.png", alt: "Brightness versus detection confidence analysis" },
    ],
  },
  {
    id: "dbf-kosovo",
    title: "DBF Kosovo - Aerospace Team Formation & Systems Leadership",
    description:
      "Established and structured Kosovo's first AIAA Design-Build-Fly initiative, coordinating student teams across aircraft design, avionics, propulsion, control, manufacturing, and validation.",
    overview:
      "Established the first AIAA Design-Build-Fly initiative in Kosovo and the wider Balkans region, creating a technical team structure and systems engineering workflow for student aircraft development inside the UBT laboratory environment.",
    highlights: [
      "Founded first AIAA Design-Build-Fly initiative in Kosovo/Balkans region",
      "Structured multidisciplinary aircraft development team",
      "Defined systems engineering workflows, technical documentation, and design review cadence",
      "Mentored students across aerodynamics, structures, avionics, propulsion, and flight control",
      "Built aerospace project infrastructure inside UBT laboratory environment",
    ],
    technologies: ["SolidWorks", "ANSYS", "MATLAB", "Systems Engineering", "Technical Documentation"],
    status: "Active Initiative",
    github: "https://github.com/DBF-Kosovo",
    categories: ["Systems Engineering", "UAV / Robotics", "Leadership"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/dbf-aircraft.png",
    mediaAlt: "DBF Kosovo aircraft systems concept",
    metrics: ["First Kosovo/Balkans DBF initiative", "Multidisciplinary team", "Design review cadence"],
    proofBadges: ["Systems Integration", "Leadership", "UAV"],
    impact:
      "Shows practical systems leadership, aerospace team formation, mentoring, and engineering process design.",
    problem:
      "Need structured aerospace project capability for student aircraft design, build, test, and validation.",
    system: "Team formation + aircraft subsystems + documentation standards + review cadence + lab infrastructure.",
    contribution:
      "Team structure, systems workflows, subsystem coordination, design reviews, and technical mentoring.",
    employerRelevance:
      "Demonstrates systems leadership, multidisciplinary coordination, requirements thinking, and validation culture.",
    gallery: [
      { type: "image", src: "/media/placeholders/dbf-aircraft.png", alt: "DBF aircraft concept placeholder" },
    ],
  },
  {
    id: "rl-robot-twin",
    title: "RL Robot Twin - Robotics Digital Twin Teaching Project",
    description:
      "Graduate robotics digital twin and reinforcement learning teaching project combining robot hardware, CAD, simulation, and safety-aware control concepts.",
    overview:
      "Co-developed robotics teaching material that connects physical robot hardware, CAD drawings, simulation workflows, and reinforcement learning concepts. The project demonstrates technical leadership across robot systems, simulation, safety-aware control thinking, and student mentoring.",
    highlights: [
      "Connected robot hardware, CAD views, and simulation concepts for robotics instruction",
      "Introduced reinforcement learning workflows including PPO/SAC concepts",
      "Emphasized safety constraints, robustness, and validation thinking",
      "Supported students in robotics experimentation and control-focused projects",
      "Used lab supervision to translate theory into practical mechatronics workflows",
    ],
    technologies: ["Python", "PyTorch", "Gymnasium", "ROS", "MATLAB", "CAD"],
    status: "Completed",
    github: "https://github.com/Idealrafuna",
    categories: ["UAV / Robotics", "Simulation", "Leadership"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/rl-robot-twin.png",
    mediaAlt: "Robotics digital twin teaching environment",
    metrics: ["Robot hardware", "CAD + simulation", "Safety-aware control"],
    proofBadges: ["Robotics", "Simulation", "Technical Leadership"],
    impact:
      "Shows ability to translate robotics, simulation, and control concepts into practical lab workflows.",
    problem:
      "Need to teach robotics and control concepts through practical links between hardware, simulation, and modelling.",
    system: "Robot hardware + CAD assets + simulation workflows + reinforcement learning concepts.",
    contribution:
      "Instructional design, lab supervision, technical mentoring, and control/simulation workflow support.",
    employerRelevance:
      "Demonstrates robotics literacy, simulation fluency, technical communication, and safety-aware systems thinking.",
    gallery: [
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm side view.jpg", alt: "Robot arm side view" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view.jpg", alt: "Robot arm front view" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view 2.jpg", alt: "Robot arm front view 2" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Back view .jpg", alt: "Robot arm back view" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING BACK VIEW .png", alt: "3D CAD drawing back view" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING FRONT VIEW .png", alt: "3D CAD drawing front view" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW .png", alt: "3D CAD drawing side view" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW 2.png", alt: "3D CAD drawing side view 2" },
    ],
  },
  {
    id: "nasa-rascal",
    title: "NASA RASC-AL - Multinational Systems Engineering Team",
    description:
      "Thermodynamics subgroup leadership for NASA RASC-AL concept work, coordinating technical analysis and documentation across a multinational student team.",
    overview:
      "Led thermodynamics subgroup work for a NASA RASC-AL aerospace systems concept, coordinating analysis across partner universities and supporting technical deliverables for a multi-use platform concept.",
    highlights: [
      "Coordinated multinational technical collaboration",
      "Led thermodynamics subgroup analysis",
      "Supported concept-level aerospace systems engineering",
      "Prepared technical documentation and reporting",
      "Balanced subsystem analysis with cross-team integration needs",
    ],
    technologies: ["MATLAB", "CAD", "Thermal Analysis", "Technical Documentation"],
    status: "Completed",
    categories: ["Systems Engineering", "Simulation", "Leadership"],
    mediaType: "image",
    mediaSrc: "/media/nasa-rascal/satellite-thermal.png",
    mediaAlt: "Satellite thermal management concept visualization",
    metrics: ["Thermal analysis", "Multinational team", "Concept systems work"],
    proofBadges: ["Systems Engineering", "Simulation", "Leadership"],
    impact:
      "Evidence of aerospace concept engineering, subsystem analysis, and cross-cultural technical coordination.",
    problem:
      "Need coordinated thermodynamics analysis for an aerospace systems concept submission.",
    system: "Multinational team + thermal subsystem analysis + concept documentation + design integration.",
    contribution:
      "Thermodynamics subgroup leadership, analysis coordination, reporting, and cross-team communication.",
    employerRelevance:
      "Demonstrates aerospace systems thinking, technical ownership, and structured engineering communication.",
    gallery: [
      { type: "image", src: "/media/nasa-rascal/Proposal 1.png", alt: "NASA RASC-AL team roster" },
      { type: "image", src: "/media/nasa-rascal/Proposal 2.png", alt: "NASA RASC-AL project proposal overview" },
    ],
  },
  {
    id: "clarkson-aeroelastic",
    title: "Aeroelastic & Acoustics Simulation - Bio-Inspired Wing Study",
    description:
      "Aerodynamic and structural simulation of butterfly-wing-inspired geometries using ANSYS FEA and Fluent workflows.",
    overview:
      "Investigated biomimetic aerodynamic principles through computational analysis of butterfly wing structures using ANSYS FEA and Fluent CFD. The work developed aeroelastic and acoustic analysis experience for mechanical and aerospace systems.",
    highlights: [
      "Performed ANSYS FEA modelling of butterfly-wing-inspired geometries",
      "Ran Fluent CFD simulations to evaluate aerodynamic behavior",
      "Supported aeroelastic and acoustic response analysis",
      "Used MATLAB FFT and waveform analysis workflows",
      "Connected biomimicry concepts to engineering simulation practice",
    ],
    technologies: ["ANSYS", "Fluent", "MATLAB", "3D Printing", "FEA", "CFD"],
    status: "Completed",
    categories: ["Simulation", "Systems Engineering", "Research Evidence"],
    mediaType: "image",
    mediaSrc: "/media/placeholders/aeroelastic-wing.png",
    mediaAlt: "Butterfly wing aeroelastic simulation",
    metrics: ["CFD", "FEA", "Aeroelastic analysis"],
    proofBadges: ["Simulation", "Aerospace", "FEA / CFD"],
    impact:
      "Shows practical simulation literacy across structural, aerodynamic, and mechanical analysis workflows.",
    problem:
      "Need to evaluate aeroelastic behavior of bio-inspired wing geometries through simulation.",
    system: "ANSYS FEA + Fluent CFD + MATLAB signal analysis + 3D-printed biomimetic geometries.",
    contribution:
      "Structural modelling, CFD setup, acoustic response analysis, and simulation result interpretation.",
    employerRelevance:
      "Demonstrates simulation discipline, mechanical systems analysis, and aerospace engineering fundamentals.",
    gallery: [
      { type: "image", src: "/media/Aeroelasticity/Wing simulation.png", alt: "Butterfly wing aeroelastic FEA and CFD analysis" },
    ],
  },
];
