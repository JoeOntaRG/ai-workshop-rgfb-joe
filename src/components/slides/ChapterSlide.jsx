import React from 'react';
import { ACCENT } from '../../theme';

export const ChapterSlide = ({ number, chapter, title, subtitle, time }) => {
  return (
    <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{
          width: '600px', height: '600px',
          background: `radial-gradient(circle, ${ACCENT} 0%, rgba(67,56,202,0.4) 40%, transparent 70%)`,
          top: '50%', left: '50%', transform: 'translate(-60%, -60%)',
        }}
      />
      <div
        className="absolute rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          width: '400px', height: '400px',
          background: `radial-gradient(circle, rgba(14,165,233,0.6) 0%, transparent 70%)`,
          bottom: '10%', right: '5%',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-12 text-center">
        <div className="w-fit inline-flex items-center gap-3 mb-8 mx-auto">
          {number && (
            <span className="text-xs font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border"
              style={{ color: ACCENT, borderColor: `rgba(99,102,241,0.35)` }}>
              Sesi {number}
            </span>
          )}
          {chapter && (
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">
              {chapter}
            </span>
          )}
          {time && (
            <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
              · {time}
            </span>
          )}
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.02] mb-6">
          {title}
        </h2>

        {subtitle && (
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <div className="h-[2px] w-16 rounded-full" style={{ backgroundColor: `rgba(99,102,241,0.55)` }} />
        </div>
      </div>
    </div>
  );
};
