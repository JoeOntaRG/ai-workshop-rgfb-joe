import React from 'react';
import { ChatMockup } from '../UseCaseTemplate';
import { ACCENT } from '../../../theme';

export default function FewShotPrompting() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className="w-full md:w-[40%] flex flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Framework 3 of 4
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Show, don't tell.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Berikan 2–3 contoh sebelum bertanya. Gaya output hampir selalu mengikuti contoh yang Anda berikan.
          </p>

          <div className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 mb-2">
              Kapan few-shot efektif
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Saat output harus mengikuti struktur konsisten: klasifikasi, formatting, penyesuaian tone, atau style transfer.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[60%]">
          <ChatMockup
            color={ACCENT}
            prompt={`Klasifikasikan: Positive / Negative / Mixed.

"Pengiriman cepat!" → Positive
"Paket datang dalam keadaan rusak." → Negative
"Packing rapi, tapi telat 2 hari." → Mixed

"Pengiriman lambat, tapi produknya bagus sekali." →`}
            response={`Mixed`}
          />
          <p className="text-center text-xs text-gray-400 font-medium italic mt-4">
            Tanpa contoh, AI cenderung menebak "Negative". Dengan contoh, output mengikuti taksonomi Anda.
          </p>
        </div>

      </div>
    </div>
  );
}
FewShotPrompting.displayName = 'FewShotPrompting';
