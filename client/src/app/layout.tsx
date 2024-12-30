import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digirib",
  description: "Digirib is the top web design and development, SEO, UI/UX, Software development, IT and digital marketing agency company in Bangladesh. We offer help to transform your business into the digital realm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-white" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <Toaster position="top-center" />

       
        {children}

        
      </body>
    </html>
  );
}
