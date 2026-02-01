import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "NumPy", "Pandas"],
      color: "from-primary to-cyan-400",
    },
    {
      title: "Machine Learning",
      skills: [
        "Regression",
        "Classification",
        "KMeans",
        "DBSCAN",
        "Feature Engineering",
        "Feature Scaling",
        "Encoding",
        "Model Evaluation",
        "Cross Validation",
        "GridSearchCV",
      ],
      color: "from-accent to-purple-400",
    },
    {
      title: "Deep Learning",
      skills: ["Neural Networks", "TensorFlow", "Keras"],
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "NLP & Audio",
      skills: ["Text Preprocessing", "Keyword-based Fraud Detection", "Audio Pattern Analysis"],
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Deployment",
      skills: ["Streamlit", "FastAPI", "End-to-end ML Apps", "Data-driven Web Apps"],
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Virtual Environments"],
      color: "from-blue-500 to-indigo-400",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Technical <span className="gradient-text">Expertise</span>
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
              className="glass-card p-6 rounded-xl hover-glow group"
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:w-24 transition-all duration-300`} />
              <h3 className="font-heading font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
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