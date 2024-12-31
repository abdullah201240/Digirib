import React from "react";
import Img from "@/app/assets/img/test.png";
import Image from "next/image";

export default function Services() {
  return (

    <div
      className={"relative w-full h-auto  bg-cover bg-center"}
      style={{
        backgroundImage: "url('Servise.webp')",

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

      }} // Replace with your image path
    >
      <section className=" py-32 px-8 " >
        <div className="mx-auto pt-10">
          <h1 className="text-black text-center text-3xl font-semibold">
            <span className="underline decoration-[#F05924]">Serv</span>
            ices
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 lg:py-20 space-y-16 flex flex-col">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">





            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between  bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div>
                  <div className="p-4">
                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                      Web Development
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Building responsive, scalable, and user-friendly web applications to enhance your digital presence.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"

                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between  bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div>
                  <div className="p-4">
                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                      Web Development
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Building responsive, scalable, and user-friendly web applications to enhance your digital presence.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"

                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>


            {/* Card 4 */}
            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div >
                  <div className="p-4">


                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out ">
                      Cloud Solutions
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Optimizing your business processes with secure, scalable, and cost-effective cloud solutions.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Cloud Solutions"
                      layout="fill"
                      objectFit="cover"
                      className=""
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>
            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between  bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div>
                  <div className="p-4">
                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                      Web Development
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Building responsive, scalable, and user-friendly web applications to enhance your digital presence.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"

                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>
            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between  bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div>
                  <div className="p-4">
                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                      Web Development
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Building responsive, scalable, and user-friendly web applications to enhance your digital presence.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"

                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>
            <article className="mx-auto shadow-lg bg-[#F4F4F4] h-80 relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${Img.src})`,
                  backgroundBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-20 h-full flex flex-col justify-between  bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                <div>
                  <div className="p-4">
                    <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                      Web Development
                    </h1>
                    <p className="text-black text-sm group-hover:text-white opacity-100 transition-colors duration-700 ease-out">
                      &quot;Building responsive, scalable, and user-friendly web applications to enhance your digital presence.&quot;
                    </p>
                  </div>
                  <div className="mt-6 relative w-full h-48 group-hover:hidden">
                    <Image
                      src={Img.src}
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"

                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,..."
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
