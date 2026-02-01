import { motion } from "framer-motion";
import { Eye, Target, Heart, Lightbulb } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Our <span className="text-accent">Vision</span> & <span className="text-blue-300">Mission</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-funky-orange flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To create an inclusive society where every SC/ST employee in the 
              insurance and banking sector enjoys equal opportunities, dignity, 
              and a platform to excel in their careers while contributing to 
              national development.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center gap-2 text-accent">
                <Lightbulb className="w-5 h-5" />
                <span className="text-sm font-medium">Innovation</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Compassion</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Our Mission</h3>
            </div>
            <ul className="text-white/90 leading-relaxed space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent text-xl">•</span>
                <span>Advocate for employee rights and welfare policies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-xl">•</span>
                <span>Provide legal aid and counseling services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-funky-pink text-xl">•</span>
                <span>Organize skill development and training programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-funky-orange text-xl">•</span>
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
