import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Bot, Presentation, Image as ImageIcon } from 'lucide-react';
import { ACCENT } from '../../../theme';

const steps = [
  { Icon: BookOpen,      time: '0:00', label: 'Source',   detail: 'NotebookLM → bahan utama' },
  { Icon: Bot,           time: '0:10', label: 'Draft',    detail: 'Claude → struktur' },
  { Icon: Presentation,  time: '0:20', label: 'Deck',     detail: 'Gamma → slide' },
  { Icon: ImageIcon,     time: '0:25', label: 'Visual',   detail: 'Canva AI → aset' },
];

export default function WorkflowExample() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    steps.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 250));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Sample · 30 menit</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Workflow contoh.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Dari sumber hingga materi presentasi.</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {steps.map(({ Icon, time, label, detail }, i) => (
            <React.Fragment key={i}>
              <div
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border-2 bg-white w-48 transition-all duration-500"
                style={{
                  borderColor: shown.includes(i) ? ACCENT : '#e5e7eb',
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <span className="text-xs font-mono font-black" style={{ color: ACCENT }}>{time}</span>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-base font-black text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT, opacity: shown.includes(i + 1) ? 1 : 0.2 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
WorkflowExample.displayName = 'WorkflowExample';
