"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Nexsys.png" type="image/png" sizes="64x64"/>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
