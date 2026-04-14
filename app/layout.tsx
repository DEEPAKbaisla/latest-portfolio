import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";
import CursorDot from "./components/CursorDot";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-antonio",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // 🔴 change this

  title: {
    default: "Deepak | Web Developer",
    template: "%s | Deepak Baisla",
  },

  description:
    "Frontend Developer portfolio showcasing modern web applications built with React, Next.js, and Tailwind CSS.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
  ],

  authors: [{ name: "Deepak Baisla" }],

  openGraph: {
    title: "Deepak | Web Developer",
    description:
      "Explore my portfolio, projects, and skills in modern web development.",
    url: "https://yourdomain.com",
    siteName: "Deepak Baisla Portfolio",
    images: [
      {
        url: "/images/hero.png", // 🔴 add this image in public folder
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deepak | Web Developer",
    description: "Check out my portfolio and projects.",
    images: ["/images/hero.png"],
  },

  verification: {
    google: "YOUR_GOOGLE_CODE_HERE", // 🔴 paste from Search Console
  },

  alternates: {
    canonical: "https://yourdomain.com",
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
      className={`${antonio.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CursorDot />
        {children}
      </body>
    </html>
  );
}