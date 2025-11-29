import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Users, FileText, Globe, Wrench, Award } from "lucide-react";

const DBFKosovoSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Historic Initiative",
      description: "Spearheading the initiative to found the first AIAA Design-Build-Fly competition team in the Balkans region"
    },
    {
      icon: Users,
      title: "Student Team Recruitment",
      description: "Recruiting and structuring a cross-disciplinary team across structures, avionics, propulsion, and control systems"
    },
    {
      icon: Globe,
      title: "International Partnerships",
      description: "Initiating academic partnerships with US universities for knowledge sharing and technical mentorship"
    },
    {
      icon: Wrench,
      title: "Systems Engineering",
      description: "Managing integrated design process, weekly reviews, and technical documentation"
    },
    {
      icon: Plane,
      title: "Full Aircraft Development",
      description: "Leading complete aircraft design cycle from concept to fabrication and flight testing"
    },
    {
      icon: FileText,
      title: "Documentation & Reporting",
      description: "Overseeing design reports, technical documentation, and competition deliverables"
    }
  ];

  const teamAreas = [
    "Aerodynamics & Structures",
    "Avionics & Electronics",
    "Propulsion Systems",
    "Flight Control",
    "Manufacturing & Fabrication",
    "Testing & Validation"
  ];

  return (
    <section id="dbf" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            DBF Kosovo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIAA Design-Build-Fly Competition Team • Founder & Team Lead
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 shadow-soft mb-12 bg-academic-highlight">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Mission & Vision
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            DBF Kosovo represents a <strong>pioneering aerospace engineering initiative</strong> in the Balkans, 
            establishing the region's first Design-Build-Fly competition team. As founder and team lead, I am creating 
            a comprehensive program that develops student capabilities in aircraft design, systems integration, 
            and competition readiness—building aerospace engineering capacity at UBT and inspiring the next 
            generation of engineers in Kosovo.
          </p>
        </Card>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="bg-gradient-academic p-3 rounded-lg w-fit mb-4">
                <highlight.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg text-foreground mb-2">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Team Structure */}
        <Card className="p-8 shadow-soft">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Team Structure & Disciplines
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {teamAreas.map((area, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary text-primary"
              >
                {area}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            The team operates across all major aircraft design disciplines, with students gaining hands-on 
            experience in systems engineering, project management, and competition preparation. Weekly design 
            reviews ensure integration across subsystems while maintaining rigorous documentation standards.
          </p>
        </Card>

        {/* Leadership Impact */}
        <Card className="mt-12 p-8 shadow-soft bg-gradient-subtle">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Leadership & Impact
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-4">
            Leading DBF Kosovo demonstrates my capabilities in <strong>program development, team leadership, 
            and international collaboration</strong>. This initiative required:
          </p>
          <ul className="text-muted-foreground max-w-3xl mx-auto space-y-2">
            <li className="flex items-start">
              <div className="bg-secondary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Establishing team structure, recruiting students, and building organizational capacity</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Developing technical curriculum and training programs for multidisciplinary team members</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Managing systems integration, design reviews, and competition preparation timelines</span>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Securing international partnerships and mentorship for continuous improvement</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default DBFKosovoSection;
