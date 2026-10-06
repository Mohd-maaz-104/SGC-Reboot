import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamsgc.in"),
  title: "Student Guidance Cell (SGC) — Zeal and Zest to Be",
  description:
    "Explore the Student Guidance Cell (SGC) at C. Abdul Hakeem College of Engineering and Technology: its people, activities, events and alumni.",
  applicationName: "Student Guidance Cell",
  openGraph: {
    title: "Student Guidance Cell (SGC) — Zeal and Zest to Be",
    description:
      "For the students. By the students. To the students. A little curiosity. A lot of courage.",
    type: "website",
    images: ["/images/sgc-revibe-2026.jpg"],
  },
  icons: {
    icon: "/images/sgc-logo.png",
    apple: "/images/sgc-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={dmSans.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
