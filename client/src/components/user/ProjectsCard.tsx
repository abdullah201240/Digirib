"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure of a project using an interface
interface Project {
    id: number;
    title: string;
    link: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export default function ProjectsCard(): JSX.Element {
    const [projects, setProjects] = useState<Project[]>([]); // State for projects
    const [error, setError] = useState<string | null>(null); // State for errors
    const [loading, setLoading] = useState<boolean>(false); // State for loading

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch('http://localhost:8080/user/projectname');

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                // Validate data structure
                if (!data || !Array.isArray(data.data)) {
                    throw new Error('Invalid data structure received from API');
                }

                setProjects(data.data); // Set projects data
                setError(null); // Clear errors
            } catch (err) {
                // Handle and log errors
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="bg-[#F9F7F7]">
            <div className="mx-auto max-w-7xl p-5 sm:p-10 md:p-16">
                {loading && <p className="text-center text-gray-500">Loading projects...</p>}
                {error && (
                    <p className="text-center text-red-500">
                        Something went wrong: {error}
                    </p>
                )}
                {!loading && !error && projects.length === 0 && (
                    <p className="text-center text-gray-500">No projects found.</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="rounded overflow-hidden shadow-lg p-2">
                            <div className="relative">
                                <Link href={project.link} target="_blank">
                                    <Image
                                        className="w-full"
                                        src={`http://localhost:8080/${project.image}`}
                                        alt={project.title}
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                    />
                                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </Link>
                            </div>
                            <div className="py-2 text-black">
                                <h1 className="text-black text-xl">{project.title}</h1>
                                <div className="mt-4">
                                    <button
                                        className="bg-[#F17B21] text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                        onClick={() => window.open(project.link, '_blank')}
                                    >
                                        See Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

