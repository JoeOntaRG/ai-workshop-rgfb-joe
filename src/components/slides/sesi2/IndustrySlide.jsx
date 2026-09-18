import React, { useEffect, useState } from 'react';
import { ACCENT_BORDER } from '../../../theme';

/**
 * IndustrySlide — visual-first one-pager for a single industry.
 * Big hero media on the right (image or video), 3 short example bullets on the left.
 */
export default function IndustrySlide({
  index,
  Icon,
  industry,
  headline,
  color,
  media,           // { type: 'image' | 'video', src, poster? }
  caption,
  examples,        // [{ title, desc }]
}) {
  const compact = examples.length > 3;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[44%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Industri · {index} dari 6
          </p>

          <div className="flex items-center gap-4">
            {Icon && (
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: color }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
            )}
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              {industry}
            </h2>
          </div>

          {headline && (
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {headline}
            </p>
          )}

          <div className={`flex flex-col ${compact ? 'gap-3 mt-1 pt-3' : 'gap-4 mt-2 pt-4'} border-t border-gray-100`}>
            {examples.map((ex, i) => (
              <div key={i} className={`flex items-start ${compact ? 'gap-3.5' : 'gap-4'}`}>
                <span className={`${compact ? 'text-xl w-6' : 'text-2xl w-6'} font-black flex-shrink-0 leading-none`} style={{ color }}>
                  {i + 1}
                </span>
                <div className="flex-1 -mt-0.5">
                  <p className={`${compact ? 'text-[16px]' : 'text-base'} font-bold text-gray-900 leading-snug ${ex.desc ? 'mb-0.5' : ''}`}>{ex.title}</p>
                  {ex.desc && (
                    <p className={`${compact ? 'text-[14px]' : 'text-sm'} text-gray-500 font-medium leading-snug`}>{ex.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-full md:w-[56%] transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-2 shadow-2xl"
               style={{ borderColor: ACCENT_BORDER }}>
            {media?.type === 'video' ? (
              <video
                src={media.src}
                poster={media.poster}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media?.src}
                alt={industry}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(industry)}&size=600&background=${color.replace('#','')}&color=fff&font-size=0.18`;
                }}
              />
            )}

            {caption && (
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-0.5">Di lapangan</p>
                <p className="text-sm font-medium text-white leading-snug">{caption}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
IndustrySlide.displayName = 'IndustrySlide';
