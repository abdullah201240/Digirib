"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  title: string;
  description: string;
  image: string;
  designation: string;
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}user/testimonial`
        );
        const data: Testimonial[] = await response.json();

        if (response.ok) {
          setTestimonials(data);
        } else {
          throw new Error("Failed to fetch testimonials");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#FCDED3] min-h-screen flex flex-col justify-center items-center py-16">
      <section className="px-6 w-full" id="testimonial">
        <div className="w-fit sm:mb-20 mb-10 mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mt-16">
            <span className="underline decoration-[#F05924]">Wh</span>at Our
            Client Say <span className="text-[#F05924]">About Us</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 items-center mx-auto max-w-7xl pl-2 pt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:p-8 p-4 rounded-xl relative bg-white shadow-lg group transition-all duration-300 hover:bg-[#FFC9A0]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${testimonial.image}`}
                alt={testimonial.title}
                className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 lg:w-[6rem] lg:h-[6rem] w-[4rem] h-[4rem] rounded-full outline outline-offset-2 outline-[#F05924] group-hover:outline-white transition-all duration-300"
                width={96}
                height={96}
              />
              <p className="md:pl-8 mt-6 sm:mt-0 text-black sm:text-lg text-center font-serif group-hover:text-white transition-all duration-300">
                <span className="sm:text-xl text-lg text-black group-hover:text-white">❝</span>
                {testimonial.description}
                <span className="sm:text-xl text-lg text-black group-hover:text-white">❞</span>
              </p>
              <div className="flex flex-col justify-center items-center mt-4">
                <p className="text-black sm:text-lg group-hover:text-white">{testimonial.title}</p>
                <p className="text-black group-hover:text-white">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
