import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import member1 from "@/assets/members/member-1.jpg";
import member2 from "@/assets/members/member-2.jpg";
import member3 from "@/assets/members/member-3.jpg";

// 10 members for the scrolling carousel
const members = [
  { id: 1, name: "Member 1", role: "President", image: member1 },
  { id: 2, name: "Member 2", role: "Vice President", image: member2 },
  { id: 3, name: "Member 3", role: "General Secretary", image: member3 },
  { id: 4, name: "Member 4", role: "Joint Secretary", image: member1 },
  { id: 5, name: "Member 5", role: "Treasurer", image: member2 },
  { id: 6, name: "Member 6", role: "Organising Secretary", image: member3 },
  { id: 7, name: "Member 7", role: "Executive Member", image: member1 },
  { id: 8, name: "Member 8", role: "Executive Member", image: member2 },
  { id: 9, name: "Member 9", role: "Executive Member", image: member3 },
  { id: 10, name: "Member 10", role: "Executive Member", image: member1 },
];

const MentorsSection = () => {
  // Duplicate members for seamless infinite scroll
  const duplicatedMembers = [...members, ...members];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Leaders
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
            Our <span className="text-primary">Members</span>
          </h2>
        </motion.div>

        {/* Scrolling Members Carousel */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -50 * members.length * 8],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="mt-3 font-medium text-sm text-foreground text-center">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/committee">
            <Button size="lg" className="group">
              See More Members
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorsSection;
