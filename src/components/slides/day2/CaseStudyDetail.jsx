import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * CaseStudyDetail — single case briefing.
 * Minimal text: number, title, situation, deliverable, suggested tools, prompt.
 */
export default function CaseStudyDetail({
  num, total = 10, color, Icon, title,
  situation,        // 1 line
  deliverable,      // 1 line
  tools = [],
  prompt,
}) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const handleCopy = () => {
    if (!prompt || !navigator.clipboard) return;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className={`mb-7 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color }}>
            Practice · {num} of {total}
          </p>
          <div className="flex items-center gap-5">
            {Icon && (
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: color }}>
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.86fr_1.14fr] gap-5 items-stretch">
          <div className="flex flex-col gap-4">
            <div className="p-5 rounded-2xl border-2 bg-white" style={{ borderColor: `${color}30` }}>
              <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color }}>Situasi</p>
              <p className="text-base text-gray-700 font-medium leading-relaxed">{situation}</p>
            </div>

            <div className="p-5 rounded-2xl border-2 bg-white" style={{ borderColor: `${color}30` }}>
              <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color }}>Deliverable</p>
              <p className="text-base text-gray-700 font-medium leading-relaxed">{deliverable}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Tools</span>
              {tools.map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                      style={{ borderColor: `${color}40`, color }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl border-2 bg-white shadow-sm flex flex-col min-h-[315px]"
               style={{ borderColor: `${color}30` }}>
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
                Prompt siap copy
              </p>
              {prompt && (
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
                    copied
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                      : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Tersalin' : 'Copy'}
                </button>
              )}
            </div>

            <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 px-5 py-4 overflow-hidden">
              <p className="font-mono text-[12.5px] leading-[1.64] text-gray-700 whitespace-pre-line">
                {prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
CaseStudyDetail.displayName = 'CaseStudyDetail';
