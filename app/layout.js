"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import GradientBackground from "./components/GradientBackground";
import { structuredData } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Nexsys.PNG" type="image/png" sizes="64x64"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <GradientBackground />
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
