import React, { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

export default function Day2Cover() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_0%,#eef2ff_50%,#f0f9ff_100%)]" />
      <div className="absolute inset-0 opacity-[0.10]"
        style={{ backgroundImage: 'linear-gradient(#4338ca 1px, transparent 1px), linear-gradient(90deg, #4338ca 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute right-16 top-20 h-[55%] w-[55%] rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[45%] w-[45%] bg-gradient-to-tl from-sky-100/70 to-transparent" />

      <div className={`relative z-10 grid h-full w-full grid-cols-[0.92fr_1.08fr] items-center gap-10 px-20 pb-24 pt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <section className="max-w-3xl">
          <div className="mb-10 inline-flex w-fit items-center gap-3 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] shadow-sm"
            style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_BG, color: ACCENT_DARK }}>
            <Layers className="h-3.5 w-3.5" />
            <span>Day 2 · KAO Indonesia</span>
          </div>

          <h1 className="text-[4.6rem] font-black leading-[0.95] tracking-tight text-gray-950">
            Market<br />
            Research,<br />
            Ethics<br />
            & <span style={{ color: ACCENT }}>Real-World</span><br />
            Application.
          </h1>

        </section>

        <aside className="relative flex min-h-[500px] items-center justify-center">
          <div className="absolute right-8 top-12 text-[16rem] font-black leading-none text-indigo-100/80">02</div>
          <div className="relative h-[360px] w-[360px] rounded-full border border-indigo-200/80 bg-white/20 backdrop-blur-sm">
            <div className="absolute inset-8 rounded-full border border-indigo-200/70" />
            <div className="absolute inset-20 rounded-full border border-indigo-200/60" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: ACCENT }} />
            <Layers className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
        </aside>
      </div>
    </div>
  );
}
Day2Cover.displayName = 'Day2Cover';
