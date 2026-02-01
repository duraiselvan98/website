import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import heroAmbedkar from "@/assets/hero-ambedkar.jpg";

const quotes = [
  {
    quote: "Cultivation of mind should be the ultimate aim of human existence.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
  {
    quote: "I measure the progress of a community by the degree of progress which women have achieved.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
  {
    quote: "Life should be great rather than long.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
  {
    quote: "Equality may be a fiction but nonetheless one must accept it as a governing principle.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
  {
    quote: "Unlike a drop of water which loses its identity when it joins the ocean, man does not lose his being in the society in which he lives.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
  {
    quote: "Be educated, be organised and be agitated.",
    author: "Dr. B.R. Ambedkar",
    designation: "Architect of Indian Constitution",
    image: heroAmbedkar,
  },
];

const LeaderQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-funky-indigo via-primary to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
            Inspiring Words from Great Leaders
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Wisdom that guides our mission for equality and justice
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Leader Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-elevated">
                <img
                  src={quotes[currentQuote].image}
                  alt={quotes[currentQuote].author}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-funky-yellow animate-bounce-slow" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-funky-cyan" />
              <div className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-funky-pink" />
            </div>
          </motion.div>

          {/* Right side - Quote carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="w-20 h-20 text-accent/30 absolute -top-6 -left-6" />
            
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20"
            >
              <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 italic font-medium">
                "{quotes[currentQuote].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                  <img
                    src={quotes[currentQuote].image}
                    alt={quotes[currentQuote].author}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-accent text-xl">
                    {quotes[currentQuote].author}
                  </p>
                  <p className="text-white/60">
                    {quotes[currentQuote].designation}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevQuote}
                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentQuote
                        ? "bg-accent w-8"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to quote ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextQuote}
                className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Next quote"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderQuotes;
