import React, { useEffect, useState } from 'react';

/**
 * ToolShowcase — minimal-text single-tool slide.
 * Left: name + tagline + best-for chips + a practical example.
 * Right: large logo/mark on a colored panel.
 */
export default function ToolShowcase({
  index, total,
  name, color,
  tagline,           // one sentence
  bestFor = [],      // 3 short chips
  example,           // one short line
  Mark,              // lucide icon component for the right panel
  media,             // optional { type: 'image' | 'video', src, poster? }
  url,
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[48%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Tool · {index} of {total}
          </p>

          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-none">
            {name}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {bestFor.map((b, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${color}40`, color }}>
                {b}
              </span>
            ))}
          </div>

          {example && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                Contoh penggunaan
              </p>
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                {example}
              </p>
            </div>
          )}

          {url && (
            <p className="text-xs font-mono text-gray-400 mt-1">{url}</p>
          )}
        </div>

        <div className={`w-full md:w-[52%] transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden flex items-center justify-center"
               style={{ backgroundColor: `${color}10`, border: `2px solid ${color}30` }}>
            <div className="absolute inset-0 opacity-[0.06]"
                 style={{ backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
            {media?.type === 'video' ? (
              <video
                src={media.src}
                poster={media.poster}
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-full object-cover"
              />
            ) : media?.type === 'image' ? (
              <img
                src={media.src}
                alt={name}
                className="relative w-full h-full object-cover"
              />
            ) : Mark && (
              <div className="relative w-40 h-40 rounded-[2.5rem] flex items-center justify-center"
                   style={{ backgroundColor: color, boxShadow: `0 24px 60px ${color}50` }}>
                <Mark className="w-20 h-20 text-white" />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
ToolShowcase.displayName = 'ToolShowcase';
