import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Categorias de habilidades do Thiago */
const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    title: "Back-End & Dados",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Python", level: 70 },
      { name: "MySQL", level: 65 },
      { name: "MongoDB", level: 55 },
      { name: "APIs REST", level: 70 },
      { name: "Django", level: 50 },
    ],
  },
  {
    title: "Ferramentas & Outros",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 50 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Scrum", level: 80 },
      { name: "PowerBI", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-primary">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Habilidades Técnicas
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <h3 className="text-lg font-semibold mb-6 text-primary font-mono">
                  {`{ ${category.title} }`}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3 + catIndex * 0.15 + i * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
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

export default SkillsSection;
