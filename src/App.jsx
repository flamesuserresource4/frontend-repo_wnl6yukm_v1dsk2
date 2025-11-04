import React from 'react';
import Hero3D from './components/Hero3D';
import CategoryCards from './components/CategoryCards';
import FeaturesGrid from './components/FeaturesGrid';
import ScoreMoodWidget from './components/ScoreMoodWidget';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 text-white">+</span>
            LifeSkillr
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#categories" className="hover:text-orange-600">Tracks</a>
            <a href="#features" className="hover:text-orange-600">Features</a>
            <a href="#dashboard" className="hover:text-orange-600">Dashboard</a>
            <a href="#" className="rounded-lg bg-gray-900 text-white px-3 py-2 hover:bg-black">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <CategoryCards />
        <FeaturesGrid />
        <div id="dashboard">
          <ScoreMoodWidget />
        </div>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-lg mb-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 text-white">+</span>
              LifeSkillr
            </div>
            <p className="text-sm text-gray-600">Bright, playful, and rooted in science — helping every age build life-long skills.</p>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold text-gray-900 mb-2">Explore</div>
            <ul className="space-y-1">
              <li><a className="hover:text-orange-600" href="#categories">Tracks</a></li>
              <li><a className="hover:text-orange-600" href="#features">Features</a></li>
              <li><a className="hover:text-orange-600" href="#dashboard">Dashboard</a></li>
            </ul>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold text-gray-900 mb-2">Stay in the loop</div>
            <p>New games and tests drop weekly. Turn on notifications after sign up.</p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} LifeSkillr. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
