"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutInfo {

    homeDescription: string;
    homeImage: string;

}

export default function AboutUs() {
    const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);  // Use the interface here
    const [loading, setLoading] = useState(true);      // State to handle loading state
    const [error, setError] = useState<string | null>(null); // State to handle any errors
    useEffect(() => {

        const fetchAboutInfo = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/about/1`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data)
                setAboutInfo(data);  // Set the fetched data
            } catch (err) {
                console.error(err);  // Log the error for debugging
                const errorMessage = (err as Error).message;

                setError(errorMessage);



            } finally {
                setLoading(false);  // Set loading to false when fetching is complete
            }
        };

        fetchAboutInfo(); // Call the fetch function when component mounts
    }, []);  // Empty dependency array to run only once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show an error message if there's an issue with the fetch
    }
    return (
        <div
            className={`relative w-full h-auto py-4 bg-cover bg-center}`}
            style={{
                backgroundImage: "url('/AboutUs.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh',
            }}
        >
            <section className="bg-transparent -mt-10 sm:mt-16">
                <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-6xl">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                <span className="underline decoration-[#F05924]">Abo</span>ut{' '}
                                <span className="text-[#F05924]">Digirib</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                            {aboutInfo?.homeDescription || "Loading description..."}

                            </p>
                            <div className="flex gap-4 mt-10">

                                <Link className="px-6 py-2 min-w-[120px] text-center text-white bg-[#F05924] border border-[#F05924] rounded active:text-[#F05924] hover:bg-transparent hover:text-[#F05924] focus:outline-none focus:ring"
                                    href="/aboutUs">
                                    More About Us
                                </Link>



                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            {aboutInfo?.homeImage && (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${aboutInfo.homeImage}`}
                                    alt="About Us Image"
                                    className="object-cover rounded-lg "
                                    width={800}
                                    height={800}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


