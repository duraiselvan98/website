import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroCarousel from "@/components/HeroCarousel";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import ServiceBlocks from "@/components/ServiceBlocks";
import WelcomeSection from "@/components/WelcomeSection";
import RecentActivities from "@/components/RecentActivities";
import JoinCommunity from "@/components/JoinCommunity";
import MentorsSection from "@/components/MentorsSection";
import VisionMission from "@/components/VisionMission";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <AnnouncementMarquee />
        <ServiceBlocks />
        <BackgroundPattern>
          <WelcomeSection />
        </BackgroundPattern>
        <RecentActivities />
        <JoinCommunity />
        <MentorsSection />
        <VisionMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
