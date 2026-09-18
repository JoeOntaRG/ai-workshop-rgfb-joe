import React, { useEffect, useState } from 'react';
import { Check, Copy, FileText, Presentation, Sparkles } from 'lucide-react';

const GAMMA_COLOR = '#a855f7';

const prompt = `Buat deck presentasi 8 slide untuk Q2 Business Review KAO Indonesia.

Audience:
- Management dan lead tim commercial/customer care
- Mereka butuh update singkat, jelas, dan action-oriented

Source/context:
- Revenue Q2 total [ISI DARI SOURCE], dengan perubahan [ISI DARI SOURCE]
- Margin [NAIK / TURUN] dari [ANGKA] ke [ANGKA]
- Performa channel: marketplace [ANGKA], modern trade [ANGKA], dan channel lain [ANGKA]
- Kategori produk dengan performa terbaik: [ISI DARI SOURCE]
- Customer inquiry atau complaint berubah dari [ANGKA] menjadi [ANGKA]
- Risiko dan batasan data: [ISI DARI SOURCE]
- Prioritas Q3: [ISI DARI SOURCE]

Struktur slide:
1. Executive summary
2. Revenue performance
3. Margin pressure
4. Channel performance
5. Product highlights
6. Support pain points
7. Q3 priorities
8. Decisions needed

Style:
- Corporate B2B
- Clean, minimal, banyak whitespace
- Gunakan chart/table sederhana
- Bahasa Indonesia profesional
- Setiap slide punya headline berupa insight, bukan label umum
- Hindari paragraf panjang; maksimal 4 bullet per slide`;

const inputs = [
  'Q2 Business Review',
  'Management audience',
  '8-slide structure',
  'Insight headlines',
];

export default function GammaPromptExample() {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => { setTimeout(() => setShown(true), 100); }, []);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GAMMA_COLOR }}>
            Gamma · Prompt Practice
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Dari report jadi deck siap edit.
          </h2>
        </div>

        <div className="grid grid-cols-[0.88fr_1.12fr] gap-5 items-stretch">
          <div className={`flex flex-col gap-4 transition-all duration-700 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
            <div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: `${GAMMA_COLOR}30` }}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GAMMA_COLOR }}>
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-black text-gray-900">Output target</p>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mt-1">
                    Deck review bisnis 8 slide yang bisa langsung dirapikan di Gamma atau diekspor ke PPT.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: `${GAMMA_COLOR}30` }}>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5" style={{ color: GAMMA_COLOR }} />
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: GAMMA_COLOR }}>
                  Input yang harus jelas
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {inputs.map((input) => (
                  <span key={input} className="rounded-lg border px-3 py-2 text-sm font-black"
                        style={{ borderColor: `${GAMMA_COLOR}40`, color: GAMMA_COLOR }}>
                    {input}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 px-5 py-4" style={{ borderColor: `${GAMMA_COLOR}25`, backgroundColor: '#faf5ff' }}>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GAMMA_COLOR }} />
                <p className="text-sm font-bold text-purple-950 leading-relaxed">
                  Prompt Gamma perlu isi, struktur slide, audience, dan style. Jangan cuma tulis "buat PPT yang bagus".
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-2xl border-2 bg-white p-5 shadow-sm flex flex-col transition-all duration-700 delay-150 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
               style={{ borderColor: `${GAMMA_COLOR}30` }}>
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: GAMMA_COLOR }}>
                Prompt siap copy
              </p>
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
                  copied
                    ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                    : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Tersalin' : 'Copy'}
              </button>
            </div>

            <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 px-5 py-4 overflow-hidden">
              <p className="font-mono text-[10.5px] leading-[1.36] text-gray-700 whitespace-pre-line">
                {prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

GammaPromptExample.displayName = 'GammaPromptExample';
