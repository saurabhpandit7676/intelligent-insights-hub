import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Data Scientist",
      organization: "Hanumant Technology Private Limited",
      duration: "6 Months",
      location: "India",
      points: [
        "Worked on real-world datasets to perform data analysis, preprocessing, and feature engineering",
        "Built and evaluated machine learning models for prediction and classification tasks",
        "Applied statistical analysis and visualization to extract actionable insights",
        "Collaborated with teams to translate business problems into data-driven solutions",
      ],
    },
  ];

  const education = {
    icon: GraduationCap,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science And Engineering",
    duration: "2022 - 2026",
    subjects: ["Data Structures & Algorithms", "Database Management Systems", "Machine Learning", "Artificial Intelligence", "Computer Networks"],
    highlights: [
      "Strong focus on computer science fundamentals and software development",
      "Active participation in coding competitions and hackathons",
      "Multiple projects in Data Science and Machine Learning",
      "Strong foundation in mathematics, statistics, and problem-solving",
    ],
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Journey
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-3d p-3 rounded-xl bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-2xl">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-20 bottom-0 w-0.5 timeline-line hidden lg:block" />
                
                <div className="card-3d p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-heading font-semibold text-xl mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium text-lg">{exp.organization}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-primary/10 text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-muted text-muted-foreground font-medium">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-3d p-3 rounded-xl bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-2xl">Education</h3>
            </div>

            <div className="card-3d p-6 md:p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-heading font-semibold text-xl mb-1">{education.degree}</h4>
                  <p className="text-accent font-medium text-lg">{education.field}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl bg-accent/10 text-accent font-medium w-fit">
                  <Calendar className="w-4 h-4" />
                  {education.duration}
                </span>
              </div>

              {/* Subjects */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Core Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="skill-tag px-4 py-2 text-sm rounded-xl text-muted-foreground font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">Highlights</span>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 text-muted-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;