import React from 'react';
import { ACCENT_DARK } from '../../theme';

/**
 * SlideShell — consistent padded canvas with optional kicker / title / subtitle.
 * Use this to keep visual rhythm across all content slides.
 */
export function SlideShell({ kicker, title, subtitle, children, align = 'left', maxWidth = '6xl' }) {
  return (
    <div className="w-full h-full flex items-center justify-center px-12 py-10">
      <div className={`w-full max-w-${maxWidth} mx-auto flex flex-col ${align === 'center' ? 'items-center text-center' : ''}`}>
        {(kicker || title) && (
          <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
            {kicker && (
              <p className="text-[11px] font-black uppercase tracking-[0.28em] mb-3" style={{ color: ACCENT_DARK }}>
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export function Pill({ children, tone = 'indigo' }) {
  const tones = {
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    sky:    'bg-sky-50 text-sky-700 border-sky-200',
    emerald:'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber:  'bg-amber-50 text-amber-700 border-amber-200',
    rose:   'bg-rose-50 text-rose-700 border-rose-200',
    gray:   'bg-gray-100 text-gray-700 border-gray-200',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${tones[tone] || tones.indigo}`}>
      {children}
    </span>
  );
}
