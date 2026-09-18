import React, { useEffect, useState } from 'react';
import { Scale, AlertTriangle } from 'lucide-react';
import { ACCENT } from '../../../theme';

export default function AIBias() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Risiko #3</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Bias.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Model belajar dari data — datanya tidak netral.</p>
        </div>

        <div className={`grid grid-cols-2 gap-5 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#fde68a' }}>
            <AlertTriangle className="w-6 h-6 text-amber-500 mb-3" />
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Contoh</p>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              Screening CV otomatis menolak kandidat dari kampus tertentu — bukan karena skill, tapi karena pola di data training.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#c7d2fe' }}>
            <Scale className="w-6 h-6 mb-3" style={{ color: ACCENT }} />
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Mitigasi</p>
            <ul className="text-sm text-gray-700 font-medium leading-relaxed space-y-1.5">
              <li>· Review keputusan kritikal manual</li>
              <li>· Diversifikasi data input</li>
              <li>· Audit hasil per kohort</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
AIBias.displayName = 'AIBias';
