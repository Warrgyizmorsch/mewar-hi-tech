"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  slug,
  index,
}) => {
  return (
    <Link href={`/products/${slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
      >
        <div>
          <div className="overflow-hidden h-56 bg-muted">
            <img src={image}
              alt={`${name} industrial machine`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             loading="lazy" width={800} height={600} />
          </div>
          <div className="p-6 text-left">
            <h3 className="common-heading text-lg text-foreground mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="px-6 pb-6 pt-2 text-left">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-200 uppercase tracking-wider">
            View Details
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </span>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProductCard;