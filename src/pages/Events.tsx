import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Plus, ArrowRight, X } from "lucide-react";
import { useState } from "react";

import ambedkarBirthday from "@/assets/events/ambedkar-birthday.jpg";
import beffiDonation from "@/assets/events/beffi-donation.jpg";
import felicitationRetirement from "@/assets/events/felicitation-retirement.jpg";
import mdCeoJain from "@/assets/events/md-ceo-jain.jpg";
import mdCeoBinod from "@/assets/events/md-ceo-binod.jpg";
import ncscMeeting from "@/assets/events/ncsc-meeting.jpg";

const events = [
  {
    id: 1,
    title: "Ambedkar Birthday 2025",
    date: "14 April 2025",
    location: "Chennai, Tamil Nadu",
    image: ambedkarBirthday,
    description: "Grand celebration of Dr. B.R. Ambedkar's birthday with floral tributes and cultural programs honoring the architect of Indian Constitution.",
    details: [
      "Garlanding of Ambedkar statue",
      "Cultural programs and speeches",
      "Distribution of books on Ambedkar's teachings",
      "Community gathering and fellowship",
    ]
  },
  {
    id: 2,
    title: "BEFFI Krishna School Donation",
    date: "20 January 2025",
    location: "Chennai",
    image: beffiDonation,
    description: "Association donated educational materials and support to BEFFI Krishna School as part of our commitment to education.",
    details: [
      "Donation of educational materials",
      "Support for underprivileged students",
      "Commitment to education welfare",
    ]
  },
  {
    id: 3,
    title: "Felicitation & Fair Retirement",
    date: "15 January 2025",
    location: "Chennai",
    image: felicitationRetirement,
    description: "Honoring our retiring members with a grand felicitation ceremony celebrating their years of dedicated service.",
    details: [
      "Recognition of retiring members",
      "Presentation of mementos",
      "Celebration of dedicated service",
    ]
  },
  {
    id: 4,
    title: "Indian Bank MD CEO Jain Retirement",
    date: "10 January 2025",
    location: "Chennai",
    image: mdCeoJain,
    description: "Farewell ceremony for Indian Bank MD & CEO, acknowledging their leadership and contributions to the banking sector.",
    details: [
      "Farewell address",
      "Recognition of contributions",
      "Association's tribute to leadership",
    ]
  },
  {
    id: 5,
    title: "Indian Bank MD CEO Mr. Binod Kumar",
    date: "05 January 2025",
    location: "Chennai",
    image: mdCeoBinod,
    description: "Welcome ceremony and meeting with new Indian Bank MD & CEO Mr. Binod Kumar to discuss employee welfare initiatives.",
    details: [
      "Welcome ceremony for new MD & CEO",
      "Discussion on welfare initiatives",
      "Building partnerships for employee rights",
    ]
  },
  {
    id: 6,
    title: "NCSC Meeting 12.02.2025",
    date: "12 February 2025",
    location: "New Delhi",
    image: ncscMeeting,
    description: "Meeting with National Commission for Scheduled Castes to discuss employee welfare and policy recommendations.",
    details: [
      "Policy discussions with NCSC",
      "Presentation of employee concerns",
      "Welfare recommendations submission",
    ]
  },
];

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  details: string[];
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handlePlusClick = (e: React.MouseEvent, event: Event) => {
    e.stopPropagation();
    setLightboxImage(event.image);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Events"/>
        <ServiceBlocks />

        <BackgroundPattern className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-card border-2 transition-all duration-300 bg-background ${
                    selectedEvent === event.id 
                      ? 'border-primary ring-4 ring-primary/20' 
                      : 'border-transparent hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    
                    {/* Hover overlay with Plus button */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                      <button
                        onClick={(e) => handlePlusClick(e, event)}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                      >
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </button>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                      <h3 className="font-heading font-bold text-white text-xs sm:text-sm md:text-base line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundPattern>

        {/* Selected Event Details */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="py-8 sm:py-12 bg-muted/30"
            >
              <div className="container mx-auto px-4">
                {events.filter(e => e.id === selectedEvent).map(event => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                  >
                    <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-4 sm:mb-6">
                      {event.title}
                    </h2>
                    
                    <div className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border">
                      <div className="aspect-video">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6 md:p-8">
                        <div className="flex flex-wrap gap-3 sm:gap-6 mb-4 sm:mb-6">
                          <span className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            Open to all members
                          </span>
                        </div>
                        
                        <p className="text-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                          {event.description}
                        </p>
                        
                        {event.details.length > 0 && (
                          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                            {event.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-1 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={lightboxImage}
                alt="Event full view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Events;
