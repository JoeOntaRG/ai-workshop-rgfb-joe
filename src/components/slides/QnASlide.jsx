import React, { useEffect, useState } from 'react';
import { MessageCircle, Hand } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../theme';

/**
 * QnASlide — open floor between modules.
 * Props:
 *   moduleName: name of the module just finished
 *   topics:     array of strings (key concepts just covered)
 *   duration:   "10 minutes" — for trainer reference
 */
export default function QnASlide({ moduleName = '', topics = [], duration = '10 menit' }) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setPulse(p => !p), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] opacity-15 pointer-events-none"
           style={{ backgroundColor: ACCENT }} />

      <div className="w-full max-w-5xl mx-auto px-10 relative z-10 grid grid-cols-[1fr_1fr] gap-14 items-center">

        <div className="flex flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Open Floor · {duration}
          </p>
          <h2 className="text-7xl md:text-[7rem] font-black tracking-tighter text-gray-900 leading-[0.95]">
            Questions?
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-md">
            Ada yang ingin diklarifikasi dari {moduleName ? <strong className="text-gray-900">{moduleName}</strong> : 'modul sebelumnya'}?
          </p>

          <div className="flex items-center gap-3 mt-2">
            <Hand className="w-5 h-5" style={{ color: ACCENT_DARK }} />
            <span className="text-sm font-bold text-gray-600">Silakan angkat tangan kapan saja.</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full border-2 transition-all duration-1000"
                 style={{
                   borderColor: ACCENT_BORDER,
                   transform: pulse ? 'scale(1.05)' : 'scale(0.95)',
                   opacity: pulse ? 0.6 : 0.2,
                 }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-52 h-52 rounded-full border-2"
                 style={{ borderColor: ACCENT_BORDER, opacity: 0.5 }} />
          </div>
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
               style={{ backgroundColor: ACCENT }}>
            <MessageCircle className="w-14 h-14 text-white" />
          </div>
        </div>

      </div>

      {topics.length > 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-2">Baru dibahas</span>
          {topics.map((t, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold border"
                  style={{ borderColor: ACCENT_BORDER, color: ACCENT_DARK, backgroundColor: ACCENT_BG }}>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
QnASlide.displayName = 'QnASlide';
