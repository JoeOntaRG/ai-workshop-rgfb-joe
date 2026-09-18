import React, { useState, useEffect } from 'react';
import { Sparkles, Wrench } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER, ACCENT_DEEP } from '../../../theme';

const day1 = {
  day: 'Day 1',
  date: 'Mon, May 25',
  theme: 'Foundation, Prompt, and Tools',
  Icon: Sparkles,
  branches: [
    { num: '01', title: 'AI Demystified',       leaves: ['AI vs ML vs GenAI', 'Timeline 70 thn', '5 Jenis Model'] },
    { num: '02', title: 'Prompt Engineering',   leaves: ['RICE', 'Chain-of-Thought', 'Few-shot', 'Role-based'] },
    { num: '03', title: 'AI Tools Mastery',    leaves: ['ChatGPT', 'Claude', 'Gemini', 'NotebookLM', 'Gamma'] },
    { num: '04', title: 'Reflection & Next Steps', leaves: ['Practice', 'Feedback', 'Action plan'] },
  ],
};

const day2 = {
  day: 'Day 2',
  date: 'Tue, May 26',
  theme: 'Market Research, Ethics & Real-World Application',
  Icon: Wrench,
  branches: [
    { num: '01', title: 'AI for Marketing Research', leaves: ['ChatGPT', 'Gemini', 'NotebookLM', 'Claude', 'Gamma', 'Canva AI'] },
  { num: '02', title: 'AI Ethics & Risks',          leaves: ['Hallucination', 'Data Privacy', 'Bias', 'Regulasi AI'] },
  { num: '03', title: 'Group Work',                 leaves: ['Pilih Kasus', 'Eksekusi', 'Tools Combo'] },
    { num: '04', title: 'Presentation & Key Takeaways', leaves: ['Pitch', 'Post-test', 'Recap'] },
  ],
};

// 4 quadrant positions for branch nodes (center of node, in 1280x720 canvas-relative percentages)
const POSITIONS = [
  { x: 18, y: 22 },  // top-left
  { x: 82, y: 22 },  // top-right
  { x: 18, y: 78 },  // bottom-left
  { x: 82, y: 78 },  // bottom-right
];
const CENTER = { x: 50, y: 50 };

function MindMap({ data, accent, accentDeep }) {
  const { day, date, theme, Icon, branches } = data;
  const [shown, setShown] = useState([]);

  useEffect(() => {
    branches.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 250 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10 py-8 relative">
      {/* Header */}
      <div className="absolute top-6 left-10">
        <p className="text-[11px] font-black uppercase tracking-[0.28em]" style={{ color: accentDeep }}>
          Rundown · {day}
        </p>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-tight">
          Apa yang akan kita pelajari.
        </h2>
      </div>

      {/* Mind map canvas */}
      <div className="relative w-full max-w-6xl" style={{ aspectRatio: '16 / 9' }}>
        {/* SVG connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {POSITIONS.map((pos, i) => {
            const midX = (CENTER.x + pos.x) / 2;
            return (
              <path
                key={i}
                d={`M ${CENTER.x} ${CENTER.y} C ${midX} ${CENTER.y}, ${midX} ${pos.y}, ${pos.x} ${pos.y}`}
                stroke={accent}
                strokeWidth="0.25"
                strokeDasharray="0.6 0.8"
                fill="none"
                opacity={shown.includes(i) ? 0.5 : 0}
                style={{ transition: 'opacity 600ms ease' }}
              />
            );
          })}
        </svg>

        {/* Decorative background blob */}
        <div
          className="absolute rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            backgroundColor: accent,
            width: '40%',
            height: '40%',
            left: '30%',
            top: '30%',
          }}
        />

        {/* Center node */}
        <div
          className="absolute z-20 flex flex-col items-center"
          style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div
            className="flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border-2"
            style={{ backgroundColor: accent, borderColor: 'white' }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/80">
                {day}
              </p>
              <h3 className="text-base font-black text-white leading-tight max-w-[220px]">{theme}</h3>
            </div>
          </div>
        </div>

        {/* Branch nodes */}
        {branches.map((b, i) => {
          const pos = POSITIONS[i];
          const isLeft = pos.x < 50;
          return (
            <div
              key={i}
              className="absolute z-10"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `translate(-50%, -50%)`,
                opacity: shown.includes(i) ? 1 : 0,
                transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1) ${i * 60}ms`,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className={`flex flex-col items-${isLeft ? 'start' : 'end'} gap-2.5 w-[260px]`}>
                <div
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white shadow-lg border"
                  style={{ borderColor: ACCENT_BORDER }}
                >
                  <span
                    className="text-[10px] font-black px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: ACCENT_BG, color: accentDeep }}
                  >
                    {b.num}
                  </span>
                  <h4 className="text-[13px] font-black text-gray-900 leading-tight">{b.title}</h4>
                </div>
                <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  {b.leaves.map((leaf, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border"
                      style={{
                        color: accentDeep,
                        borderColor: ACCENT_BORDER,
                      }}
                    >
                      {leaf}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Day1Rundown() {
  return <MindMap data={day1} accent={ACCENT} accentDeep={ACCENT_DARK} />;
}
Day1Rundown.displayName = 'Day1Rundown';

export function Day2Rundown() {
  return <MindMap data={day2} accent={ACCENT_DARK} accentDeep={ACCENT_DEEP} />;
}
Day2Rundown.displayName = 'Day2Rundown';

// Backward-compat default export still works as Day 1 only.
export default Day1Rundown;
