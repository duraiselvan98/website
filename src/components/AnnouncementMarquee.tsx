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
    <div className="bg-gradient-to-r from-funky-orange via-funky-coral to-funky-pink py-2 sm:py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-2 sm:px-4 flex items-center gap-1 sm:gap-2 bg-white/20 py-1 rounded-r-full">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
          <span className="font-bold text-white text-[10px] sm:text-sm uppercase">News</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: 'marquee-fast 15s linear infinite',
            }}
          >
            {[...announcements, ...announcements].map((text, index) => (
              <span key={index} className="mx-4 sm:mx-8 text-white font-medium text-xs sm:text-base">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementMarquee;
