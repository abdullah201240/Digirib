'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'; // Import the toast

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectsComplete: '', // Null to indicate no initial value
    iTProfessionals: '',
    happyClients: '',
    yearsOfExpertise: '',
  });

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

        const aboutResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}admin/experiance/1`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${storedUserInfo}`,
            },
          }
        );

        if (aboutResponse.ok) {
          const data = await aboutResponse.json();
          setFormData({
            projectsComplete: data.data.projectsComplete || null, // Keep null if no data
            iTProfessionals: data.data.iTProfessionals || '',
            happyClients: data.data.happyClients || '',
            yearsOfExpertise: data.data.yearsOfExpertise || '',
          });
        }
      } catch (error) {
        console.error('Error checking session:', error);
        router.push('/admin/login');
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const storedUserInfo = localStorage.getItem('sessionToken');

    if (!storedUserInfo) {
      router.push('/admin/login');
      return;
    }

    try {
      const form = new FormData();
      form.append('projectsComplete', formData.projectsComplete);
      form.append('iTProfessionals', formData.iTProfessionals);
      form.append('happyClients', formData.happyClients);
      form.append('yearsOfExpertise', formData.yearsOfExpertise);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}admin/experiance/1`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${storedUserInfo}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            projectsComplete: formData.projectsComplete,
            iTProfessionals: formData.iTProfessionals,
            happyClients: formData.happyClients,
            yearsOfExpertise: formData.yearsOfExpertise,
          }),        }
      );

      if (!response.ok) {
        toast.error('Error updating data'); // Show error toast
      } else {
        toast.success('Data updated successfully'); // Show success toast
      }
    } catch (error) {
      toast.error('Error submitting form'); // Show error toast
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    if (target) {
      const { name, value } = target;
      const newValue = target instanceof HTMLInputElement && target.files
        ? target.files[0]
        : value;

      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto bg-white border-2 border-[#F17B21] rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Experiance</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="mb-6">
            <label htmlFor="projectsComplete" className="block text-gray-900 font-semibold mb-2">
              Projects Complete
            </label>
            <input
              id="projectsComplete"
              name="projectsComplete"
              type="text"
              value={formData.projectsComplete ?? ''}
              onChange={handleChange}
              placeholder="Projects Complete"
              className="w-full text-black p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="iTProfessionals" className="block text-gray-900 font-semibold mb-2">
              IT Professionals
            </label>
            <input
              id="iTProfessionals"
              name="iTProfessionals"
              type="text"
              value={formData.iTProfessionals}
              onChange={handleChange}
              placeholder="IT Professionals"
              className="w-full  text-black p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="happyClients" className="block text-gray-900 font-semibold mb-2">
              Happy Clients
            </label>
            <input
              id="happyClients"
              name="happyClients"
              type="text"
              value={formData.happyClients}
              onChange={handleChange}
              placeholder="Happy Clients"
              className="w-full text-black p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="yearsOfExpertise" className="block text-gray-900 font-semibold mb-2">
              Years of Expertise
            </label>
            <input
              id="yearsOfExpertise"
              name="yearsOfExpertise"
              type="text"
              value={formData.yearsOfExpertise}
              onChange={handleChange}
              placeholder="Years of Expertise"
              className="w-full text-black p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#F17B21] text-black font-bold rounded-md focus:outline-none hover:bg-[#f18c48]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
