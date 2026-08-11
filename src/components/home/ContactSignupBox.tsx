"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

const ContactSignupBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${name || "friend"}!`);
    setEmail("");
    setName("");
  };

  return (
    <section className="section-padding-sm bg-background select-none border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Newsletter Signup (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-card border border-border/50 p-8 lg:p-10 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="common-heading text-2xl text-foreground tracking-wide mb-3">
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-8 max-w-md">
              Receive news, press updates, and alerts regarding new product launches and heavy machinery developments directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-semibold">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First & Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-border px-4 py-3 text-xs rounded-lg focus:outline-none focus:border-primary text-foreground bg-background"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-border px-4 py-3 text-xs rounded-lg focus:outline-none focus:border-primary text-foreground bg-background"
              />
            </div>
            <div>
              <BlobButton
                type="submit"
                variant="primary"
                className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2"
              >
                <span>Sign Up</span>
                <ArrowRight size={14} />
              </BlobButton>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Contact Card Box (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative rounded-xl overflow-hidden min-h-[280px] flex flex-col justify-end p-8 lg:p-10 text-white"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/images/latest-process-machinery.jpg"
              alt="Keestrack headquarters office"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 hover:bg-black/55 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h3 className="common-heading text-2xl tracking-wide leading-tight text-white">
              You have questions?
              <br />
              Contact us!
            </h3>
            <Link href="/contact">
              <BlobButton
                variant="primary"
                className="!px-6 !py-3 !text-xs !font-bold !uppercase !tracking-wider flex items-center justify-center gap-2"
              >
                <span>Contact us</span>
                <ArrowRight size={14} />
              </BlobButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSignupBox;
