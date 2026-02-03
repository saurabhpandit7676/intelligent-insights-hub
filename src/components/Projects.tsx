import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Database, BarChart3, Server, ArrowUpRight } from "lucide-react";
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
      liveLink: null,
    },
    {
      icon: Database,
      title: "UIDAI Demographic Intelligence Platform",
      description: "Advanced demographic analysis platform for UIDAI data insights, featuring interactive visualizations and intelligent data processing.",
      techStack: ["React", "Data Visualization", "Analytics", "Dashboard", "Vercel"],
      color: "from-blue-500 to-indigo-400",
      featured: true,
      liveLink: "https://uidai-demographic-intelligence-plat.vercel.app/",
    },
    {
      icon: BarChart3,
      title: "ML Practice Projects",
      description: "Comprehensive machine learning projects covering regression, classification, and various predictive modeling techniques.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "from-accent to-purple-400",
      liveLink: null,
    },
    {
      icon: Database,
      title: "Unsupervised Learning Analysis",
      description: "Deep dive into clustering algorithms including KMeans and DBSCAN for pattern discovery in unlabeled data.",
      techStack: ["Python", "KMeans", "DBSCAN", "Data Visualization", "Feature Engineering"],
      color: "from-emerald-500 to-green-400",
      liveLink: null,
    },
    {
      icon: Server,
      title: "ML Model Deployment",
      description: "End-to-end deployment pipelines for machine learning models using modern web frameworks.",
      techStack: ["FastAPI", "Streamlit", "Docker", "REST APIs", "Python"],
      color: "from-orange-500 to-amber-400",
      liveLink: null,
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[90px]" />
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
            Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Featured{" "}
            <span className="gradient-text">Projects</span>
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
              className={`card-3d rounded-2xl overflow-hidden group ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className={`icon-3d p-4 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                      <project.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs text-primary font-medium">Featured Project</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="social-icon-3d w-10 h-10 rounded-xl"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="social-icon-3d w-10 h-10 rounded-xl"
                      asChild
                    >
                      <a href="https://github.com/saurabhpandit7676" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag px-3 py-1.5 text-xs rounded-lg text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    View Live Demo
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            className="glass-card border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 rounded-xl font-semibold transition-all duration-300"
            variant="outline"
            asChild
          >
            <a href="https://github.com/saurabhpandit7676" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;