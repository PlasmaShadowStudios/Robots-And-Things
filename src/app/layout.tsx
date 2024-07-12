import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robots And Things - Game By Plasma Shadow Studios",
  description:
    "Robots And Things - A 3D platformer with collectathon and score attack elements, made by Plasma Shadow Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
