import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, FileText, Newspaper, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const todayCircular = {
  title: "How To Protect Your App With Threat Model Based On JSONDiff",
  category: "SECURITY",
  date: "27 August, 2024",
  readTime: "25 MINS",
  excerpt: "Brownied Butter And Brown Sugar Caramelity Oatmess Crispy Edgestarch And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite Brownied Butter Brown Sugar Caramelity Oatmess.",
  image: null,
};

const quickCards = [
  { category: "POLITICS", title: "Using Instagram Taws Promote Your", date: "27 August, 2024", color: "bg-rose-600" },
  { category: "TECH", title: "Everything Developers Must Know About", date: "27 August, 2024", color: "bg-cyan-600" },
  { category: "MODERN", title: "Implementing Okta Authentication in", date: "27 August, 2024", color: "bg-green-600" },
];

const newsItems = [
  { category: "ALERT", title: "Take A Look Back At The Moseret Gala Red Carpet Ever", date: "07 August, 2024" },
  { category: "MARKETING", title: "Take A Look Back At The Moseret Gala Red Carpet Ever", date: "27 August, 2023" },
  { category: "MARKETING", title: "Take A Look Back At The Moseret Gala Red Carpet Ever", date: "27 August, 2024" },
];

const circulars = [
  { id: 1, title: "Transfer Policy Guidelines 2024-25", date: "15 Jan 2025", type: "Policy" },
  { id: 2, title: "Reservation Roster Implementation Notice", date: "10 Jan 2025", type: "Notice" },
  { id: 3, title: "Annual General Meeting Notification", date: "05 Jan 2025", type: "Meeting" },
  { id: 4, title: "Welfare Scheme Updates for Members", date: "01 Jan 2025", type: "Welfare" },
  { id: 5, title: "SC/ST Promotion Guidelines Amendment", date: "28 Dec 2024", type: "Policy" },
  { id: 6, title: "Training Program Registration Open", date: "20 Dec 2024", type: "Training" },
];

const Circular = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Circular" subtitle="All India Indian Bank SC/ST Employees' Welfare Association" />
        <ServiceBlocks />

        <BackgroundPattern className="py-12">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-2xl text-primary mb-8"
            >
              Today Circular
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                  {/* Image placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                    <Newspaper className="w-20 h-20 text-primary/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                      {todayCircular.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <Badge variant="secondary" className="bg-purple-600/10 text-purple-600">
                        {todayCircular.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {todayCircular.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {todayCircular.readTime}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {todayCircular.excerpt}
                    </p>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                      READ MORE <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Quick cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {quickCards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${card.color} rounded-xl p-5 text-white`}
                    >
                      <span className="text-xs font-bold opacity-80">{card.category}</span>
                      <h4 className="font-heading font-semibold mt-2 text-sm line-clamp-2">
                        {card.title}
                      </h4>
                      <p className="text-xs mt-3 opacity-70 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {card.date}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Circulars and News box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-6 bg-amber-500/10 rounded-xl p-6 border border-amber-500/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      Today Circulars And NEWS
                    </h3>
                    <Button variant="outline" size="sm" className="border-primary text-primary">
                      See Details
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              {/* News Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4">
                    <h3 className="font-heading font-bold text-lg text-white">News</h3>
                  </div>
                  {/* News image placeholder */}
                  <div className="h-40 bg-gradient-to-br from-orange-600/20 to-pink-600/20 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-orange-600/40" />
                  </div>
                </div>

                {newsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-4 shadow-card border border-border"
                  >
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        index === 0 ? 'bg-red-600/10 text-red-600' :
                        'bg-green-600/10 text-green-600'
                      }`}
                    >
                      {item.category}
                    </Badge>
                    <h4 className="font-heading font-semibold text-sm text-foreground mt-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </BackgroundPattern>

        {/* All Circulars */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-2xl text-primary mb-8"
            >
              All Circulars
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {circulars.map((circular, index) => (
                <motion.div
                  key={circular.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      index % 6 === 0 ? 'bg-purple-600/20 text-purple-600' :
                      index % 6 === 1 ? 'bg-orange-600/20 text-orange-600' :
                      index % 6 === 2 ? 'bg-cyan-600/20 text-cyan-600' :
                      index % 6 === 3 ? 'bg-green-600/20 text-green-600' :
                      index % 6 === 4 ? 'bg-pink-600/20 text-pink-600' :
                      'bg-teal-600/20 text-teal-600'
                    }`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">
                        {circular.type}
                      </Badge>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {circular.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {circular.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Circular;
