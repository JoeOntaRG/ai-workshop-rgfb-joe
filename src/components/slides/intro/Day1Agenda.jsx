import React, { useState, useEffect } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const sessions = [
  {
    num: '01',
    time: '09.05 – 09.50 · 45\'',
    title: 'AI Demystified',
    desc: 'Perbedaan AI, ML, dan GenAI, garis waktu 70 tahun, serta lima jenis model generatif.',
  },
  {
    num: '02',
    time: '10.00 – 11.05 · 65\'',
    title: 'Prompt Engineering',
    desc: 'Framework RICE, Chain-of-Thought, few-shot, role-based prompting, dan iterasi prompt.',
  },
  {
    num: '03',
    time: '11.15 – 12.00 · 45\'',
    title: 'AI Tools Mastery',
    desc: 'Latihan menggunakan ChatGPT, Claude, Gemini, NotebookLM, Gamma, dan tool kreatif untuk pekerjaan sehari-hari.',
  },
  {
    num: '04',
    time: '13.00 – 13.45 · 45\'',
    title: 'Reflection & Next Steps',
    desc: 'Merangkum pembelajaran, memilih eksperimen pertama, dan menyiapkan langkah penggunaan AI di tim.',
  },
];

export default function Day1Agenda() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    sessions.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Day 1 — Monday, May 25, 2026</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Agenda.</h2>
          <p className="text-lg text-gray-500 font-medium mt-4 max-w-2xl">
            Empat sesi inti dalam empat jam kerja.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {sessions.map(({ num, time, title, desc }, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-6 py-5 rounded-2xl border bg-white transition-all duration-500"
              style={{
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-24px)',
                borderColor: ACCENT_BORDER,
              }}
            >
              <span
                className="text-6xl font-black leading-none w-16 text-right flex-shrink-0 select-none"
                style={{ color: ACCENT_BORDER }}
              >
                {num}
              </span>

              <div className="flex-1 ml-4">
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
Day1Agenda.displayName = 'Day1Agenda';
