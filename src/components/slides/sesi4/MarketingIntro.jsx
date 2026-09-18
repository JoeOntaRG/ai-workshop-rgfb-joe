import React, { useState, useEffect } from 'react';
import { Lightbulb, CalendarDays, Palette, Search } from 'lucide-react';
import { ACCENT, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const areas = [
  { Icon: Lightbulb,    title: 'Ideation',         desc: 'Brainstorm campaign theme, tagline, dan audience persona dari fitur produk.' },
  { Icon: CalendarDays, title: 'Content Planning', desc: 'Kalender konten 30 hari siap di-import ke Google Calendar.' },
  { Icon: Palette,      title: 'Moodboarding',     desc: 'Visual brief dan moodboard sebelum eksekusi konten.' },
  { Icon: Search,       title: 'SEO',              desc: 'Keyword research, meta tag, dan outline konten.' },
];

export default function MarketingIntro() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % areas.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>AI for Marketing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Four Pillars <span style={{ color: ACCENT }}>AI Reshapes</span>.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {areas.map(({ Icon, title, desc }, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-6 rounded-3xl border-2 transition-all duration-500"
                style={{
                  borderColor: isActive ? ACCENT : '#e5e7eb',
                  backgroundColor: isActive ? ACCENT_BG : 'white',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isActive ? '0 16px 32px rgba(99,102,241,0.15)' : 'none',
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                     style={{ backgroundColor: isActive ? ACCENT : '#f3f4f6' }}>
                  <Icon className="w-6 h-6" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-snug">{desc}</p>
              </button>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 font-medium italic mt-10">
          AI mempercepat eksekusi. Strategi, taste, dan judgment tetap di Anda.
        </p>
      </div>
    </div>
  );
}
MarketingIntro.displayName = 'MarketingIntro';
