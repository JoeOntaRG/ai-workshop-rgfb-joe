import React, { useEffect, useState } from 'react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const rows = [
  { task: 'Ide & draft cepat',             best: 'ChatGPT',       why: 'Fleksibel' },
  { task: 'Analisis dokumen',              best: 'Claude',        why: 'Rapi' },
  { task: 'Google Workspace',              best: 'Gemini',        why: 'Terhubung' },
  { task: 'Q&A dari sumber',               best: 'NotebookLM',    why: 'Berbasis dokumen' },
  { task: 'Deck dari outline',             best: 'Gamma',         why: 'Cepat jadi slide' },
  { task: 'Desain promosi',                best: 'Canva AI',      why: 'Visual siap pakai' },
  { task: 'Voiceover',                     best: 'ElevenLabs',    why: 'Audio jelas' },
  { task: 'Edit video',                    best: 'VEED',          why: 'Cepat publish' },
  { task: 'Mockup UI',                     best: 'Google Stitch', why: 'Prompt ke layout' },
  { task: 'Ide kampanye',                  best: 'Pomelli',       why: 'Brand & campaign' },
];

export default function ToolPickerMatrix() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    rows.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 100 + i * 70));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Tool Picker</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Kapan pakai apa?</h2>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: ACCENT_BORDER }}>
          <div className="grid grid-cols-[1.4fr_0.8fr_1fr] bg-gray-50 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <span>Tugas</span>
            <span>Tool Terbaik</span>
            <span>Kenapa</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_0.8fr_1fr] px-6 py-2.5 border-t items-center transition-all duration-400"
              style={{
                borderColor: '#f1f5f9',
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <span className="text-sm font-bold text-gray-800">{r.task}</span>
              <span className="text-sm font-black" style={{ color: ACCENT }}>{r.best}</span>
              <span className="text-sm text-gray-500 font-medium">{r.why}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ToolPickerMatrix.displayName = 'ToolPickerMatrix';
