import { motion } from "framer-motion";
import { Users, Award, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Strong Community",
    description: "Over 25,000 members across India united for a common cause.",
    color: "bg-funky-cyan",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Awarded for outstanding contribution to employee welfare.",
    color: "bg-funky-orange",
  },
  {
    icon: Globe,
    title: "Pan-India Presence",
    description: "Active chapters in every state ensuring local support.",
    color: "bg-funky-purple",
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Free legal aid and representation for all members.",
    color: "bg-funky-green",
  },
];

const AboutContent = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose <span className="text-primary">AIIBSCSTEWA</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to the welfare and empowerment of SC/ST employees
            through various initiatives and programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-all group text-center"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed mb-6">
            The All India Insurance Bank SC/ST Employees Welfare Association (AIIBSCSTEWA) 
            has been at the forefront of advocating for the rights and welfare of SC/ST 
            employees in the banking and insurance sectors for over 25 years. Our dedicated 
            team works tirelessly to ensure equal opportunities, fair treatment, and career 
            advancement for all our members.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-accent mb-1">25+</div>
              <div className="text-white/80 text-sm">Years of Service</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-accent mb-1">25,000+</div>
              <div className="text-white/80 text-sm">Active Members</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-white/80 text-sm">Cases Resolved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
