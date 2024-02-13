
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Hero from "./ui/header/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biunatu",
  description:
    "Biunatu is a space for nature lovers. Share your stories with others. Discover tranquility outdoors",
};
export default function Home() {
  return (
    <main className="hero min-h-screen bg-base-200" id="personimg">
      <Hero/>
    </main>
  );
}
