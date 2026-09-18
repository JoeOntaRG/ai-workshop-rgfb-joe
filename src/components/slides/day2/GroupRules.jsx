import React, { useEffect, useState } from 'react';
import { Users, Clock, Sparkles, Trophy } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const rules = [
  { Icon: Users,    label: '3–4 orang',         detail: 'Pilih kelompok beragam fungsi.' },
  { Icon: Clock,    label: '30 menit',          detail: 'Eksekusi. 15 menit terakhir untuk presentasi.' },
  { Icon: Sparkles, label: 'Pakai 2+ tools',    detail: 'Minimal kombinasi 2 tools dari Sesi 1.' },
  { Icon: Trophy,   label: 'Output konkret',    detail: 'Sesuatu yang bisa dipakai senin pagi.' },
];

export default function GroupRules() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    rules.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 160));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Group Work · Rules</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Aturan main.</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {rules.map(({ Icon, label, detail }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl border bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
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
GroupRules.displayName = 'GroupRules';
