import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Briefcase } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const stats = [
  { Icon: TrendingUp, value: '92%',     label: 'perusahaan global sedang berinvestasi di AI', source: 'McKinsey, 2024' },
  { Icon: Clock,      value: '40%',     label: 'rata-rata waktu yang dihemat pada tugas kognitif dengan AI', source: 'Harvard Business School, 2024' },
  { Icon: Briefcase,  value: '1 dari 3', label: 'pekerjaan di Indonesia dapat dibantu oleh AI dalam 5 tahun', source: 'World Bank, 2024' },
];

export default function WhyAILiteracy() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % stats.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-14 items-center">
        <div className="w-full md:w-[45%] flex flex-col gap-6">
          <div className="w-fit inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-gray-500 uppercase border-gray-200 bg-gray-50">
            AI Demystified
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Why AI Literacy<br />Matters Now.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            AI sudah jadi keterampilan dasar di dunia kerja, bukan lagi sekadar alat tambahan. Tiga angka berikut menjelaskan kenapa.
          </p>
        </div>

        <div className="w-full md:w-[55%] flex flex-col gap-3">
          {stats.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left flex items-center gap-5 px-6 py-5 rounded-2xl border transition-all duration-500"
                style={{
                  backgroundColor: isActive ? ACCENT_BG : 'white',
                  borderColor: isActive ? ACCENT_BORDER : '#f3f4f6',
                  boxShadow: isActive ? '0 4px 24px rgba(99,102,241,0.12)' : 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                     style={{ backgroundColor: isActive ? ACCENT : '#f9fafb' }}>
                  <s.Icon className="w-5 h-5" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-black tracking-tight" style={{ color: isActive ? ACCENT_DARK : '#9ca3af' }}>{s.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{s.source}</span>
                  </div>
                  <p className="text-base text-gray-700 leading-snug font-medium">{s.label}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
WhyAILiteracy.displayName = 'WhyAILiteracy';
