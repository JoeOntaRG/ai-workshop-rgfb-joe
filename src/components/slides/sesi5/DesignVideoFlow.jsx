import React from 'react';
import { ACCENT, ACCENT_BORDER, ACCENT_DARK } from '../../../theme';

const flowVideo = 'https://cdn-web.ruangguru.com/file-uploader/5b63ca71-c17a-45fa-8312-9d32b0c3233a.mp4';

export default function DesignVideoFlow() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-10 items-center">

        <div className="w-full md:w-[42%] flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT_DARK }}>
            Design · Use Case 6 of 6
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Video Cinematic<br />dengan Google Flow.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Satu prompt teks jadi video sinematik berkualitas tinggi — lighting, kamera, dan gerak diatur AI dalam hitungan menit.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Tools</span>
            {['Google Flow', 'Veo 3'].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-bold border bg-white"
                    style={{ borderColor: `${ACCENT}40`, color: ACCENT_DARK }}>
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://labs.google/flow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-white hover:shadow-md transition-all mt-1"
            style={{ borderColor: `${ACCENT}40`, color: ACCENT_DARK }}
          >
            Buka Google Flow →
          </a>
        </div>

        <div className="w-full md:w-[58%] flex items-center justify-center">
          <div
            className="relative rounded-2xl overflow-hidden border-2 shadow-2xl bg-black"
            style={{ borderColor: ACCENT_BORDER, aspectRatio: '9 / 16', height: '560px' }}
          >
            <video
              src={flowVideo}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-sm pointer-events-none">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Google Flow · Veo · 9:16</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
DesignVideoFlow.displayName = 'DesignVideoFlow';
