import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexSys Tech",
  description:
    "The Main Website Page for NexSys Tech",
  keywords:
    "NexSys, Tech, NexSys Tech, Chris White, Darsh Patel, Peter Gatira, Sean Belon, Alfonso Martinez",
  author: "Darsh Patel",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    type: "website",
    url: "",
    title: "NexSys Tech",
    description:
      "NexSys Tech's Main Website Page",
    image: "",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ]
};

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
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
