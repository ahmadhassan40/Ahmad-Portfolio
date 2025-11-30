import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const highlights = [
  "Comprehensive foundation across algorithms, operating systems, databases, and networks.",
  "Built capstone and course projects translating theory into production-ready code.",
  "Recognized for clear communication, peer mentorship, and dependable delivery.",
];

const Education = () => {
  return (
    <section id="education" className="section-spacing bg-white">
      <div className="section-shell">
        <div className="section-header">
          <span className="section-label">05 — Education</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Formal grounding in computer science paired with applied projects that kept design,
            engineering, and user outcomes tightly aligned.
          </p>
        </div>

        <Card className="mono-card education-card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="icon-ring">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="text-neutral-500">Gift University</p>
              </div>
            </div>
          </div>

          <div className="education-meta">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Gujranwala, Pakistan
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" /> August 2021 – August 2025
            </span>
          </div>

          <div className="education-details">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
