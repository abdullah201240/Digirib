"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Img2 from '@/app/assets/img/DownArraw.webp';
interface WhyDigiribInfo {

    description: string;
    image: string;

}

export default function WhyDigirib() {
    const [whyDigirib, setWhyDigirib] = useState<WhyDigiribInfo | null>(null);  // Use the interface here
    const [loading, setLoading] = useState(true);      // State to handle loading state
    const [error, setError] = useState<string | null>(null); // State to handle any errors
    useEffect(() => {

        const fetchAboutInfo = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/whyDigirib/1`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data)
                setWhyDigirib(data);  // Set the fetched data
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
        <div className="flex justify-center items-center py-8 px-4 bg-white ">
            <div className="relative flex flex-col md:flex-row w-full max-w-7xl bg-white rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative md:w-1/2 overflow-hidden group">
                {whyDigirib?.image && (

                    <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${whyDigirib.image}`}
                    alt="Why Digirib"
                    width={800}
                  height={800}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
                </div>

                {/* Content Section */}
                <div className="p-12  md:w-1/2">
                    {/* Tag */}
                    <div className="mb-4 inline-flex items-center bg-[#433878] py-1 px-5 text-3xl text-white font-medium">
                        Why <span className="ml-2 flex items-center text-[#F05924]">
                            Digirib?
                            <Image
                                alt="arrow"
                                src={Img2}
                                width={30}
                                height={30}
                                className="ml-4"
                            />
                        </span>
                    </div>

                    {/* Description */}
                    <p className='text-black'>
                    {whyDigirib?.description || "Loading whoWeAreText..."}

                    </p>
                   
                </div>
            </div>
        </div>
    );
}
