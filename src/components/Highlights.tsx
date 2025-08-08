import { CheckCircle, GraduationCap, FolderOpen, Lightbulb } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';

export function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: CheckCircle,
      title: "3+ Internships Completed",
      description: "Gained hands-on experience in web development roles across different companies",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100 to-emerald-100"
    },
    {
      icon: GraduationCap,
      title: "B.Tech CSE Student",
      description: "Final-year student at Aditya College of Engineering with strong academic foundation",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-100 to-indigo-100"
    },
    {
      icon: FolderOpen,
      title: "10+ Full-Stack Projects",
      description: "Built comprehensive applications with real-time functionality and modern architectures",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100 to-pink-100"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Always adapting to new technologies and improving development practices",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-100 to-yellow-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateY: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:60px_60px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🏆 Highlights & Achievements
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My journey in web development and key milestones
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex h-full"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Card className="text-center p-6 lg:p-8 h-full min-h-[280px] lg:min-h-[320px] bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group flex flex-col">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <CardContent className="pt-6 relative z-10 flex flex-col flex-1 justify-center">
                    <motion.div 
                      className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${highlight.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <motion.h3 
                        className="text-lg lg:text-xl mb-4 text-white group-hover:text-gray-100 transition-colors duration-300 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        {highlight.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-300 text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 px-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      >
                        {highlight.description}
                      </motion.p>
                    </div>
                  </CardContent>

                  {/* Hover effect particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${20 + i * 30}%`,
                          left: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}