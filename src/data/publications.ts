export type PublicationStatus = "published" | "in-press" | "under-review" | "preprint" | "submitted";

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
    venue: "Physics of Fluids (Q1, AIP Publishing)",
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
    pdf: "/papers/wind-coherence-2025.pdf",
    featured: true
  },
  {
    title: "Multispectral Pedestrian Detection in Low-Light Conditions: Infrared, Visible, and Fusion-Based Approaches for CCTV Applications",
    authors: "Y. Rexhaj, R. Rexhepi, A. Jetullahu, and I. Rafuna",
    venue: "UBT International Conference 2025 (DOI: 10.33107/ubt-ic.2025.290)",
    year: 2025,
    status: "published",
    id: "UBT-LLVIP-YOLOv8-2025",
    tags: [
      "computer vision",
      "YOLOv8",
      "multispectral detection",
      "infrared",
      "visible spectrum",
      "brightness-guided WBF",
      "low-light surveillance"
    ],
    highlight:
      "Developed a YOLOv8-based multispectral pedestrian detection system integrating infrared–visible fusion with brightness-guided Weighted Boxes Fusion (WBF) for illumination-invariant performance in CCTV environments.",
    myRole:
      "Co-developer; trained VIS/IR YOLOv8 models, implemented brightness-guided WBF fusion, conducted cross-spectrum correlation analysis, and contributed to methodology and experimental results.",
    link: "https://knowledgecenter.ubt-uni.net/conference/2025UBTIC/MSER/7",
    pdf: "/papers/multispectral-detection-2025.pdf",
    featured: true
  }
];
