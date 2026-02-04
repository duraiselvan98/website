import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import patternBgDark from "@/assets/pattern-bg-dark.jpg";

interface GalleryCarouselProps {
  images: { src: string; title: string }[];
}

const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleSlides();

  return (
    <div className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${patternBgDark})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '600px',
          filter: 'hue-rotate(200deg) saturate(1.5) brightness(0.6)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      
      {/* Gallery Title - Inside Background */}
      <div className="container mx-auto px-4 text-center mb-6 sm:mb-8 relative z-10">
        <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3">
          Gallery
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">------------------
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-8 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>

          {/* Slides container */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-5xl px-10 sm:px-12 md:px-16">
            {/* Previous slide (smaller) */}
            <motion.div
              key={`prev-${prev}`}
              className="hidden lg:block w-32 md:w-40 lg:w-48 h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden opacity-50 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[prev].src}
                alt={images[prev].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Current slide (center, larger) */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`current-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="carousel-slide w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0"
              >
                <img
                  src={images[current].src}
                  alt={images[current].title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
                />
                <div className="carousel-caption p-2 sm:p-3 md:p-4">
                  <h3 className="font-heading font-semibold text-primary text-sm sm:text-base md:text-lg">
                    {images[current].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next slide (smaller) */}
            <motion.div
              key={`next-${next}`}
              className="hidden lg:block w-32 md:w-40 lg:w-48 h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden opacity-50 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[next].src}
                alt={images[next].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-8 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent w-6 sm:w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
