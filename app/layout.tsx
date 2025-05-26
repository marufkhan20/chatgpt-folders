import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chatgpt Folder Creator",
  description: "Sturctured folder creation for ChatGPT projects",
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
