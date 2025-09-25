import { BookOpen, Users2, Lightbulb, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const TeachingSection = () => {
  const teachingRoles = [
    {
      icon: BookOpen,
      title: "Teaching Assistant & Lecturer",
      institution: "Mechatronics and Aerospace Lab, UBT Kosovo",
      description: "Leading courses in systems engineering, robotics, and aerospace fundamentals. Designing curriculum that bridges theoretical concepts with hands-on applications."
    },
    {
      icon: Users2,
      title: "Laboratory Supervisor",
      institution: "Advanced Engineering Labs",
      description: "Overseeing laboratory operations, managing research projects, and ensuring safety protocols while fostering an environment of innovation and discovery."
    },
    {
      icon: Lightbulb,
      title: "Research Mentor",
      institution: "Student Research Programs",
      description: "Guiding undergraduate and graduate students in their research endeavors, from initial concept development to publication-ready results."
    }
  ];

  const achievements = [
    "Designed syllabi for advanced mechatronics and aerospace courses",
    "Mentored 20+ students in research projects and thesis development", 
    "Developed hands-on laboratory experiments integrating UAV technology",
    "Led interdisciplinary project teams in systems engineering challenges"
  ];

  return (
    <section id="teaching" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Teaching & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of engineers through innovative education 
            and hands-on research experiences
          </p>
        </div>

        {/* Teaching Roles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teachingRoles.map((role, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow text-center">
              <div className="bg-primary-muted p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <role.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {role.title}
              </h3>
              <h4 className="text-secondary font-medium mb-4">
                {role.institution}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Teaching Philosophy */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-foreground">
              Teaching Philosophy
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe that the best learning happens when students are challenged to think 
              beyond textbook solutions and engage with real-world problems. My teaching 
              approach combines rigorous theoretical foundations with practical, hands-on 
              experiences that prepare students for the complexities of modern engineering.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Through laboratory supervision and research mentorship, I strive to create 
              an environment where curiosity thrives, where failure is seen as a learning 
              opportunity, and where students develop both technical expertise and the 
              critical thinking skills necessary for innovation.
            </p>
          </div>

          {/* Key Achievements */}
          <Card className="p-8 shadow-soft">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-secondary w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;