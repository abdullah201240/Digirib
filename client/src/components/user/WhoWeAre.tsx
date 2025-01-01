"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import AboutImg from '@/app/assets/img/WhoWe.webp';

export default function WhoWeAre() {
  return (
    <div className="bg-white py-16">
      <section className="bg-transparent">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-7xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                <span className="underline decoration-[#F05924]">Who</span>{' '}
                <span className="text-[#F05924]">We Are</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Founded on the belief that technology can solve real business challenges, Digirib is a team of experienced professionals passionate about helping businesses succeed. Our team consists of highly skilled developers, designers, project managers, and digital strategists, all working collaboratively to bring your vision to life.

                With years of experience across various industries, from startups to large enterprises, we are committed to delivering solutions that not only meet but exceed expectations. Every project we undertake is approached with creativity, dedication, and a deep understanding of the client’s objectives.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={AboutImg}
                  alt="About Us Image"
                  className="object-cover rounded-lg"
                  width={800}
                  height={800}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
