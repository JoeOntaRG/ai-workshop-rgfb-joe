import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ACCENT } from '../../../theme';

const flows = [
  {
    label: 'Product Launch',
    steps: [
      { tool: 'Pomelli',  what: 'Ide kampanye' },
      { tool: 'ChatGPT',  what: 'Draft copy' },
      { tool: 'Canva AI', what: 'Visual promo' },
      { tool: 'VEED',     what: 'Video singkat' },
    ],
  },
  {
    label: 'Partner Briefing',
    steps: [
      { tool: 'NotebookLM',    what: 'Sumber produk' },
      { tool: 'Claude',        what: 'Ringkasan' },
      { tool: 'Gamma',         what: 'Deck' },
      { tool: 'Google Stitch', what: 'Mockup portal' },
    ],
  },
];

export default function ToolCombo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Tool Chaining</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Tool chaining.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Output satu tool jadi input tool berikutnya.</p>
        </div>

        <div className={`flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {flows.map((flow, i) => (
            <div key={i} className="p-5 rounded-2xl border-2 bg-white" style={{ borderColor: '#c7d2fe' }}>
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{flow.label}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {flow.steps.map((s, j) => (
                  <React.Fragment key={j}>
                    <div className="flex flex-col items-start px-4 py-2.5 rounded-xl bg-indigo-50 border" style={{ borderColor: '#c7d2fe' }}>
                      <span className="text-sm font-black" style={{ color: ACCENT }}>{s.tool}</span>
                      <span className="text-xs text-gray-600 font-medium">{s.what}</span>
                    </div>
                    {j < flow.steps.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ToolCombo.displayName = 'ToolCombo';
