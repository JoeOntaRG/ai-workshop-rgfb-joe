import React, { useEffect, useState } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const sections = [
  { num: '01', label: 'Tools yang disetujui',  detail: 'List enterprise · tier paid · pakai SSO.' },
  { num: '02', label: 'Data yang tidak boleh', detail: 'PII customer · harga partner · NDA aktif.' },
  { num: '03', label: 'Wajib human review',    detail: 'Komunikasi customer · keputusan HR · finance.' },
  { num: '04', label: 'Disclosure',            detail: 'Output AI di-disclose ke stakeholder relevan.' },
  { num: '05', label: 'Incident reporting',    detail: 'Salah / bocor → lapor ke IT dalam 24 jam.' },
];

export default function AIPolicyTemplate() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    sections.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 100 + i * 110));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Internal Policy</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">5 hal di policy.</h2>
        </div>

        <div className="flex flex-col gap-3">
          {sections.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_220px_1fr] gap-4 p-4 rounded-xl border bg-white items-center transition-all duration-400"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <span className="text-2xl font-black" style={{ color: ACCENT_BORDER }}>{s.num}</span>
              <span className="text-base font-black text-gray-900">{s.label}</span>
              <span className="text-sm text-gray-500 font-medium">{s.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
AIPolicyTemplate.displayName = 'AIPolicyTemplate';
