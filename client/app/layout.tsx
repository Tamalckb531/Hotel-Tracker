import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";
import { Toaster } from "@/components/ui/toaster";
import UserContextProvider from "@/context/UserContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Hotel Now",
  description:
    "An amazing friend of yours to give you the best deal in case of hotel tracking",
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
          <UserContextProvider>
            <WebHeader />
            {children}
            <WebFooter />
          </UserContextProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
