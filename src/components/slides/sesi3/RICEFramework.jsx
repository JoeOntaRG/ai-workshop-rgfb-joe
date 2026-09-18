import React, { useState, useEffect } from 'react';
import { ACCENT, ACCENT_DARK } from '../../../theme';

const rice = [
  { letter: 'R', word: 'Role',        color: '#6366f1', desc: 'Peran AI saat menjawab.',                            example: 'Bertindaklah sebagai senior SEO consultant...' },
  { letter: 'I', word: 'Instruction', color: '#0ea5e9', desc: 'Tugas spesifik yang harus dikerjakan.',              example: '...buat content strategy untuk 30 hari...' },
  { letter: 'C', word: 'Context',     color: '#10b981', desc: 'Audiens, batasan, dan latar belakang bisnis.',       example: '...untuk B2B SaaS, budget ads kecil, Indonesia.' },
  { letter: 'E', word: 'Example',     color: '#f59e0b', desc: 'Contoh bentuk output yang diharapkan (opsional).',  example: 'Contoh judul: "5 Cara Memangkas OpEx Tanpa PHK"' },
];

export default function RICEFramework() {
  const [active, setActive] = useState('R');
  useEffect(() => {
    const letters = rice.map(r => r.letter);
    const t = setInterval(() => setActive(p => letters[(letters.indexOf(p) + 1) % letters.length]), 4000);
    return () => clearInterval(t);
  }, []);

  const current = rice.find(r => r.letter === active);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Framework 1 of 4</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            R-I-C-E.
          </h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Empat huruf. Hafalkan. Pakai setiap kali membuat prompt.</p>
        </div>

        <div className="flex justify-center gap-5 mb-10">
          {rice.map(r => {
            const isActive = active === r.letter;
            return (
              <button
                key={r.letter}
                onClick={() => setActive(r.letter)}
                className="flex flex-col items-center justify-center rounded-3xl border-2 transition-all duration-500"
                style={{
                  width: isActive ? '150px' : '120px',
                  height: isActive ? '150px' : '120px',
                  borderColor: r.color,
                  backgroundColor: isActive ? r.color : 'white',
                  color: isActive ? 'white' : r.color,
                  boxShadow: isActive ? `0 16px 32px ${r.color}40` : 'none',
                }}
              >
                <span className="text-7xl font-black tracking-tighter leading-none">{r.letter}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-2">{r.word}</span>
              </button>
            );
          })}
        </div>

        <div key={current.letter} className="bg-white border-2 rounded-3xl p-8"
             style={{ borderColor: `${current.color}40`, animation: 'fadeSlide 0.4s ease' }}>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                 style={{ backgroundColor: current.color }}>
              <span className="text-5xl font-black text-white tracking-tighter">{current.letter}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">{current.word}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-4">{current.desc}</p>
              <div className="bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Contoh</p>
                <p className="font-mono text-sm text-gray-700">{current.example}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
RICEFramework.displayName = 'RICEFramework';
