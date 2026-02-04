import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import communityCollage from "@/assets/community-collage.png";

const JoinCommunity = () => {
  const benefits = [
    { icon: Users, text: "10,000+ Active Members" },
    { icon: Shield, text: "Legal Support & Guidance" },
    { icon: Heart, text: "Welfare Assistance" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 text-accent font-medium text-xs sm:text-sm mb-3 sm:mb-4">
              Become a Member
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 sm:mb-6">
            Strength Through{" "}
              <span className="text-accent">Unity</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Be part of a nationwide network of dedicated professionals working 
              together for the welfare and rights of SC/ST employees. Together, 
              we can make a difference!
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 30, y: 20 }}
                  whileInView={{ opacity: 3, y: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 group text-sm sm:text-base"
            >
              <Link to="/contact">
                Register Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Image - Right side - People collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            <img
              src={communityCollage}
              alt="Join AIIBSCSTEWA Community"
              className="w-full max-w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
