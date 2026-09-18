import React, { useEffect, useState } from 'react';
import { Type } from 'lucide-react';
import { ChatMockup } from '../UseCaseTemplate';

const COLOR = '#6366f1';

export default function TextModel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[40%] flex flex-col gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: COLOR }}>
            AI Demystified · 1 of 5
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: COLOR }}>
              <Type className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Text-to-Text.
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Input teks → output teks atau kode. Kategori paling general-purpose, dipakai dari komunikasi partner sampai analisis data konsumen.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Populer</span>
            {['ChatGPT', 'Claude', 'Gemini', 'Perplexity'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-bold border bg-white"
                    style={{ borderColor: `${COLOR}40`, color: COLOR }}>
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Cocok untuk</p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Email partner · Ringkas meeting · Product brief · Analisis survei · Konten campaign · Script & kode otomasi
            </p>
          </div>
        </div>

        <div className={`w-full md:w-[60%] transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <ChatMockup
            color={COLOR}
            prompt="Ringkas notulen meeting 2 jam dengan tim komersial ini menjadi action items, owner, dan deadline."
            response={`**Ringkasan**: Review kuartalan dengan 3 partner utama — fokus pada performa kategori personal care dan household care di channel retail.

**Action items**:
1. Andi — kirim revisi product brief ke partner Jumat
2. Sarah — siapkan forecast Q3 untuk kategori personal care Senin
3. Rina — koordinasi materi training penggunaan produk untuk reseller minggu depan`}
          />
        </div>

      </div>
    </div>
  );
}
TextModel.displayName = 'TextModel';
