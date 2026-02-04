import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import activity1 from "@/assets/activities/activity-1.jpg";
import activity2 from "@/assets/activities/activity-2.jpg";
import activity3 from "@/assets/activities/activity-3.jpg";
import activity4 from "@/assets/activities/activity-4.jpg";

const activities = [
  {
    id: 1,
    title: "42nd Annual General Body Meeting",
    date: "November 2024",
    location: "Chennai",
    image: activity1,
  },
  {
    id: 2,
    title: "Member Felicitation Ceremony",
    date: "November 2024",
    location: "Chennai Convention Center",
    image: activity2,
  },
  {
    id: 3,
    title: "Award Distribution Program",
    date: "November 2024",
    location: "Chennai",
    image: activity3,
  },
  {
    id: 4,
    title: "Recognition Ceremony",
    date: "November 2024",
    location: "Chennai",
    image: activity4,
  },
];

const RecentActivities = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Recent <span className="text-primary">Activities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-card mb-3 sm:mb-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{activity.date}</span>
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors mb-0.5 sm:mb-1">
                {activity.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{activity.location}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
            <Link to="/events">
              View All Events <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
