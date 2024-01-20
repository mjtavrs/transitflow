import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Krub, Rubik } from "next/font/google";
import "./globals.css";

const krub = Krub({
  subsets: ["latin"],
  weight: ["500", "600"]
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Transitflow",
  description: "Front-end project made by Marcos Tavares using the design created by VictorFlow. Created as a part of my NextJS studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={krub.className}>{children}</body>
    </html>
  );
}
