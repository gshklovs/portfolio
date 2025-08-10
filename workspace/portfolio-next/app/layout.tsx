import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greg.shklovski.net"),
  title: "Greg Shklovski · Portfolio",
  description:
    "Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Greg Shklovski · Portfolio",
    description:
      "Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).",
    type: "website",
    url: "https://greg.shklovski.net",
    images: [
      {
        url: "/img/IMG_3457-1200.jpg",
        alt: "YC demo background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greg Shklovski · Portfolio",
    description:
      "Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).",
    images: ["/img/IMG_3457-1200.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
