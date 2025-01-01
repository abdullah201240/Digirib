"use client";

import React from 'react';
import Image from 'next/image';
import CareerImg from '@/app/assets/img/Career.webp';

// Define the type for the component's props
interface CareerTitleProps {
  onJobOpeningsClick: () => void; // This function doesn't take arguments and doesn't return anything
}

const CareerTitle: React.FC<CareerTitleProps> = ({ onJobOpeningsClick }) => {
  return (
    <div className="relative mt-10">
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Career Image */}
          <div className="relative mb-12">
            <Image
              src={CareerImg}
              alt="Career image"
              layout="responsive" // Ensures the image maintains its aspect ratio
              width={1200} // Maintain the original width of the image
              height={800} // Maintain the original height of the image
            />
          </div>

          {/* Main Content */}
          <div className="place-items-center lg:py-16">
            <div className="lg:mr-auto place-self-center text-center lg:text-center">
              <h1 className="mb-6 text-4xl font-extrabold text-[#F05924] leading-tight md:text-5xl xl:text-6xl">
                Join Our Team at Digirib
              </h1>
              <p className="text-lg lg:text-xl font-medium text-gray-600 mb-6 md:mb-8">
                At Digirib, we’re always on the lookout for passionate and innovative individuals who are ready to make an impact in the tech world. We believe in fostering a dynamic, inclusive, and growth-focused work environment where every team member can thrive and contribute to cutting-edge projects that drive real-world results.
              </p>

              {/* Button to Job Openings */}
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center lg:justify-center mt-16">
                <button
                  onClick={onJobOpeningsClick}
                  className="px-8 py-4 bg-[#F05924] text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#E04D1F] hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05924] focus:ring-offset-2"
                >
                  Job Openings
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareerTitle;
