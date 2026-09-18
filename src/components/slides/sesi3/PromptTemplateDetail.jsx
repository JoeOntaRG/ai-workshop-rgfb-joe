import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ACCENT } from '../../../theme';
import { MARK_COLORS } from './promptMarks';

export default function PromptTemplateDetail({
  index,       // 1
  total,       // 6
  cat,         // "HR"
  title,       // "Tulis Job Description"
  rawText,     // string yang dicopy ke clipboard (sama dengan apa yang ditampilkan, minus highlight)
  children,    // JSX prompt utuh dengan <Mark> wrappers
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(rawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        {/* Header */}
        <div className="mb-5 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] mb-2" style={{ color: ACCENT }}>
              Template Prompt · {index} / {total}
            </p>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md"
                style={{ backgroundColor: '#eef2ff', color: '#3730a3' }}
              >
                {cat}
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 leading-none">
                {title}
              </h2>
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              copied
                ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                : 'bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Tersalin' : 'Copy prompt'}
          </button>
        </div>

        {/* Prompt paper */}
        <div className="relative bg-white border-2 border-gray-200 rounded-3xl px-10 pt-12 pb-8 shadow-sm">
          <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Prompt
          </div>
          <div className="absolute top-4 right-6 text-[10px] font-mono text-gray-400">
            Ganti [TEKS] dengan info Anda
          </div>

          <div className="text-[16px] text-gray-800 leading-[2.6] font-medium whitespace-pre-line">
            {children}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Legenda</span>
          {Object.entries(MARK_COLORS).map(([k, c]) => (
            <div key={k} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.strong }} />
              <span className="text-xs font-bold text-gray-600">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
PromptTemplateDetail.displayName = 'PromptTemplateDetail';
