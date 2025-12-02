import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";

// Import project images
import UTMage1 from "@/images/UTMage-1.png";
import UTMage2 from "@/images/UTMage-2.png";
import UTMage3 from "@/images/UTMage-3.png";
import UTMage4 from "@/images/UTMage-4.png";
import UTMage5 from "@/images/UTMage-5.png";

import PixelPing1 from "@/images/pixelping.png";
import PixelPing2 from "@/images/pixelping-2.png";
import PixelPing3 from "@/images/pixelping-3.png";
import PixelPing4 from "@/images/pixelping-4.png";

import LessonLint1 from "@/images/lessonlint-1.png";
import LessonLint2 from "@/images/lessonlint-2.png";
import LessonLint3 from "@/images/lessonlint-3.png";
import LessonLint4 from "@/images/lessonlint-4.png";
import LessonLint5 from "@/images/lessonlint-5.png";
import LessonLint6 from "@/images/lessonlint-6.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "UTMage – Campaign URL Builder",
      period: "May 2025 – July 2025",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Tool to create clean UTM-tagged links with instant checks for required fields, casing, and separators.",
      result: "Helps marketers generate UTM links 3x faster with automated validation.",
      highlights: [
        "Added presets by channel, copy-to-clipboard, short-link/QR placeholders",
        "One-click 'open report' buttons with demo functionality",
        "Included bulk build from CSV, history table, and policies editor",
        "Full site structure (Home, Product, Pricing, Docs, Status, Auth)",
      ],
      demoUrl: "#",
      repoUrl: "#",
      images: [UTMage1, UTMage2, UTMage3, UTMage4, UTMage5],
    },
    {
      title: "PixelPing – Uptime & Web Vitals Monitor",
      period: "February 2025 – March 2025",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["MERN", "Web Performance APIs"],
      description:
        "Monitors website uptime and Core Web Vitals so owners know when a site slows or goes down.",
      result: "Monitors website vitals and uptime with instant alerting.",
      highlights: [
        "Polished marketing site plus dashboard demo with uptime sparkline",
        "Vitals gauges (LCP/CLS/INP) and incidents list",
        "Public status page for transparency",
        "Fast, mobile-friendly design with clear CTAs",
      ],
      demoUrl: "#",
      repoUrl: "#",
      images: [PixelPing1, PixelPing2, PixelPing3, PixelPing4],
    },
    {
      title: "LessonLint – AI-Powered Learning Assistant",
      period: "October 2024 – December 2024",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      description:
        "AI-powered platform that helps students learn faster by providing instant feedback, explanations, and personalized study plans.",
      result: "Helps students learn 2x faster with AI-powered feedback and personalized study paths.",
      highlights: [
        "Integrated OpenAI GPT-4 for intelligent tutoring and explanations",
        "Real-time feedback on student submissions and assignments",
        "Personalized learning paths based on student performance",
        "Interactive dashboard with progress tracking and analytics",
        "Supports multiple subjects including Math, Science, and Programming",
      ],
      demoUrl: "#",
      repoUrl: "#",
      images: [LessonLint1, LessonLint2, LessonLint3, LessonLint4, LessonLint5, LessonLint6],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border bg-card hover:border-black flex flex-col"
            >
              {/* Project Image Thumbnail - Always Visible */}
              {project.images && project.images.length > 0 && (
                <div
                  className="w-full h-56 overflow-hidden cursor-pointer relative"
                  onClick={() => setSelectedProject(index)}
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 px-4 py-2 rounded-full text-sm font-medium">
                      View Gallery ({project.images.length} images)
                    </span>
                  </div>
                </div>
              )}

              {/* Title - Always Visible */}
              <div className="p-6 pb-3">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
              </div>

              {/* Expandable Content - Hidden by default, shown on hover */}
              <div className="max-h-0 group-hover:max-h-[1000px] overflow-hidden transition-all duration-500 ease-in-out">
                <div className="px-6 pb-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Badge variant="outline" className="w-fit">
                      {project.type}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      <span className="text-muted-foreground">Role:</span> {project.role}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} className="bg-black text-white border-black">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4">{project.description}</p>

                  {project.result && (
                    <div className="mb-4 p-3 bg-green-50/50 border border-green-100 rounded-lg">
                      <p className="text-sm font-medium text-green-800">
                        <span className="font-bold">Result:</span> {project.result}
                      </p>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="text-black mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.demoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-black/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <ProjectModal
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            images={projects[selectedProject].images}
            projectTitle={projects[selectedProject].title}
          />
        )}
      </div>
    </section >
  );
};


export default Projects;
