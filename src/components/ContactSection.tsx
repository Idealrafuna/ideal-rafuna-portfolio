import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ideal.rafuna@example.edu",
      link: "mailto:ideal.rafuna@example.edu"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/idealrafuna",
      link: "https://linkedin.com/in/idealrafuna"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kosovo / Available for relocation",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss research opportunities, potential collaborations, 
            or PhD program possibilities
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-medium text-center">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Ready to Build the Future Together?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a fellow researcher, industry professional, or academic institution 
              looking for passionate PhD candidates, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="bg-primary-muted p-3 rounded-full mb-3">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {contact.label}
                </h4>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground text-center">
                    {contact.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => window.location.href = 'mailto:ideal.rafuna@example.edu'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
            <Button 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 text-lg"
              onClick={() => window.open('https://linkedin.com/in/idealrafuna', '_blank')}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Meeting Scheduler */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-muted-foreground">
                Available for virtual meetings and campus visits
              </span>
            </div>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary-foreground hover:bg-primary"
            >
              Schedule a Meeting
            </Button>
          </div>
        </Card>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "The best way to predict the future is to invent it." - Alan Kay
          </p>
          <p className="text-sm text-text-subtle mt-2">
            Let's build systems that will shape tomorrow's world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;