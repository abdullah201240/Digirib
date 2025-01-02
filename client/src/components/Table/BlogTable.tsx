'use client';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Blog {
    id: number
    title: string;
    description: string,

    image: string | File | null;
}

const BlogTable = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Start with loading as true
    const [showConfirm, setShowConfirm] = useState<boolean>(false); // State for showing confirmation modal
    const [deleteId, setDeleteId] = useState<number | null>(null); // State to track the team to delete


    // Fetch data from the API
    useEffect(() => {
        const checkSession = async () => {
            const storedUserInfo = localStorage.getItem('sessionToken');
            if (!storedUserInfo) {
                router.push('/admin/login');
                return;
            }

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/auth/me`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${storedUserInfo}`,
                        },
                    }
                );

                if (!response.ok) {
                    router.push('/admin/login');
                    return;
                }

                // Fetching the teams data once session is valid
                const teamResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/viewBlog`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${storedUserInfo}`,
                        },
                    }
                );

                if (teamResponse.ok) {
                    const data = await teamResponse.json(); // Parse response data
                    // Ensure that the data is an array before setting it

                    if (Array.isArray(data.data)) {
                        console.log(data.data)
                        setBlogs(data.data); // Update state with the fetched team
                    } else {
                        console.error('Fetched data is not an array:', data);
                    }
                } else {
                    console.error('Failed to fetch team');
                }
            } catch (error) {
                console.error('Error checking session:', error);
                router.push('/admin/login');
            } finally {
                setLoading(false); // Set loading to false after fetching data or error
            }
        };

        checkSession();
    }, [router]);

    // Handle team deletion
    const handleDelete = async (id: number) => {
        const storedUserInfo = localStorage.getItem('sessionToken');
        if (!storedUserInfo) {
            router.push('/admin/login');
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}admin/deleteBlog/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${storedUserInfo}`,
                    },
                }
            );

            if (response.ok) {
                setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted team from the state
                setShowConfirm(false); // Close the confirmation modal
            } else {
                console.error('Failed to delete blog');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    // Show confirmation modal
    const showDeleteConfirm = (id: number) => {
        setDeleteId(id);
        setShowConfirm(true);
    };

    // Hide confirmation modal
    const hideDeleteConfirm = () => {
        setShowConfirm(false);
        setDeleteId(null);
    };



    const getTextFromHTML = (html: string): string => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        return tempElement.textContent || tempElement.innerText || "";
    };



    return (
        <div className="flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-center text-4xl text-black">  All Blog</h1>

                {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-gray-700 border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Title</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Description</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Image</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Actions</th>



                                </tr>
                            </thead>
                            <tbody>
                                {blogs.length > 0 ? (

                                    blogs.map((blog) => (

                                        <tr key={blog.id} className="bg-white hover:bg-gray-50">
                                            <td className="p-4 text-gray-900 border border-gray-200">{blog.title}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">
                                                {getTextFromHTML(blog.description).slice(0, 100)}...
                                            </td>

                                            <td className="p-4 text-gray-900 border border-gray-200">
                                                {blog.image ? (
                                                    <Image
                                                        className="w-full h-full object-cover"
                                                        src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${blog.image}`}
                                                        alt="service-image"
                                                        width={50}
                                                        height={50}
                                                    />
                                                ) : (
                                                    <span>No Image</span>
                                                )}

                                            </td>
                                            <td className="p-4 border border-gray-200">

                                                <button
                                                    className="text-red-500"
                                                    onClick={() => showDeleteConfirm(blog.id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>



                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-4 text-center text-gray-500">No Contact available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>




            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold text-center mb-4 text-black">Are you sure you want to delete this team?</h2>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => handleDelete(deleteId as number)}
                                className="px-4  py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
                                Yes
                            </button>
                            <button
                                onClick={hideDeleteConfirm}
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700">
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default BlogTable;

