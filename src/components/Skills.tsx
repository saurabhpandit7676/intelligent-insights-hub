import { motion } from "framer-motion";
import { Code, Database, BarChart3, Brain, Cpu, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data",
      skills: ["Python", "SQL", "NumPy", "Pandas"],
      color: "from-primary to-cyan-400",
      iconBg: "bg-primary/10",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        "Regression",
        "Classification",
        "KMeans",
        "DBSCAN",
        "Feature Engineering",
        "Model Evaluation",
        "Cross Validation",
        "GridSearchCV",
      ],
      color: "from-accent to-purple-400",
      iconBg: "bg-accent/10",
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      skills: ["Neural Networks", "TensorFlow", "Keras"],
      color: "from-pink-500 to-rose-400",
      iconBg: "bg-pink-500/10",
    },
    {
      icon: BarChart3,
      title: "NLP & Audio",
      skills: ["Text Preprocessing", "Fraud Detection", "Audio Pattern Analysis"],
      color: "from-emerald-500 to-green-400",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: Database,
      title: "Deployment",
      skills: ["Streamlit", "FastAPI", "End-to-end ML Apps", "Data-driven Web Apps"],
      color: "from-orange-500 to-amber-400",
      iconBg: "bg-orange-500/10",
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Virtual Environments"],
      color: "from-blue-500 to-indigo-400",
      iconBg: "bg-blue-500/10",
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
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
            Technical Skills
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            My{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d p-6 rounded-2xl group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`icon-3d p-3 rounded-xl ${category.iconBg}`}>
                  <category.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color} mb-2 group-hover:w-20 transition-all duration-500`} />
                  <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 text-sm rounded-lg text-muted-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;