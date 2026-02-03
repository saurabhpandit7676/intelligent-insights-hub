import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
        {/* Accent Glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(195 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating 3D Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border border-primary/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[15%] w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 backdrop-blur-sm border border-accent/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] w-8 h-8 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/10 hidden lg:block"
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* 3D Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer Glow Ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-gradient-shift bg-300% opacity-60 blur-sm" />
              
              {/* Main Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
                <div className="w-full h-full rounded-full bg-background p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Saurabh Pathak" 
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse-glow" />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 glass-card px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Data Scientist</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-primary mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 tracking-tight"
            >
              Saurabh Pathak
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-6"
            >
              <span className="gradient-text">Data Scientist</span>
              <span className="text-muted-foreground"> & </span>
              <span className="gradient-text">AI Developer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Transforming complex data into intelligent, real-world solutions that drive business impact and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                onClick={scrollToProjects}
                className="btn-primary text-primary-foreground px-8 py-6 rounded-xl font-semibold text-base"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="glass-card border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 rounded-xl font-semibold text-base transition-all duration-300"
                asChild
              >
                <a href="https://drive.google.com/file/d/19MQyWeECfm9lRz7svsfEDsTmruc1almb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 px-8 py-6 rounded-xl font-semibold text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/saurabh-pathak-9ba8482a6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-3d p-4 rounded-xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/saurabhpandit7676"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-3d p-4 rounded-xl"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full glass-card cursor-pointer hover:border-primary/30 transition-colors"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;