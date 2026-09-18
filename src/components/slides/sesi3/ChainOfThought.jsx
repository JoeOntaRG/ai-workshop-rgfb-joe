import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { ACCENT, ACCENT_BG, ACCENT_BORDER, ACCENT_DARK } from '../../../theme';

const steps = [
  { label: 'Without CoT', tone: 'bad',  text: 'Jawaban langsung: "Pak Budi lelah karena terlalu banyak meeting."' },
  { label: 'Step 1',      tone: 'mid',  text: 'Mari berpikir, siapa Pak Budi?' },
  { label: 'Step 2',      tone: 'mid',  text: 'Beliau dipromosikan menjadi manager 3 bulan lalu.' },
  { label: 'Step 3',      tone: 'mid',  text: 'Sejak promosi: 12+ meeting/minggu (sebelumnya 5).' },
  { label: 'Step 4',      tone: 'mid',  text: 'Beliau juga masih membawa pekerjaan dari peran lamanya yang belum selesai.' },
  { label: 'Conclusion',  tone: 'good', text: 'Root cause: transisi peran + handover lambat, bukan jumlah meeting. Solusi: percepat proses handover.' },
];

export default function ChainOfThought() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(p => (p + 1) % (steps.length + 2)), 1800);
    return () => clearInterval(t);
  }, []);

  const visible = Math.min(step, steps.length - 1);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className="w-full md:w-[42%] flex flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Framework 2 of 4
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Chain-of-Thought.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Minta AI berpikir step-by-step sebelum menjawab. Akurasi bisa naik 2–3× untuk pertanyaan kompleks.
          </p>

          <div className="rounded-2xl border-2 p-5"
               style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_BG }}>
            <Brain className="w-7 h-7 mb-3" style={{ color: ACCENT_DARK }} />
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT_DARK }}>
              Frasa kunci
            </p>
            <ul className="text-sm text-gray-700 leading-relaxed space-y-1 font-medium">
              <li>"Berpikirlah step-by-step sebelum menjawab."</li>
              <li>"Jelaskan reasoning-nya, lalu simpulkan."</li>
              <li>"Pertama identifikasi... Kedua... Ketiga... Lalu ringkas."</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[58%] bg-slate-900 rounded-3xl p-7">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
              Demo · Kenapa Pak Budi selalu kelelahan?
            </p>
          </div>
          <div className="space-y-2 min-h-[280px]">
            {steps.slice(0, visible + 1).map((s, i) => {
              const colors = {
                bad:  { bg: 'rgba(244,63,94,0.15)',  br: 'rgba(244,63,94,0.3)',  fg: '#fca5a5' },
                mid:  { bg: 'rgba(255,255,255,0.04)',br: 'rgba(255,255,255,0.1)', fg: '#d1d5db' },
                good: { bg: 'rgba(16,185,129,0.15)', br: 'rgba(16,185,129,0.3)', fg: '#86efac' },
              };
              const c = colors[s.tone];
              return (
                <div key={i}
                     className="p-3.5 rounded-xl text-sm leading-relaxed border transition-all duration-500"
                     style={{
                       backgroundColor: c.bg, borderColor: c.br, color: c.fg,
                       animation: 'fadeIn 0.4s ease',
                     }}>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mr-2">
                    {s.label}
                  </span>
                  {s.text}
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
ChainOfThought.displayName = 'ChainOfThought';
