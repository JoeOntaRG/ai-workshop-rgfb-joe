import React, { useEffect, useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

const COLOR = '#0ea5e9';

const SAMPLE_PROMPT = 'Consumer care product banner, clean bathroom shelf, soft natural lighting, fresh color palette from the product brief, tagline area on the right, premium catalog style';

export default function ImageModel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[40%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: COLOR }}>
            AI Demystified · 2 of 5
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: COLOR }}>
              <ImageIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Text-to-Image.
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Generate visual dari teks — product banner, packaging mockup, sampai aset kampanye distributor.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Populer</span>
            {['Midjourney', 'DALL·E 3', 'Firefly', 'Stable Diffusion'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${COLOR}40`, color: COLOR }}>
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Cocok untuk</p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Banner produk · Social tile launching · Mockup packaging · Visual katalog · Aset training reseller
            </p>
          </div>
        </div>

        <div className={`w-full md:w-[60%] transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <div className="bg-white border-2 rounded-2xl overflow-hidden shadow-xl"
               style={{ borderColor: `${COLOR}30` }}>
            <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-200">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 text-[10px] font-mono text-gray-400">midjourney.com</span>
            </div>
            <div className="p-5 space-y-4">
              <div className="bg-gray-100 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Prompt</p>
                <p className="text-xs text-gray-700 leading-relaxed font-mono">{SAMPLE_PROMPT}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400',
                  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
                  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
                  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400',
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-bold">
                      v{i + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-mono pt-2 border-t border-gray-100">
                <Sparkles className="w-3 h-3" />
                Dibuat dalam 12 detik
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
ImageModel.displayName = 'ImageModel';
