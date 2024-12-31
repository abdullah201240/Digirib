import React from 'react';
import Image from 'next/image';
import AboutImg from '@/app/assets/img/Ab.webp';
import Link from 'next/link';
interface AboutUsProps {
    className?: string;
  }
const AboutUs: React.FC<AboutUsProps> = ({ className }) => {
    return (
        <div
            className={`relative w-full h-auto py-4 bg-cover bg-center ${className || ''}`}
            style={{
                backgroundImage: "url('/AboutUs.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh',
            }}
        >
            <section className="bg-transparent -mt-10 sm:mt-16">
                <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-6xl">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                <span className="underline decoration-[#F05924]">Abo</span>ut{' '}
                                <span className="text-[#F05924]">Digirib</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                &quot;At Digirib, our mission is to drive digital transformation by delivering
                                innovative and customized software solutions that empower businesses to thrive in a
                                fast-paced, technology-driven world.
                                <br />
                                <br />
                                We believe in creating software that not only solves problems but also creates new
                                opportunities for growth and efficiency.&quot;
                            </p>
                            <div className="flex gap-4 mt-10">

                                <Link className="px-6 py-2 min-w-[120px] text-center text-white bg-[#F05924] border border-[#F05924] rounded active:text-[#F05924] hover:bg-transparent hover:text-[#F05924] focus:outline-none focus:ring"
                                    href="/download">
                                    More About Us
                                </Link>

                               

                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <Image
                                src={AboutImg}
                                alt="About Us Image"
                                className="object-cover rounded-lg "
                                width={800}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default AboutUs;
