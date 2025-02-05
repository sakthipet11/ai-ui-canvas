
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background/50 -z-10" />
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-3 py-1 rounded-full bg-primary/5 text-primary inline-block mb-4 animate-fadeIn">
            Welcome to AI UI Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text">
            Create Beautiful Interfaces with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slideIn">
            Design stunning user interfaces with the power of artificial intelligence.
            Streamline your workflow and bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
