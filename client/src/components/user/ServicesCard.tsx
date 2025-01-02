import React from 'react'

export default function ServicesCard() {
  return (
    <div className='bg-[#F9F7F7] py-16'>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    
    <div className="w-full">
        
        <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">SEO & SEM</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Improve visibility and reach through search engine optimization and targeted paid search campaigns.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Social Media Management </h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Engage audiences and build brand presence across social media platforms through strategic content planning.</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Content Marketing</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Create valuable, engaging content to attract and retain a target audience, boosting customer engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      
    </div>
  )
}
