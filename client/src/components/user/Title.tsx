"use client";
import React from 'react';

// Define the props type for TypeScript
interface TitleProps {
    title: string;
    subTitle: string;
    backgroundImage: string; // Add a prop for the background image
}

const Title: React.FC<TitleProps> = ({ title, subTitle, backgroundImage }) => {
    return (
        <div className="relative">
            {/* Background section */}
            <div
                className="text-left bg-cover bg-center min-h-[50vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`, // Use the dynamic image prop
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                }}
            >
                {/* Semi-transparent overlay */}
                <div className="relative flex flex-col items-center text-center bg-black bg-opacity-50 p-8 rounded-md max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-white text-base lg:text-lg leading-relaxed mt-4">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Title;
