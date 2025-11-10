import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASME Student Chapter FAQ",
  description: "Learn how to get involved with ASME Student Chapter",
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

