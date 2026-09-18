import React, { useEffect, useState } from 'react';
import { Calendar, Users, Compass } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const steps = [
  { Icon: Calendar, when: 'Minggu 1', label: 'Pakai 1 tool tiap hari di kerjaan nyata.' },
  { Icon: Users,    when: 'Minggu 2', label: 'Bagi temuan ke tim — share prompt yang work.' },
  { Icon: Compass,  when: 'Bulan 1',  label: 'Rancang AI workflow untuk 1 proses divisi.' },
];

export default function NextSteps() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    steps.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>After Workshop</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Langkah berikutnya.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map(({ Icon, when, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-5 rounded-2xl border bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-4 flex-1">
                <span className="text-sm font-mono font-bold text-gray-400 w-20 flex-shrink-0">{when}</span>
                <p className="text-base font-bold text-gray-800 leading-snug">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
NextSteps.displayName = 'NextSteps';
