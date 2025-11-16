import { Mail, Linkedin, MapPin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "rafunaideal@gmail.com", link: "mailto:rafunaideal@gmail.com" },
    { icon: MapPin, label: "Location", value: "Pristina, Kosovo", link: null },
    { icon: Github, label: "GitHub", value: "github.com/Idealrafuna", link: "https://github.com/Idealrafuna" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/idealrafuna", link: "https://linkedin.com/in/idealrafuna" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on research, innovation, and systems engineering projects
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-medium">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">PhD Applicant • Fall 2026</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed">
              Pursuing <strong>PhD in Industrial Engineering & Operations Research</strong> at <strong>UIC</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-start p-4 bg-academic-section rounded-lg">
                <div className="bg-primary-muted p-3 rounded-full mr-4">
                  <contact.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                  {contact.link ? (
                    <a href={contact.link} className="text-muted-foreground hover:text-primary transition-colors break-words" target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" onClick={() => window.location.href = 'mailto:rafunaideal@gmail.com'}>
              <Mail className="h-5 w-5 mr-2" />Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8" onClick={() => window.open('https://linkedin.com/in/idealrafuna', '_blank')}>
              <Linkedin className="h-5 w-5 mr-2" />Connect on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
