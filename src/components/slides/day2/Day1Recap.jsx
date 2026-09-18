import React, { useState, useEffect } from 'react';
import { Brain, Wand2, Briefcase } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const items = [
  { Icon: Brain,     label: 'AI Demystified',    detail: 'AI vs ML vs GenAI · 5 model types' },
  { Icon: Wand2,     label: 'Prompt Engineering', detail: 'RICE · CoT · Few-shot · Role-based' },
  { Icon: Briefcase, label: 'AI Tools',            detail: 'ChatGPT · Claude · Gemini · NotebookLM · Gamma' },
];

export default function Day1Recap() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    items.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Where we left off</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Day 1 — Recap.</h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {items.map(({ Icon, label, detail }, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-black text-gray-900 mb-1">{label}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Day1Recap.displayName = 'Day1Recap';
