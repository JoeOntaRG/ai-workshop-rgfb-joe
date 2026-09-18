import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_DARK } from '../../../theme';

export default function Closing() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 150); }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50 flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'linear-gradient(#4338ca 1px, transparent 1px), linear-gradient(90deg, #4338ca 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute right-16 top-16 h-[40%] w-[40%] rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[35%] w-[35%] bg-gradient-to-tr from-sky-100/70 to-transparent" />

      <div className={`relative z-10 max-w-4xl mx-auto px-12 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-sm mb-8">
          <Sparkles className="w-3.5 h-3.5" style={{ color: ACCENT }} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: ACCENT_DARK }}>Day 1 Complete</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.02] mb-8">
          Thank you.<br />
          <span style={{ color: ACCENT }}>See you tomorrow.</span>
        </h1>

        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Satu task. Satu prompt. Coba malam ini atau hal pertama besok pagi.
        </p>

        <div className="mt-16 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          KAO Indonesia · AI Literacy Workshop
        </div>
      </div>
    </div>
  );
}
Closing.displayName = 'Closing';
