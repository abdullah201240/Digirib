'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import ServiceDescriptionTable from '@/components/Table/ServiceDescriptionTable';

interface Category {
    id: string;
    name: string;
}

export default function Home() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categoryId: '',
    });

    const [categories, setCategories] = useState<Category[]>([]);
    const [mounted, setMounted] = useState(false);

    // Check session on component mount
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
                }
            } catch (error) {
                console.error('Error checking session:', error);
                router.push('/admin/login');
            }
        };

        checkSession();
    }, [router]);

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const storedUserInfo = localStorage.getItem('sessionToken');
                if (!storedUserInfo) {
                    router.push('/admin/login');
                    return;
                }

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/services`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${storedUserInfo}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                } else {
                    console.error('Error fetching categories:', response.statusText);
                    toast.error('Failed to fetch categories');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('An error occurred while fetching categories.');
            }
        };

        fetchCategories();
    }, [router]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Or a loading spinner
    }

    const handleChange = (value: string, name: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const storedUserInfo = localStorage.getItem('sessionToken');

        if (!storedUserInfo) {
            router.push('/admin/login');
            return;
        }

        if (!formData.title || !formData.categoryId) {
            toast.error('Please fill in all required fields.');
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin/servicesDescription`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${storedUserInfo}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                toast.error('Error adding data');
            } else {
                toast.success('Data added successfully!');
                setFormData({
                    title: '',
                    description: '',
                    categoryId: '',
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-3xl mx-auto bg-white border-2 border-[#F17B21] rounded-lg shadow-lg p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-black">Service Description</h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-10">
                    {/* Title Input */}
                    <div className="flex flex-col gap-4 mb-10">
                        <label htmlFor="title" className="block text-gray-900 font-semibold mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={(e) => handleChange(e.target.value, 'title')}
                            placeholder="Title"
                            className="w-full p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none placeholder-gray-600 text-gray-900"
                        />
                    </div>
                    <div className="flex flex-col gap-4 mb-10">
                        <label htmlFor="description" className="block text-gray-900 font-semibold mb-2">
                        Description
                        </label>
                        <textarea
                            id="description"
                            
                            name="description"
                            required
                            value={formData.description}
                            onChange={(e) => handleChange(e.target.value, 'description')}
                            placeholder="Description"
                            className="w-full h-20 p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none placeholder-gray-600 text-gray-900"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="flex flex-col gap-4 mb-10">
                        <label htmlFor="categoryId" className="block text-gray-900 font-semibold mb-2">
                            Project
                        </label>
                        <select
                            id="categoryId"
                            name="categoryId"
                            required
                            value={formData.categoryId}
                            onChange={(e) => handleChange(e.target.value, 'categoryId')}
                            className="w-full p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none text-gray-900"
                        >
                            <option value="" disabled>
                                Select a Project
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#F17B21] text-black font-bold rounded-md focus:outline-none hover:bg-[#f18c48]"
                    >
                        Add
                    </button>
                </form>
            </div>
            <ServiceDescriptionTable/>
        </div>
    );
}
