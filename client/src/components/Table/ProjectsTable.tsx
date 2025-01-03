'use client';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    link: string;
    image?: string; // Image URL or path
}

export default function ProjectsTable() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);


            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/projects`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setProjects(data.data || []);
                } else {

                }
            } catch (error) {

                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id: number) => {


        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}admin/projects/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
                    },
                }
            );

            if (response.ok) {
                setProjects((prev) => prev.filter((project) => project.id !== id));
                setShowConfirm(false);
            } else {

            }
        } catch (error) {

            console.error(error);
        }
    };

    const showDeleteConfirm = (id: number) => {
        setDeleteId(id);
        setShowConfirm(true);
    };

    const hideDeleteConfirm = () => {
        setDeleteId(null);
        setShowConfirm(false);
    };




    return (
        <div className="flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-center text-4xl text-black">Projects</h1>
                {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-gray-700 border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Title</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Link</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Image</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.length > 0 ? (
                                    projects.map((project) => (
                                        <tr key={project.id} className="bg-white hover:bg-gray-50">
                                            <td className="p-4 text-gray-900 border border-gray-200">{project.title}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">{project.link}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${project.image}`}
                                                    alt="Project image"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </td>
                                            <td className="p-4 border border-gray-200">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        type="submit"
                                                        className="text-red-500 hover:text-red-700"
                                                        onClick={() => showDeleteConfirm(project.id)}
                                                        title="Delete Project"
                                                    >
                                                        <FaTrash size={24} />
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-4 text-center text-gray-500">No projects available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Confirmation Modal */}
                {showConfirm && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg w-1/3">
                            <h2 className="text-xl font-semibold text-center mb-4 text-black">Are you sure you want to delete this project?</h2>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => handleDelete(deleteId as number)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={hideDeleteConfirm}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
