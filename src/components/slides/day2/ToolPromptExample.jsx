import React, { useEffect, useState } from 'react';
import { Check, Copy, MessageSquareText, Target } from 'lucide-react';

export default function ToolPromptExample({
  tool,
  color,
  Icon,
  useCase,
  output,
  chips = [],
  prompt,
}) {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => { setTimeout(() => setShown(true), 100); }, []);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color }}>
            {tool} · Prompt Example
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Prompt siap copy.
          </h2>
        </div>

        <div className="grid grid-cols-[0.86fr_1.14fr] gap-5 items-stretch">
          <div className={`flex flex-col gap-4 transition-all duration-700 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
            <div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: `${color}30` }}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  {Icon ? <Icon className="w-6 h-6 text-white" /> : <MessageSquareText className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="text-lg font-black text-gray-900">{useCase}</p>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mt-1">{output}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: `${color}30` }}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5" style={{ color }} />
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
                  Prompt ingredients
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span key={chip} className="rounded-lg border px-3 py-2 text-sm font-black"
                        style={{ borderColor: `${color}40`, color }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`rounded-2xl border-2 bg-white p-5 shadow-sm flex flex-col transition-all duration-700 delay-150 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
               style={{ borderColor: `${color}30` }}>
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
                Prompt siap copy
              </p>
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
            </div>

            <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 px-5 py-4 overflow-hidden">
              <p className="font-mono text-[11px] leading-[1.43] text-gray-700 whitespace-pre-line">
                {prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ToolPromptExample.displayName = 'ToolPromptExample';
