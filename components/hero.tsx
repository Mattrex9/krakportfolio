'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">Matthew Krakowiak</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">Intended Mechanical Engineering at University of Michigan</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              <Mail size={20} />
              Email
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10">
                <button 
                  onClick={() => window.location.href = 'mailto:mattkrakowiak9@gmail.com'}
                  className="w-full text-left px-6 py-3 hover:bg-gray-100 text-gray-800 font-medium transition-colors duration-150 border-b border-gray-200 last:border-b-0"
                >
                  mattkrakowiak9@gmail.com
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:mattkrak@umich.edu'}
                  className="w-full text-left px-6 py-3 hover:bg-gray-100 text-gray-800 font-medium transition-colors duration-150 last:border-b-0"
                >
                  mattkrak@umich.edu
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => window.open('https://www.linkedin.com/in/matthew-krakowiak-093010323/', '_blank')}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-200 shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.716h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.574zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.968-1.715 1.197 0 1.916.76 1.944 1.715 0 .953-.747 1.715-1.997 1.715zm-1.6 11.597h3.191V9.236H3.737v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            LinkedIn
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;