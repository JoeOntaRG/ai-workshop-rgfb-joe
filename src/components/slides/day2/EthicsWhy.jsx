import React, { useEffect, useState } from 'react';
import { AlertTriangle, Lock, Scale } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const pillars = [
  { Icon: AlertTriangle, color: '#ef4444', label: 'Akurasi',  detail: 'AI bisa salah dengan percaya diri.' },
  { Icon: Lock,          color: '#6366f1', label: 'Privasi',  detail: 'Data masuk = data keluar.' },
  { Icon: Scale,         color: '#0ea5e9', label: 'Keadilan', detail: 'Output bisa bias tanpa kita sadari.' },
];

export default function EthicsWhy() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    pillars.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Ethics & Risks</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">3 Risiko Utama.</h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {pillars.map(({ Icon, color, label, detail }, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-7 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: `${color}30`,
                boxShadow: `0 10px 24px ${color}15`,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: color }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xl font-black text-gray-900 mb-1">{label}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EthicsWhy.displayName = 'EthicsWhy';
