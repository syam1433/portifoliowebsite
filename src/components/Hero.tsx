import { Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  const floatingIcons = [
    { icon: Code, x: "10%", y: "20%", delay: 0 },
    { icon: Sparkles, x: "85%", y: "15%", delay: 0.5 },
    { icon: Github, x: "15%", y: "70%", delay: 1 },
    { icon: Mail, x: "90%", y: "75%", delay: 1.5 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.icon className="w-8 h-8 text-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm </span>
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              Syam
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2 lg:ml-4"
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Passionate Web Developer Crafting Interactive, Scalable Web Solutions
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto mb-8 lg:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            🚀 I specialize in building responsive, high-performance full-stack applications using modern technologies like React, Node.js, Express, Tailwind CSS, MySQL, and more. My focus is on clean code, user-friendly design, and performance optimization.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const offsetTop = contactSection.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <Mail className="w-5 h-5 mr-3" />
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg backdrop-blur-sm"
              onClick={() => {
                // Create a temporary download link for CV
                const link = document.createElement('a');
                link.href = '/path-to-your-cv.pdf'; // Update with actual CV path
                link.download = 'Syam_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-5 h-5 mr-3" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Github, href: "https://github.com/syam1433", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/durga-syamalarao-paina/", label: "LinkedIn" },
            { icon: Mail, href: "", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className="p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}