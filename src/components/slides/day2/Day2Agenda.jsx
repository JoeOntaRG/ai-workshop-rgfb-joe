import React, { useState, useEffect } from 'react';
import { Search, Shield, BookOpen, Users } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const sessions = [
  { num: '01', time: '09.10 – 11.00 · 110\'', Icon: Search,   title: 'AI for Marketing Research', desc: 'Membuat kuesioner, menganalisis data dan jawaban terbuka, menyusun PPT, lalu membuat prototype konsep.' },
  { num: '02', time: '11.45 – 12.00 · 15\'',  Icon: Shield,   title: 'Ethics & Risks',           desc: 'Halusinasi, privasi data, bias, dan kapan AI tidak boleh dipakai.' },
  { num: '03', time: '13.00 – 13.45 · 45\'',  Icon: Users,    title: 'Group Work',               desc: 'Eksekusi case study dan siapkan presentasi singkat.' },
  { num: '04', time: '13.45 – 14.00 · 15\'',  Icon: BookOpen, title: 'Presentation & Key Takeaways', desc: 'Tarik pelajaran utama, post-test, dan langkah berikutnya.' },
];

export default function Day2Agenda() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    sessions.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Day 2 — Tuesday, May 26, 2026</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Agenda.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {sessions.map(({ num, time, Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-6 py-5 rounded-2xl border bg-white transition-all duration-500"
              style={{
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-24px)',
                borderColor: ACCENT_BORDER,
              }}
            >
              <span className="text-6xl font-black leading-none w-16 text-right flex-shrink-0 select-none"
                    style={{ color: ACCENT_BORDER }}>
                {num}
              </span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                  <span className="font-mono text-xs font-bold text-gray-400">{time}</span>
                </div>
                <p className="text-base text-gray-500 font-medium leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Day2Agenda.displayName = 'Day2Agenda';
