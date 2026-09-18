import React, { useEffect, useState } from 'react';
import { Layers, Camera, Mic, Type as TypeIcon, ArrowRight, Sparkles } from 'lucide-react';

const COLOR = '#f59e0b';

export default function MultimodalModel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[40%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: COLOR }}>
            AI Demystified · 5 of 5
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: COLOR }}>
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Multimodal.
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Satu model — input apa saja (foto, suara, dokumen, video) → output apa saja. Cocok untuk diagnosa lapangan & support teknis.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Populer</span>
            {['GPT-4o', 'Gemini 2.5', 'Claude 4', 'Llama 4'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${COLOR}40`, color: COLOR }}>
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Cocok untuk</p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Foto perangkat rusak → langkah perbaikan · Suara mesin → diagnosa · Datasheet PDF + foto → spec singkat · Voice command real-time
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
              <span className="ml-3 text-[10px] font-mono text-gray-400">gemini.google.com</span>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                <div className="flex flex-col gap-1.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200">
                    <TypeIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-gray-200">
                    <Mic className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 w-12">Foto:</span>
                    <span className="text-xs text-gray-700 font-medium">product_label.jpg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 w-12">Teks:</span>
                    <span className="text-xs text-gray-700 font-medium italic">"Label terlihat kurang jelas. Apa informasi yang perlu diperbaiki?"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 w-12">Audio:</span>
                    <span className="text-xs text-gray-700 font-medium">beep_recording.m4a (4 detik)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="w-5 h-5" style={{ color: COLOR }} />
              </div>

              <div className="rounded-xl p-4 border-2" style={{ borderColor: `${COLOR}40`, backgroundColor: `${COLOR}08` }}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: COLOR }}>Diagnosa multimodal</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Berdasarkan foto label + konteks product brief, indikasi <strong>informasi manfaat belum cukup terbaca</strong>. Buat dua alternatif hierarchy label, lalu validasi keterbacaan dan pemahaman konsumen melalui user test.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-mono pt-2 border-t border-gray-100">
                <Sparkles className="w-3 h-3" />
                Satu model membaca 3 input sekaligus dalam 2 detik
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
MultimodalModel.displayName = 'MultimodalModel';
