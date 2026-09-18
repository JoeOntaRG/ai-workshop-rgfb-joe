import React, { useState, useEffect } from 'react';
import { ChatMockup } from '../UseCaseTemplate';
import { ACCENT, ACCENT_BG, ACCENT_BORDER, ACCENT_DARK } from '../../../theme';

const examples = [
  {
    label: 'Vague',
    color: '#ef4444',
    prompt: 'Tulis email.',
    response: 'Subject: Email Penting\n\nHalo,\n\nSaya menulis ini terkait... (generik, tidak bisa langsung dipakai)',
    verdict: 'AI menebak-nebak semuanya.',
  },
  {
    label: 'Specific',
    color: '#10b981',
    prompt: 'Tulis email follow-up ke klien (Pak Andi, CEO startup F&B) yang belum membalas proposal kita dari 5 hari lalu. Tone: hangat tapi profesional. Maks 120 kata. Akhiri dengan satu pertanyaan terbuka.',
    response: 'Subject: Lanjutan diskusi kemarin\n\nDear Pak Andi,\n\nFollow up proposal yang kami kirim Selasa lalu. Saya bayangkan Pak Andi sedang sibuk dengan ekspansi outlet baru...\n\nApakah ada bagian proposal yang perlu kami sesuaikan sebelum lanjut ke step berikutnya?',
    verdict: 'AI memberi output yang siap pakai.',
  },
];

export default function WhyPromptMatters() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % examples.length), 6000);
    return () => clearInterval(t);
  }, []);

  const ex = examples[active];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-14 items-center">
        <div className="w-full md:w-[44%] flex flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Why Prompts Matter
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            AI doesn't read your mind.<br />
            <span style={{ color: ACCENT }}>It reads your instructions.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Kualitas output mengikuti kualitas prompt. Tujuan yang sama, ditulis dengan dua cara berbeda, menghasilkan output yang sangat berbeda.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            {examples.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left px-5 py-3 rounded-2xl border-2 transition-all duration-500"
                style={{
                  borderColor: active === i ? e.color : '#e5e7eb',
                  backgroundColor: active === i ? `${e.color}10` : 'white',
                }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                   style={{ color: active === i ? e.color : '#9ca3af' }}>
                  {e.label}
                </p>
                <p className="text-sm font-bold text-gray-900">{e.verdict}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[56%]" key={active} style={{ animation: 'fadeSlide 0.4s ease' }}>
          <ChatMockup prompt={ex.prompt} response={ex.response} color={ex.color} />
        </div>
      </div>
      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
WhyPromptMatters.displayName = 'WhyPromptMatters';
