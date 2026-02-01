import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import meeting1 from "@/assets/gallery/meeting-1.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import award1 from "@/assets/gallery/award-1.jpg";
import celebration1 from "@/assets/gallery/celebration-1.jpg";

const events = [
  {
    image: meeting1,
    title: "National Commission Meeting",
    date: "January 2025",
  },
  {
    image: event1,
    title: "Annual Conference 2024",
    date: "December 2024",
  },
  {
    image: award1,
    title: "Award Ceremony",
    date: "November 2024",
  },
  {
    image: celebration1,
    title: "Cultural Celebration",
    date: "October 2024",
  },
];

const EventsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Events
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Recent <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest events, meetings, and community initiatives that bring our members together.
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="gallery-image h-64 mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {event.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/gallery">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
