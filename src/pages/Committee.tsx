import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import VisionMission from "@/components/VisionMission";
import BackgroundPattern from "@/components/BackgroundPattern";
import CommitteeSection from "@/components/CommitteeSection";

const Committee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner 
          title="Our Committee" 
        />
        <ServiceBlocks />

        <BackgroundPattern className="py-16">
          <CommitteeSection />
        </BackgroundPattern>

        <VisionMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Committee;
