import React from 'react';
import WhiteLogo from '@/app/assets/img/WhiteLogo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#F9F7F7]">
      <footer className="relative">
        {/* SVG Background */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="borderGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#F05924" />
              <stop offset="100%" stopColor="#8A3315" />
            </linearGradient>
          </defs>
          <path
            fill="url(#borderGradient)"
            fillOpacity="1"
            d="M0,80L80,117.3C160,155,320,229,480,234.7C640,240,800,176,960,165.3C1120,155,1280,197,1360,218.7L1440,240L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#101620"
            fillOpacity="1"
            d="M0,96L80,133.3C160,171,320,245,480,250.7C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        {/* Footer Content */}
        <div className="bg-[#101620] w-full lg:-mt-20">
          <div className="py-10 flex flex-wrap gap-8 md:flex-nowrap  mx-auto max-w-7xl">

            {/* Left Column */}
            <div className="w-full md:w-2/3  p-5 flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left Column: Logo and Mission Statement */}
              <div className="flex-1 md:pr-16">
                <Image alt="Logo" src={WhiteLogo} width={100} height={100} />
                <p className="text-white text-lg mt-6">
                  &quot;At Digirib, our mission is to drive digital transformation by delivering
                  innovative and customized software solutions that empower businesses to thrive
                  in a fast-paced, technology-driven world.&quot;
                </p>
              </div>

              {/* Right Column: Contact Information */}
              <div className="flex-1 mt-8 md:mt-0  p-6 ">
                <h3 className="text-[#F05924] text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
                  Get in Touch
                </h3>
                <ul className="text-white text-base space-y-4">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-[#F05924] text-lg mr-3 mt-1" />
                    <div>
                      <strong className="block mb-1">Office Address:</strong>
                      <span className='text-base'>House-141, Road-01, Baridhara DOHS, Dhaka</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaEnvelope className="text-[#F05924] text-lg mr-3 mt-1" />
                    <div>
                      <strong className="block mb-1">Email:</strong>
                      <a
                        href="mailto:team.digirib@gmail.com"
                        className="hover:underline hover:text-[#F05924] transition-colors"
                      >
                        team.digirib@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaPhoneAlt className="text-[#F05924] text-lg mr-3 mt-1" />
                    <div>
                      <strong className="block mb-1">Phone:</strong>
                      <a
                        href="tel:+8801800000000"
                        className="hover:underline hover:text-[#F05924] transition-colors"
                      >
                        (+880) 1800000000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaWhatsapp className="text-[#F05924] text-lg mr-3 mt-1" />
                    <div>
                      <strong className="block mb-1">WhatsApp:</strong>
                      <a
                        href="https://wa.me/8801800000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-[#F05924] transition-colors"
                      >
                        (+880) 1800000000
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            {/* Center Column */}
            <div className="w-full md:w-1/3 relative flex justify-center ">
              {/* Floating Card */}
              <div className="border bg-[#101620] w-80 h-[64vh] min-h-fit md:w-100 shadow-xl p-6 z-10 md:-mt-60 rounded-xl">
                <h3 className="text-white text-lg font-bold mb-4">Connect with us</h3>
                <div className="mb-4">
                  <label
                    className="block text-gray-300 font-medium mb-2"
                    htmlFor="name"
                  >
                    Your Name                  </label>
                  <input
                    className="w-full py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#F05924] bg-gray-800 text-white"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4 mt-4">
                  <div>
                    <label
                      className="block text-gray-300 font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#F05924] bg-gray-800 text-white"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className='mt-4'>
                    <label className="block text-gray-300 font-medium mb-2" htmlFor="cvv">
                      Phone Number
                    </label>
                    <input
                      className="w-full py-2 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#F05924] bg-gray-800 text-white"
                      id="phone"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-300 font-medium mb-2"
                    htmlFor="name_on_card"
                  >
                    Message.........
                  </label>
                  <textarea
                    className="w-full py-12 px-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#F05924] bg-gray-800 text-white"
                    id="message"


                  />
                </div>
                <button
                  className="w-full py-2 px-4 bg-[#F05924] text-white font-bold rounded hover:bg-[#F05924] focus:outline-none focus:ring-2 focus:ring-[#F05924]"
                >
                  Submit
                </button>
              </div>

              {/* Decorative Rotated Box */}
              <div className="w-32 h-32 md:w-40 md:h-40  absolute transform lg:-right-10 bottom-20 rotate-[21deg] z-2 bg-[#F0592445]"></div>

            </div>

          </div>
          <div className="hidden lg:flex justify-center items-center mx-auto max-w-6xl gap-6 space-x-6 pb-12 mt-12 text-xl text-white">
            <Link href="/" className="hover:text-[#F05924]">
              Home
            </Link>
            <Link href="/aboutUs" className="hover:text-[#F05924]">
              About Us
            </Link>
            <Link href="" className="hover:text-[#F05924]">
              Services
            </Link>
            <Link href="" className="hover:text-[#F05924]">
              Projects
            </Link>
            <Link href="" className="hover:text-[#F05924]">
              Career
            </Link>
            <Link href="" className="hover:text-[#F05924]">
              Blog
            </Link>
            <Link href="" className="hover:text-[#F05924]">
              Contact Us
            </Link>
          </div>
          <div className="border-t-2 mx-auto max-w-7xl text-white">
            <h1 className="mt-4 pb-10 text-center sm:text-left sm:px-6">
              © {new Date().getFullYear()} Digirib. All rights reserved.
            </h1>
          </div>





        </div>
      </footer>
    </div>
  );
}
