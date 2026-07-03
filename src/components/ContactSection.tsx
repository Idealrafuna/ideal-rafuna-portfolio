import { Download, Github, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactInfo = [
  { icon: Mail, label: "Email", value: "rafunaideal@gmail.com", link: "mailto:rafunaideal@gmail.com" },
  { icon: Phone, label: "Phone", value: "+383 49 200 028", link: "tel:+38349200028" },
  { icon: MapPin, label: "Location", value: "Pristina, Kosovo / Open to UK relocation", link: null },
  { icon: ShieldCheck, label: "UK Work Authorization", value: "HPI visa - no sponsorship required", link: null },
  { icon: Github, label: "GitHub", value: "github.com/Idealrafuna", link: "https://github.com/Idealrafuna" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ideal-rafuna", link: "https://www.linkedin.com/in/ideal-rafuna/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Let's Build Engineering Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to UK engineering roles in systems, simulation, digital twins, robotics, UAVs,
            automotive systems, and software-integrated physical systems.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-medium">
          <div className="mb-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Available for UK Engineering Roles
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Systems-focused aerospace and mechanical engineer eligible to work in the UK under
              the High Potential Individual (HPI) visa. No employer sponsorship required. Open to
              full-time roles involving systems engineering, simulation, digital twins, robotics,
              UAV systems, automotive systems, and real-time engineering software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-start p-6 bg-academic-section rounded-lg">
                <div className="bg-primary-muted p-4 rounded-full mr-4 flex-shrink-0">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 text-base">{contact.label}</h4>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-muted-foreground hover:text-primary transition-colors break-words text-sm leading-relaxed block"
                      target={contact.link.startsWith("http") ? "_blank" : undefined}
                      rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm leading-relaxed block">
                      {contact.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => {
                window.location.href = "mailto:rafunaideal@gmail.com";
              }}
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8"
              onClick={() => window.open("/Ideal_Rafuna_Resume_UK_2026.pdf", "_blank")}
            >
              <Download className="h-5 w-5 mr-2" />
              Download UK Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8"
              onClick={() => window.open("https://www.linkedin.com/in/ideal-rafuna/", "_blank")}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
