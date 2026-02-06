import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stateful CSS",
  description: "Stateful CSS Documentation",
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
