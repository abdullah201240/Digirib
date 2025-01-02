"use client";
import React, { useState, useEffect } from 'react';

interface ExperianceInfo {
  projectsComplete: string;
  iTProfessionals: string;
  happyClients: string;
  yearsOfExpertise: string;
}

export default function Experiance() {
  const [experianceInfo, setExperianceInfo] = useState<ExperianceInfo | null>(null); // State for experience info
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/experiance/1`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setExperianceInfo(data); // Set the fetched data
      } catch (err) {
        console.error(err); // Log the error for debugging
        const errorMessage = (err as Error).message;
        setError(errorMessage);
      } finally {
        setLoading(false); // Set loading to false when fetching is complete
      }
    };

    fetchAboutInfo(); // Call the fetch function when component mounts
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if there's an issue with the fetch
  }

  return (
    <div>
      <div
        className={"relative w-full h-auto py-8 bg-cover bg-center"}
        style={{ backgroundImage: "url('Experiance.webp')" }} // Replace with your image path
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black mx-auto max-w-7xl px-4 mt-12">
          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-left text-black">{experianceInfo?.projectsComplete}</h2> 
            <p className="text-sm text-left text-gray-600">Projects Complete</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-left text-black">{experianceInfo?.iTProfessionals}</h2>
            <p className="text-sm text-left text-gray-600">IT Professionals</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-left text-black">{experianceInfo?.happyClients}</h2>
            <p className="text-sm text-left text-gray-600">Happy Clients</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-left text-black">{experianceInfo?.yearsOfExpertise}</h2>
            <p className="text-sm text-left text-gray-600">Years of Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}
