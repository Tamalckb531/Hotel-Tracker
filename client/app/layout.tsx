import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          <WebHeader />
          {children}
          <WebFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
