import type { Metadata } from "next";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
