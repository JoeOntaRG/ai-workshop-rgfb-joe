import React, { useEffect, useState } from 'react';
import { ClipboardList, History, FileSignature } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const items = [
  { Icon: ClipboardList, label: 'Log prompt',        detail: 'Simpan input + output yang dipakai untuk kerja.' },
  { Icon: History,       label: 'Trail keputusan',   detail: 'Catat: AI sarankan X, human approve / tolak, alasan.' },
  { Icon: FileSignature, label: 'Disclaimer output', detail: '"Disusun dengan bantuan AI, diverifikasi [nama]".' },
];

export default function AuditTrail() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    items.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Akuntabilitas</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Audit Trail.</h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {items.map(({ Icon, label, detail }, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-black text-gray-900 mb-1">{label}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
AuditTrail.displayName = 'AuditTrail';
