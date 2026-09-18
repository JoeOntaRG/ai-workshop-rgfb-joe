import React, { useEffect, useState } from 'react';
import { Eye, Building2, FileLock, Cloud } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const items = [
  { Icon: Eye,      title: 'Asumsi: terlihat publik',  detail: 'Anggap setiap kalimat akan dibaca orang lain.' },
  { Icon: Building2,title: 'Pakai akun kerja',         detail: 'Bukan akun pribadi. Versi enterprise lebih aman.' },
  { Icon: FileLock, title: 'Redact dulu',              detail: 'Ganti nama customer & angka sensitif → [CLIENT].' },
  { Icon: Cloud,    title: 'Cek "history off"',        detail: 'Matikan training data sharing di settings.' },
];

export default function PrivacyChecklist() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    items.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 160));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Privacy · Checklist</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Sebelum tekan Enter.</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map(({ Icon, title, detail }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-16px)',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-black text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
PrivacyChecklist.displayName = 'PrivacyChecklist';
