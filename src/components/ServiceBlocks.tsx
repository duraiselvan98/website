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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
              className={`group flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 ${service.bgClass} ${service.hoverClass} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <span className="text-white font-bold text-xs sm:text-sm md:text-base text-center">
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
