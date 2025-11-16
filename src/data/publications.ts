export type PublicationStatus = "published" | "in-press" | "under-review" | "preprint";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  id?: string;
  highlight?: string;
  tags?: string[];
  link?: string;
  myRole?: string;
  pdf?: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Frequency-domain correlation of nonuniform time series: Coherence across distant wind stations",
    authors: "B. D. Caraway, R. Bogucki, I. Rafuna, M. Reyna, S. Cheng, and L. P. Chamorro",
    venue: "Submitted to Physics of Fluids (AIP Publishing)",
    year: 2025,
    status: "under-review",
    id: "POF25-AR-19780",
    tags: [
      "turbulent flows",
      "geophysical flows",
      "frequency-domain analysis",
      "nonuniform sampling",
      "NUDFT",
      "atmospheric variability"
    ],
    highlight:
      "Co-authored study using nonuniform discrete Fourier transform (NUDFT) to analyze multi-year wind records from six U.S. airports, revealing scale- and distance-dependent coherence across the national airspace system.",
    myRole:
      "Co-author; contributed to handling nonuniform wind time series, assisted with frequency-domain analysis and interpretation of coherence metrics, and supported manuscript preparation.",
    link: undefined,
    pdf: "/papers/POF25-AR-19780.pdf",
    featured: true
  },
  {
    id: "multispectral-detection",
    title: "Multispectral Pedestrian Detection in Low-Light Conditions Using YOLOv8 and Weighted Boxes Fusion",
    authors: "I. Rafuna, et al.",
    venue: "International Conference on Computer Vision Applications",
    year: 2025,
    status: "under-review",
    highlight: "This work presents a novel approach to pedestrian detection in challenging low-light conditions by leveraging multispectral imaging. We combine infrared and visible spectrum data through Weighted Boxes Fusion with YOLOv8 architecture, achieving approximately 0.97 precision in scenarios where traditional single-spectrum methods fail. The system demonstrates robust real-time performance suitable for autonomous vehicle and surveillance applications.",
    tags: [
      "computer vision",
      "multispectral imaging",
      "YOLOv8",
      "pedestrian detection",
      "low-light conditions"
    ],
    pdf: "/papers/multispectral-detection.pdf"
  }
];
