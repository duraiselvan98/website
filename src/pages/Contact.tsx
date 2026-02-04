import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:aiibscstewa@gmail.com?subject=${encodeURIComponent(formData.subject || `Contact from ${formData.firstName} ${formData.lastName}`)}&body=${encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast.success("Opening email client...");
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Chennai,",
      subtitle: "Tamil Nadu - 600 112",
      color: "bg-primary",
    },
    {
      icon: Phone,
      title: "044-28191232",
      subtitle: "Call us anytime",
      color: "bg-primary",
    },
    {
      icon: Mail,
      title: "aim.ewa@gmail.com",
      subtitle: "Email us",
      color: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Contact Us"/>
        <ServiceBlocks />

        <BackgroundPattern className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl p-8 shadow-card border border-border"
              >
                <h2 className="font-heading font-bold text-3xl text-primary mb-8">
                  Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First Name"
                        className="border-2 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="border-2 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject Line</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject Line"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Enter Your Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter Your Message"
                      className="border-2 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10"
                  >
                    Submit
                  </Button>
                </form>
              </motion.div>

              {/* Map and Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Cards */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {contactCards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${card.color} rounded-xl p-4 text-white min-w-[120px] text-center shadow-lg`}
                    >
                      <card.icon className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold text-sm">{card.title}</p>
                      <p className="text-xs opacity-80">{card.subtitle}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-elevated border-4 border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9853064067454!2d80.22419831482209!3d12.97161759085287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d4e2b5f6899%3A0x6b2c0f9e8d8c0c0c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1629789012345!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
