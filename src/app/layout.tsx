import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Naol Tamrat - Full Stack Developer | Frontend-Focused Expert",
  description:
    "Discover the portfolio of Naol Tamrat, a versatile full-stack developer with a strong focus on frontend development. Skilled in creating seamless user experiences and scalable backend solutions. Let's build something amazing!",
  openGraph: {
    title: "Naol Tamrat - Full Stack Developer | Frontend-Focused Expert",
    description:
      "Discover the portfolio of Naol Tamrat, a versatile full-stack developer with a strong focus on frontend development. Skilled in creating seamless user experiences and scalable backend solutions. Let's build something amazing!",
    url: "https://naolt.vercel.app/",
    siteName: "Naol Tamrat's Portfolio",
    images: [
      {
        url: "https://naolt.vercel.app/home.png",
        width: 1200,
        height: 630,
        alt: "Naol Tamrat's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naol Tamrat - Full Stack Developer | Frontend-Focused Expert",
    description:
      "Discover the portfolio of Naol Tamrat, a versatile full-stack developer with a strong focus on frontend development. Skilled in creating seamless user experiences and scalable backend solutions. Let's build something amazing!",
    images: ["https://naolt.vercel.app/home.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
