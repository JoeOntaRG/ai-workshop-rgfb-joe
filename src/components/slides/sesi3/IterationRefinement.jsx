import React, { useState, useEffect } from 'react';
import { ArrowDown, RotateCcw } from 'lucide-react';
import { ACCENT, ACCENT_BG } from '../../../theme';

const iterations = [
  { num: 1, prompt: '"Buat tagline untuk produk kopi kami."',                                      verdict: 'Generik. Lima baris yang tidak berkesan.', color: '#ef4444' },
  { num: 2, prompt: '"Buat 5 tagline untuk cold brew premium, Gen-Z Jakarta."',                    verdict: 'Lebih relevan. Masih datar.',              color: '#f59e0b' },
  { num: 3, prompt: '"Sebagai copywriter Gen-Z, 5 tagline cold brew, bold + playful, ≤6 kata."',   verdict: 'Lebih tajam. Hampir siap pakai.',          color: '#0ea5e9' },
  { num: 4, prompt: '"Ambil opsi #3 (\'Bitter days, sweet escapes\'), beri 5 varian lebih bold."',  verdict: 'Final. Siap publish.',                     color: '#10b981' },
];

export default function IterationRefinement() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    iterations.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 280));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>The Most Important Skill</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            First prompts are <span style={{ color: ACCENT }}>rarely final</span>.
          </h2>
          <p className="text-lg text-gray-500 font-medium mt-3">
            3–4 iterasi itu normal. Setiap iterasi menambah spesifisitas.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {iterations.map((it, i) => (
            <React.Fragment key={it.num}>
              <div
                className="flex items-center gap-5 bg-white border-2 rounded-2xl px-6 py-4 transition-all duration-500"
                style={{
                  borderColor: `${it.color}40`,
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-white text-xl"
                     style={{ backgroundColor: it.color }}>
                  #{it.num}
                </div>
                <div className="flex-1 grid grid-cols-[1.4fr_1fr] gap-4 items-center">
                  <p className="font-mono text-sm text-gray-700 leading-snug">{it.prompt}</p>
                  <p className="text-sm font-bold text-gray-900">{it.verdict}</p>
                </div>
              </div>
              {i < iterations.length - 1 && (
                <div className="flex justify-center my-0">
                  <ArrowDown className="w-4 h-4 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-2 px-6 py-4 flex items-center gap-4"
             style={{ borderColor: '#e5e7eb', backgroundColor: ACCENT_BG }}>
          <RotateCcw className="w-6 h-6 text-indigo-700 flex-shrink-0" />
          <p className="text-base text-gray-800 leading-relaxed font-medium">
            <strong className="text-indigo-700">Rule of thumb:</strong> jika output pertama mengecewakan, perbaiki prompt-nya, bukan menyalahkan model.
          </p>
        </div>
      </div>
    </div>
  );
}
IterationRefinement.displayName = 'IterationRefinement';
