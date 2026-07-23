import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });

//This will go in the <head> of the page, and will be used for SEO and social media previews
export const metadata: Metadata = {
  title: "Robots And Things - Indie 3D Platformer Game",
  description:
    "Robots And Things - A 3D platformer with collectathon and score attack elements, made by Plasma Shadow Studios",
  siteName: "Robots And Things",
  openGraph: {
    title: "Robots And Things",
    description:
      "A 3D platformer with collectathon and score attack elements, made by Plasma Shadow Studios",
    type: "website",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
