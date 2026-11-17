import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CelebrationBanner() {
  return (
    <section
      id="celebration-banner"
      aria-labelledby="celebration-heading"
      className="section-padding scroll-mt-28 bg-secondary text-secondary-foreground"
    >
      <Container>
        <div className="relative isolate grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-3xl border border-primary/70 bg-secondary lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="relative z-10 min-w-0 space-y-5 p-6 sm:space-y-6 sm:p-8 xl:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/70 bg-secondary/50 px-3 py-2 font-heading text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">
                <Award size={16} aria-hidden="true" className="shrink-0" />
                Mewar Hitech Engineering Limited
              </span>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/70 bg-secondary/50 px-3 py-2 font-heading text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">
                <Sparkles size={16} aria-hidden="true" className="shrink-0" />
                25 Years Celebration
              </span>
            </div>

            <h2 id="celebration-heading" className="heading-primary text-secondary-foreground">
              Customer Meet <span className="text-primary">2026</span>
            </h2>

            <p className="text-base font-medium leading-relaxed sm:text-lg">
              Celebrating 25 Years of Excellence, Innovation &amp; Partnership
            </p>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="blob-btn w-full sm:w-auto xl:min-w-64"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-3">
                Register Now
                <ArrowUpRight size={20} aria-hidden="true" className="shrink-0" />
              </span>
            </Link>
          </div>

          <div className="relative flex min-h-[240px] min-w-0 flex-col items-start justify-between gap-8 p-6 sm:min-h-[280px] sm:gap-10 sm:p-8 lg:gap-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/images/celebration-crushing-plant.webp"
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, (max-width: 1720px) 40vw, 688px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40 lg:bg-gradient-to-r lg:from-secondary lg:via-secondary/10 lg:to-transparent" />
            </div>

            <Image
              src="/images/celebration-25-emblem.webp"
              alt="25 years celebration"
              width={1280}
              height={1280}
              sizes="(max-width: 639px) 112px, (max-width: 1279px) 144px, 176px"
              className="relative h-auto w-28 shrink-0 object-contain sm:w-36 xl:w-44"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
