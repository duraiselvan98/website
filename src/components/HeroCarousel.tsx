import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Link2, X } from "lucide-react";
import heroAmbedkarNew from "@/assets/hero-ambedkar-new.png";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    id: 1,
    image: heroAmbedkarNew,
    title: "All India Indian Bank SC/ST",
    subtitle: "Employees' Welfare Association",
  },
  {
    id: 2,
    image: heroSlide2,
    title: "All India Indian Bank SC/ST",
    subtitle: "Employees' Welfare Association",
  },
  {
    id: 3,
    image: heroSlide3,
    title: "All India Indian Bank SC/ST",
    subtitle: "Employees' Welfare Association",
  },
];

const usefulLinks = [
  { name: "Reserve Bank of India", url: "https://www.rbi.org.in" },
  { name: "Indian Banks Association", url: "https://www.iba.org.in" },
  { name: "Ministry of Finance", url: "https://finmin.nic.in" },
  { name: "SC/ST Commission", url: "https://ncsc.nic.in" },
  { name: "National Portal of India", url: "https://www.india.gov.in" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLinksMenu, setShowLinksMenu] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      {/* Useful Links Button */}
      <div className="absolute top-3 sm:top-40 right-4 sm:right-10 z-30">
        <button
          onClick={() => setShowLinksMenu(!showLinksMenu)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors shadow-lg text-xs sm:text-sm"
        >
          <Link2 className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Useful Links</span>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showLinksMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-10 sm:top-12 right-0 w-52 sm:w-64 bg-white rounded-xl shadow-elevated border border-border overflow-hidden z-50"
            >
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-primary text-primary-foreground">
                <span className="font-semibold text-sm sm:text-base">Useful Links</span>
                <button onClick={() => setShowLinksMenu(false)}>
                  <X className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
              <div className="py-1 sm:py-2">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].subtitle}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay - transparent on left for Ambedkar image */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-primary/90" />
          </div>

          {/* Content - Right side */}
          <div className="relative z-10 h-full container mx-manual px-4 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl text-right"
            >
              <h1 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-2 sm:mb-4 drop-shadow-lg">
                {slides[currentSlide].title}
                <br />
                <span className="text-accent">{slides[currentSlide].subtitle}</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
