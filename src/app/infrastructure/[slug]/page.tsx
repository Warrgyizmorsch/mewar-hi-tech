"use client";

import React, { use, useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, LayoutGrid, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";

interface BulletGroup {
  sectionTitle: string;
  items: string[];
}

interface InfraConfig {
  title: string;
  description: string;
  paragraphs: string[];
  bullets?: BulletGroup[];
  images: string[];
}

const INFRA_CONFIG: Record<string, InfraConfig> = {
  "manufacturing": {
    title: "Manufacturing Facility",
    description: "100% in-house heavy machinery fabrication, machining, and assembly facility.",
    paragraphs: [
      "At MEWAR HITECH ENGINEERING LTD. (MHEL) we do so much more than just offering crushers. With our 100% in-house & hi-tech manufacturing facility, we help you own the best-engineered, modern, durable & high-quality crushers at the most competitive price that helps you increase your productivity & operational efficiency by at least 20%.",
      "All our products are designed for greater efficiency & productivity and made of best grade material under the supervision of our Quality Assurance Cell which makes 'KINGSON' trustworthy and reliable. 'KINGSON' has now turned into the equivalent word of value, lawlessness and consumer loyalty. The MHEL group of right around 500 skilled & semi-skilled workers, 50 qualified and experienced staff members pursue these concepts with firm determination and self-commitment.",
      "The unit is situated amongst the picturesque Aravalli hill range of Udaipur, the magnificent city of Rajasthan. We do not just have a gigantic present-day office space and R&D labs, but also the most recent innovation-based furnaces, casting, and fabricating units; covering an area of more than 200,000 sq. ft. including a constructed area of more than 80,000 sq. ft. We have developed the best workshop which is well equipped with the latest, best-in-class, innovation and state-of-the-art technology machines, instruments, and tools.",
      "MHEL started its journey in 1992 as a designer and manufacturer of Crushers. The entire credit of our prosperity goes to our 'commitment to grow', which has taken us today to achieve our desired target. We never compromised with the quality of our products and the effectiveness of our services. Our experience and expertise in fabrication and steel and non-ferrous casting industry have given us a special place among the users of crushers and related products. The very quality of our products is the only reason that almost 25% of our total annual production is being exported to Asian and other countries.",
      "We are maintaining as much as 100% annual growth rate for the last four consecutive years, with the uninterrupted support of our subsidiary units – Mewar Techno-cast Pvt. Ltd. and Kingson H-Tech Industry."
    ],
    images: Array.from({ length: 6 }, (_, i) => `/images/manufacturing/manufacturing-${i + 1}.jpg`)
  },
  "casting": {
    title: "Casting Foundry",
    description: "Heavy steel, alloy, and non-ferrous foundry supporting single castings up to 25,000 kg.",
    paragraphs: [
      "The industrial business manufacture Low Alloy Steels, High Alloy Steels, Stainless and wear resistant grades range from castings of 200 lbs to 55,000 lbs (8 to 25,000 kg). Complete scope supply within these markets is supported by assisted engineering, pattern construction, and solidification modeling, machining and sub-assembly services. We have some casting features which as follows:"
    ],
    bullets: [
      {
        sectionTitle: "(1) Induction Furnaces",
        items: [
          "3 Ton Furnace",
          "1 Ton Furnace (2 Nos)",
          "750 Kg Furnace",
          "300 Kg Furnace",
          "150 Kg Furnace",
          "Total 6000 Kg single piece Casting Facility."
        ]
      },
      {
        sectionTitle: "(2) Heat Treatment Facilities",
        items: [
          "Water Quenching Facility",
          "Attachment with ATC (Automatic Temperature Controller)."
        ]
      },
      {
        sectionTitle: "(3) Shot Blasting Machine (SBM)",
        items: [
          "2-Ton capacity for unfinished material in one time."
        ]
      },
      {
        sectionTitle: "(4) Casting Capabilities",
        items: [
          "Mn Steel All Grades (Jaw plates, Side Plates, CB, DL)",
          "Carbon Steel All Grades (Sw. Jaw, St. Jaw, Toggle Pitman, Block)",
          "Cast Iron (Fly Wheel)",
          "High Chrome (Blow Bars)",
          "Non-Ferrous - Phosphorus Bronze in All Grades (Toggle Pin, Toggle Seat, Bush for Cone Crusher)"
        ]
      }
    ],
    images: [
      "/images/casting/casting-1.jpg",
      "/images/casting/casting-2.jpg",
      "/images/casting/casting-4.jpg",
      "/images/casting/casting-5.jpg",
      "/images/casting/casting-6.jpg",
      "/images/casting/casting-7.jpg",
      "/images/casting/casting-8.jpg",
      "/images/casting/casting-9.jpg"
    ]
  },
  "latest-process-machinery": {
    title: "Latest Process Machinery",
    description: "State-of-the-art Boring, CNC plasma cutting, Lathes, Heat Treatment, and MIG lines.",
    paragraphs: [
      "At MHEL 'Quality Policy' is not merely a nice slogan, but it is the life of its products. The quality policy goes through in every detail from R&D to dispatching. Holding the quality policy tightly, MHEL has set up and carried out an indigenous quality Management System (QMS) all around and has got the satisfaction and respect of its customers.",
      "We are using the latest technology to improve the machine quality as well as boring machines for efficiency and ease of the entire production process in general. Our aim is to have the ability to bring a higher level of efficiency to crushing projects in more ways than one. One of the great advantages of using a boring head with a single point tool is its ability to establish the true position of a hole or a series of holes. This is possible only because a single point tool can remove more stock from one side of a hole than the other.",
      "We use CNC cutting because the digital template and autonomous machining of CNC practically eliminate human error and achieves accuracy within 1/1000th.",
      "Usually, the manual plasma cutting process is quite accurate and precise based on the measurements given. The plasma cutter is equipped with gears that ensure that the cutting is accurate without deviating from the measurements specified. However, in the case of CNC plasma cutters, they are computer operated and are paired with state-of-the-art software. The specifications are stored in the hard disk of the computer before the cutting process begins. And once the cutter is computer operated, the cuts are sharp and clean. This ensures higher precision and accuracy in the entire cutting process.",
      "We use CNC computerized lathe machine and the main advantage is that it makes difficult jobs easier and quicker as it is fully automated with a computer program. The operator has to feed in the dimensions of the finished product in the specified program of the machine and then it does its job by finishing one process after another automatically, with an extreme level of accuracy and speed.",
      "We use the heat treatment process because steel parts often require some form of heat treatment to achieve an increase in hardness and obtain maximum strength and durability. Through the many different processes of heat treatment, the properties of steel are changed via physical and mechanical channels. As an added benefit, heat treatment can also aid in the manufacturing process. When we talk about change of mechanical properties, we're referring to the shear strength, toughness and tensile strength of the steel. Allowing for this mechanical change in properties enables your product to be more efficient in its daily duties and more resistant to wear and tear during even its toughest jobs.",
      "We use MIG welding because it provides excellent weld joint penetration and makes weld splatter and flux clean up quite simple. Flux cored wires provide a good middle ground between solid cored wires and self-shielded flux cored wires."
    ],
    images: Array.from({ length: 5 }, (_, i) => `/images/latest-process-machinery/latest-process-machinery-${i + 1}.jpg`)
  },
  "r-d-design": {
    title: "Research & Development and Design",
    description: "CAD modeling, finite element analysis (FEA), and fully-fledged chemical/physical laboratories.",
    paragraphs: [
      "Research & Development (R&D) is a constant activity here at Mewar Hitech. Together with the specialized engineering group, advanced instruments, testing laboratory and extensive cooperation, Mewar Hitech Engineering Ltd. claims a solid Technology R&D framework. The team of Engineers led by senior engineers and some reputable experts has a strong R&D ability.",
      "In R&D, we widely use the 3D (three-dimension) software and the finite element software. We have a full-fledged Chemical and Physical Laboratory that is fully equipped and has a strong analytical capacity. We are additionally investigating the conceivable outcomes to set up innovative participation with reputed research foundations of the pertinent business on the planet."
    ],
    images: Array.from({ length: 8 }, (_, i) => `/images/r-d-design/r-d-design-${i + 1}.jpg`)
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function InfrastructureDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const config = INFRA_CONFIG[slug];

  if (!config) {
    notFound();
  }

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const bulletsCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-slide on mobile screens (less than 768px where grid isn't active)
      if (window.innerWidth >= 768) return;
      
      if (bulletsCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = bulletsCarouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          bulletsCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          bulletsCarouselRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
        }
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? config.images.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === config.images.length - 1 ? 0 : prev! + 1));
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, slug]);

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Page Hero Header */}
        <PageHero
          label="Our Infrastructure"
          title={config.title}
          description={config.description}
          image="/images/backgorund.webp"
        />

        {/* Content Section */}
        <section className="section-padding bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Description & Bullet details */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="hidden lg:block w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
                    <span className="text-primary eyebrow">
                      TECHNICAL SPECIFICATIONS
                    </span>
                  </div>
                  <h2 className="heading-primary text-[#0A1A3B] dark:text-white">
                    ABOUT OUR <span className="text-primary inline-block">{config.title}</span>
                  </h2>
                </div>

                <div className="text-muted-foreground text-sm leading-relaxed space-y-6 font-medium">
                  {config.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Optional Casting/Technical Bullet Lists */}
                {config.bullets && (
                  <div 
                    ref={bulletsCarouselRef}
                    className="flex overflow-x-auto md:grid md:grid-cols-2 gap-4 md:gap-6 pt-4 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
                  >
                    {config.bullets.map((bulletGroup) => (
                      <div
                        key={bulletGroup.sectionTitle}
                        className="w-[85vw] md:w-auto shrink-0 snap-center p-6 rounded-xl bg-muted/40 border border-border/80 space-y-3.5"
                      >
                        <h4 className="font-heading text-xs font-bold uppercase text-foreground tracking-wider border-b border-border/60 pb-2">
                          {bulletGroup.sectionTitle}
                        </h4>
                        <ul className="space-y-2">
                          {bulletGroup.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-xs text-muted-foreground font-semibold leading-relaxed">
                              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Mini Interactive Gallery Grid */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="common-heading text-xl font-bold text-foreground">
                    Asset Gallery
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground bg-muted/40 border border-border/80 px-3 py-1.5 rounded-lg">
                    <LayoutGrid size={12} className="text-primary" />
                    <span>{config.images.length} Images</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {config.images.map((src, idx) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                      onClick={() => setLightboxIndex(idx)}
                      className="relative rounded-xl overflow-hidden border border-border bg-card aspect-[4/3] cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`${config.title} asset view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                          <Eye size={16} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>

      {/* Lightbox / Modal Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar with close and counter */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Image {lightboxIndex + 1} of {config.images.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={config.images[lightboxIndex]}
                alt={`Expanded expanded view ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/5"
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
