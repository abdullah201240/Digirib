import React from 'react';
import Image from 'next/image';
import Img1 from '@/app/assets/img/Why.webp';
import Img2 from '@/app/assets/img/DownArraw.webp';

export default function WhyDigirib() {
    return (
        <div className="flex justify-center items-center py-8 px-4 bg-white">
            <div className="relative flex flex-col md:flex-row w-full max-w-7xl bg-white rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative md:w-1/2 overflow-hidden group">
                    <Image
                        src={Img1}
                        alt="Why Digirib"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content Section */}
                <div className="p-12  md:w-1/2">
                    {/* Tag */}
                    <div className="mb-4 inline-flex items-center bg-[#433878] py-1 px-5 text-3xl text-white font-medium">
                        Why <span className="ml-2 flex items-center text-[#F05924]">
                            Digirib?
                            <Image
                                alt="arrow"
                                src={Img2}
                                width={30}
                                height={30}
                                className="ml-4"
                            />
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-slate-600 leading-relaxed text-lg">
                        At Digirib, we leverage years of proven expertise to deliver innovative digital solutions that align with your unique business needs. Our commitment to cutting-edge technology means the software we create is not only state-of-the-art but also
                        scalable—ensuring it evolves as your business grows.

                        We place your goals at the center of everything we do, collaborating closely to craft personalized solutions that drive real impact. Our dedication to quality means that every project is executed with precision and a relentless focus on excellence.
                    </p>
                </div>
            </div>
        </div>
    );
}
