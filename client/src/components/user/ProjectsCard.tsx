import React from 'react';
import Image from 'next/image';
import Project1 from '@/app/assets/img/Project1.png';
import Link from 'next/link';

export default function ProjectsCard() {
    return (
        <div className="bg-[#F9F7F7]">
            <div className="mx-auto max-w-7xl  p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {/* Project Card 1 */}
                    <div className="rounded overflow-hidden shadow-lg p-2">
                        <div className="relative">
                            <Link href="#">
                                <Image
                                    className="w-full"
                                    src={Project1}
                                    alt="Sunset in the mountains"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </Link>
                        </div>
                        {/* Text and Button Section */}
                        <div className=" py-2 text-black">
                            
                              <h1 className='text-black text-xl'>Interio Website</h1>  
                         
                            
                            {/* Button */}
                            <div className="mt-4">
                                <button
                                    className="bg-[#F17B21] text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                    type="submit"
                                >
                                    See Behance
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg p-2">
                        <div className="relative">
                            <Link href="#">
                                <Image
                                    className="w-full"
                                    src={Project1}
                                    alt="Sunset in the mountains"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </Link>
                        </div>
                        {/* Text and Button Section */}
                        <div className=" py-2 text-black">
                            
                              <h1 className='text-black text-xl'>Interio Website</h1>  
                         
                            
                            {/* Button */}
                            <div className="mt-4">
                                <button
                                    className="bg-[#F17B21] text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                    type="submit"
                                >
                                    See Behance
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg p-2">
                        <div className="relative">
                            <Link href="#">
                                <Image
                                    className="w-full"
                                    src={Project1}
                                    alt="Sunset in the mountains"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </Link>
                        </div>
                        {/* Text and Button Section */}
                        <div className=" py-2 text-black">
                            
                              <h1 className='text-black text-xl'>Interio Website</h1>  
                         
                            
                            {/* Button */}
                            <div className="mt-4">
                                <button
                                    className="bg-[#F17B21] text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                    type="submit"
                                >
                                    See Behance
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg p-2">
                        <div className="relative">
                            <Link href="#">
                                <Image
                                    className="w-full"
                                    src={Project1}
                                    alt="Sunset in the mountains"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </Link>
                        </div>
                        {/* Text and Button Section */}
                        <div className=" py-2 text-black">
                            
                              <h1 className='text-black text-xl'>Interio Website</h1>  
                         
                            
                            {/* Button */}
                            <div className="mt-4">
                                <button
                                    className="bg-[#F17B21] text-white py-3 px-6 rounded-lg hover:bg-[#F17B21] focus:outline-none focus:ring-2 focus:ring-[#F17B21]"
                                    type="submit"
                                >
                                    See Behance
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
