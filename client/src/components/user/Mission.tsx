"use client";
import React, { useState, useEffect } from 'react';
interface MissionInfo {

    mission: string;
    

}

export default function Mission() {
    const [missionInfo, setMissionInfo] = useState<MissionInfo | null>(null);  // Use the interface here
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
                setMissionInfo(data);  // Set the fetched data
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
        <div className=' bg-[#F4EBFF] py-16 pb-32'>
            <div className='mx-auto max-w-7xl '>
                <h1 className='text-center mt-12 mb-16 text-4xl font-medium text-black'><span className='underline decoration-[#F05924]'>Our</span>  <span className='text-[#F05924]'>Mission</span></h1>

            <p className='text-black text-lg'>
            {missionInfo?.mission || "Loading mission..."}
                </p>
            
            </div>
            

        </div>
    )
}
