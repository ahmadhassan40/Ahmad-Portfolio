import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "Email", value: "info.ahmadmughal@gmail.com", href: "mailto:ahmadxo1804@gmail.com" },
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell me about a product idea, a role you're hiring for, or a technical challenge. I typically
            reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 border border-border bg-card">
            <h3 className="text-2xl font-bold text-primary mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-8">Fill in the details below and I'll follow up quickly.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share a short brief, timeline, or idea."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Send Message 🚀
              </button>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border mt-6">
                {contactLinks.filter(link => link.href).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href?.startsWith("http") ? "_blank" : undefined}
                    rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 rounded-full hover:bg-secondary"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </form>
          </Card>

          <Card className="p-8 border border-border bg-card h-full">
            <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Prefer a direct note? Reach me through any of the channels below and let's build something
              impactful.
            </p>
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-start gap-4">
                  <div className="p-2 bg-black/5 rounded-lg shrink-0">
                    <link.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base font-semibold text-primary hover:underline"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-primary">{link.value}</p>
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
