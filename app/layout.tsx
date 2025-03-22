import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Voxlet UI Docs",
  description:
    "Comprehensive documentation website template by Voxlet UI, a modern and flexible UI documentation template for React developers.",
  keywords: [
    "Voxlet UI",
    "UI Docs",
    "React Documentation",
    "Frontend Development",
    "UI Components",
    "JavaScript",
    "TypeScript",
  ],
  openGraph: {
    title: "Voxlet UI Docs",
    description:
      "Comprehensive documentation website template by Voxlet UI, a modern and flexible UI documentation template for React developers.",
    url: "https://voxletuidocs.vercel.app", 
    type: "website",
    images: [
      {
        url: "https://voxletuidocs.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voxlet UI Docs - Modern Documentation Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MuhammadKaif999", // replace with your actual Twitter handle
    title: "Voxlet UI Docs",
    description:
      "Comprehensive documentation website template by Voxlet UI, a modern and flexible UI documentation template for React developers.",
    image: "https://voxletuidocs.vercel.app/og-image.png", // replace with your OG image URL
  },
  icons: {
    icon: "https://voxlet.vercel.app/favicon/favicon.ico", // replace with your favicon path
    appleTouchIcon: "https://voxlet.vercel.app/favicon/apple-touch-icon.png", // replace with your apple touch icon path
  },
  author: "Voxlet",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>
          {children}
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}
