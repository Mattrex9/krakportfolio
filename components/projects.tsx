'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const projects = [
    {
      id: 'masters-bracket',
      title: 'Masters Bracket Petting App',
      description: 'Full-stack web app enabling users to select golfers and track performance with real-time scoring',
      highlights: [
        'Integrated ESPN API for live leaderboard updates',
        'Developed scoring algorithm based on real-time tournament standings',
        'Optimized UI updates to reflect live scoring changes'
      ],
      liveLink: 'https://mattrex9.github.io/themastersbracket1/',
      image: '/projects/masters-bracket.png',
      tags: ['React', 'Node.js', 'ESPN API', 'Real-time Scoring']
    }
  ];

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
        

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid md:grid-cols-2 gap-8 items-center hover:opacity-90 transition-opacity duration-300"
            >
              {/* Live Preview Portal */}
              <div
                className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-300 group-hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg"
                onClick={() => setActivePreview(activePreview === project.id ? null : project.id)}
              >
                <div className="aspect-video bg-gray-200 relative">
                  {activePreview === project.id ? (
                    <iframe
                      src={project.liveLink}
                      className="w-full h-full border-none"
                      title={project.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                          <ExternalLink className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-gray-700 font-semibold mb-2">Click to preview</p>
                        <p className="text-gray-600 text-sm">{project.title}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-600 border border-blue-300">
                  {activePreview === project.id ? 'Click to close' : 'Live Preview'}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-2 inline-flex w-fit">
                  <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300 hover:border-blue-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
