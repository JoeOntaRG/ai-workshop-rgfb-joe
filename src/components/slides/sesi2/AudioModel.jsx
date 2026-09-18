import React, { useEffect, useState } from 'react';
import { Music } from 'lucide-react';

const COLOR = '#10b981';
const AUDIO_SRC = '/day1-audio-roger.mp3';

export default function AudioModel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[40%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: COLOR }}>
            AI Demystified · 4 of 5
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: COLOR }}>
              <Music className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Audio / Music.
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Voice-over, jingle, dan transkrip. Buat narasi iklan produk dalam hitungan detik tanpa booking studio.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Populer</span>
            {['ElevenLabs', 'Suno', 'Whisper', 'Murf'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${COLOR}40`, color: COLOR }}>
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Cocok untuk</p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Voice-over iklan produk · Jingle promo · Narasi video training · Transkrip meeting distributor · Dubbing multi-bahasa
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
              <span className="ml-3 text-[10px] font-mono text-gray-400">elevenlabs.io</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Script</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "Temukan manfaat produk KAO Indonesia untuk rutinitas sehari-hari, dengan informasi yang jelas dan mudah dipahami."
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-5 space-y-3">
                <audio
                  src={AUDIO_SRC}
                  controls
                  preload="metadata"
                  className="w-full"
                />
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Voice:</span>
                  <span className="text-white">Indonesia · Perempuan · Hangat</span>
                </div>
              </div>

              <p className="text-xs text-center text-gray-400 font-mono">
                Dibuat dalam 4 detik
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
AudioModel.displayName = 'AudioModel';
