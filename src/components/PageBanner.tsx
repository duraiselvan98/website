import { motion } from "framer-motion";
import aboutBanner from "@/assets/about-banner.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section className="relative h-48 md:h-56 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || aboutBanner}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
