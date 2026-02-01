import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  title: string;
  description?: string;
}

const GalleryGrid = ({ images, title, description }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Create a masonry-like layout with varied sizes
  const getGridClass = (index: number) => {
    const patterns = [
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-2 md:col-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1 md:col-span-2",
      "col-span-1 row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`gallery-image cursor-pointer group ${getGridClass(index)}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-accent transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-white font-heading font-semibold text-lg">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
