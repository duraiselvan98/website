import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GalleryCarousel from "@/components/GalleryCarousel";
import GalleryGrid from "@/components/GalleryGrid";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";

import activity1 from "@/assets/activities/activity-1.jpg";
import activity2 from "@/assets/activities/activity-2.jpg";
import activity3 from "@/assets/activities/activity-3.jpg";
import activity4 from "@/assets/activities/activity-4.jpg";
import member1 from "@/assets/members/member-1.jpg";
import member2 from "@/assets/members/member-2.jpg";
import member3 from "@/assets/members/member-3.jpg";
import aboutBanner from "@/assets/about-banner.jpg";

const carouselImages = [
  { src: activity1, title: "42nd Annual General Body Meeting" },
  { src: activity2, title: "Member Felicitation Ceremony" },
  { src: activity3, title: "Award Distribution Program" },
  { src: activity4, title: "Recognition Ceremony" },
  { src: aboutBanner, title: "Committee Group Photo" },
];

const galleryImages = [
  { src: activity1, title: "Certificate Presentation", category: "Awards" },
  { src: activity2, title: "Shawl Felicitation", category: "Recognition" },
  { src: activity3, title: "Award Ceremony", category: "Awards" },
  { src: activity4, title: "Bouquet Presentation", category: "Recognition" },
  { src: member1, title: "Executive Committee", category: "Meetings" },
  { src: member2, title: "Advisory Board", category: "Meetings" },
  { src: member3, title: "Core Members", category: "Meetings" },
  { src: aboutBanner, title: "Group Photo", category: "Events" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Gallery Banner with Background Image */}
        <section className="relative h-[200px] md:h-[250px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={aboutBanner}
              alt="Gallery Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          </div>
          <div className="relative z-10 h-full container mx-auto px-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-2">
                Gallery
              </h1>
              <p className="text-white/80 max-w-2xl mx-auto">
                Moments captured from our events and activities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Carousel */}
        <GalleryCarousel images={carouselImages} />

        {/* Gallery Grid */}
        <BackgroundPattern>
          <GalleryGrid
            images={galleryImages}
            title="42nd Annual General Body Meeting"
            description="A platform where national leaders come together to strengthen welfare initiatives for the growth and unity of our association."
          />
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
