import React, { useEffect, useState } from 'react';
import { Bot, User, ArrowRight, CheckCheck } from 'lucide-react';
import { ACCENT } from '../../../theme';

export default function HumanInTheLoop() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Prinsip Inti</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Human-in-the-Loop.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">AI mempercepat draft. Manusia memutuskan.</p>
        </div>

        <div className={`flex items-center justify-center gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ backgroundColor: '#e0e7ff' }}>
              <Bot className="w-10 h-10" style={{ color: ACCENT }} />
            </div>
            <p className="text-base font-black text-gray-900">AI</p>
            <p className="text-xs text-gray-500 font-medium text-center max-w-[160px]">Draft cepat<br/>Eksplorasi opsi</p>
          </div>

          <ArrowRight className="w-8 h-8 text-gray-300" />

          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
              <User className="w-10 h-10 text-white" />
            </div>
            <p className="text-base font-black text-gray-900">Manusia</p>
            <p className="text-xs text-gray-500 font-medium text-center max-w-[160px]">Validasi fakta<br/>Ambil keputusan</p>
          </div>

          <ArrowRight className="w-8 h-8 text-gray-300" />

          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-emerald-500">
              <CheckCheck className="w-10 h-10 text-white" />
            </div>
            <p className="text-base font-black text-gray-900">Output</p>
            <p className="text-xs text-gray-500 font-medium text-center max-w-[160px]">Akuntabel<br/>Siap dikirim</p>
          </div>
        </div>
      </div>
    </div>
  );
}
HumanInTheLoop.displayName = 'HumanInTheLoop';
