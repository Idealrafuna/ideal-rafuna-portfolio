import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { publications } from "@/data/publications";

const PublicationsSection = () => {
  const sortedPublications = [...publications].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  const getStatusBadgeColor = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "published") {
      return "border-green-500 text-green-600";
    }
    if (normalizedStatus === "in-press") {
      return "border-blue-500 text-blue-600";
    }
    if (normalizedStatus === "under-review") {
      return "border-amber-500 text-amber-600";
    }
    return "border-gray-500 text-gray-600";
  };

  return (
    <section id="publications" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Selected Publications & Technical Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research evidence supporting technical depth in time-series analysis, atmospheric flows,
            computer vision, and engineering data pipelines.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {sortedPublications.map((pub) => (
            <Card
              key={pub.id || pub.title}
              className={`engineering-card p-6 shadow-soft hover:shadow-medium ${
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
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>{pub.venue}</strong> • {pub.year}
                  </p>
                  {pub.highlight && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {pub.highlight}
                    </p>
                  )}
                  {pub.myRole && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      <strong>Technical contribution:</strong> {pub.myRole}
                    </p>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-block mb-3"
                    >
                      Manuscript PDF
                    </a>
                  )}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">
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
                        onClick={() => window.open(pub.link, "_blank")}
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
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Technical Research Background
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 text-center leading-relaxed">
            My publication record supports my ability to work with complex datasets, numerical methods,
            computer vision pipelines, and engineering analysis workflows. I bring research-level problem
            solving into practical systems engineering and product development.
          </p>
          <div className="text-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                window.location.href = "mailto:rafunaideal@gmail.com";
              }}
            >
              Discuss Engineering Roles
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PublicationsSection;
