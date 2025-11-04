import React from 'react';
import { Brain, Gamepad2, BookOpen, PlayCircle, BarChart3, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'Psychometric Tests',
    desc: 'Science-backed quick checks for memory, focus, and personality fit.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Gamepad2,
    title: 'Skill Games',
    desc: 'Daily brain gym with puzzles and reflex challenges that level up.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: BookOpen,
    title: 'Courses',
    desc: 'Structured micro-courses with practical exercises and progress tracking.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: PlayCircle,
    title: 'Video Learning',
    desc: 'Short, engaging lessons and demos curated for each age group.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: BarChart3,
    title: 'Score Tracker',
    desc: 'See trends across focus, memory, and mood scores over time.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Smile,
    title: 'Mood Detector',
    desc: 'Log your mood and get personalized content suggestions instantly.',
    color: 'bg-pink-100 text-pink-700',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to grow</h2>
          <p className="mt-2 text-gray-600">Interactive tools and delightful animations make learning stick.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${f.color} mb-4`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
