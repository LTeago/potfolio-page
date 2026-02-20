import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    // Envia via mailto como fallback (sem backend)
    const mailtoUrl = `mailto:thiagolpsmar@gmail.com?subject=Contato Portfólio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0ADe: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.open(mailtoUrl, "_blank");

    toast({
      title: "Redirecionando para o e-mail!",
      description: "Obrigado pelo contato.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-primary">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>

          <p className="text-muted-foreground max-w-lg mb-12">
            Estou disponível para oportunidades de estágio e projetos. Sinta-se
            à vontade para entrar em contato!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  maxLength={100}
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  maxLength={255}
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  maxLength={1000}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="gap-2 glow bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </Button>
            </form>

            {/* Info lateral */}
            <div className="flex flex-col justify-center space-y-6">
              <a
                href="mailto:thiagolpsmar@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">E-mail</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    thiagolpsmar@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Lteago"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 transition-colors group"
              >
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    github.com/Lteago
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    Adicione seu link do LinkedIn
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
