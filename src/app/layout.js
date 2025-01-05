import { Inter } from "next/font/google";
import "./globals.css";

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
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Nexsys.png" type="image/png" sizes="64x64"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
