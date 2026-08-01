import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://saasreclaim.com"),
  title: {
    default: "SaaSReclaim — Global SaaS Spend Audit & License Optimization Platform",
    template: "%s | SaaSReclaim Audit",
  },
  description:
    "Find duplicate tools, eliminate unused software licenses, and recover 25-35% of your company's software budget. Supports USD ($), EUR (€), GBP (£), INR (₹), and 12 global currencies.",
  keywords: [
    "SaaSReclaim",
    "SaaS Spend Optimization",
    "Software License Audit",
    "Duplicate Tool Detector",
    "Shadow IT Governance",
    "IT Budget Recovery",
    "CFO SaaS Spend Analytics",
  ],
  authors: [{ name: "SaaSReclaim Global Inc." }],
  creator: "SaaSReclaim Inc.",
  publisher: "SaaSReclaim International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SaaSReclaim — Global SaaS Spend Audit & License Optimization Platform",
    description:
      "Stop wasting 25-35% on unused SaaS software & duplicate licenses. Real-time spend analytics in USD ($), EUR (€), GBP (£), INR (₹), and 12 global currencies.",
    url: "https://saasreclaim.com",
    siteName: "SaaSReclaim",
    images: [
      {
        url: "https://saasreclaim.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaaSReclaim Audit Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSReclaim — Global SaaS Spend Audit & License Optimization Platform",
    description:
      "Recover thousands every month by identifying duplicate software tools and unassigned licenses.",
    creator: "@saasreclaim",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SaaSReclaim",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Automated SaaS waste detection and software subscription tracking platform for global SMBs and startups.",
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
