import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow bg-muted/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            <span className="text-sm font-mono text-muted-foreground">
              Disponível para estágio
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Thiago{" "}
            <span className="text-gradient-neon glow-text">Lopes</span>
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-3">
            Desenvolvedor Front-End
          </p>

          {/* Tagline */}
          <p className="max-w-md mx-auto text-muted-foreground text-sm md:text-base mb-10">
            Estudante de Ciência da Computação na UFRN, apaixonado por criar
            experiências web modernas e funcionais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="glow font-semibold gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#projetos">
                Ver Projetos
                <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-glow text-foreground hover:bg-muted"
            >
              <a href="/Thiago_Lopes-Curriculo.pdf" download>
                <Download className="w-4 h-4" />
                Baixar Currículo
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Lteago"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
