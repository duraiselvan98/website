import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="hero-gradient pattern-overlay py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center gap-4 h-[400px] md:h-[500px]">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Slides container */}
          <div className="flex items-center justify-center gap-4 w-full max-w-5xl px-16">
            {/* Previous slide (smaller) */}
            <motion.div
              key={`prev-${prev}`}
              className="hidden md:block w-48 h-64 rounded-lg overflow-hidden opacity-50 flex-shrink-0"
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
                className="carousel-slide w-full max-w-lg flex-shrink-0"
              >
                <img
                  src={images[current].src}
                  alt={images[current].title}
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="carousel-caption">
                  <h3 className="font-heading font-semibold text-primary text-lg">
                    {images[current].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next slide (smaller) */}
            <motion.div
              key={`next-${next}`}
              className="hidden md:block w-48 h-64 rounded-lg overflow-hidden opacity-50 flex-shrink-0"
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
            className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent w-8"
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
