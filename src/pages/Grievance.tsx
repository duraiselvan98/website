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
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Grievance = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    branch: "",
    mobile: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:aiibscstewa@gmail.com?subject=Grievance from ${formData.name}&body=Name: ${formData.name}%0D%0AEmployee ID: ${formData.employeeId}%0D%0ABranch/Location: ${formData.branch}%0D%0AMobile: ${formData.mobile}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AGrievance Description:%0D%0A${formData.description}`;
    window.location.href = mailtoLink;
    toast.success("Opening email client...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Grievance Portal"/>
        <ServiceBlocks />

        <BackgroundPattern className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input
                      id="employeeId"
                      value={formData.employeeId}
                      onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                      placeholder="Enter employee ID"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch">Branch/Location *</Label>
                  <Input
                    id="branch"
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    placeholder="Enter your branch or location"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Grievance Description *</Label>
                  <Textarea
                    id="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your grievance in detail..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Grievance
                </Button>
              </form>
            </motion.div>
          </div>
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Grievance;
