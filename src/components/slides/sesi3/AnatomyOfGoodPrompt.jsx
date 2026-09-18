import React, { useState, useEffect } from 'react';
import { User, Target, FileText, Sliders, CheckSquare } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const parts = [
  { id: 'role',       Icon: User,        label: 'Role',        title: 'Siapa yang bicara',   line: 'Bertindaklah sebagai senior HR business partner dengan pengalaman 10 tahun...' },
  { id: 'task',       Icon: Target,      label: 'Task',        title: 'Apa yang dikerjakan', line: '...tulis job description untuk posisi Marketing Manager.' },
  { id: 'context',    Icon: FileText,    label: 'Context',     title: 'Latar belakang',      line: 'B2B SaaS, 50 karyawan, hybrid di Jakarta, fokus pada UKM Indonesia.' },
  { id: 'format',     Icon: Sliders,     label: 'Format',      title: 'Bentuk output',       line: 'Output dalam bullet points, maksimal 150 kata.' },
  { id: 'constraint', Icon: CheckSquare, label: 'Constraints', title: 'Aturan dan batasan',  line: 'Hindari jargon. Profesional tapi hangat. Bahasa Indonesia.' },
];

export default function AnatomyOfGoodPrompt() {
  const [active, setActive] = useState('role');
  useEffect(() => {
    const ids = parts.map(p => p.id);
    const t = setInterval(() => setActive(p => ids[(ids.indexOf(p) + 1) % ids.length]), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Prompt Engineering</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Five Parts of a <span style={{ color: ACCENT }}>Strong Prompt</span>.
          </h2>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] gap-10">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 rounded-3xl p-7 flex flex-col gap-2.5"
               style={{ borderColor: ACCENT_BORDER }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Contoh prompt utuh</p>
            {parts.map(p => {
              const isActive = active === p.id;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  className="px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? 'white' : 'transparent',
                    boxShadow: isActive ? '0 4px 12px rgba(99,102,241,0.15)' : 'none',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest mr-2 px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: isActive ? ACCENT : ACCENT_BG, color: isActive ? 'white' : ACCENT_DARK }}>
                    {p.label}
                  </span>
                  <span className={`text-sm leading-relaxed ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                    {p.line}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5">
            {parts.map(p => {
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-2xl border-2 text-left transition-all duration-300"
                  style={{
                    borderColor: isActive ? ACCENT : '#e5e7eb',
                    backgroundColor: isActive ? ACCENT_BG : 'white',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: isActive ? ACCENT : '#f3f4f6' }}>
                    <p.Icon className="w-5 h-5" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest"
                       style={{ color: isActive ? ACCENT_DARK : '#9ca3af' }}>
                      {p.label}
                    </p>
                    <p className={`text-base font-bold ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                      {p.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
AnatomyOfGoodPrompt.displayName = 'AnatomyOfGoodPrompt';
