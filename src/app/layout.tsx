import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEAMZ - Crafting Next-Gen Digital Experiences",
  description: "We combine innovative design with technical excellence to scale your digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
