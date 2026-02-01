import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Data Scientist",
      organization: "Hanumant Technology Private Limited",
      duration: "6 Months",
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
    field: "Computer Science / Information Technology",
    status: "Currently Pursuing",
    subjects: ["Python", "Data Structures", "DBMS", "Operating Systems", "Machine Learning fundamentals"],
    note: "Emphasis on practical and project-based learning",
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Experience & Education</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            My <span className="gradient-text">Journey</span>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-glow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-heading font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.organization}</p>
                  </div>
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl">Education</h3>
            </div>

            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-heading font-semibold text-lg">{education.degree}</h4>
                  <p className="text-accent font-medium">{education.field}</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent">
                  {education.status}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Core Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-muted-foreground"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground italic text-sm">
                📚 {education.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;