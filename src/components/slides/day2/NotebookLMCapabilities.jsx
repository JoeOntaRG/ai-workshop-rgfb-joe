import React, { useEffect, useState } from 'react';
import {
  BookOpen, FileQuestion, Headphones, ListChecks, MessageSquareQuote,
  Network, ShieldCheck, Sparkles,
} from 'lucide-react';
import { SECONDARY, SECONDARY_BG, SECONDARY_BORDER } from '../../../theme';

const capabilities = [
  {
    Icon: BookOpen,
    title: 'Source-grounded Q&A',
    detail: 'Jawab pertanyaan hanya dari dokumen yang di-upload, lengkap dengan citation.',
  },
  {
    Icon: FileQuestion,
    title: 'Summaries & FAQ',
    detail: 'Ubah manual panjang menjadi ringkasan, FAQ, dan daftar istilah untuk tim.',
  },
  {
    Icon: ListChecks,
    title: 'Briefing docs',
    detail: 'Buat brief siap baca: poin penting, risiko, action item, dan next step.',
  },
  {
    Icon: Network,
    title: 'Mind map / study guide',
    detail: 'Petakan topik besar menjadi struktur belajar atau alur troubleshooting.',
  },
  {
    Icon: Headphones,
    title: 'Audio overview',
    detail: 'Jadikan dokumen sebagai diskusi audio agar materi cepat dipahami.',
  },
  {
    Icon: ShieldCheck,
    title: 'Evidence check',
    detail: 'Cocok untuk cek klaim, menemukan gap dokumen, dan mencegah jawaban generik.',
  },
];

export default function NotebookLMCapabilities() {
  const [shown, setShown] = useState([]);

  useEffect(() => {
    capabilities.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 120 + i * 110));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-[0.82fr_1.18fr] gap-10 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: SECONDARY }}>
              NotebookLM · Capability
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              Dari dokumen menjadi knowledge base.
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mt-5">
              Paling kuat saat peserta punya sumber: manual produk, FAQ, log support, SOP, atau dokumen training.
            </p>

            <div className="mt-8 rounded-2xl border-2 px-5 py-4" style={{ borderColor: SECONDARY_BORDER, backgroundColor: SECONDARY_BG }}>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: SECONDARY }} />
                <p className="text-sm font-bold text-sky-900 leading-relaxed">
                  Rule of thumb: makin rapi source-nya, makin presisi jawaban dan citation-nya.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {capabilities.map(({ Icon, title, detail }, i) => (
              <div
                key={title}
                className="p-5 rounded-2xl border-2 bg-white transition-all duration-500"
                style={{
                  borderColor: `${SECONDARY}30`,
                  boxShadow: `0 8px 20px ${SECONDARY}12`,
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: SECONDARY }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-black text-gray-900 leading-tight mb-2">{title}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

NotebookLMCapabilities.displayName = 'NotebookLMCapabilities';
