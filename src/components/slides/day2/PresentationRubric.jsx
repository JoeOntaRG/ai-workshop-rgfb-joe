import React, { useEffect, useState } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const criteria = [
  { weight: '30%', label: 'Relevansi',     detail: 'Cocok dengan situasi bisnis yang dipilih.' },
  { weight: '30%', label: 'Eksekusi',      detail: 'Output nyata, bukan sekadar ide.' },
  { weight: '20%', label: 'Penggunaan AI', detail: 'Tools dipakai dengan baik & etis.' },
  { weight: '20%', label: 'Komunikasi',    detail: 'Jelas dalam 2 menit.' },
];

export default function PresentationRubric() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    criteria.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Penilaian</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Rubric.</h2>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: ACCENT_BORDER }}>
          {criteria.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[80px_180px_1fr] gap-4 px-6 py-5 items-center transition-all duration-500"
              style={{
                borderTop: i > 0 ? '1px solid #f1f5f9' : 'none',
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <span className="text-2xl font-black" style={{ color: ACCENT }}>{c.weight}</span>
              <span className="text-lg font-black text-gray-900">{c.label}</span>
              <span className="text-sm text-gray-500 font-medium">{c.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
PresentationRubric.displayName = 'PresentationRubric';
