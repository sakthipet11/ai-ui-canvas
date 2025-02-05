
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold">AI UI Studio</div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:right-auto flex-col md:flex-row items-center gap-4 bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0 border-border`}>
          {['Features', 'Components', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};
