import React, { useEffect, useState } from 'react';
import { Check, Copy, Download, FileText, MessageSquareText } from 'lucide-react';
import { SECONDARY } from '../../../theme';

export const notebookLMPractices = [
  {
    eyebrow: 'Practice 1 · Podcast',
    title: 'Laporan jadi podcast summary.',
    file: 'notebooklm-kao-q2-report.txt',
    sourceLabel: 'Dummy Q2 Business Review',
    sourceDetail: 'Laporan dummy performa Q2: sales, channel, support, risiko stok, dan prioritas bisnis.',
    preview: [
      'Revenue Q2 naik 18% QoQ, tapi margin turun 2.1 poin.',
      'Kategori personal care kuat di marketplace; kategori household kuat di channel modern trade.',
      'Customer inquiry naik karena informasi penggunaan produk belum cukup jelas.',
    ],
    prompt: `Saya upload dummy Q2 Business Review KAO Indonesia.

Buat bahan podcast/audio overview 4-5 menit untuk leadership.
Output:
- Opening hook 20 detik
- Ringkasan performa Q2 dalam bahasa non-teknis
- 3 insight utama
- 3 risiko yang perlu dibahas di meeting
- Closing dengan 3 pertanyaan diskusi

Aturan:
- Jawab hanya dari source.
- Kalau informasinya tidak ada, tulis "source belum cukup".
- Format seperti naskah podcast dua host: Host A dan Host B.`,
  },
  {
    eyebrow: 'Practice 2 · Video',
    title: 'Laporan jadi script video update.',
    file: 'notebooklm-kao-q2-report.txt',
    sourceLabel: 'Dummy Q2 Business Review',
    sourceDetail: 'Source yang sama dipakai untuk membuat brief video internal 60 detik.',
    preview: [
      'Channel marketplace tumbuh cepat, tapi channel offline tetap penting untuk kategori household.',
      'Ada risiko stok pada dua kategori produk dengan permintaan tinggi.',
      'Tim customer care membutuhkan FAQ dan video penggunaan yang lebih jelas.',
    ],
    prompt: `Saya upload dummy Q2 Business Review KAO Indonesia.

Buat script video internal 60 detik untuk update ke tim sales dan support.
Output:
- Scene-by-scene per 10 detik
- Voiceover Bahasa Indonesia
- Teks overlay singkat
- Visual direction untuk tiap scene
- CTA akhir untuk tim

Aturan:
- Jangan mengarang angka di luar laporan.
- Buat tone ringkas, optimis, tapi tetap menyebut risiko.
- Sertakan citation/source untuk klaim angka penting.`,
  },
  {
    eyebrow: 'Practice 3 · Infografis',
    title: 'Laporan jadi brief infografis.',
    file: 'notebooklm-kao-q2-report.txt',
    sourceLabel: 'Dummy Q2 Business Review',
    sourceDetail: 'Source laporan dipakai untuk menyusun data points dan struktur infografis.',
    preview: [
      'Revenue naik, margin turun, support tickets naik.',
      'Kategori utama: personal care, household, dan beauty care.',
      'Prioritas Q3: bundling, retail activation, dan self-service customer care.',
    ],
    prompt: `Saya upload dummy Q2 Business Review KAO Indonesia.

Buat brief infografis satu halaman untuk management.
Output:
- Judul infografis
- 5 angka utama yang layak divisualkan
- Struktur layout dari atas ke bawah
- Rekomendasi chart untuk tiap angka
- 3 callout insight
- Footer source/citation

Aturan:
- Jangan pilih angka yang tidak ada di laporan.
- Tulis copy pendek, cocok untuk Canva.
- Beri citation/source untuk setiap angka utama.`,
  },
  {
    eyebrow: 'Practice 4 · PPT',
    title: 'Laporan jadi outline PPT.',
    file: 'notebooklm-kao-q2-report.txt',
    sourceLabel: 'Dummy Q2 Business Review',
    sourceDetail: 'Source laporan dipakai untuk membuat struktur deck review bisnis.',
    preview: [
      'Executive summary, channel performance, product mix, support, dan Q3 plan.',
      'Cocok untuk bahan Gamma, PowerPoint, atau Google Slides.',
      'NotebookLM menjaga outline tetap berbasis sumber.',
    ],
    prompt: `Saya upload dummy Q2 Business Review KAO Indonesia.

Buat outline PPT 8 slide untuk Q2 business review.
Output:
- Judul setiap slide
- Claim utama per slide
- Data/source yang harus dimasukkan
- Rekomendasi chart atau visual
- Speaker notes 2-3 kalimat per slide

Struktur wajib:
1. Executive summary
2. Revenue dan margin
3. Channel performance
4. Product performance
5. Support and customer pain points
6. Operational risks
7. Q3 priorities
8. Decisions needed

Aturan:
- Jangan menambahkan angka di luar source.
- Tulis dalam Bahasa Indonesia profesional.
- Tandai slide yang butuh data tambahan.`,
  },
];

export default function NotebookLMSourcesPrompt({ practice = notebookLMPractices[0] }) {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileUrl = `/${practice.file}`;

  useEffect(() => { setTimeout(() => setShown(true), 100); }, []);

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(practice.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: SECONDARY }}>
            NotebookLM · {practice.eyebrow}
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            {practice.title}
          </h2>
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-5 items-stretch">
          <div className={`flex flex-col gap-4 transition-all duration-700 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
            <div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: `${SECONDARY}30` }}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: SECONDARY }}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">{practice.sourceLabel}</p>
                    <p className="font-mono text-[11px] font-bold text-sky-600 mt-1">{practice.file}</p>
                  </div>
                </div>

                <a
                  href={fileUrl}
                  download={practice.file}
                  className="inline-flex items-center gap-2 rounded-xl border-2 px-3.5 py-2 text-sm font-black text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: SECONDARY, borderColor: SECONDARY }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>

              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {practice.sourceDetail}
              </p>
            </div>

          </div>

          <div className={`rounded-2xl border-2 bg-white p-5 shadow-sm flex flex-col transition-all duration-700 delay-150 ${shown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
               style={{ borderColor: `${SECONDARY}30` }}>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <MessageSquareText className="w-5 h-5" style={{ color: SECONDARY }} />
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: SECONDARY }}>
                  Prompt siap copy
                </p>
              </div>
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
              <p className="font-mono text-[11px] leading-[1.42] text-gray-700 whitespace-pre-line">
                {practice.prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NotebookLMSourcesPrompt.displayName = 'NotebookLMSourcesPrompt';
