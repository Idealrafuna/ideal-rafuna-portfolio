import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { publications } from "@/data/publications";

const PublicationsSection = () => {
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
          {publications.map((pub) => (
            <Card key={pub.id} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <FileText className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className={`text-xs ${pub.type === "Journal" ? "border-primary text-primary" : "border-secondary text-secondary"}`}>
                      {pub.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${pub.status === "Published" ? "border-green-500 text-green-600" : pub.status === "Under Review" ? "border-yellow-500 text-yellow-600" : "border-blue-500 text-blue-600"}`}>
                      {pub.status}
                    </Badge>
                    {pub.presentationDate && <span className="text-xs text-muted-foreground">📅 {pub.presentationDate}</span>}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Authors:</strong> {pub.authors}</p>
                  <p className="text-sm text-muted-foreground mb-3"><strong>{pub.venue}</strong> • {pub.year}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
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
