import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";


interface Project {
  /** Título do projeto */
  title: string;
  /** Descrição curta (1-2 frases) */
  description: string;
  /** Tecnologias utilizadas */
  tags: string[];
  /** Link para ver o projeto online (opcional) */
  liveUrl?: string;
  /** Link para o repositório no GitHub (opcional) */
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfólio Pessoal",
    description:
      "Site portfólio moderno desenvolvido com React, TypeScript e Tailwind CSS para apresentar projetos e habilidades.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Lteago",
  },
  {
    title: "Sistema Web - EJ ECT",
    description:
      "Desenvolvimento front-end de sistemas web para a Empresa Júnior da Escola de Ciência e Tecnologia da UFRN.",
    tags: ["React", "JavaScript", "Scrum", "Git"],
    githubUrl: "https://github.com/Lteago",
  },
  {
    title: "Análise de Dados com Python",
    description:
      "Projeto de Data Science utilizando Python e Pandas para análise e visualização de dados.",
    tags: ["Python", "Pandas", "Data Science"],
    githubUrl: "https://github.com/Lteago",
  },
  // ↓ Copie o bloco abaixo para adicionar mais projetos ↓
  // {
  //   title: "Nome do Projeto",
  //   description: "Descrição curta do projeto.",
  //   tags: ["Tech1", "Tech2"],
  //   liveUrl: "https://...",
  //   githubUrl: "https://github.com/...",
  // },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-primary">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Projetos</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-8 h-8 text-primary" />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Ver projeto - ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
