import React, { useEffect, useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import CategoryCards from './components/CategoryCards';
import FeaturesGrid from './components/FeaturesGrid';
import GamesHub from './components/GamesHub';
import LearnHub from './components/LearnHub';
import QuoteProgress from './components/QuoteProgress';
import LoginModal from './components/LoginModal';

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return [route, (r) => { window.location.hash = r; }];
}

function App() {
  const [route] = useHashRoute();
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('lifeskillr_user');
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (route === '/login') setLoginOpen(true);
  }, [route]);

  function onLogout(){
    localStorage.removeItem('lifeskillr_user');
    setUser(null);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 text-white">+</span>
            LifeSkillr
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#/games" className="hover:text-orange-600">Games</a>
            <a href="#/learn" className="hover:text-orange-600">Learn</a>
            <a href="#/progress" className="hover:text-orange-600">Progress</a>
            {!user ? (
              <a href="#/login" onClick={(e)=>{e.preventDefault(); setLoginOpen(true);}} className="rounded-lg bg-gray-900 text-white px-3 py-2 hover:bg-black">Sign in</a>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Hi, {user.name || user.email}</span>
                <button onClick={onLogout} className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">Logout</button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main>
        {route === '/' && (
          <>
            <Hero3D />
            <CategoryCards />
            <FeaturesGrid />
            <GamesHub />
            <LearnHub />
            <QuoteProgress />
          </>
        )}
        {route === '/games' && (
          <>
            <HeroPageTitle title="Play Games" subtitle="Quick daily brain gym with tracked scores" />
            <GamesHub />
            <QuoteProgress />
          </>
        )}
        {route === '/learn' && (
          <>
            <HeroPageTitle title="Learn" subtitle="Courses and videos tailored to you" />
            <LearnHub />
            <QuoteProgress />
          </>
        )}
        {route === '/progress' && (
          <>
            <HeroPageTitle title="Your Progress" subtitle="Mood, quotes, and performance trends" />
            <QuoteProgress />
          </>
        )}
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
              <li><a className="hover:text-orange-600" href="#/games">Games</a></li>
              <li><a className="hover:text-orange-600" href="#/learn">Learn</a></li>
              <li><a className="hover:text-orange-600" href="#/progress">Progress</a></li>
            </ul>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold text-gray-900 mb-2">Stay in the loop</div>
            <p>New games and tests drop weekly. Turn on notifications after sign up.</p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} LifeSkillr. All rights reserved.</div>
      </footer>

      <LoginModal open={loginOpen} onClose={()=>setLoginOpen(false)} onLogin={(u)=> setUser(u)} />
    </div>
  );
}

function HeroPageTitle({ title, subtitle }){
  return (
    <section className="relative bg-gradient-to-b from-[#0b0b14] via-[#0f0a18] to-[#160b21] text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="text-white/70 mt-2">{subtitle}</p>
      </div>
    </section>
  );
}

export default App;
