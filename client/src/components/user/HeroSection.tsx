"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

const HeroSection = React.memo(function HeroSection() {
    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('heroSection.webp')" }} // Replace with your image path
        >
            {/* Shadow Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 py-20 lg:pt-32">
                <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold tracking-normal text-white sm:text-7xl">
                    Innovative
                    <span className="text-[#F05924]">  Digital & IT</span>
                </h2>
                <h2
                    className="mx-auto max-w-5xl font-display text-4xl font-bold tracking-normal text-[#F05924] sm:text-7xl mt-4"
                >
                    Solutions
                    <span className="inline-block">
                        <span className="relative whitespace-nowrap text-white">
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#F05924]" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span className="relative pl-5">  Modern World</span></span>
                    </span>
                </h2>

                <h2 className="mx-auto mt-12 max-w-4xl text-lg line-clamp-3 md:line-clamp-none text-white leading-7">
                    &quot;At Digirib, we develop cutting-edge software that powers your business growth. From web apps to mobile platforms, we turn your vision into reality.&quot;                </h2>

                {/* Follow Us Section on Mobile */}
                <div className="flex flex-row justify-center gap-10 mt-16 lg:hidden">
                    <a href="https://www.facebook.com/people/Digirib/100094543100873" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white w-8 h-8 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white w-8 h-8 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                    </a>
                    <a href="https://www.linkedin.com/company/digirib1" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-white w-8 h-8 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                    </a>
                    <a href="https://www.behance.net/digiribteam" target="_blank" rel="noopener noreferrer">
                        <FaBehance className="text-white w-8 h-8 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white w-8 h-8 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                    </a>
                </div>
            </div>

            {/* Follow Us Section for Larger Screens */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-8">
                <a href="https://www.facebook.com/people/Digirib/100094543100873" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-white w-6 h-6 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white w-6 h-6 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                </a>
                <a href="https://www.linkedin.com/company/digirib1" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-white w-6 h-6 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                </a>
                <a href="https://www.behance.net/digiribteam" target="_blank" rel="noopener noreferrer">
                    <FaBehance className="text-white w-6 h-6 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white w-6 h-6 cursor-pointer hover:text-[#F05924] transition-colors duration-200" />
                </a>
            </div>
        </div>
    );
});

export default HeroSection;
