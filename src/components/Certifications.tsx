import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Generative AI Certified", issuer: "IBM", gradient: "from-blue-500 to-blue-600" },
    { name: "Machine Learning Certified", issuer: "Softpro", gradient: "from-emerald-500 to-green-500" },
    { name: "Data Science – MAANG Professional", issuer: "HCL GUVI", gradient: "from-orange-500 to-amber-500" },
    { name: "Data Science Certified", issuer: "British Airways × Forage", gradient: "from-red-500 to-rose-500" },
    { name: "OCI: Generative AI", issuer: "Oracle", gradient: "from-red-600 to-red-500" },
    { name: "Data Analytics", issuer: "Deloitte", gradient: "from-emerald-500 to-teal-500" },
    { name: "Professional Skills", issuer: "IBM", gradient: "from-blue-500 to-indigo-500" },
    { name: "Python Programming", issuer: "HackerRank", gradient: "from-green-500 to-emerald-500" },
    { name: "SQL Fundamentals", issuer: "Coursera", gradient: "from-blue-400 to-cyan-500" },
    { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", gradient: "from-purple-500 to-violet-500" },
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
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
            Credentials
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Professional{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-3d p-5 rounded-2xl group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} p-[1px] mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                    <Award className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;