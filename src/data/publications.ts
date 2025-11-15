export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "Published" | "Under Review" | "In Preparation";
  type: "Journal" | "Conference" | "Workshop";
  abstract: string;
  presentationDate?: string;
  doi?: string;
  arxiv?: string;
}

export const publications: Publication[] = [
  {
    id: "multispectral-detection",
    title: "Multispectral Pedestrian Detection in Low-Light Conditions Using YOLOv8 and Weighted Boxes Fusion",
    authors: "I. Rafuna, et al.",
    venue: "International Conference on Computer Vision Applications",
    year: "2025",
    status: "Under Review",
    type: "Conference",
    abstract: "This work presents a novel approach to pedestrian detection in challenging low-light conditions by leveraging multispectral imaging. We combine infrared and visible spectrum data through Weighted Boxes Fusion with YOLOv8 architecture, achieving approximately 0.97 precision in scenarios where traditional single-spectrum methods fail. The system demonstrates robust real-time performance suitable for autonomous vehicle and surveillance applications.",
    presentationDate: "October 28, 2025"
  },
  {
    id: "digital-twin-uav",
    title: "Real-Time Digital Twin Framework for UAV Systems: Architecture and Implementation",
    authors: "I. Rafuna",
    venue: "IEEE Transactions on Aerospace and Electronic Systems",
    year: "2025",
    status: "In Preparation",
    type: "Journal",
    abstract: "Presents a comprehensive digital twin framework for unmanned aerial vehicle systems with focus on real-time telemetry streaming, 3D visualization, and system health monitoring. The architecture achieves low-latency data synchronization at ~20 Hz using FastAPI and WebSocket protocols, enabling real-time operational decision-making and predictive maintenance."
  },
  {
    id: "rl-safety-constraints",
    title: "Safety-Constrained Reinforcement Learning for UAV Control: A Digital Twin Approach",
    authors: "I. Rafuna, et al.",
    venue: "Journal of Intelligent & Robotic Systems",
    year: "2025",
    status: "In Preparation",
    type: "Journal",
    abstract: "Explores the integration of safety constraints within reinforcement learning algorithms (PPO and SAC) for UAV control systems. Using a digital twin simulation environment, we demonstrate robust controller performance while maintaining strict safety boundaries, addressing a critical challenge in deploying RL-based autonomous systems in real-world scenarios."
  }
];
