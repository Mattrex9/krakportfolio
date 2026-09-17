'use client';

import { useState } from 'react';
import { Linkedin, Mail, Paperclip } from 'lucide-react';

export const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">Matthew Krakowiak</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">Mechanical Engineering at The University of Michigan</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center gap-2 w-40 px-6 py-3 border-2 border-transparent bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
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
              className="flex items-center justify-center gap-2 w-40 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              <Linkedin size={20} />
              LinkedIn
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-40 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              <Paperclip size={20} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;