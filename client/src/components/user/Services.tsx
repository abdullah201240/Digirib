"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface Service {
  id: string;
  name: string;
  image: string;
  subTitle: string;
  backgroundImage: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch services
  const fetchServices = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}user/services`
      );

      // Check if the response is not OK (e.g., status 4xx or 5xx)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data: Service[] = await response.json();
      setServices(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      // Handle 'unknown' error
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="bg-white">
      <section className="py-32 px-8">
        <div className="mx-auto pt-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
            <span className="underline decoration-[#F05924]">Serv</span>ices
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 lg:py-20 space-y-16 flex flex-col">
          {loading && (
            <div className="text-center">
              <p className="text-gray-500">Loading services...</p>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center">{error}</div>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="mx-auto shadow-lg bg-[#F4F4F4] h-full relative rounded-lg overflow-hidden transform duration-700 hover:scale-105 group"
                >
                <Link href={`/services/${service.id}`

                }>
                 
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out z-10 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL_IMAGE}${service.backgroundImage})`,
                      backgroundBlendMode: "overlay",
                    }}
                  ></div>
                  <div className="relative z-20 h-full flex flex-col justify-between bg-[#F4F4F4] group-hover:bg-transparent transition-all duration-700 ease-out text-center">
                    <div>
                      <div className="p-4">
                        <h1 className="text-black text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                          {service.name}
                        </h1>
                        <p className="text-black text-sm  mb-2 group-hover:text-white transition-colors duration-700 ease-out">
                          {service. subTitle}
                        </p>
                       
                      </div>
                      <div className=" relative w-full h-48 group-hover:hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${service.backgroundImage}`}
                          alt={service.name}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  </Link> 
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
