"use client";



import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Digirib | Career";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Navigate your career journey with confidence using our expert advice, tailored resources, and tools designed to help you reach your professional goals."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Navigate your career journey with confidence using our expert advice, tailored resources, and tools designed to help you reach your professional goals.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
       
      {children}
      
    </div>
  );
}
