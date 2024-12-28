import React from 'react';

export default function Experience() {
  return (
    
    <div
      className="relative w-full h-auto py-8 bg-cover bg-center "
      style={{ backgroundImage: "url('Experiance.webp')" }} // Replace with your image path
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black mx-auto max-w-7xl px-4 mt-12">
        <div className="py-4 px-4 flex flex-col items-start border-l-8 border-orange-500">
          <h2 className="text-4xl font-bold text-left text-black">12</h2> {/* Changed text-center to text-left */}
          <p className="text-sm text-left text-gray-600">Projects Complete</p> {/* Optional: Align the paragraph left too */}
        </div>

        <div className="py-4 px-4  flex flex-col items-start border-l-8 border-orange-500">
          <h2 className="text-4xl font-bold text-left text-black">20+</h2>
          <p className="text-sm text-left text-gray-600">IT Professionals</p>
        </div>

        <div className="py-4 px-4  flex flex-col items-start border-l-8 border-orange-500">
          <h2 className="text-4xl font-bold text-left text-black">12</h2>
          <p className="text-sm text-left text-gray-600">Happy Clients</p>
        </div>

        <div className="py-4 px-4  flex flex-col items-start border-l-8 border-orange-500">
          <h2 className="text-4xl font-bold text-left text-black">2+</h2>
          <p className="text-sm text-left text-gray-600">Years of Expertise</p>
        </div>
      </div>
    </div>
  );
}
