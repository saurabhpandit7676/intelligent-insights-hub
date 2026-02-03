import { motion } from "framer-motion";
import { Brain, Workflow, Rocket, Target, Zap, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Deep understanding of machine learning algorithms and neural networks",
      color: "from-primary to-cyan-400",
    },
    {
      icon: Workflow,
      title: "End-to-End Pipelines",
      description: "Building complete ML workflows from data to deployment",
      color: "from-accent to-purple-400",
    },
    {
      icon: Rocket,
      title: "Production Systems",
      description: "Deploying scalable AI solutions with real-world impact",
      color: "from-emerald-500 to-green-400",
    },
  ];

  const stats = [
    { value: "6+", label: "Months Experience", icon: TrendingUp },
    { value: "10+", label: "Projects Completed", icon: Target },
    { value: "15+", label: "Technologies", icon: Zap },
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
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
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Passionate About{" "}
            <span className="gradient-text">Data & AI</span>
          </h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-20 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="card-3d p-6 rounded-2xl">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-3d p-8 rounded-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate and results-driven <span className="text-foreground font-medium">Data Scientist</span>, <span className="text-foreground font-medium">Machine Learning</span>, and <span className="text-foreground font-medium">AI Developer</span> with a strong foundation in Python, Data Science, and core AI principles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in technology is driven by a deep curiosity to transform raw data into actionable insights and build intelligent, scalable systems that solve complex real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My primary interests include{" "}
                <span className="text-primary font-medium">Fraud Detection</span>,{" "}
                <span className="text-primary font-medium">Natural Language Processing</span>, and{" "}
                <span className="text-primary font-medium">Audio Analysis</span>, where I focus on designing and deploying practical, data-driven AI systems with real-world impact.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-3d p-6 rounded-2xl group"
              >
                <div className="flex items-start gap-5">
                  <div className={`icon-3d p-4 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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