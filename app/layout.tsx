import type { Metadata } from "next";
import { Antonio, Inter } from 'next/font/google';
import "./globals.css";
import CursorDot from "./components/CursorDot";

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-antonio', 
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col"  suppressHydrationWarning   >
        <CursorDot/>
        {children}</body>
    </html>
  );
}
