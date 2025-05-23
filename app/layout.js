"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import CursorTrail from "./components/CursorTrail";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>NexSys</title>
        <link rel="icon" href="/Nexsys.PNG" type="image/png" sizes="64x64"/>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
          </div>
          <CursorTrail />
        </ThemeProvider>
      </body>
    </html>
  );
}
