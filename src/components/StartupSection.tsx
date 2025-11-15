import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Sparkles, Users, ExternalLink } from "lucide-react";

const StartupSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "AR Technology",
      description: "Unity-based augmented reality platform with location-based features and immersive experiences"
    },
    {
      icon: Globe,
      title: "Language Learning",
      description: "Gamified Albanian language education with speech recognition and interactive lessons"
    },
    {
      icon: Sparkles,
      title: "Cultural Heritage",
      description: "Showcasing Albanian history, traditions, and culture through modern technology"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Connecting diaspora communities and promoting Albanian language and culture globally"
    }
  ];

  const techStack = [
    "Unity AR",
    "React",
    "Supabase",
    "PostgreSQL",
    "Speech-to-Text",
    "ARCore",
    "C#",
    "TypeScript"
  ];

  return (
    <section id="startup" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Startup: BeAlbanian
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AlbaBridge Tech • Founder & Lead Developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Description */}
          <div className="space-y-6">
            <Card className="p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                BeAlbanian is an innovative augmented reality platform designed to preserve and promote 
                Albanian language and cultural heritage through immersive, gamified learning experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As <strong>Founder and Lead Developer</strong>, I architected the full-stack platform 
                combining Unity AR technology, React web application, and Supabase backend infrastructure—creating 
                an engaging educational tool that connects learners worldwide with Albanian culture.
              </p>
            </Card>

            <Card className="p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Button 
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open('https://bealbanian.com', '_blank')}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Visit BeAlbanian
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <div className="bg-gradient-academic p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="p-8 shadow-soft bg-academic-highlight text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Entrepreneurial Impact
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            BeAlbanian demonstrates my ability to bridge <strong>technical innovation with social impact</strong>, 
            applying systems engineering principles to develop scalable, user-centered technology solutions. 
            This venture showcases entrepreneurship, full-stack development expertise, and commitment to 
            using technology for cultural preservation and education.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default StartupSection;
