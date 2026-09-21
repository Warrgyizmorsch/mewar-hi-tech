import React from "react";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeContext";

import { Rubik, Saira } from "next/font/google";

import "@radix-ui/themes/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ExperienceProvider } from "@/components/3d/ExperienceManager";
import FloatingButton from "@/components/3d/FloatingButton";
import ModelViewerScript from "@/components/ModelViewerScript";

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
  title: {
    default: "Mewar Hi-Tech - Heavy Duty Crushing & Screening Equipment",
    template: "%s | Mewar Hi-Tech",
  },
  description:
    "Innovative crushing and screening solutions engineered to perform and built to last.",
  applicationName: "Mewar Hi-Tech",
  alternates: {
    canonical: "/",
  },
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

        {/* Google Model Viewer Script for 3D elements */}
        <ModelViewerScript />

        <ThemeProvider>
          <ExperienceProvider>
            <Theme appearance="inherit" radius="large" scaling="100%">
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
            </Theme>
          </ExperienceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
