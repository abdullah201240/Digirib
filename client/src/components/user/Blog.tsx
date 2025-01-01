"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Blog() {
    const [blog, setBlog] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}user/viewBlog`
                );
                const result = await response.json();
                setBlog(result.data || []);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogs();
    }, []);
    const getTextFromHTML = (html: string): string => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        return tempElement.textContent || tempElement.innerText || "";
    };

    // Display the last 2 blogs
    const latestBlogs = blog.slice(-2);

    return (
        <div className="bg-[#F9F7F7] py-10 ">
            <h1 className="text-black text-center text-3xl font-bold mb-16 mt-10">
                <span className="text-black underline decoration-[#F05924]">Rec</span>ent <span className="text-[#F05924]">Blog</span>
            </h1>

            <div className="flex justify-center mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
                    {latestBlogs.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white  rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
                        >
                            <Link href={`/blogs/${member.id}`}>

                                <Image
                                    className="w-full h-56 object-cover "
                                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${member.image}`}
                                    alt={member.title}
                                    width={500}
                                    height={300}
                                />

                                <div className="space-y-4  p-6">
                                    <div className="font-bold text-2xl text-gray-800">{member.title}</div>
                                    <p className="text-gray-600 text-base line-clamp-3">
                                        {getTextFromHTML(member.description).slice(0, 100)}...
                                    </p>
                                </div>
                                <button
                                    className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 transition duration-300 ease-in-out pl-6 pb-6"
                                >
                                    Read More →
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <Link href="/blog"> <button className="bg-[#F05924] dark:bg-[#F05924] text-white dark:white border-2 border-[#F05924] 
    hover:border-[#F05924] dark:hover:border-white
    hover:bg-[#F05924] dark:hover:bg-white 
    hover:text-black dark:hover:text-black
    transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-2 rounded-full">
                    See All Blog
                </button>
                </Link>
            </div>
        </div>
    );
}
