import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Ciência da Computação – UFRN (2027)",
  },
  {
    icon: Code2,
    title: "Foco",
    description: "Desenvolvimento Web Front-End",
  },
  {
    icon: Target,
    title: "Objetivo",
    description: "Primeiro estágio em desenvolvimento",
  },
  {
    icon: Zap,
    title: "Diferencial",
    description: "Disciplina e aprendizado contínuo",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-primary">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Sobre Mim</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            {/* Text */}
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Sou um estudante dedicado de{" "}
                <span className="text-foreground font-medium">
                  Ciência da Computação na UFRN
                </span>
                , com formação técnica em Informática pelo IFRN. Minha jornada na
                tecnologia é guiada pela curiosidade e pelo desejo constante de
                evolução.
              </p>
              <p>
                Atualmente atuo como{" "}
                <span className="text-foreground font-medium">
                  Desenvolvedor Front-End na Empresa Júnior da ECT
                </span>{" "}
                e sou membro do{" "}
                <span className="text-foreground font-medium">
                  IEEE Computer Society
                </span>
                , onde contribuo com projetos sociais ligados à tecnologia.
              </p>
              <p>
                Busco meu primeiro estágio em desenvolvimento web, trazendo
                disciplina, proatividade e vontade de aprender com profissionais
                experientes. Acredito que cada linha de código é uma oportunidade
                de crescimento.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
