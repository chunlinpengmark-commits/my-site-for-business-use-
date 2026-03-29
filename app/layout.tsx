import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Use Peptides | YourBrand Research Labs",
  description:
    "YourBrand Research Labs provides a premium digital experience centered around research use peptides, high-purity standards, and modern scientific brand presentation.",
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