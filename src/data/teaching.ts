export interface TeachingRole {
  id: string;
  title: string;
  institution: string;
  period: string;
  type: "Lecturer" | "Lab Lead" | "Co-Instructor" | "Supervisor";
  description: string;
  responsibilities: string[];
  gallery?: Array<{ type: "image"; src: string; alt: string; category?: string }>;
}

export const teachingRoles: TeachingRole[] = [
  {
    id: "mechatronics",
    title: "Introduction to Mechatronics",
    institution: "UBT, Kosovo",
    period: "2025 - Present",
    type: "Lecturer",
    description: "Designed and delivered comprehensive mechatronics curriculum covering sensors, actuators, microcontrollers, and system integration.",
    responsibilities: [
      "Syllabus design and curriculum development",
      "Lecture preparation and delivery",
      "Laboratory experiment design",
      "Student project mentorship",
      "Assessment and evaluation"
    ]
  },
  {
    id: "cs1",
    title: "Computer Science I",
    institution: "UBT, Kosovo",
    period: "2025 - Present",
    type: "Lecturer",
    description: "Introductory programming course focusing on computational thinking and software development fundamentals.",
    responsibilities: [
      "Course material development",
      "Programming fundamentals instruction",
      "Hands-on coding labs",
      "Student code review and mentorship"
    ]
  },
  {
    id: "electrical-lab",
    title: "Electrical Science Lab I",
    institution: "UBT, Kosovo",
    period: "2025 - Present",
    type: "Lab Lead",
    description: "Led laboratory sessions covering circuit analysis, measurements, and electrical engineering principles.",
    responsibilities: [
      "Laboratory experiment design",
      "Safety protocol implementation",
      "Equipment management and maintenance",
      "Student guidance during experiments",
      "Lab report evaluation"
    ]
  },
  {
    id: "mechatronic-systems",
    title: "Mechatronic Systems – Design & Implementation",
    institution: "UBT, Kosovo",
    period: "2025 - Present",
    type: "Lecturer",
    description: "Advanced course on integrated mechatronic system design, emphasizing real-world applications and project-based learning.",
    responsibilities: [
      "Advanced topics in system integration",
      "Real-world project supervision",
      "Industry collaboration coordination",
      "Capstone project mentorship"
    ]
  },
  {
    id: "rl-robotics",
    title: "Special Topics in Robotics: RL Robot Twin",
    institution: "UBT, Kosovo",
    period: "2025",
    type: "Co-Instructor",
    description: "Graduate-level course on reinforcement learning applications in robotics and UAV digital twin systems.",
    responsibilities: [
      "RL algorithm instruction (PPO, SAC)",
      "Digital twin framework development",
      "Student research project guidance",
      "Sim-to-real transfer methodology",
      "Safety and stability constraint integration"
    ],
    gallery: [
      // Photos
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm side view.jpg", alt: "Robot arm side view", category: "photo" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view.jpg", alt: "Robot arm front view", category: "photo" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Robot arm front view 2.jpg", alt: "Robot arm front view 2", category: "photo" },
      { type: "image", src: "/media/teaching/rl-robotics/photos/Back view .jpg", alt: "Robot arm back view", category: "photo" },
      // 3D CAD Drawings
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING BACK VIEW .png", alt: "3D CAD Drawing - Back View", category: "3d" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING FRONT VIEW .png", alt: "3D CAD Drawing - Front View", category: "3d" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW .png", alt: "3D CAD Drawing - Side View", category: "3d" },
      { type: "image", src: "/media/teaching/rl-robotics/3d-drawings/3D CAD DRAWING SIDE VIEW 2.png", alt: "3D CAD Drawing - Side View 2", category: "3d" }
    ]
  },
  {
    id: "aerospace-lab",
    title: "Aerospace Laboratory Supervisor",
    institution: "UBT, Kosovo",
    period: "2025 - Present",
    type: "Supervisor",
    description: "Oversee all aerospace laboratory operations, managing UAV and robotics research projects while mentoring students in systems thinking.",
    responsibilities: [
      "Laboratory operations management",
      "UAV and robotics project supervision",
      "Research infrastructure development",
      "Safety and compliance management",
      "Student research mentorship",
      "Equipment procurement and maintenance",
      "Collaboration with industry partners"
    ]
  }
];
