import { Mail, Linkedin, MapPin, Github, Download, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "rafunaideal@gmail.com", link: "mailto:rafunaideal@gmail.com" },
    { icon: Phone, label: "Phone", value: "049-200-028", link: "tel:+38349200028" },
    { icon: MapPin, label: "Location", value: "Pristina 10000, Kosovo", link: null },
    { icon: Github, label: "GitHub", value: "github.com/Idealrafuna", link: "https://github.com/Idealrafuna" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ideal-rafuna", link: "https://www.linkedin.com/in/ideal-rafuna/" }
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
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">University Lecturer & Aerospace Lab Supervisor</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
              Advancing research in systems engineering and robotics at <strong>UBT</strong> • Pursuing PhD opportunities in <strong>Industrial Engineering & Operations Research</strong> for Fall 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-start p-6 bg-academic-section rounded-lg">
                <div className="bg-primary-muted p-4 rounded-full mr-4 flex-shrink-0">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 text-base">{contact.label}</h4>
                  {contact.link ? (
                    <a href={contact.link} className="text-muted-foreground hover:text-primary transition-colors break-words text-sm leading-relaxed block" target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm leading-relaxed block">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" onClick={() => window.location.href = 'mailto:rafunaideal@gmail.com'}>
              <Mail className="h-5 w-5 mr-2" />Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8" onClick={() => window.open('/Ideal%20Rafuna%20Resume%202025.pdf', '_blank')}>
              <Download className="h-5 w-5 mr-2" />Download Resume
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8" onClick={() => window.open('https://www.linkedin.com/in/ideal-rafuna/', '_blank')}>
              <Linkedin className="h-5 w-5 mr-2" />Connect on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
