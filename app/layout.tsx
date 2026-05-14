import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Share_Tech_Mono } from "next/font/google";

import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font_mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "Angel Martinez - Software Engineer",
  description:
    "Software engineer and TypeScript enthusiast. Passionate about creating unique and efficient web solutions.",
  openGraph: {
    title: "Angel Martinez - Software Engineer",
    description:
      "Software engineer and TypeScript enthusiast. Passionate about creating unique and efficient web solutions.",
    url: "https://angelmtztrc.com",
    siteName: "Angel Martinez - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Martinez - Software Engineer",
    description:
      "Software engineer and TypeScript enthusiast. Passionate about creating unique and efficient web solutions.",
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${font_mono.variable} bg-background h-full antialiased`}
    >
      <body className="font-mono">{children}</body>

      <Analytics mode="production" />
      <SpeedInsights />
    </html>
  );
};

export default Layout;
