import { FileText, ExternalLink, Download, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Advanced Dew-Point Cooling Systems for Aerospace Applications",
      authors: "I. Rafuna, et al.",
      journal: "International Journal of Thermal Sciences",
      year: "2024",
      status: "Published",
      type: "Journal Article",
      abstract: "Investigation of novel dew-point cooling methodologies for enhanced thermal management in aerospace systems, with applications to UAV operations in extreme environments."
    },
    {
      title: "Digital Twin Framework for Autonomous UAV Systems",
      authors: "I. Rafuna, A. Smith, B. Johnson",
      journal: "IEEE Transactions on Aerospace and Electronic Systems",
      year: "2024",
      status: "Under Review",
      type: "Journal Article", 
      abstract: "Comprehensive framework developing digital twin representations of UAV systems for real-time monitoring, predictive maintenance, and performance optimization."
    },
    {
      title: "Acoustic Analysis of Multi-Rotor UAV Configurations",
      authors: "I. Rafuna, C. Davis",
      journal: "Journal of Sound and Vibration",
      year: "2023",
      status: "Published",
      type: "Journal Article",
      abstract: "Systematic study of noise generation patterns in various multi-rotor UAV configurations, with implications for urban air mobility applications."
    },
    {
      title: "Aeroelastic Modeling of Flexible Wing UAVs",
      authors: "I. Rafuna",
      journal: "AIAA SciTech Conference Proceedings",
      year: "2023",
      status: "Published",
      type: "Conference Paper",
      abstract: "Advanced computational models for predicting aeroelastic behavior in flexible wing unmanned aerial vehicles under various flight conditions."
    }
  ];

  const researchAreas = [
    "Systems Engineering & Digital Twins",
    "Unmanned Aerial Vehicle Design",
    "Aeroelasticity & Structural Dynamics",
    "Thermal Management Systems",
    "Acoustic Engineering",
    "Robotics & Mechatronics"
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the advancement of systems engineering through peer-reviewed 
            research and collaborative scholarly work
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Research Areas
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {researchAreas.map((area, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-16">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${pub.type === "Journal Article" ? "border-primary text-primary" : "border-secondary text-secondary"}`}
                    >
                      {pub.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        pub.status === "Published" ? "border-green-500 text-green-600" : 
                        "border-yellow-500 text-yellow-600"
                      }`}
                    >
                      {pub.status}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>{pub.journal}</strong> • {pub.year}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-48">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Online
                  </Button>
                  {pub.status === "Published" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 shadow-soft bg-academic-highlight">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Research Collaboration
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              I'm always interested in collaborative research opportunities and academic partnerships. 
              If you're working on projects related to systems engineering, UAVs, digital twins, or 
              mechatronics, I'd love to explore potential collaborations.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Discuss Research Opportunities
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;