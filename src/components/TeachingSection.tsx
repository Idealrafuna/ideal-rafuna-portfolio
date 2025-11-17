import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { teachingRoles } from "@/data/teaching";

const TeachingSection = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecturer":
        return "border-primary text-primary";
      case "Co-Instructor":
        return "border-secondary text-secondary";
      case "Lab Lead":
        return "border-purple-500 text-purple-600";
      case "Supervisor":
        return "border-yellow-500 text-yellow-600";
      default:
        return "border-muted-foreground text-muted-foreground";
    }
  };

  return (
    <section id="teaching" className="py-20 bg-academic-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Teaching & Lab Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of engineers through innovative education, 
            hands-on research experiences, and laboratory supervision
          </p>
        </div>

        <div className="space-y-6">
          {teachingRoles.map((role) => (
            <Card key={role.id} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {role.title}
                    </h3>
                  </div>
                  <p className="text-secondary font-medium mb-1">
                    {role.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {role.period}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getTypeColor(role.type)} self-start`}
                >
                  {role.type}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {role.description}
              </p>

              {/* Gallery Section */}
              {role.gallery && role.gallery.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Project Gallery:</h4>
                  <div className="space-y-4">
                    {/* Photos Section */}
                    {role.gallery.filter(img => img.category === "photo").length > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2 font-medium">Photos:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {role.gallery
                            .filter(img => img.category === "photo")
                            .map((image, index) => {
                              const imageSrc = encodeURI(image.src);
                              return (
                                <div key={index} className="relative bg-muted rounded-lg overflow-hidden aspect-square border border-border min-h-[100px]">
                                  <img 
                                    src={imageSrc} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                      console.error('Failed to load image:', image.src);
                                      console.error('Encoded path:', imageSrc);
                                      const parent = e.currentTarget.parentElement;
                                      if (parent) {
                                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-xs text-red-500 p-2 break-all">Error: ${image.src}</div>`;
                                      }
                                    }}
                                    onLoad={() => console.log('Successfully loaded:', image.src)}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                    {/* 3D CAD Drawings Section */}
                    {role.gallery.filter(img => img.category === "3d").length > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2 font-medium">3D CAD Drawings:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {role.gallery
                            .filter(img => img.category === "3d")
                            .map((image, index) => {
                              const imageSrc = encodeURI(image.src);
                              return (
                                <div key={index} className="relative bg-muted rounded-lg overflow-hidden aspect-square border border-border min-h-[100px]">
                                  <img 
                                    src={imageSrc} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                      console.error('Failed to load image:', image.src);
                                      console.error('Encoded path:', imageSrc);
                                      const parent = e.currentTarget.parentElement;
                                      if (parent) {
                                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-xs text-red-500 p-2 break-all">Error: ${image.src}</div>`;
                                      }
                                    }}
                                    onLoad={() => console.log('Successfully loaded:', image.src)}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {role.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-secondary w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <Card className="mt-12 p-8 shadow-soft bg-academic-highlight">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Teaching Philosophy
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            I believe in <strong>hands-on, project-based learning</strong> that bridges theory with practice. 
            Through laboratory supervision and course design, I create environments where students engage 
            with real-world engineering challenges, develop systems thinking, and build confidence in their 
            technical abilities. My approach emphasizes collaboration, iterative problem-solving, and 
            preparing students for industry and research careers.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TeachingSection;
