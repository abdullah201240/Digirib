"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from framer-motion
interface WhoWeAreInfo {

  whoWeAreText: string;
  whoWeAreImage: string;

}


export default function WhoWeAre() {
  const [whoWeAreInfo, setWhoWeAreInfo] = useState<WhoWeAreInfo | null>(null);  // Use the interface here
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
        setWhoWeAreInfo(data);  // Set the fetched data
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
    return <div className='bg-[#F4EBFF] py-16 pb-32'>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div className='bg-[#F4EBFF] py-16 pb-32'>Error: {error}</div>; // Show an error message if there's an issue with the fetch
  }

  return (
    <div className="bg-white py-16">
      <section className="bg-transparent">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-7xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                <span className="underline decoration-[#F05924]">Who</span>{' '}
                <span className="text-[#F05924]">We Are</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
              {whoWeAreInfo?.whoWeAreText || "Loading whoWeAreText..."}

              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {whoWeAreInfo?.whoWeAreImage && (
                <Image
                src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${whoWeAreInfo.whoWeAreImage}`}
                alt="whoWeAreInfo"
                  className="object-cover rounded-lg"
                  width={800}
                  height={800}
                />
              )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
