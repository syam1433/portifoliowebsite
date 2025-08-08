import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import clock  from '../assets/clock.png'
import weatherimg from "../assets/appweather.png"

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Dynamic Clock",
      description: "A comprehensive admin panel with real-time analytics, user management, and data visualization features. Built with React and Node.js backend.",
      image: clock,
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://clock-two-flame.vercel.app/", 
      githubLink: "https://github.com/syam1433/clocktime", 
      stats: { stars: "25", views: "1.2k" },
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Booking Management System",
      description: "Full-stack Flight booking platform , real-time availability.Features responsive design and secure authentication.",
      image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NTQ1NDkwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Express", "MongoDB", "JWT"],
      liveLink: "",
      githubLink: "https://github.com/syam1433/FlightFinder",
      stats: { stars: "32", views: "2.1k" },
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Real Time weather",
      description: "Modern e-commerce solution with shopping cart, product catalog, user authentication, and order management. Includes admin panel for inventory management.",
      image: weatherimg,
      technologies: ["HTML","CSS","JAVASCRIPT"],
      liveLink: "https://syam1433.github.io/WeatherApp",
      githubLink: "https://github.com/syam1433/WeatherApp",
      stats: { stars: "48", views: "3.5k" },
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            📂 Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real-world applications that solve real problems
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white/70 backdrop-blur-sm border-0 shadow-xl group">
                  {/* Image container with overlay */}
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                    
                    {/* Stats overlay */}
                    <motion.div 
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-white text-xs">{project.stats.stars}</span>
                      </div>
                      <div className="bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-blue-400" />
                        <span className="text-white text-xs">{project.stats.views}</span>
                      </div>
                    </motion.div>

                    {/* Hover action buttons */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.liveLink, '_blank')}
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.githubLink, '_blank')}
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <CardHeader className="pb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <CardTitle className="text-xl lg:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <CardDescription className="text-sm lg:text-base leading-relaxed text-gray-600">
                        {project.description}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs lg:text-sm bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => window.open(project.liveLink, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4"
              onClick={() => window.open('https://github.com/syam1433', '_blank')}
            >
              <Github className="w-5 h-5 mr-3" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}