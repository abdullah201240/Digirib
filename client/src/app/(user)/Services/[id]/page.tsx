"use client"; // Add this directive at the top

import React, { useEffect, useState, useCallback } from "react";
import Footer from '@/components/user/Footer';
import Navbar from '@/components/user/Navbar';
import Title from '@/components/user/Title';
import Img2 from '@/app/assets/img/DG.png';
import { useParams } from 'next/navigation';
import ServicesCard from '@/components/user/ServicesCard';
import { toast } from "react-hot-toast";

interface Service {
    id: string;
    name: string;
    image: string;
    backgroundImage: string;
}

export default function Page() {
    const params = useParams();
    const id = params?.id; // Ensure the `id` is used correctly or validated
    const validId = Array.isArray(id) ? id[0] : id;
    const [services, setServices] = useState<Service | null>(null); // Changed to handle a single service
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchServices = useCallback(async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}user/services/${id}`
            );

            // Check if the response is not OK (e.g., status 4xx or 5xx)
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data: Service = await response.json(); // Adjusted to expect a single service
            setServices(data);
            setError(null); // Clear any previous errors
        } catch (err) {
            // Handle 'unknown' error
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false); // Stop loading
        }
    }, [id]);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]); // Include fetchServices as a dependency

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        topic: "",
    });
    type FormDataKeys = keyof typeof formData;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name in formData) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name as FormDataKeys]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    topic: "",
                });
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message || "Something went wrong!"}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(`Error: ${error.message}`);
            } else {
                toast.error("An unknown error occurred!");
            }
        }
    };


    return (
        <div>
            <Navbar />
            {loading ? (
                <div>Loading...</div> // Display loading text or spinner
            ) : error ? (
                <div className="text-red-500">{error}</div> // Display error message
            ) : services ? (
                <>
                    <Title
                        title={services.name}
                        subTitle=""
                        backgroundImage={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${services.backgroundImage}` || (typeof Img2 === "string" ? Img2 : Img2.src)}
                    />
                    <ServicesCard id={validId ?? ''} />
                    <div className='bg-[#F9F7F7] py-16'>
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
                            {/* Form Section */}
                            <div className="md:w-1/2 p-6 bg-[#433878] shadow-lg rounded-lg">
                                <div className="text-2xl py-4 px-6 text-white">
                                    <h1 className="font-bold text-3xl">Let’s Discuss Your Project</h1>
                                    <p className="mt-4 text-sm">Fill out the form below, and we’ll get back to you shortly to discuss your needs and how we can work together to achieve your goals.</p>
                                </div>

                                <form className="py-4 px-6 space-y-6" onSubmit={handleSubmit}>
                                    {['name', 'email', 'phone', 'topic'].map((field) => (
                                        <div className="mb-4" key={field}>
                                            <label className="block text-white font-semibold mb-2" htmlFor={field}>
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <input
                                                className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                                id={field}
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                value={formData[field as keyof typeof formData]}
                                                onChange={handleChange}
                                                placeholder={`Enter your ${field}`}
                                            />
                                        </div>
                                    ))}


                                    {/* Submit Button */}
                                    <div className="mb-4 py-8">
                                        <button
                                            className="w-full border border-white text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null} {/* Render only if services are available */}
            <Footer />
        </div>
    );
}
