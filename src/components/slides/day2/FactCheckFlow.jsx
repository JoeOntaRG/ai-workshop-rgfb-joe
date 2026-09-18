import React, { useEffect, useState } from 'react';
import { FileSearch, GitCompare, ShieldCheck, ArrowRight } from 'lucide-react';
import { ACCENT } from '../../../theme';

const steps = [
  { Icon: FileSearch,  label: 'Buka sumber', detail: 'Datasheet, web resmi, dokumen internal.' },
  { Icon: GitCompare,  label: 'Bandingkan',  detail: 'Setiap angka & nama produk dicocokkan.' },
  { Icon: ShieldCheck, label: 'Validasi',    detail: 'Approved sebelum dikirim ke customer.' },
];

export default function FactCheckFlow() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    steps.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 250 + i * 280));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Mitigasi · 3 Langkah</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Fact-Check Flow.</h2>
        </div>

        <div className="flex items-center justify-center gap-3">
          {steps.map(({ Icon, label, detail }, i) => (
            <React.Fragment key={i}>
              <div
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border-2 bg-white w-56 transition-all duration-500"
                style={{
                  borderColor: shown.includes(i) ? ACCENT : '#e5e7eb',
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-base font-black text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT, opacity: shown.includes(i + 1) ? 1 : 0.2 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
FactCheckFlow.displayName = 'FactCheckFlow';
