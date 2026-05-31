import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "A.W Plastering Solutions | Plastering Manchester & Cheshire",
  description:
    "High-quality plastering, skimming, ceiling repairs, garage conversions, stud walls and building services across Manchester, Cheshire and the North West.",

  openGraph: {
    title: "A.W Plastering Solutions",
    description:
      "Professional plastering services across Manchester, Cheshire and the North West.",
    siteName: "A.W Plastering Solutions",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "A.W Plastering Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "A.W Plastering Solutions",
    description:
      "Professional plastering services across Manchester, Cheshire and the North West.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}