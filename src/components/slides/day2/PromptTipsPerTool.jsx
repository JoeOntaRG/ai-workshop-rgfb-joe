import React, { useEffect, useState } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const tips = [
  { tool: 'ChatGPT',       tip: 'Beri konteks, tujuan, dan format output.' },
  { tool: 'Claude',        tip: 'Masukkan dokumen dan minta struktur singkat.' },
  { tool: 'Gemini',        tip: 'Hubungkan dengan Docs, Sheets, atau Gmail.' },
  { tool: 'NotebookLM',    tip: 'Upload sumber, lalu tanya dari dokumen itu.' },
  { tool: 'Gamma',         tip: 'Mulai dari outline 5-7 poin.' },
  { tool: 'Canva AI',      tip: 'Tentukan ukuran, brand, dan gaya visual.' },
  { tool: 'ElevenLabs',    tip: 'Tulis script pendek dan jelas.' },
  { tool: 'VEED',          tip: 'Siapkan video, subtitle, dan voiceover.' },
  { tool: 'Google Stitch', tip: 'Jelaskan layar, komponen, dan user flow.' },
  { tool: 'Pomelli',       tip: 'Mulai dari produk, audiens, dan objektif.' },
];

export default function PromptTipsPerTool() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    tips.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 80 + i * 70));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Pro Tips</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">1 prompt cue.</h2>
        </div>

        <div className="flex flex-col gap-2">
          {tips.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-[150px_1fr] gap-3 p-3 rounded-xl border bg-white transition-all duration-400"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <span className="text-base font-black" style={{ color: ACCENT }}>{t.tool}</span>
              <span className="text-sm text-gray-700 font-medium leading-relaxed">{t.tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
PromptTipsPerTool.displayName = 'PromptTipsPerTool';
