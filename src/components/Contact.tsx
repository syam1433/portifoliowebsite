import { Mail, MessageCircle, Briefcase, Calendar, Send, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ContactModal } from './ContactModal';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalPurpose, setModalPurpose] = useState<'opportunities' | 'collaboration' | 'general'>('general');

  const contactOptions = [
    {
      icon: Briefcase,
      title: "Exciting Opportunities",
      description: "Open to full-time positions and exciting career opportunities",
      action: "View Opportunities",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: MessageCircle,
      title: "Collaborations",
      description: "Let's work together on innovative projects and solutions",
      action: "Let's Collaborate",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Mail,
      title: "Freelance Work",
      description: "Available for freelance projects and consulting work",
      action: "Hire Me",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
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
      rotateX: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            📬 Let's Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-2">
              I'm open to exciting opportunities, collaborations, or freelance work
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              Ready to bring your ideas to life with clean, scalable code
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex h-full"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Card className={`text-center hover:shadow-2xl transition-all duration-500 h-full min-h-[280px] lg:min-h-[320px] bg-gradient-to-br ${option.bgGradient} border-0 shadow-xl overflow-hidden relative group flex flex-col`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 flex-1 flex flex-col justify-center pb-4">
                    <motion.div 
                      className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${option.gradient} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <option.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>
                    <div className="w-full flex justify-center">
                      <CardTitle className="inline-block text-lg lg:text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-3 font-semibold text-center">
                        {option.title}
                      </CardTitle>
                    </div>

                    <CardDescription className="text-sm lg:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 px-2 leading-relaxed">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 pb-6 px-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-lg transition-all duration-300 text-white border-0 py-3 rounded-lg font-medium`}
                        size="default"
                        onClick={() => {
                          if (option.action.includes('Opportunities')) {
                            setModalPurpose('opportunities');
                          } else if (option.action.includes('Collaborate')) {
                            setModalPurpose('collaboration');
                          } else {
                            setModalPurpose('general');
                          }
                          setContactModalOpen(true);
                        }}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        {option.action}
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Animated particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl lg:text-3xl mb-4 lg:mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              Ready to Start a Project?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 lg:mb-10 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.1 }}
            >
              Whether you need a custom web application, want to modernize your existing system, 
              or have an innovative idea you'd like to bring to life, I'm here to help transform your vision into reality.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg"
                  onClick={() => {
                    setModalPurpose('general');
                    setContactModalOpen(true);
                  }}
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Email
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base lg:text-lg bg-white/80 backdrop-blur-sm"
                  onClick={() => window.open('https://calendly.com/your-username', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        purpose={modalPurpose}
      />
    </section>
  );
}