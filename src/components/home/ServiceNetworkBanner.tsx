"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceNetworkBanner: React.FC = () => {
  return (
    <section className="relative h-[400px] lg:h-[500px] w-full flex items-center overflow-hidden bg-secondary select-none">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/after-sales-1.jpg"
          alt="Field service support"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-4 text-center lg:text-left mx-auto lg:mx-0"
        >
          {/* Subtitle */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
            <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              GLOBAL SUPPORT
            </span>
          </div>

          {/* Title */}
          <h2 className="heading-primary text-white leading-tight">
            Built for Low Maintenance and Reliable Performance
          </h2>

          {/* Paragraph */}
          <p className="text-white/80 text-sm leading-relaxed">
            Our dedicated technical support network and rapid spare parts delivery ensure your mobile crushers and screeners maintain maximum uptime on site.
          </p>

          {/* Read More Link */}
          <div className="pt-2">
            <Link
              href="/services"
              className="text-primary hover:text-foreground text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
            >
              Read more &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceNetworkBanner;
