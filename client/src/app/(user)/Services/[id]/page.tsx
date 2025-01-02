"use client"; // Add this directive at the top

import React from 'react';
import Footer from '@/components/user/Footer';
import Navbar from '@/components/user/Navbar';
import Title from '@/components/user/Title';
import Img2 from '@/app/assets/img/DG.png';
import { useParams } from 'next/navigation';
import ServicesCard from '@/components/user/ServicesCard';

export default function Page() {
    const params = useParams();
    const id = params?.id; // Ensure the `id` is used correctly or validated

    return (
        <div>
            <Navbar />
            <Title
                title="Digital Marketing"
                subTitle=""
                backgroundImage={Img2.src}
            />
            <p>{id}</p>
            <ServicesCard />
            <div className='bg-[#F9F7F7] py-16'>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
                    {/* Form Section */}
                    <div className="md:w-1/2 p-6 bg-[#433878] shadow-lg rounded-lg">
                        <div className="text-2xl py-4 px-6 text-white">
                            <h1 className="font-bold text-3xl">Let’s Discuss Your Project</h1>
                            <p className="mt-4 text-sm">Fill out the form below, and we’ll get back to you shortly to discuss your needs and how we can work together to achieve your goals.</p>
                        </div>

                        <form className="py-4 px-6 space-y-6" action="" method="POST">
                            {/* Name Input */}
                            <div className="mb-4">
                                <label className="block text-white font-semibold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label className="block text-white font-semibold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="mb-4">
                                <label className="block text-white font-semibold mb-2" htmlFor="phone">Phone</label>
                                <input
                                    className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Topic Input */}
                            <div className="mb-4 ">
                                <label className="block text-white font-semibold mb-2" htmlFor="topic">Topic</label>
                                <input
                                    className="w-full p-3 text-black bg-white rounded-md border border-bg-white focus:outline-none focus:ring-2 focus:ring-bg-white"
                                    id="topic"
                                    type="text"
                                    placeholder="Enter the topic"
                                />
                            </div>

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
            <Footer />
        </div>
    );
}
