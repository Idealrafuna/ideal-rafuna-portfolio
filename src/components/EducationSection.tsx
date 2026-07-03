import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import uiucLogo from "@/assets/uiuc-logo.jpg";
import clarksonLogo from "@/assets/clarkson-logo.png";

const education = [
  {
    institution: "University of Illinois Urbana-Champaign",
    credential: "M.S. Aerospace Engineering",
    period: "Completed",
    details: ["Aerospace systems", "Scientific computing", "Published wind-coherence research"],
    logo: uiucLogo,
  },
  {
    institution: "Clarkson University",
    credential: "B.S. Aeronautical / Mechanical Engineering",
    period: "Graduated",
    details: ["Dean's List", "Presidential Scholar", "CFD / FEA simulation foundation"],
    logo: clarksonLogo,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-academic-section py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Education
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Aerospace and mechanical engineering foundation behind the systems, simulation, and software work.
            </p>
          </div>
          <Badge variant="outline" className="w-fit border-primary text-primary">
            Engineering credentials
          </Badge>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <Card key={item.institution} className="p-5 md:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <img
                  src={item.logo}
                  alt={`${item.institution} seal`}
                  className="h-11 w-11 rounded-md object-cover shadow-soft"
                />
                <span className="text-sm font-medium text-secondary">{item.period}</span>
              </div>

              <h3 className="mb-1 font-serif text-xl font-semibold leading-tight text-foreground">
                {item.credential}
              </h3>
              <p className="mb-4 text-sm font-medium text-muted-foreground">{item.institution}</p>

              <div className="flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <Badge key={detail} variant="secondary" className="text-xs">
                    <Award className="mr-1 h-3 w-3" />
                    {detail}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
