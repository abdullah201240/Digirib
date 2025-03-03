"use client";

import Navbar from "@/components/user/Navbar";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Digirib | About Us";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover our story and values at Digirib. Learn how we strive to make a difference and connect with our community through our mission and vision."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Discover our story and values at Digirib. Learn how we strive to make a difference and connect with our community through our mission and vision.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
        <Navbar/>
      {children}
      
    </div>
  );
}
