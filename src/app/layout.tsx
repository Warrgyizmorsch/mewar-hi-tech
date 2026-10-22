import React from "react";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import ModelViewerScript from "@/components/ModelViewerScript";

import { Rubik, Saira } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ExperienceProvider } from "@/components/3d/ExperienceManager";
import FloatingButton from "@/components/3d/FloatingButton";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mewarhitech.com"),
  title: "Mewar Hi-Tech - Heavy Duty Crushing & Screening Equipment",
  description:
    "Innovative crushing and screening solutions engineered to perform and built to last.",
  applicationName: "Mewar Hi-Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mewar Hi-Tech",
    description:
      "Heavy-duty crushing, screening, and mineral processing equipment built for productivity and reliability.",
    url: "https://www.mewarhitech.com",
    siteName: "Mewar Hi-Tech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/slider/about-mewar-hi-tech1.jpg",
        width: 1200,
        height: 630,
        alt: "Mewar Hi-Tech Crushing Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mewar Hi-Tech - Heavy Duty Crushing & Screening Equipment",
    description: "Innovative crushing and screening solutions engineered to perform and built to last.",
    images: ["/images/slider/about-mewar-hi-tech1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${rubik.variable} ${saira.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M5CJRB5N');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Mewar Hi-Tech Engineering Ltd.",
                "alternateName": ["Kingson", "Kingson Crusher", "Mewar Hi-Tech"],
                "url": "https://www.mewarhitech.com",
                "logo": "https://www.mewarhitech.com/images/slider/about-mewar-hi-tech1.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Kingson"
                },
                "sameAs": [
                  "https://www.youtube.com/@MewarHitec",
                  "https://www.facebook.com/profile.php?id=61592863865884",
                  "https://www.instagram.com/mewarhitech/",
                  "https://www.linkedin.com/company/mewar-hi-tech-engineering-ltd/"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9001999721",
                    "contactType": "sales",
                    "email": "sales@kingsoncrusher.com",
                    "areaServed": "IN"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9414167380",
                    "contactType": "customer service",
                    "areaServed": "IN"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Mewar Hi-Tech Engineering Ltd.",
                "image": "https://www.mewarhitech.com/images/slider/about-mewar-hi-tech1.jpg",
                "telephone": "+91-9001999721",
                "url": "https://www.mewarhitech.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hawa Magri Industrial Area, Sukher",
                  "addressLocality": "Udaipur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "313001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 24.6368,
                  "longitude": 73.7126
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            ])
          }}
        />
        <link rel="preload" href="/images/video_thumbnail.webp" as="image" />
        <link rel="preconnect" href="https://ajax.googleapis.com" crossOrigin="anonymous" />
        <link rel="modulepreload" href="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" />
      </head>
      <body className="min-h-screen font-sans" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5CJRB5N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider>
          <ExperienceProvider>
            <ModelViewerScript />
            <main className="min-h-screen font-sans">
              {children}
              {/* <FloatingButton /> */}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
              />
            </main>
          </ExperienceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
