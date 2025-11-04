import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-orange-50 via-white to-purple-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-semibold mb-4">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Elevate everyday life skills
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Learn, Play, and Grow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">for Adults, Seniors, and Kids</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Level up communication, memory, problem solving and wellness with interactive tests, games, and videos tailored to every age group.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#categories" className="inline-flex items-center justify-center rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold shadow-lg shadow-orange-600/30 transition">
              Explore Tracks
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/80 hover:bg-white text-gray-900 px-6 py-3 font-semibold border border-gray-200 backdrop-blur transition">
              See What’s Inside
            </a>
          </div>
        </motion.div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
