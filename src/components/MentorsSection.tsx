import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BackgroundPattern from "@/components/BackgroundPattern";
import presidentImg from "@/assets/members/president.jpg";
import generalSecretaryImg from "@/assets/members/general-secretary.jpg";
import treasurerImg from "@/assets/members/treasurer.jpg";

// Reordered: General Secretary first, then Vice President, then President, then remaining
const members = [
   { id: 1, name: "Avinash Kumar", role: "President", zone: "IR Cell, Patna", image: presidentImg, featured: true },
  { id: 2, name: "K. Babu", role: "General Secretary", zone: "Chennai South", image: generalSecretaryImg, featured: true },
  { id: 3, name: "D. Nandakumar", role: "Treasurer", zone: "Chennai North", image: treasurerImg, featured: true },
  { id: 4, name: "Kuldeep Singh", role: "Working President", zone: "Kanpur", featured: false },
  { id: 5, name: "C Prabhakaran", role: "Vice President", zone: "Poonamallee", featured: false },
  { id: 6, name: "B B Rabha", role: "Vice President", zone: "Guwahati", featured: false },
  { id: 7, name: "Manoj Kumar Tigga", role: "Vice President", zone: "Ranchi", featured: false },
  { id: 8, name: "Kanagaselvan", role: "Dy. General Secretary", zone: "Chennai South", featured: false },
  { id: 9, name: "Santosh Kumar Patil", role: "Dy. General Secretary", zone: "Jabalpur", featured: false },
  { id: 10, name: "Satya Prakash Meena", role: "Organizing Secretary", zone: "Jaipur", featured: false },
  { id: 11, name: "Satyamurthy", role: "Asst. Treasurer", zone: "Chennai North", featured: false },
  { id: 12, name: "R. Selvakumar", role: "Joint Secretary", zone: "Chennai Central", featured: false },
  { id: 13, name: "M. Ramesh", role: "Executive Member", zone: "Hyderabad", featured: false },
  { id: 14, name: "P. Venkatesh", role: "Executive Member", zone: "Bangalore", featured: false },
  { id: 15, name: "S. Kumar", role: "Executive Member", zone: "Mumbai", featured: false },
];

const MentorsSection = () => {
  // Duplicate members for seamless infinite scroll
  const duplicatedMembers = [...members, ...members];

  return (
    <BackgroundPattern className="py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Leaders
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mt-2">
            Our <span className="text-primary">Members</span>
          </h2>
        </div>

        {/* Marquee Scrolling Members */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee"
              style={{
                animation: 'marquee 20s linear infinite',
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-3 sm:border-4 border-primary/30 shadow-elevated group-hover:border-primary group-hover:scale-105 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="mt-2 sm:mt-3 font-medium text-xs sm:text-sm text-foreground text-center max-w-[80px] sm:max-w-[100px] md:max-w-[120px] truncate">
                    {member.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-primary font-medium text-center">
                    {member.role}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center hidden sm:block">
                    {member.zone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/committee">
            <Button size="lg" className="group text-sm sm:text-base">
              See More Members
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </BackgroundPattern>
  );
};

export default MentorsSection;
