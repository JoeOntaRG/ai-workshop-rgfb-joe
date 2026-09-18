import React from 'react';
import { ACCENT, ACCENT_BORDER, ACCENT_DARK } from '../../../theme';

const landscape = 'https://cdn-web.ruangguru.com/file-uploader/763b7f4a-6997-43c5-89be-8dfa48d284fb.mp4';

export default function DesignVideoGen() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-10 items-center">

        <div className="w-full md:w-[38%] flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT_DARK }}>
            Design · Use Case 5 of 6
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Generate Video<br />dengan AI.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Dari teks singkat ke video promosi siap publish — tanpa kamera, vendor, atau tim produksi.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Tools</span>
            {['Veo 3', 'Sora', 'Runway', 'Veed'].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-bold border bg-white"
                    style={{ borderColor: `${ACCENT}40`, color: ACCENT_DARK }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[62%] flex items-center justify-center">
          <div
            className="relative rounded-2xl overflow-hidden border-2 shadow-2xl bg-black w-full"
            style={{ borderColor: ACCENT_BORDER, aspectRatio: '16 / 9' }}
          >
            <video
              src={landscape}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-sm pointer-events-none">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Landscape · 16:9</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
DesignVideoGen.displayName = 'DesignVideoGen';
