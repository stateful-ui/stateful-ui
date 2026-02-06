import "@/app/styles/index.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const Switzer = localFont({
  src: [
    {
      path: "./assets/fonts/Switzer-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./assets/fonts/Switzer-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  title: "Stateful UI",
  description: "Stateful UI Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="default">
      <body className={`${Switzer.className}`}>{children}</body>
    </html>
  );
}
