import React, { useEffect, useState } from 'react';
import { Clock, Layers, Target, Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const blocks = [
  { Icon: Target,   label: 'Problem',  detail: '30 detik · masalah yang dipecahkan.' },
  { Icon: Layers,   label: 'Approach', detail: '60 detik · tools & prompt yang dipakai.' },
  { Icon: Sparkles, label: 'Hasil',    detail: '30 detik · tunjukkan output nyata.' },
];

export default function PresentationFormat() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    blocks.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Presentasi</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">2 menit. 3 bagian.</h2>
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs font-bold"
               style={{ backgroundColor: '#eef2ff', color: ACCENT }}>
            <Clock className="w-3.5 h-3.5" />
            Total max 2:00 per tim
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {blocks.map(({ Icon, label, detail }, i) => (
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
PresentationFormat.displayName = 'PresentationFormat';
