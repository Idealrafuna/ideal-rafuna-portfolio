import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { publications } from "@/data/publications";

const PublicationsSection = () => {
  // Sort publications: featured first, then by year desc
  const sortedPublications = [...publications].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  const getStatusBadgeColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "published") {
      return "border-green-500 text-green-600";
    } else if (normalizedStatus === "in-press") {
      return "border-blue-500 text-blue-600";
    } else if (normalizedStatus === "under-review") {
      return "border-amber-500 text-amber-600";
    } else if (normalizedStatus === "preprint") {
      return "border-gray-500 text-gray-600";
    } else if (normalizedStatus === "submitted") {
      return "border-gray-500 text-gray-600";
    }
    return "border-blue-500 text-blue-600";
  };

  return (
    <section id="publications" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the advancement of systems engineering through peer-reviewed research and scholarly work
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {sortedPublications.map((pub) => (
            <Card 
              key={pub.id || pub.title} 
              className={`p-6 shadow-soft hover:shadow-medium transition-shadow ${
                pub.featured ? "border-2 border-primary bg-academic-highlight/30" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <FileText className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(pub.status)}`}>
                      {pub.status}
                    </Badge>
                    {pub.featured && (
                      <Badge variant="outline" className="text-xs border-primary text-primary bg-primary/10">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Authors:</strong> {pub.authors}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>{pub.venue}</strong> • {pub.year}</p>
                  {pub.highlight && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{pub.highlight}</p>
                  )}
                  {pub.myRole && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      <strong>My role:</strong> {pub.myRole}
                    </p>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:underline inline-block mb-3"
                    >
                      Manuscript PDF (submitted)
                    </a>
                  )}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {pub.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {pub.link && (
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(pub.link, '_blank')}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View paper
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-soft bg-academic-highlight">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">Research Collaboration</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 text-center leading-relaxed">
            I'm actively seeking collaborative research opportunities in digital twins, adaptive control, UAV systems, and operations research applications.
          </p>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.href = 'mailto:rafunaideal@gmail.com'}>
              Discuss Research Opportunities
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PublicationsSection;

