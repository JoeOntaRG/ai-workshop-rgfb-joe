import React, { useEffect, useState } from 'react';
import { Film, Sparkles } from 'lucide-react';

const COLOR = '#ec4899';

const SAMPLE_PROMPT = 'Cinematic 6-second product video for a KAO Indonesia consumer care product, clear product close-up, everyday use moment, soft studio lighting, clean brand-safe composition';
const VIDEO_SRC = '/day1-product-closeup.mp4';

export default function VideoModel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[55%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: COLOR }}>
            AI Demystified · 3 of 5
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: COLOR }}>
              <Film className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Text-to-Video.
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Klip pendek dari deskripsi teks. Demo produk, intro launching, atau ad TikTok dalam hitungan menit — tanpa shooting.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Populer</span>
            {['Google Flow', 'Sora', 'Runway Gen-3', 'Veo', 'Kling'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${COLOR}40`, color: COLOR }}>
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Prompt</p>
            <p className="text-sm text-gray-700 leading-relaxed font-mono">
              {SAMPLE_PROMPT}
            </p>
          </div>
        </div>

        <div className={`w-full md:w-[45%] flex justify-center transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <div className="bg-white border-2 rounded-2xl overflow-hidden shadow-xl w-fit"
               style={{ borderColor: `${COLOR}30` }}>
            <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-200">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 text-[10px] font-mono text-gray-400">labs.google/flow</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="relative w-[260px] aspect-[9/16] rounded-xl overflow-hidden bg-black">
                <video
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 font-mono pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Dibuat dalam 38 detik
                </div>
                <span>4 variasi</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
VideoModel.displayName = 'VideoModel';
