import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const highlights = [
  "Relevant Coursework: Data Structures & Algorithms, Web Engineering, Database Systems, Operating Systems.",
  "Built capstone and course projects translating theory into production-ready code.",
  "Recognized for clear communication, peer mentorship, and dependable delivery.",
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formal grounding in computer science paired with applied projects that kept design,
            engineering, and user outcomes tightly aligned.
          </p>
        </div>

        <Card className="p-8 hover:shadow-lg transition-shadow border border-border bg-card max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-black/5 rounded-full">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                <p className="text-lg text-muted-foreground font-medium">Gift University</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-black" /> Gujranwala, Pakistan
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-black" /> August 2021 – August 2025
            </span>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1 text-black flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
