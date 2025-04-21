import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blackbird - Farcon Birds",
  description: "A generative display of Blacbirds, for Faron 2025",
  openGraph: {
    title: "Blackbird - Farcon Birds",
    description: "A generative display of Blacbirds, for Faron 2025",
    url: "https://blackbird-farcon.vercel.app",
    images: ["https://blackbird-farcon.vercel.app/assets/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
