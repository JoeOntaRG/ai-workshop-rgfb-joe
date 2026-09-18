import React, { useEffect, useState } from 'react';
import { FileText, ShieldCheck, Building } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const regs = [
  { Icon: FileText,    ref: 'UU PDP No. 27/2022',         summary: 'Data pribadi dilindungi. Customer harus consent.' },
  { Icon: ShieldCheck, ref: 'SE Menkominfo 9/2023',       summary: 'Pedoman AI: transparansi, akuntabilitas, fairness.' },
  { Icon: Building,    ref: 'Internal Policy KAO Indonesia',    summary: 'Setiap tim wajib punya AI usage guideline.' },
];

export default function IndonesiaAIReg() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    regs.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Regulasi · Indonesia</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Hukumnya.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {regs.map(({ Icon, ref, summary }, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-5 rounded-2xl border bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-base font-black text-gray-900 mb-0.5">{ref}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
IndonesiaAIReg.displayName = 'IndonesiaAIReg';
