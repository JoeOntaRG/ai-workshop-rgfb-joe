import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { ACCENT } from '../../../theme';

export default function Hallucination() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Risiko #1</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Halusinasi.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">AI mengarang fakta — terlihat meyakinkan.</p>
        </div>

        <div className={`grid grid-cols-2 gap-5 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#fecaca' }}>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-black uppercase tracking-widest text-rose-500">Salah</span>
            </div>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              "Produk contoh mendukung klaim manfaat yang tidak tercantum di product brief."
            </p>
            <p className="text-xs text-gray-400 mt-3 font-mono">Angka karangan. Tidak ada di datasheet.</p>
          </div>

          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#bbf7d0' }}>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600">Aman</span>
            </div>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              Lampirkan datasheet PDF. AI hanya mengutip dari sumber, tidak menebak.
            </p>
            <p className="text-xs text-gray-400 mt-3 font-mono">"Grounded" — berdasar dokumen, bukan ingatan model.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Hallucination.displayName = 'Hallucination';
