const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container px-4 text-center">
      <p className="text-sm text-muted-foreground font-mono">
        Desenvolvido por{" "}
        <span className="text-primary">Thiago Lopes</span> © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
