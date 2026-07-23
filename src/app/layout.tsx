import type { Metadata } from "next";
import Script from "next/script";
// import { Inter } from "next/font/google";
import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });

//This will go in the <head> of the page, and will be used for SEO and social media previews
export const metadata: Metadata = {
  title: "Robots And Things - Indie 3D Platformer Game",
  description:
    "Robots And Things - A 3D platformer with collectathon and score attack elements, made by Plasma Shadow Studios",
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
  // Schema.org structured data for SEO so the search result doesn't say GitHub Pages Doc
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Robots And Things",
    "description": "A 3D platformer with collectathon and score attack elements, made by Plasma Shadow Studios",
    "applicationCategory": "Game",
    "creator": {
      "@type": "Organization",
      "name": "Plasma Shadow Studios",
    },
    "url": "https://plasmashadowstudios.github.io",
  };

  return (
    <html lang="en">
      <body>
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {children}
      </body>
    </html>
  );
}
