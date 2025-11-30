import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahmad Hassan — Crafted with a monochrome-first design system.
        </p>
        <div className="site-footer__socials">
          <a href="https://github.com/ahmadhassan40" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/ahmadhassan-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:ahmadxo1804@gmail.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
