import { Metadata } from "next";

const seoData: Record<string, { title: string; description: string }> = {
  "corporate-governance": {
    "title": "Corporate Governance | Mewar Hi-Tech",
    "description": "Read the corporate governance policies and disclosures of Mewar Hitech Engineering Limited for shareholders and investors."
  },
  "shareholding-pattern": {
    "title": "Shareholding Pattern | Mewar Hi-Tech",
    "description": "View the latest shareholding pattern of Mewar Hitech Engineering Limited, filed for shareholders, investors and regulators in one place."
  },
  "shareholders-meetings": {
    "title": "Shareholders Meetings | Mewar Hi-Tech",
    "description": "Notices, outcomes and records of shareholders meetings of Mewar Hitech Engineering Limited, including AGM and EGM documents."
  },
  "board-meeting": {
    "title": "Board Meetings | Mewar Hi-Tech",
    "description": "Find board meeting notices and outcomes of Mewar Hitech Engineering Limited, published for shareholders and investors, with dates and records."
  },
  "financial-results": {
    "title": "Financial Results | Mewar Hi-Tech",
    "description": "Download the quarterly and annual financial results of Mewar Hitech Engineering Limited, published for shareholders and investors."
  },
  "annual-reports": {
    "title": "Annual Reports | Mewar Hi-Tech",
    "description": "Download annual reports of Mewar Hitech Engineering Limited, including recent years and earlier reports, for shareholders and investors."
  },
  "annual-returns": {
    "title": "Annual Returns | Mewar Hi-Tech",
    "description": "View the annual returns filed by Mewar Hitech Engineering Limited under company law, available to shareholders and investors."
  },
  "shareholder-information": {
    "title": "Shareholder Information | Mewar Hi-Tech",
    "description": "Key information for Mewar Hitech Engineering Limited shareholders, including notices, forms, contact details and investor services."
  },
  "investor-contacts": {
    "title": "Investor Contacts | Mewar Hi-Tech",
    "description": "Contact details for investor queries at Mewar Hitech Engineering Limited, including the team to reach for shareholder support."
  },
  "disclosure-regulation-46": {
    "title": "Disclosure under Regulation 46 (LODR) | Mewar Hi-Tech",
    "description": "Website disclosures of Mewar Hitech Engineering Limited under Regulation 46 of the SEBI Listing Obligations and Disclosure Requirements."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = seoData[slug];

  if (!data) {
    return {
      title: "Not Found | Mewar Hi-Tech",
      alternates: {
        canonical: `https://www.mewarhitech.com/investors/${slug}`,
      }
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://www.mewarhitech.com/investors/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mewarhitech.com/investors/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
