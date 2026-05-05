'use client';

import Image from 'next/image';

const Education = () => {
  return (
    <section id="education" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Education</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Academic Background</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="bg-white border border-slate-200 shadow-lg rounded-3xl p-6">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Image
                  src="/logos/uofm.png"
                  alt="University of Michigan"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">University</p>
                <h3 className="text-xl font-semibold text-slate-900">University of Michigan Ann Arbor</h3>
              </div>
            </div>
            <div className="space-y-3 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Intended Major:</span> Mechanical Engineering
              </p>
              <p>
                <span className="font-semibold text-slate-900">GPA:</span> 3.88 / 4.0
              </p>
              <p>
                <span className="font-semibold text-slate-900">Years:</span> 2025 – 2029 (expected)
              </p>
            </div>
          </article>

          <article className="bg-white border border-slate-200 shadow-lg rounded-3xl p-6">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Image
                  src="/logos/cc.png"
                  alt="Detroit Catholic Central"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">High School</p>
                <h3 className="text-xl font-semibold text-slate-900">Detroit Catholic Central in Novi</h3>
              </div>
            </div>
            <div className="space-y-3 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">GPA:</span> 4.57
              </p>
              <p>
                <span className="font-semibold text-slate-900">Years:</span> 2021 – 2025
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
