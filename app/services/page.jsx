"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web development",
    des: "We offer professional web development services, creating responsive and robust websites tailored to your business needs. Our expertise ensures a seamless user experience and optimal performance across all devices.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Apple Products Reseller",
    des: "I specialize in reselling Apple electronic products, including MacBooks, iPhones, AirPods, and accessories like the Magic Mouse and Magic Keyboard,...",
    href: "/contact",
  },
  {
    num: "03",
    title: "Personal Trainer",
    des: "I’m a personal fitness trainer specializing in helping beginners build a solid foundation. I provide customized workout plans and hands-on guidance from basic form to advanced fitness techniques.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Specially / 1-0-2 - Boy Friend",
    des: "Experience the perfect companion with our Boy Friend service. Whether you need a date for an event or a listening ear, our friendly and charming companions are here to make your day special and enjoyable",
    href: "/contact",
  }
  
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[50px] h-[50px] rounded-full  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                    target="blank"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.des}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
