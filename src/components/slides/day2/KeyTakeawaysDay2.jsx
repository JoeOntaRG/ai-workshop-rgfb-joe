import React, { useState, useEffect } from 'react';
import { Layers, ShieldCheck, Users } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const takeaways = [
  { num: '01', Icon: Layers,      headline: 'Pilih tool berdasarkan tugas.' },
  { num: '02', Icon: ShieldCheck, headline: 'Selalu fact-check & jaga privasi.' },
  { num: '03', Icon: Users,       headline: 'Manusia tetap di kursi pengemudi.' },
];

export default function KeyTakeawaysDay2() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    takeaways.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 240));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Take Home · Day 2</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Tiga Hal.</h2>
        </div>

        <div className="flex flex-col gap-5">
          {takeaways.map(({ num, Icon, headline }, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-white border-2 rounded-3xl p-7 transition-all duration-700"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-24px)',
              }}
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <span className="text-4xl font-black tracking-tighter" style={{ color: ACCENT_BORDER }}>{num}</span>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                     style={{ backgroundColor: ACCENT }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">{headline}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
KeyTakeawaysDay2.displayName = 'KeyTakeawaysDay2';
