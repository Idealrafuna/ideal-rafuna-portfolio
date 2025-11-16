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
  }
];
