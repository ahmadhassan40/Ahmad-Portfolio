import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "Email", value: "ahmadxo1804@gmail.com", href: "mailto:ahmadxo1804@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 334 812 1288", href: "tel:+923348121288" },
  { icon: Linkedin, label: "LinkedIn", value: "ahmadhassan-dev", href: "https://linkedin.com/in/ahmadhassan-dev" },
  { icon: Github, label: "GitHub", value: "ahmadhassan40", href: "https://github.com/ahmadhassan40" },
  { icon: MapPin, label: "Location", value: "Gujranwala, Pakistan" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — I'll respond shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="section-header">
          <span className="section-label">06 — Get In Touch</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Tell me about a product idea, a role you're hiring for, or a technical challenge. I typically
            reply within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <Card className="mono-card contact-form">
            <h3 className="text-2xl font-semibold text-black mb-2">Send a Message</h3>
            <p className="text-sm text-neutral-500 mb-6">Fill in the details below and I'll follow up quickly.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share a short brief, timeline, or idea."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary w-full">
                Send Message
              </button>
            </form>
          </Card>

          <Card className="mono-card contact-info">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-neutral-600 mb-6">
              Prefer a direct note? Reach me through any of the channels below and let's build something
              impactful.
            </p>
            <div className="contact-list">
              {contactLinks.map((link) => (
                <div key={link.label} className="contact-item">
                  <div className="contact-item-icon">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <small>{link.label}</small>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-black">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
