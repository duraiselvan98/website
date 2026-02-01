import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ambedkar.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dr. B.R. Ambedkar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              All India Insurance Bank SC/ST Employees Welfare Association
            </span>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Empowering Employees,{" "}
              <span className="text-accent">Building Unity</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Dedicated to the welfare, rights, and empowerment of SC/ST employees across 
              insurance and banking sectors. Together we stand for justice and equality.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="hero"
                size="lg"
                className="font-semibold px-8"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 bg-white/10 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "10,000+", label: "Members" },
              { icon: Award, value: "25+", label: "Years of Service" },
              { icon: Heart, value: "100+", label: "Welfare Programs" },
              { icon: Users, value: "50+", label: "Chapters Nationwide" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading font-bold text-2xl text-white">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
