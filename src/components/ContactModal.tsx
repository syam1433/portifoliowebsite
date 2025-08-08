import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send, Star, X, Mail, User, MessageSquare, Award } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormData {
  fromEmail: string;
  message: string;
  rating: number;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  purpose?: 'general' | 'opportunities' | 'collaboration';
}

export function ContactModal({ isOpen, onClose, purpose = 'general' }: ContactModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const getPurposeConfig = () => {
    switch (purpose) {
      case 'opportunities':
        return {
          title: 'Career Opportunities',
          placeholder: 'Hi Syam! I have an exciting opportunity that might interest you...',
          subject: 'Career Opportunity Inquiry'
        };
      case 'collaboration':
        return {
          title: 'Let\'s Collaborate',
          placeholder: 'Hello! I\'d love to collaborate with you on...',
          subject: 'Collaboration Proposal'
        };
      default:
        return {
          title: 'Get In Touch',
          placeholder: 'Hi Syam! I would like to discuss...',
          subject: 'General Inquiry'
        };
    }
  };

  const config = getPurposeConfig();



const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);

  try {
    const emailParams = {
      from_email: data.fromEmail,
      message: data.message,
      rating: rating.toString(),
      subject: config.subject
    };

    await emailjs.send(
      'service_sushx1d',    // Replace with your actual service ID
      'template_xqdqg1o',   // Replace with your actual template ID
      emailParams,
      'l5zkLrbCvQL1cuFPr'     // Replace with your actual public key
    );

    toast.success('Message sent successfully! 🎉', {
      description: 'Thank you for reaching out. I\'ll get back to you soon!'
    });

    reset();
    setRating(0);
    onClose();
  } catch (error) {
    toast.error('Something went wrong!', {
      description: 'Please try again or email directly.'
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header with gradient background */}
          <DialogHeader className="relative p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10 flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                {config.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </DialogHeader>

          {/* Form Content */}
          <motion.div 
            className="p-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* To Email (Read-only) */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  To
                </Label>
                <Input
                  value="shyampaina166@gmail.com"
                  readOnly
                  className="bg-gray-50 text-gray-600 cursor-not-allowed border-gray-200"
                />
              </motion.div>

              {/* From Email */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  Your Email
                </Label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register('fromEmail', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.fromEmail && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {errors.fromEmail.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Message
                </Label>
                <Textarea
                  placeholder={config.placeholder}
                  rows={4}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Website Rating */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Rate this website
                </Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 rounded-full hover:bg-yellow-50 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </motion.button>
                  ))}
                  {rating > 0 && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-2 text-sm text-gray-600 font-medium"
                    >
                      {rating}/5 stars
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}