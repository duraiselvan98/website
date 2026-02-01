import { Bell } from "lucide-react";

const announcements = [
  "📢 Annual General Meeting scheduled for March 2026 - All members are requested to attend",
  "🎉 Congratulations to all newly elected committee members for 2026-2027",
  "📋 Transfer applications for Q1 2026 are now being accepted - Submit before Feb 28th",
  "📰 Latest magazine issue now available for download in the Magazines section",
  "🏆 AIIBSCSTEWA members felicitated at National Banking Excellence Awards",
  "📞 Grievance helpline now available 24/7 - Contact us for immediate assistance",
];

const AnnouncementMarquee = () => {
  return (
    <div className="bg-gradient-to-r from-funky-orange via-funky-coral to-funky-pink py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 flex items-center gap-2 bg-white/20 py-1 rounded-r-full">
          <Bell className="w-5 h-5 text-white animate-pulse" />
          <span className="font-bold text-white text-sm uppercase">Latest News</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((text, index) => (
              <span key={index} className="mx-8 text-white font-medium">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMarquee;
