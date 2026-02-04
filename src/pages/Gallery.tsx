import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GalleryCarousel from "@/components/GalleryCarousel";
import GalleryGrid from "@/components/GalleryGrid";
import BackgroundPattern from "@/components/BackgroundPattern";

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
        {/* Gallery Carousel with Title - Combined Section */}
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
