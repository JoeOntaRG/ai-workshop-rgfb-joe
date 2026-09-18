import React, { useState, useEffect } from 'react';
import { Users, PenLine, Calculator, Settings, Palette } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const fns = [
  { Icon: Users,     fn: 'HR',         time: '3 hari → 30 menit', metric: 'job description' },
  { Icon: PenLine,   fn: 'Marketing',  time: '1 hari → 5 menit',  metric: 'variasi caption' },
  { Icon: Calculator,fn: 'Finance',    time: '2 hari → 2 jam',    metric: 'memo monthly close' },
  { Icon: Settings,  fn: 'Operations', time: '1 minggu → 1 hari', metric: 'workflow → SOP' },
  { Icon: Palette,   fn: 'Design',     time: '2 jam → 15 menit',  metric: 'per visual asset' },
];

export default function AIatWorkSummary() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    fns.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 120 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Recap · AI at Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Five Functions, <span style={{ color: ACCENT }}>One Pattern</span>.
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-10">
          {fns.map(({ Icon, fn, time, metric }, i) => (
            <div
              key={i}
              className="bg-white border-2 rounded-2xl p-6 text-center transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{fn}</h3>
              <p className="text-sm font-bold tracking-tight mb-1" style={{ color: ACCENT_DARK }}>{time}</p>
              <p className="text-xs text-gray-500 font-medium leading-snug">{metric}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300 mb-3">Pola yang konsisten</p>
          <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
            AI membantu draft, ranking, dan mempercepat. Manusia memvalidasi, memutuskan, dan bertanggung jawab atas outcome.
          </p>
        </div>
      </div>
    </div>
  );
}
AIatWorkSummary.displayName = 'AIatWorkSummary';
