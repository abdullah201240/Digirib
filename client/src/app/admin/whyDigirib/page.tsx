'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'; // Importing toast

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    image: null,
    description: '',
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
          `${process.env.NEXT_PUBLIC_API_URL}admin/whyDigirib/1`,
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
            description: data.data.description || '',
            image: data.data.image || null,
          });
        }
      } catch (error) {
        console.error('Error checking session:', error);
        router.push('/admin/login');
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const storedUserInfo = localStorage.getItem('sessionToken');

    if (!storedUserInfo) {
      router.push('/admin/login');
      return;
    }

    try {
      const form = new FormData();
      form.append('description', formData.description);

      if (formData.image) form.append('image', formData.image);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin/whyDigirib/1`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${storedUserInfo}`,
        },
        body: form,
      });

      if (!response.ok) {
        toast.error('Error updating data'); // Display error toast
        console.error('Error updating data');
      } else {
        toast.success('Data updated successfully'); // Display success toast
        console.log('Data updated successfully');
      }
    } catch (error) {
      toast.error('Error submitting form'); // Display error toast
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
          <h2 className="text-3xl font-bold text-black">Why Digirib</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-900 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-4 h-40 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none resize-none placeholder-gray-600 text-gray-900"
            ></textarea>
          </div>

          <div className="w-1/2 mb-6">
            <label htmlFor="image" className="block text-gray-900 font-semibold mb-2">
              Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none bg-white text-black file:border file:border-gray-400 file:rounded-md file:bg-white"
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
