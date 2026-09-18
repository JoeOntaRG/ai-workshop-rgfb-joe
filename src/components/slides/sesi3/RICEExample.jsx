import React, { useState, useEffect } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const parts = [
  { letter: 'R', color: '#6366f1', label: 'Role',        text: 'LinkedIn content strategist, 5 tahun di B2B SaaS' },
  { letter: 'I', color: '#0ea5e9', label: 'Instruction', text: '12 ide post untuk 3 minggu (4 post/minggu) di company page kami' },
  { letter: 'C', color: '#10b981', label: 'Context',     text: 'B2B SaaS HR untuk UKM Indonesia · Audiens: HR Manager · Goal: brand + leads' },
  { letter: 'E', color: '#f59e0b', label: 'Example',     text: 'Angle yang kami suka: "5 tanda perusahaan Anda butuh HR digital". Hindari clickbait.' },
];

export default function RICEExample() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    parts.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
    setTimeout(() => setShown(p => [...p, 'prompt']), 200 + parts.length * 220);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>RICE in Action</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Case: LinkedIn Strategy for B2B.
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          <div className="flex flex-col gap-3">
            {parts.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 px-5 py-4 rounded-2xl border-2 bg-white transition-all duration-500"
                style={{
                  borderColor: `${p.color}40`,
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-24px)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: p.color }}>
                  <span className="text-2xl font-black text-white tracking-tighter">{p.letter}</span>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>
                    {p.label}
                  </p>
                  <p className="text-base text-gray-800 leading-snug font-medium">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="bg-slate-900 rounded-3xl p-7 flex flex-col transition-all duration-700"
            style={{
              opacity: shown.includes('prompt') ? 1 : 0,
              transform: shown.includes('prompt') ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-4">Prompt utuh</p>
            <div className="font-mono text-xs text-gray-100 leading-relaxed flex-1 whitespace-pre-line">
{`Bertindaklah sebagai LinkedIn content
strategist dengan pengalaman 5 tahun
di B2B SaaS.

Task: buat 12 ide post untuk company
page kami selama 3 minggu ke depan
(4 post/minggu).

Context:
  · B2B SaaS HR untuk UKM Indonesia
  · Audiens: HR Manager
  · Goal: brand awareness + leads

Angle yang kami suka:
  "5 tanda perusahaan Anda butuh
   HR digital."
Hindari headline clickbait.

Output: tabel dengan kolom
(Minggu, Hari, Judul, Hook, CTA).`}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-emerald-300 font-bold">
              Spesifik. Actionable. Bisa dipakai ulang.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
RICEExample.displayName = 'RICEExample';
