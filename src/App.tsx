import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Technologies } from './components/Technologies';
import { Highlights } from './components/Highlights';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="about">
          <Highlights />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl lg:text-3xl mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Syam
            </motion.h3>
            <p className="text-gray-300 text-lg">Full-Stack Web Developer</p>
          </motion.div>
          
          <motion.div 
            className="border-t border-white/20 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              © 2024 Syam. Built with React & Tailwind CSS. Ready to create amazing web experiences.
            </p>
            <motion.p 
              className="text-gray-500 text-xs lg:text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Crafted with ❤️ and lots of ☕
            </motion.p>
          </motion.div>

          {/* Floating animation dots */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}