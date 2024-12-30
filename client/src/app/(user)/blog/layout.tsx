"use client";



import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Digirib | Blog";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover insightful articles and engaging content on our blog. Stay updated with the latest trends, tips, and discussions across various topics."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Discover insightful articles and engaging content on our blog. Stay updated with the latest trends, tips, and discussions across various topics.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
       
      {children}
      
    </div>
  );
}
