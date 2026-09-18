import React, { useEffect, useState } from 'react';
import { Copyright, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ACCENT } from '../../../theme';

const rules = [
  { ok: false, text: 'Generate "logo seperti Cisco" untuk pakai komersial.' },
  { ok: false, text: 'Visual berisi nama merek lain (APC, Schneider).' },
  { ok: true,  text: 'Visual generik produk hardware untuk landing page sendiri.' },
  { ok: true,  text: 'Copy marketing original yang ditulis ulang oleh AI.' },
];

export default function IPCopyright() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    rules.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>IP & Copyright</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Punya siapa output AI?</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Aturannya: jangan tiru merek, jangan klaim karya orang lain.</p>
        </div>

        <div className="flex flex-col gap-3">
          {rules.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl border-2 bg-white transition-all duration-400"
              style={{
                borderColor: r.ok ? '#bbf7d0' : '#fecaca',
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              {r.ok ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
              )}
              <p className="text-sm font-medium text-gray-700 flex-1">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500">
          <Copyright className="w-3.5 h-3.5" />
          <span>Setiap output AI tetap perlu review legal sebelum publikasi komersial.</span>
        </div>
      </div>
    </div>
  );
}
IPCopyright.displayName = 'IPCopyright';
