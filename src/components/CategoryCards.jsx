import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    key: 'adults',
    title: 'Adults',
    desc: 'Sharpen productivity, communication, and decision-making with bite-sized challenges and courses.',
    color: 'from-orange-500 to-amber-500',
    chip: 'Career + Wellness',
  },
  {
    key: 'seniors',
    title: 'Seniors',
    desc: 'Keep memory, focus, and mood in top shape with gentle brain games and guided routines.',
    color: 'from-purple-500 to-fuchsia-500',
    chip: 'Memory + Balance',
  },
  {
    key: 'kids',
    title: 'Kids',
    desc: 'Playful learning with colorful quests that build creativity, logic, and empathy.',
    color: 'from-green-500 to-teal-500',
    chip: 'Play + Learn',
  },
];

export default function CategoryCards() {
  return (
    <section id="categories" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Pick your path</h2>
            <p className="mt-2 text-gray-600">Each track adapts to your goals with age-aware content and tone.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.a
              key={c.key}
              href={`#features`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl`} />
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-semibold mb-4">{c.chip}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-6">{c.desc}</p>
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                Dive in
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
