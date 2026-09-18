import React, { useState, useEffect } from 'react';
import { Lightbulb, Key, Compass } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const takeaways = [
  {
    num: '01', Icon: Lightbulb,
    headline: 'AI is a tool, not magic.',
    desc: 'Sama seperti Excel atau email, AI adalah skill yang dipelajari. Yang penting adalah tahu kapan dan bagaimana memakainya, bukan memahami cara kerja model di balik layar.',
  },
  {
    num: '02', Icon: Key,
    headline: 'Good prompts produce useful output.',
    desc: 'Prompt yang baik menjelaskan role, task, context, format, dan constraint. Lima elemen ini membantu AI memahami pekerjaan, konteks, bentuk output, dan batasannya.',
  },
  {
    num: '03', Icon: Compass,
    headline: 'Humans stay in the driver\'s seat.',
    desc: 'AI mempercepat draft. Manusia memvalidasi fakta, mengambil keputusan, dan bertanggung jawab atas konsekuensinya. Setiap output adalah titik awal.',
  },
];

export default function KeyTakeaways() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    takeaways.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 240));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Take Home</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Three Things.
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {takeaways.map(({ num, Icon, headline, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-6 bg-white border-2 rounded-3xl p-7 transition-all duration-700"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-24px)',
              }}
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <span className="text-4xl font-black tracking-tighter" style={{ color: ACCENT_BORDER }}>{num}</span>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                     style={{ backgroundColor: ACCENT }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">{headline}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
KeyTakeaways.displayName = 'KeyTakeaways';
