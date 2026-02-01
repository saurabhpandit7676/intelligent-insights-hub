import { motion } from "framer-motion";
import { Brain, Workflow, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Real-World Experience",
      description: "Hands-on experience with real-world datasets and ML pipelines",
    },
    {
      icon: Workflow,
      title: "End-to-End Expertise",
      description: "Strong understanding of ML workflows, from preprocessing to deployment",
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Focused on building practical, scalable AI solutions",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Passionate About <span className="gradient-text">Data & AI</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate and results-driven Data Scientist, Machine Learning, and AI Developer with a strong foundation in Python, Data Science, and core AI principles. My journey in technology is driven by a deep curiosity to transform raw data into actionable insights and build intelligent, scalable systems that solve complex real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My primary interests include <span className="text-primary font-medium">Fraud Detection</span>, <span className="text-primary font-medium">Natural Language Processing (NLP)</span>, and <span className="text-primary font-medium">Audio Analysis</span>, where I focus on designing and deploying practical, data-driven AI systems with real-world impact.
            </p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;