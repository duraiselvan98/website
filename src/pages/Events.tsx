import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Plus, ArrowRight } from "lucide-react";
import { useState } from "react";

import activity1 from "@/assets/activities/activity-1.jpg";
import activity2 from "@/assets/activities/activity-2.jpg";
import activity3 from "@/assets/activities/activity-3.jpg";
import activity4 from "@/assets/activities/activity-4.jpg";

const events = [
  {
    id: 1,
    title: "42nd Annual General Body Meeting",
    date: "09 November 2024",
    location: "Chennai, Tamil Nadu",
    image: activity1,
    description: "The 42nd Annual General Body Meeting brought together members from across the country to discuss welfare initiatives and policy updates.",
    details: [
      "Review of previous year's activities and achievements",
      "Discussion on upcoming welfare schemes",
      "Election of new committee members",
      "Policy recommendations for SC/ST employee welfare",
    ]
  },
  {
    id: 2,
    title: "Member Felicitation Ceremony",
    date: "09 November 2024",
    location: "Chennai Convention Center",
    image: activity2,
    description: "Recognition ceremony honoring outstanding contributions of our members to the association.",
    details: []
  },
  {
    id: 3,
    title: "Award Distribution Program",
    date: "09 November 2024",
    location: "Chennai",
    image: activity3,
    description: "Annual awards ceremony recognizing exceptional service and dedication of members.",
    details: []
  },
  {
    id: 4,
    title: "Recognition Ceremony",
    date: "09 November 2024",
    location: "Chennai",
    image: activity4,
    description: "Special recognition event celebrating the achievements of our member community.",
    details: []
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Events" subtitle="Stay updated with our latest events and activities" />
        <ServiceBlocks />

        <BackgroundPattern className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Plus className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading font-bold text-white text-sm md:text-base">
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
        {selectedEvent && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="py-12 bg-muted/30"
          >
            <div className="container mx-auto px-4">
              {events.filter(e => e.id === selectedEvent).map(event => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto"
                >
                  <h2 className="font-heading font-bold text-3xl text-primary mb-6">
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
                    <div className="p-8">
                      <div className="flex flex-wrap gap-6 mb-6">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-5 h-5 text-accent" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-secondary" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-5 h-5 text-primary" />
                          Open to all members
                        </span>
                      </div>
                      
                      <p className="text-foreground leading-relaxed mb-6">
                        {event.description}
                      </p>
                      
                      {event.details.length > 0 && (
                        <ul className="space-y-3 mb-8">
                          {event.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Events;
