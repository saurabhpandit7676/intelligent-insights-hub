import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Generative AI Certified", issuer: "IBM", color: "bg-blue-500" },
    { name: "Machine Learning Certified", issuer: "Softpro", color: "bg-green-500" },
    { name: "Data Science – MAANG Professional", issuer: "HCL GUVI", color: "bg-orange-500" },
    { name: "Data Science Certified", issuer: "British Airways × Forage", color: "bg-red-500" },
    { name: "OCI: Generative AI", issuer: "Oracle", color: "bg-red-600" },
    { name: "Data Analytics", issuer: "Deloitte", color: "bg-emerald-500" },
    { name: "Professional Skills", issuer: "IBM", color: "bg-blue-500" },
    { name: "Python Programming", issuer: "HackerRank", color: "bg-green-600" },
    { name: "SQL Fundamentals", issuer: "Coursera", color: "bg-blue-400" },
    { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", color: "bg-purple-500" },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-4 rounded-xl hover-glow group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full ${cert.color} bg-opacity-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Award className={`w-6 h-6`} style={{ color: cert.color.replace("bg-", "") }} />
                </div>
                <h3 className="font-medium text-sm leading-tight mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;