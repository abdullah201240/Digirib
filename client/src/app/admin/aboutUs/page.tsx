'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    homeImage: null,
    homeDescription: '',
    description: '',
    mission: '',
    vision: '',
    whoWeAreText: '',
    whoWeAreImage: null,
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
          `${process.env.NEXT_PUBLIC_API_URL}admin/about/1`,
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
            homeDescription: data.data.homeDescription || '',
            description: data.data.description || '',
            mission: data.data.mission || '',
            vision: data.data.vision || '',
            whoWeAreText: data.data.whoWeAreText || '',
            homeImage: data.data.homeImage || null,
            whoWeAreImage: data.data.whoWeAreImage || null,
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
      form.append('homeDescription', formData.homeDescription);
      form.append('description', formData.description);
      form.append('mission', formData.mission);
      form.append('vision', formData.vision);
      form.append('whoWeAreText', formData.whoWeAreText);

      if (formData.homeImage) form.append('homeImage', formData.homeImage);
      if (formData.whoWeAreImage) form.append('whoWeAreImage', formData.whoWeAreImage);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin/about/1`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${storedUserInfo}`,
        },
        body: form,
      });

      if (!response.ok) {
        console.error('Error updating data');
      } else {
        console.log('Data updated successfully');
      }
    } catch (error) {
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
          <h2 className="text-3xl font-bold text-black">About Us</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="w-1/2 mb-6">
            <label htmlFor="homeImage" className="block text-gray-900 font-semibold mb-2">
              Home Image
            </label>
            <input
              id="homeImage"
              type="file"
              name="homeImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none bg-white text-black file:border file:border-gray-400 file:rounded-md file:bg-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="homeDescription" className="block text-gray-900 font-semibold mb-2">
              Home Description
            </label>
            <textarea
              id="homeDescription"
              name="homeDescription"
              value={formData.homeDescription}
              onChange={handleChange}
              placeholder="Home Description"
              className="w-full p-4 h-40 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none resize-none placeholder-gray-600 text-gray-900"
            ></textarea>
          </div>

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

          <div className="mb-6">
            <label htmlFor="mission" className="block text-gray-900 font-semibold mb-2">
              Mission
            </label>
            <textarea
              id="mission"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              placeholder="Mission"
              className="w-full p-4 h-40 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none resize-none placeholder-gray-600 text-gray-900"
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="vision" className="block text-gray-900 font-semibold mb-2">
              Vision
            </label>
            <textarea
              id="vision"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              placeholder="Vision"
              className="w-full p-4 h-40 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none resize-none placeholder-gray-600 text-gray-900"
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="whoWeAreText" className="block text-gray-900 font-semibold mb-2">
              Who We Are (Text)
            </label>
            <textarea
              id="whoWeAreText"
              name="whoWeAreText"
              value={formData.whoWeAreText}
              onChange={handleChange}
              placeholder="Who We Are"
              className="w-full p-4 h-40 rounded-md border border-gray-400 focus:border-[#F17B21] focus:ring-2 focus:ring-[#F17B21] focus:outline-none resize-none placeholder-gray-600 text-gray-900"
            ></textarea>
          </div>

          <div className="w-1/2 mb-6">
            <label htmlFor="whoWeAreImage" className="block text-gray-900 font-semibold mb-2">
              Who We Are (Image)
            </label>
            <input
              id="whoWeAreImage"
              type="file"
              name="whoWeAreImage"
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
