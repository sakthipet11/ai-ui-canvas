
import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Intelligent Design",
    description: "AI-powered design suggestions that adapt to your brand and style preferences.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "Generate production-ready code that follows best practices and modern standards.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Prototyping",
    description: "Build and iterate quickly with AI-assisted component generation.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">Everything you need to create amazing interfaces</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
