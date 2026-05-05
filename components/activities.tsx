'use client';

import Image from 'next/image';

const Activities = () => {
  return (
    <section id="activities" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Activities</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Involvement & Leadership</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="bg-white border border-slate-200 shadow-lg rounded-3xl p-6">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Image
                  src="/logos/mracing.jpeg"
                  alt="MRacing Chassis Subteam"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Organization</p>
                <h3 className="text-xl font-semibold text-slate-900">MRacing Chassis Subteam</h3>
              </div>
            </div>
            <div className="space-y-3 text-slate-700">
              <p>Member of student-led engineering and motorsports organization and helped in workshop to develop parts for car.</p>
            </div>
          </article>

          <article className="bg-white border border-slate-200 shadow-lg rounded-3xl p-6">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Image
                  src="/logos/ummgc.jpg"
                  alt="University of Michigan Men's Glee Club"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Organization</p>
                <h3 className="text-xl font-semibold text-slate-900"><a href="https://ummgc.org" className="hover:text-blue-600">University of Michigan Men's Glee Club</a></h3>
              </div>
            </div>
            <div className="space-y-3 text-slate-700">
              <p>Active member in group and was one of very few music director's picks to be chosen to go on tour.</p>
            </div>
          </article>

          <article className="bg-white border border-slate-200 shadow-lg rounded-3xl p-6">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Image
                  src="/logos/ccgolf.jpg"
                  alt="Varsity Golf Team"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Sport</p>
                <h3 className="text-xl font-semibold text-slate-900">Varsity Golf Team</h3>
              </div>
            </div>
            <div className="space-y-3 text-slate-700">
              <p>4 year member of Detroit Catholic Central varsity golf team, won state championship 3 out of 4 years, had highest GPA on team.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Activities;