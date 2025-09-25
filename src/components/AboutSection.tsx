import { GraduationCap, Users, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "BS in Aerospace & Mechanical Engineering (Clarkson), MS from UIUC, pursuing PhD in Systems Engineering"
    },
    {
      icon: Users,
      title: "Teaching & Leadership", 
      description: "TA & Lab Supervisor at Mechatronics and Aerospace Lab, UBT Kosovo, mentoring next-generation engineers"
    },
    {
      icon: Wrench,
      title: "Innovation Focus",
      description: "Specializing in UAV design, digital twins, robotics integration, and AR applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate systems engineer at the intersection of aerospace, robotics, and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm <strong>Ideal Rafuna</strong>, a dedicated systems engineer with a passion for creating 
              technologies that push the boundaries of what's possible. My journey spans from the theoretical 
              foundations of aerospace engineering to the practical applications of cutting-edge robotics and UAVs.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently serving as a Teaching Assistant and Laboratory Supervisor at the 
              Mechatronics and Aerospace Lab at UBT in Kosovo, I bridge the gap between 
              academic research and real-world engineering challenges. My work encompasses 
              UAV design, digital twin development, aeroelasticity research, and innovative 
              AR applications through my startup BeAlbanian.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My academic foundation includes a Bachelor's degree in Aerospace & Mechanical 
              Engineering from Clarkson University and a Master's degree from the University 
              of Illinois at Urbana-Champaign (UIUC). Now, I'm pursuing my PhD to further 
              advance the field of systems engineering and contribute to the next generation 
              of intelligent, autonomous systems.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-muted p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;