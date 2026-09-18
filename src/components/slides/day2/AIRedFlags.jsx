import React, { useEffect, useState } from 'react';
import { Ban } from 'lucide-react';
import { ACCENT } from '../../../theme';

const redFlags = [
  { tag: 'Hukum',     text: 'Memberi advice hukum / kontrak final.' },
  { tag: 'Medis',     text: 'Diagnosa atau resep ke karyawan / customer.' },
  { tag: 'Keuangan',  text: 'Approval transaksi atau pencairan dana.' },
  { tag: 'HR Kritis', text: 'Keputusan terminasi atau promosi otomatis.' },
  { tag: 'Keamanan',  text: 'Akses ke sistem produksi tanpa review.' },
  { tag: 'Krisis',    text: 'Komunikasi publik saat insiden besar.' },
];

export default function AIRedFlags() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    redFlags.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 120 + i * 100));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Red Flags</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Kapan AI tidak dipakai.</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {redFlags.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: '#fecaca',
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-rose-500 flex items-center justify-center flex-shrink-0">
                <Ban className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-0.5">{f.tag}</p>
                <p className="text-sm font-bold text-gray-800 leading-snug">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
AIRedFlags.displayName = 'AIRedFlags';
