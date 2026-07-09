// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { StarHeader } from "@/components/shared/star-header";

const achievements = [
  { highlight: "Winner", label: "Internal Corporate Hackathon — Asset Management Web App" },
  { highlight: "Award", label: "Star Performer of the Month for Rapid Production Fixes and smooth PROD releases" },
  { highlight: "30,000+", label: "Users Played Cognitive-Ability Games Developed at PerspectAI" },
  { highlight: "Smooth", label: "Recognition for Successful Regional Production Deployments" },
  { highlight: "Zero Lag", label: "Optimized Portal Performance to Prevent Hanging During User Spikes" },
  { highlight: "40%", label: "Reduction in Dashboard Data Load Times" },
  { highlight: "1,000+", label: "Active Users Served on Cross-Border Online Clinic Platform throughout Europe and canada" },
];

export default function AboutPage() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Bio + Skills — 2-column grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left — Bio + Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
              <Card>
                <CardContent className="space-y-4 p-6 leading-relaxed">
                  <p>
                    I&apos;m Aditya Raj Singh, a Software Engineer with over 5 years of professional
                    experience building scalable web and mobile applications. I specialize in frontend
                    and full-stack development, leading UI/UX initiatives for business-critical
                    enterprise systems and interactive data dashboards.
                  </p>
                  <p>
                    Currently, I work as a Software Engineer at Divami Design Labs, where I serve
                    as a Lead UI Engineer for major platforms like BlueYonder&apos;s Sales Portal.
                    My day-to-day involves delivering high-impact features alongside US-based teams,
                    optimizing application performance, and managing robust CI/CD pipelines.
                  </p>
                  <p>
                    My technical expertise spans across React.js, Next.js, Angular, Node.js, and TypeScript,
                    complemented by state management using Redux and Redux Toolkit. I also have
                    hands-on experience integrating AI agents to refactor business logic and leveraging AI
                    prompting to build internal tools.
                  </p>
                </CardContent>
              </Card>

              <h2 className="mt-8 mb-4 text-2xl font-bold">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.startDate} – {edu.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                        {edu.gpa && (
                          <Badge variant="outline" className="mt-2">
                            CGPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Skills</h2>
              <div className="space-y-4">
                {Object.keys(skills).map((category) => (
                  <Card key={category}>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills[category as SkillCategory].map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements — full-width highlight section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="flex h-full flex-col items-center justify-center p-5">
                      <span className="text-2xl font-bold text-primary">{item.highlight}</span>
                      <span className="mt-1 text-sm text-muted-foreground">{item.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
