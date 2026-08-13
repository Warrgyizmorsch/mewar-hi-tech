import React from 'react';
import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ui/ThemeContext';

import { Rubik, Oswald } from 'next/font/google';

import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';


import { ExperienceProvider } from '@/components/3d/ExperienceManager';
import FloatingButton from '@/components/3d/FloatingButton';
import ModelViewerScript from '@/components/ModelViewerScript';

const rubik = Rubik({ 
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mewar Hi-Tech - Heavy Duty Crushing & Screening Equipment",
  description: "Innovative crushing and screening solutions engineered to perform and built to last.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${rubik.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans" suppressHydrationWarning>

        <Script id="chunk-load-error-handler" strategy="beforeInteractive">
          {`
            window.addEventListener('error', function(e) {
              var msg = e.message || '';
              if (msg.indexOf('Loading chunk') > -1 || msg.indexOf('ChunkLoadError') > -1) {
                window.location.reload();
              }
            });
          `}
        </Script>
        
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

