import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import welcomeImage from "@/assets/welcome-image.jpg";

const WelcomeSection = () => {
  const features = [
    "Dedicated to employee welfare and rights",
    "Fighting for social justice and equality",
    "Providing educational support and scholarships",
    "Organizing community welfare programs",
    "Advocating for policy reforms",
    "Building a united community network",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Welcome to AIIBSCSTEWA
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Building a Stronger Community{" "}
              <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The All India Insurance Bank SC/ST Employees Welfare Association (AIIBSCSTEWA) 
              is a registered organization committed to the upliftment and welfare of SC/ST 
              employees in the insurance and banking sectors across India. Our mission is to 
              create a supportive environment where every member can thrive and grow.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* See More Button */}
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/about">
                See More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={welcomeImage}
                alt="AIIBSCSTEWA Community"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-heading font-bold text-lg">United for Progress</p>
                <p className="text-sm text-white/80">Our community stands together</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-funky-orange to-funky-coral rounded-full opacity-60 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-funky-purple to-funky-pink rounded-full opacity-50 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
