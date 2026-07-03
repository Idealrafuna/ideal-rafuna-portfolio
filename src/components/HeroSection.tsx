import {
  ArrowDown,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "@/assets/hero-systems.jpg";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const revealY = reduceMotion ? 0 : 24;
  const revealTransition = (delay = 0) => ({
    duration: reduceMotion ? 0.01 : 0.55,
    delay: reduceMotion ? 0 : delay,
    ease: [0.23, 1, 0.32, 1],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const availability = [
    { icon: BriefcaseBusiness, label: "Open to UK Systems Engineering roles" },
    { icon: Rocket, label: "Simulation / Digital Twin / Robotics" },
    { icon: ShieldCheck, label: "HPI visa - no sponsorship required" },
    { icon: Mail, label: "Available for full-time engineering roles" },
  ];

  return (
    <section
      id="home"
      className="relative md:min-h-[78svh] flex items-center justify-center bg-gradient-subtle overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Engineering systems visualization"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: revealY }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition()}
          className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-5"
        >
          Ideal Rafuna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: revealY }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.12)}
          className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-5 sm:mb-6"
        >
          <span className="block sm:hidden">Systems Engineer | Digital Twins | UAVs | Robotics</span>
          <span className="hidden sm:block">
            Systems Engineer | Aerospace & Mechanical Engineering | Digital Twins | UAVs | Robotics
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: revealY }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.22)}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed"
        >
          <span className="block sm:hidden">
            Aerospace and mechanical engineer building digital twins, UAV telemetry, robotics,
            simulation, and real-time engineering software. UK HPI visa; no sponsorship required.
          </span>
          <span className="hidden sm:block">
            Systems-focused aerospace and mechanical engineer building real-time digital twin, UAV telemetry,
            robotics, simulation, and software-integrated physical systems. Eligible to work in the UK under
            the High Potential Individual (HPI) visa with no employer sponsorship required.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.3)}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto mb-6 sm:mb-10"
        >
          {availability.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs font-medium text-foreground shadow-soft backdrop-blur sm:px-4 sm:py-3 sm:text-sm"
            >
              <item.icon className="h-4 w-4 text-secondary" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: revealY }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.38)}
          className="grid w-full max-w-3xl grid-cols-1 gap-3 mx-auto mb-6 sm:flex sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-4 sm:mb-8"
        >
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            onClick={() => window.open("/Ideal_Rafuna_Resume_UK_2026.pdf", "_blank")}
          >
            <Download className="h-5 w-5 mr-2" />
            Download UK Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            onClick={() => scrollToSection("projects")}
          >
            View Engineering Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full px-6 py-5 text-base sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition(0.46)}
          className="hidden sm:flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <Badge variant="outline" className="px-3 py-2 border-primary/40 text-primary bg-background/70">
            Real-time telemetry
          </Badge>
          <Badge variant="outline" className="px-3 py-2 border-secondary/40 text-secondary bg-background/70">
            Systems integration
          </Badge>
          <Button
            size="sm"
            variant="outline"
            className="border-muted-foreground/30"
            onClick={() => window.open("https://github.com/Idealrafuna", "_blank")}
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-muted-foreground/30"
            onClick={() => window.open("https://www.linkedin.com/in/ideal-rafuna/", "_blank")}
          >
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={revealTransition(0.58)}
          className="scroll-cue hidden sm:inline-flex rounded-full p-2 text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => scrollToSection("value")}
          aria-label="Scroll to engineering value"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
