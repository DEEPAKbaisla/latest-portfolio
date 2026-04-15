import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";
import CursorDot from "./components/CursorDot";
import { Toaster } from "react-hot-toast"

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
  metadataBase: new URL("https://deepakbaisla.vercel.app/"),

  title: {
    default: "Deepak | Web Developer",
    template: "%s | Deepak Baisla",
  },

  description:
    "Frontend Developer portfolio showcasing modern web applications built with React, Next.js, and Tailwind CSS.",
  applicationName: "Deepak Baisla Portfolio",
  robots: {
    index: true,
    follow: true,
  },
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
    url: "https://deepakbaisla.vercel.app",
    siteName: "Deepak Baisla Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/nav.png", sizes: "32x32", type: "image/png" },
      { url: "/images/nav.png", sizes: "192x192", type: "image/png" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deepak | Web Developer",
    description: "Check out my portfolio and projects.",
    images: ["/images/hero.png"],
  },

  verification: {
    google: "V35Ba8ZEFWgAUMb1UG1krY8qwVo9VpJ1qmRiwRboKgs",
  },

  alternates: {
    canonical: "https://deepakbaisla.vercel.app",
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
      className={`${antonio.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CursorDot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepak Baisla",
              url: "https://deepakbaisla.vercel.app",
              jobTitle: "Web Developer",
              image: "https://deepakbaisla.vercel.app/images/hero.png",
              sameAs: [
                "https://github.com/DEEPAKbaisla",
                "https://www.linkedin.com/in/deepakbaisla7988/",
              ],
            }),
          }}
        />
         <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
