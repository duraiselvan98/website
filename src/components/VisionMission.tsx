import { motion } from "framer-motion";
import { Eye, Target, Heart, Lightbulb } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            Our <span className="text-accent">Vision</span> & <span className="text-blue-300">Mission</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all group"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent to-funky-orange flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
              To create an inclusive society where every SC/ST employee in the 
              insurance and banking sector enjoys equal opportunities, dignity, 
              and a platform to excel in their careers while contributing to 
              national development.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1 sm:gap-2 text-accent">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">Innovation</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-blue-300">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">Compassion</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all group"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white">Our Mission</h3>
            </div>
            <ul className="text-white/90 leading-relaxed space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-accent text-lg sm:text-xl">•</span>
                <span>Advocate for employee rights and welfare policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-lg sm:text-xl">•</span>
                <span>Provide legal aid and counseling services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-funky-pink text-lg sm:text-xl">•</span>
                <span>Organize skill development and training programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-funky-orange text-lg sm:text-xl">•</span>
                <span>Foster unity and brotherhood among members</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
