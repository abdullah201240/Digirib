'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Contact {
    id: number;
    name: string,
    email: string,
    phone: string,
    topic: string,

}

const ContactTable = () => {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Start with loading as true


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
                const contactResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/contacts`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${storedUserInfo}`,
                        },
                    }
                );

                if (contactResponse.ok) {
                    const data = await contactResponse.json(); // Parse response data
                    // Ensure that the data is an array before setting it


                    if (Array.isArray(data.data)) {
                        const sortedContacts = data.data.sort((a: Contact, b: Contact) => b.id - a.id);

                        setContacts(sortedContacts); // Update state with the fetched team
                    } else {
                    }
                } else {
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



    return (
        <div className="flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-center text-4xl text-black"> Contact List</h1>

                {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-gray-700 border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Name</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Email</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Phone</th>
                                    <th className="p-4 text-left font-semibold text-gray-900 border border-gray-200">Topic</th>



                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length > 0 ? (

                                    contacts.map((contact) => (

                                        <tr key={contact.id} className="bg-white hover:bg-gray-50">
                                            <td className="p-4 text-gray-900 border border-gray-200">{contact.name}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">{contact.email}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">{contact.phone}</td>
                                            <td className="p-4 text-gray-900 border border-gray-200">{contact.topic}</td>

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











        </div>
    );
};

export default ContactTable;
