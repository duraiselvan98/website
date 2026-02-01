import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowRightLeft, BookOpen, Phone } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Grievance",
    path: "/grievance",
    bgClass: "bg-gradient-to-br from-rose-600 to-rose-800",
    hoverClass: "hover:from-rose-500 hover:to-rose-700",
  },
  {
    icon: ArrowRightLeft,
    title: "Transfer",
    path: "/transfer",
    bgClass: "bg-gradient-to-br from-blue-600 to-blue-900",
    hoverClass: "hover:from-blue-500 hover:to-blue-800",
  },
  {
    icon: BookOpen,
    title: "Magazines",
    path: "/circular",
    bgClass: "bg-gradient-to-br from-purple-600 to-purple-900",
    hoverClass: "hover:from-purple-500 hover:to-purple-800",
  },
  {
    icon: BookOpen,
    title: "Circulars",
    path: "/circular",
    bgClass: "bg-gradient-to-br from-teal-600 to-teal-900",
    hoverClass: "hover:from-teal-500 hover:to-teal-800",
  },
  {
    icon: Phone,
    title: "Contact Us",
    path: "/contact",
    bgClass: "bg-gradient-to-br from-amber-600 to-amber-800",
    hoverClass: "hover:from-amber-500 hover:to-amber-700",
  },
];

const ServiceBlocks = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={service.path}
              className={`group flex flex-col items-center justify-center p-8 md:p-10 ${service.bgClass} ${service.hoverClass} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <span className="text-white font-bold text-sm md:text-base text-center">
                {service.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBlocks;
