import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import AchievementsSection from "@/components/AchievementsSection";
import LeaderQuotes from "@/components/LeaderQuotes";
import AboutContent from "@/components/AboutContent";
import VisionMission from "@/components/VisionMission";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Banner */}
        <PageBanner title="About Us" />

        {/* Service Blocks - Edge to edge below banner */}
        <ServiceBlocks />

        {/* Main About Section with pattern */}
        <BackgroundPattern className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src={logo} alt="AIIBSCSTEWA" className="h-16 w-auto" />
                <span className="font-heading font-bold text-2xl text-primary">AIIBSCSTEWA</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                The All India Insurance Bank SC/ST Employees Welfare Association (AIIBSCSTEWA) 
                is a registered organization that has been serving the interests of SC/ST 
                employees in the insurance and banking sectors for over 25 years.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                We are dedicated to protecting the rights and promoting the welfare of our 
                members through advocacy, legal support, and community building initiatives.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { number: "25+", label: "Years of Service" },
                  { number: "200+", label: "Committee Members" },
                  { number: "1000+", label: "Active Members" },
                  { number: "28", label: "State Chapters" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card"
                  >
                    <span className="font-heading font-bold text-3xl text-primary">{stat.number}</span>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </BackgroundPattern>

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Leader Quotes Section */}
        <LeaderQuotes />

        {/* Additional Content Section */}
        <BackgroundPattern>
          <AboutContent />
        </BackgroundPattern>

        {/* Vision & Mission */}
        <VisionMission />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
