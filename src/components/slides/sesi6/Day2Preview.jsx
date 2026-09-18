import React, { useState, useEffect } from 'react';
import { Search, Shield, Users, Presentation } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const day2 = [
  { time: '09.10 – 11.00 · 110\'', Icon: Search,       title: 'AI for Marketing Research',     desc: 'Kuesioner, analisis survei, insight, paparan data, dan prototype konsep.' },
  { time: '11.45 – 12.00 · 15\'',  Icon: Shield,       title: 'AI Ethics & Risks',              desc: 'Halusinasi, fact-checking, keamanan data, bias, dan regulasi AI di Indonesia.' },
  { time: '13.00 – 13.45 · 45\'',  Icon: Users,        title: 'Group Work',                    desc: 'Tim menyusun output singkat dari bahan latihan dan menyiapkan presentasi.' },
  { time: '13.45 – 14.00 · 15\'',  Icon: Presentation, title: 'Presentation & Key Takeaways', desc: 'Presentasi singkat, post-test, dan satu langkah penerapan berikutnya.' },
];

export default function Day2Preview() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    day2.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Coming Tomorrow</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Day 2.
          </h2>
          <p className="text-lg text-gray-500 font-medium mt-4 max-w-2xl">
            Market research, etika, dan praktik hands-on bersama tim Anda.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {day2.map(({ time, Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-white border rounded-2xl p-5 transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <span className="font-mono text-xs font-bold text-gray-400">{time}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Day2Preview.displayName = 'Day2Preview';
