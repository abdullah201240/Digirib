"use client";

import Navbar from "@/components/user/Navbar"; // Fixed typo in import path (Nabvar -> Navbar)
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/user/Footer";
import Whatsapp from "@/components/user/Whatsapp";
import Title from "@/components/user/Title";
import about from "@/app/assets/img/BlogBg.webp"; // Correctly imported image

interface Blog {
    title: string;
    image: string;
    description: string;
}

export default function Page() {
    const params = useParams();
    const id = params?.id;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Added loading state

    useEffect(() => {
        if (id) {
            setLoading(true); // Set loading to true when fetching
            fetch(`${process.env.NEXT_PUBLIC_API_URL}user/blog/${id}`) // Corrected endpoint path (services instead of servives)
                .then((response) => response.json())
                .then((data) => {
                    setBlog(data);
                    setLoading(false); // Set loading to false when data is fetched
                })
                .catch((error) => {
                    console.error("Error fetching service data:", error);
                    setLoading(false); // Handle loading state on error
                });
        }
    }, [id]);
    const getTextFromHTML = (html: string): string => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        return tempElement.textContent || tempElement.innerText || "";
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }


    return (
        <div className="bg-[#F9F7F7]">
        <Navbar />
        <Title
            title={blog?.title || "Service Title"} // Fallback text for title
            subTitle=""
            backgroundImage={about.src}

        />
        <div className="flex justify-center items-center mt-8">
            {blog?.image && (
                <div className="relative w-100 h-64">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${blog?.image}`}
                     alt="image"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,..."
                />
            </div>
                
            )}
        </div>

        <div className="bg-[#F9F7F7] py-12 px-6 lg:pl-26">
            <div className="max-w-7xl mx-auto text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {blog?.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {getTextFromHTML(blog?.description || "No description available")}
    
                </p>
            </div>
        </div>
        <Footer />
        <Whatsapp />
    </div>
    );
}
