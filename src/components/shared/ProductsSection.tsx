"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import Container from "@/components/ui/Container";

export const PRODUCTS = [
  {
    name: "Jaw Crusher",
    description: "Heavy-duty primary crushing for high-capacity ore and rock reduction.",
    image: "/images/double-toggle-oil-jaw-crusher.webp",
    slug: "double-toggle-oil-jaw-crusher",
  },
  {
    name: "Cone Crusher",
    description: "Precision secondary crushing engineered for consistent particle shape.",
    image: "/images/cone-crusher.webp",
    slug: "cone-crusher",
  },
  {
    name: "Stone Crusher",
    description: "Robust crushing units built for aggregate and mining applications.",
    image: "/images/double-toggle-grease-jaw-crusher.webp",
    slug: "double-toggle-grease-jaw-crusher",
  },
  {
    name: "Roll Crusher",
    description: "Efficient compression crushing for medium-hard and soft materials.",
    image: "/images/roll-crusher.webp",
    slug: "roll-crusher",
  },
  {
    name: "Vibrating Screen",
    description: "High-frequency screening for precise material grading and separation.",
    image: "/images/vibrating-screen.webp",
    slug: "vibrating-screen",
  },
  {
    name: "Sand Washer",
    description: "Advanced washing systems delivering clean, high-quality manufactured sand.",
    image: "/images/sand-washer.webp",
    slug: "sand-washer",
  },
  {
    name: "Conveyor System",
    description: "Durable belt conveyors engineered for continuous material transport.",
    image: "/images/belt-conveyor.webp",
    slug: "belt-conveyor",
  },
  {
    name: "Vibrating Feeder",
    description: "Controlled, uniform feeding of bulk material into crushing circuits.",
    image: "/images/vibro-feeder.webp",
    slug: "vibro-feeder",
  },
];

interface ProductsSectionProps {
  limit?: number;
  title?: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  limit,
  title = "Our Product Range",
}) => {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  return (
    <section className="section-padding bg-background select-none">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 text-center md:text-left mx-auto md:mx-0"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="hidden md:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
            <span className="text-primary eyebrow">
              ENGINEERED FOR PERFORMANCE
            </span>
          </div>
          <h2 className="heading-primary text-[#0A1A3B] dark:text-white mt-3">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product, i) => (
            <ProductCard key={product.name} index={i} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;