import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Database, BarChart3, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "AI-Based Fraud Detection System",
      description: "Intelligent fraud detection system using text and voice analysis to identify fraudulent activities with high accuracy.",
      techStack: ["Python", "NLP", "Audio Analysis", "Machine Learning", "FastAPI"],
      color: "from-primary to-cyan-400",
      featured: true,
    },
    {
      icon: BarChart3,
      title: "ML Practice Projects",
      description: "Comprehensive machine learning projects covering regression, classification, and various predictive modeling techniques.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "from-accent to-purple-400",
    },
    {
      icon: Database,
      title: "Unsupervised Learning Analysis",
      description: "Deep dive into clustering algorithms including KMeans and DBSCAN for pattern discovery in unlabeled data.",
      techStack: ["Python", "KMeans", "DBSCAN", "Data Visualization", "Feature Engineering"],
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Server,
      title: "ML Model Deployment",
      description: "End-to-end deployment pipelines for machine learning models using modern web frameworks.",
      techStack: ["FastAPI", "Streamlit", "Docker", "REST APIs", "Python"],
      color: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card rounded-xl overflow-hidden hover-glow group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                      <project.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl">{project.title}</h3>
                      {project.featured && (
                        <span className="text-xs text-primary font-medium">Featured Project</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-9 h-9 text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href="https://github.com/saurabhpandit7676" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-full bg-muted/50 text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/saurabhpandit7676" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;