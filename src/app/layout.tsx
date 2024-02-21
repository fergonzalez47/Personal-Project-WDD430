import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biunatu",
  description: "Discover and share the natural beauty of the world on Biunatu: the ultimate platform for nature lovers and adventurers. Explore fascinating stories, stunning photographs, and valuable information about the most incredible natural places to visit. Join our passionate community and immerse yourself in a world of natural wonders on Biunatu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
