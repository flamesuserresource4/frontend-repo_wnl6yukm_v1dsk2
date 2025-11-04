import React, { useMemo, useState } from 'react';
import { Brain, Smile, Frown, Meh, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

function Gauge({ value }) {
  const pct = Math.max(0, Math.min(100, value));
  const stroke = 10;
  const size = 140;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  const hue = 30 + (pct * 1.2); // orange to green-ish

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <circle cx={size/2} cy={size/2} r={r} stroke="#eee" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2}
        cy={size/2}
        r={r}
        stroke={`hsl(${hue} 90% 45%)`}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={`${dash} ${c - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-gray-800 font-bold" fontSize="24">
        {Math.round(pct)}
      </text>
    </svg>
  );
}

export default function ScoreMoodWidget() {
  const [score, setScore] = useState(68);
  const [mood, setMood] = useState('neutral');
  const [history, setHistory] = useState([62, 64, 67, 66, 68]);

  const moodLabel = useMemo(() => {
    if (mood === 'happy') return 'Upbeat and focused';
    if (mood === 'neutral') return 'Calm and steady';
    return 'A little low — gentle content enabled';
  }, [mood]);

  function runMiniTest() {
    const next = Math.round(50 + Math.random() * 50);
    setScore(next);
    setHistory((h) => [...h.slice(-7), next]);
  }

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Your personal dashboard</h2>
            <p className="mt-2 text-gray-600">Track progress and tune content to your current mood.</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Brain className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Focus score</h3>
                  <p className="text-sm text-gray-500">From the latest mini-test</p>
                </div>
              </div>
              <button onClick={runMiniTest} className="rounded-lg bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-sm font-semibold shadow-orange-600/30 shadow">
                Run mini‑test
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 items-center">
              <Gauge value={score} />
              <div>
                <div className="text-sm text-gray-500 mb-1">Recent trend</div>
                <Sparkline data={history} />
                <div className="mt-4 text-sm text-gray-600">Consistent practice boosts your score. Try 5 minutes daily.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-700">
                <Smile className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Mood detector</h3>
                <p className="text-sm text-gray-500">Log your mood to tailor difficulty and recommendations</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => setMood('happy')} className={`h-12 w-12 rounded-full flex items-center justify-center border ${mood === 'happy' ? 'bg-yellow-100 border-yellow-300' : 'bg-white border-gray-200'}`}>
                <Smile className="h-6 w-6 text-yellow-600" />
              </button>
              <button onClick={() => setMood('neutral')} className={`h-12 w-12 rounded-full flex items-center justify-center border ${mood === 'neutral' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`}>
                <Meh className="h-6 w-6 text-blue-600" />
              </button>
              <button onClick={() => setMood('sad')} className={`h-12 w-12 rounded-full flex items-center justify-center border ${mood === 'sad' ? 'bg-violet-100 border-violet-300' : 'bg-white border-gray-200'}`}>
                <Frown className="h-6 w-6 text-violet-600" />
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <BarChart3 className="h-4 w-4" />
                {moodLabel}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Based on your mood, we’ll adjust session length and recommend either calm videos, energizing games, or reflective exercises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkline({ data }) {
  const w = 220;
  const h = 64;
  const pad = 6;
  const max = Math.max(...data, 100);
  const min = Math.min(...data, 0);
  const pts = data.map((v, i) => {
    const x = pad + (i * (w - pad * 2)) / (data.length - 1 || 1);
    const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={w} height={h} className="block">
      <polyline points={pts} fill="none" stroke="#fb923c" strokeWidth="2" />
      {data.map((v, i) => {
        const x = pad + (i * (w - pad * 2)) / (data.length - 1 || 1);
        const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
        return <circle key={i} cx={x} cy={y} r={2} fill="#fb923c" />
      })}
    </svg>
  );
}
