import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';
import { ACCENT } from '../../../theme';

const dont = [
  'Data customer (nama, no HP, email)',
  'Harga partner & margin distributor',
  'NDA / kontrak yang belum publik',
  'Kredensial sistem internal',
];

const ok = [
  'Spec produk yang sudah publik',
  'Artikel marketing draft',
  'Pertanyaan umum / brainstorm',
  'Dokumen dengan PII di-redact',
];

export default function DataPrivacy() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Risiko #2</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Privasi Data.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Apa yang boleh dan tidak boleh masuk ke prompt.</p>
        </div>

        <div className={`grid grid-cols-2 gap-5 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#fecaca' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-base font-black text-rose-600">Jangan</span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {dont.map((d, i) => (
                <li key={i} className="text-sm font-medium text-gray-700 leading-snug pl-3 border-l-2 border-rose-200">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: '#bbf7d0' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-base font-black text-emerald-600">Aman</span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {ok.map((d, i) => (
                <li key={i} className="text-sm font-medium text-gray-700 leading-snug pl-3 border-l-2 border-emerald-200">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
DataPrivacy.displayName = 'DataPrivacy';
