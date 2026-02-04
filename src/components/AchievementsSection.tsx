import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import activity1 from "@/assets/activities/activity-1.jpg";
import activity2 from "@/assets/activities/activity-2.jpg";
import activity3 from "@/assets/activities/activity-3.jpg";

const achievements = [
  {
    title: "Achievement of our association 1",
    content: "Led national-level organizational initiatives with multi-state coordination.",
    image: activity1,
    color: "bg-rose-600",
    hoverColor: "hover:bg-rose-700",
  },
  {
    title: "Achievement of our association 2",
    content: "Successfully advocated for policy changes that benefit thousands of SC/ST employees across the banking sector. Our sustained efforts resulted in landmark decisions ensuring fair representation and career growth opportunities for all members.",
    image: activity2,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    title: "Achievement of our association 3",
    content: "Established scholarship programs and educational support for members' children, helping over 500 students achieve their dreams. We continue to invest in the future generation through various educational initiatives.",
    image: activity3,
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
  },
];

const AchievementsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            OUR ACHIEVEMENTS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consected adipisicing elit. Autem
            dolorem quod Archive Interdum?
          </p>
        </motion.div>

        {/* Accordion achievements - full width */}
        <div className="max-w-4xl mx-auto space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-card"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 ${achievement.color} ${achievement.hoverColor} text-white transition-all duration-300`}
              >
                <span className="font-heading font-bold text-lg text-left">{achievement.title}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-6 md:p-8">
                      {/* Larger Image */}
                      <div className="aspect-video rounded-xl overflow-hidden shadow-elevated mb-6">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {achievement.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
