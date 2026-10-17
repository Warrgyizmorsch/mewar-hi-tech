import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crusher FAQs | Mewar Hi-Tech",
  description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
  alternates: {
    canonical: "https://www.mewarhitech.com/faq",
  },
  openGraph: {
    title: "Crusher FAQs | Mewar Hi-Tech",
    description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
    url: "https://www.mewarhitech.com/faq",
    images: [{ url: "/images/slider/about-mewar-hi-tech1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crusher FAQs | Mewar Hi-Tech",
    description: "Answers to common questions about Mewar Hi-Tech crushers, screens, spare parts, delivery, installation and after sales service.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of equipment does Mewar Hitech manufacture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manufacture a wide range of heavy-duty crushing, screening, and size reduction equipment, including Double Toggle Jaw Crushers, Cone Crushers, Vertical Shaft Impactors (VSI), Vibrating Screens, and Sand Washers."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mewar Hitech ISO certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Mewar Hitech Engineering Ltd is an ISO 9001:2008 certified company, committed to delivering high-quality and reliable industrial solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a custom plant designed for my specific needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our expert design team can tailor complete crushing and screening plants from 50 TPH to 500 TPH based on your specific feed size, required output, and material type."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide installation and commissioning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our certified field engineers provide complete on-site installation, structural alignment, and trial commissioning for all plants and heavy equipment."
      }
    },
    {
      "@type": "Question",
      "name": "What is your standard SLA for technical support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We guarantee a 48-hour SLA response time for our service engineers to reach any site within India, and typically within a week globally."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the manuals or specifications for my machine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detailed specifications are provided during delivery. For additional copies or technical manuals, you can contact our After-Sales support team directly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply genuine spare parts for older models?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we maintain an extensive inventory of genuine spare parts including jaw plates, cone mantles, blow bars, and screens for both current and older models."
      }
    },
    {
      "@type": "Question",
      "name": "How do I order replacement wear parts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can order spare parts directly through our 'Spare Parts' section under the Services menu or by contacting our dedicated spares department at spares@kingsoncrusher.com."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer maintenance contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive Annual Maintenance Contracts (AMC) to ensure your equipment runs optimally with minimized downtime."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
