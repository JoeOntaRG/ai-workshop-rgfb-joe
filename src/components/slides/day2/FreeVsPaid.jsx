import React, { useEffect, useState } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const rows = [
  { tool: 'ChatGPT',       free: 'Ada batas harian',       paid: 'Pro / Team' },
  { tool: 'Claude',        free: 'Ada batas harian',       paid: 'Pro / Team' },
  { tool: 'Gemini',        free: 'Akun Google',            paid: 'Workspace / Advanced' },
  { tool: 'NotebookLM',    free: 'Akun Google',            paid: 'Opsi Workspace' },
  { tool: 'Gamma',         free: 'Credit terbatas',        paid: 'Pro / Team' },
  { tool: 'Canva AI',      free: 'Fitur dasar',            paid: 'Pro / Teams' },
  { tool: 'ElevenLabs',    free: 'Credit terbatas',        paid: 'Creator / Team' },
  { tool: 'VEED',          free: 'Export terbatas',        paid: 'Pro / Business' },
  { tool: 'Google Stitch', free: 'Eksperimen / akses web', paid: 'Tergantung akses' },
  { tool: 'Pomelli',       free: 'Eksperimen / akses web', paid: 'Tergantung akses' },
];

export default function FreeVsPaid() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    rows.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 80 + i * 80));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Pricing</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Akses tools.</h2>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: ACCENT_BORDER }}>
          <div className="grid grid-cols-[150px_1fr_1.2fr] bg-gray-50 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <span>Tool</span>
            <span>Free Tier</span>
            <span>Paid</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[150px_1fr_1.2fr] px-6 py-2.5 border-t items-center transition-all duration-400"
              style={{
                borderColor: '#f1f5f9',
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <span className="text-sm font-black text-gray-900">{r.tool}</span>
              <span className="text-sm text-gray-500 font-medium">{r.free}</span>
              <span className="text-sm font-bold" style={{ color: ACCENT }}>{r.paid}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
FreeVsPaid.displayName = 'FreeVsPaid';
