import React, { useEffect, useState } from 'react';
import {
  BarChart3, ClipboardList, FileBarChart, Lightbulb,
  MessageSquare, Presentation, Search, Users,
} from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const flow = [
  { Icon: ClipboardList, number: '01', title: 'Buat kuesioner', detail: 'Rumuskan masalah, target responden, dan pertanyaan netral.', color: '#6366f1' },
  { Icon: BarChart3, number: '02', title: 'Analisis respons', detail: 'Temukan pola angka, perbedaan segmen, dan tema jawaban terbuka.', color: '#0ea5e9' },
  { Icon: Presentation, number: '03', title: 'Paparkan insight', detail: 'Ubah temuan menjadi storyline, visual, dan rekomendasi keputusan.', color: '#a855f7' },
  { Icon: Lightbulb, number: '04', title: 'Kembangkan konsep', detail: 'Terjemahkan kebutuhan menjadi konsep produk yang siap diuji.', color: '#ec4899' },
];

export function MarketingResearchGroupBrief() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Group Work · Brief</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Buktikan kebutuhan sebelum membuat produk.</h2>
          <p className="mt-4 text-lg text-gray-500 font-medium max-w-4xl leading-relaxed">Dalam tim, pilih satu masalah konsumen yang ingin dipahami. Jalankan flow riset dari kuesioner sampai konsep pengembangan produk.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            [Search, 'Pilih masalah', 'Contoh: konsumen kesulitan memilih varian, memahami manfaat, atau menemukan produk yang sesuai rutinitas.'],
            [Users, 'Tentukan target', 'Jelaskan siapa responden yang paling relevan dan keputusan apa yang ingin dibantu oleh riset.'],
            [Lightbulb, 'Bangun konsep', 'Konsep akhir harus menjawab insight, tetapi tetap diberi label sebagai hipotesis yang perlu diuji.'],
          ].map(([Icon, title, detail]) => (
            <div key={title} className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: ACCENT }}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-black text-gray-900">{title}</p>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mt-2">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gray-900 text-white px-6 py-4 flex items-center gap-3">
          <MessageSquare className="w-5 h-5 text-indigo-300 flex-shrink-0" />
          <p className="text-sm font-medium">Pertanyaan kunci: “Apa yang perlu kita ketahui dari konsumen sebelum mengambil keputusan produk?”</p>
        </div>
      </div>
    </div>
  );
}
MarketingResearchGroupBrief.displayName = 'MarketingResearchGroupBrief';

export function MarketingResearchGroupFlow() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    flow.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 160 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Group Work · Research flow</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Empat tahap, satu cerita data.</h2>
          <p className="mt-4 text-lg text-gray-500 font-medium">Setiap tahap harus menghasilkan input yang jelas untuk tahap berikutnya.</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {flow.map(({ Icon, number, title, detail, color }, i) => (
            <div key={number} className={`rounded-2xl border-2 bg-white p-5 transition-all duration-700 ${shown.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ borderColor: `${color}55` }}>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-black" style={{ color }}>{number}</span>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <p className="text-lg font-black text-gray-900 leading-tight">{title}</p>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mt-2">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          {['Bukti dari responden', 'Insight yang dapat ditelusuri', 'Konsep untuk divalidasi'].map((label, i) => (
            <div key={label} className="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700">
              {i + 1}. {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
MarketingResearchGroupFlow.displayName = 'MarketingResearchGroupFlow';

export function MarketingResearchGroupDeliverables() {
  const deliverables = [
    ['Kuesioner', '8–10 pertanyaan netral, target responden, dan tujuan tiap pertanyaan.', 'ChatGPT · Claude'],
    ['Analisis responden', '3 temuan angka atau segmen, 2 tema jawaban terbuka, dan bukti sumber.', 'Gemini · NotebookLM'],
    ['Pemaparan insight', 'Outline 5 slide: masalah, metode, temuan, implikasi, dan rekomendasi.', 'Gamma · Canva AI'],
    ['Konsep produk', 'Gambar konsep produk yang menunjukkan bentuk, kemasan, atau cara penggunaan.', 'ChatGPT · Pomelli'],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Group Work · Deliverables</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Output yang harus dikumpulkan.</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border-2 bg-white" style={{ borderColor: ACCENT_BORDER }}>
          <div className="grid grid-cols-[1fr_2fr_1.1fr] bg-indigo-50 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-indigo-700">
            <span>Output</span><span>Isi minimum</span><span>Tool yang bisa dipakai</span>
          </div>
          {deliverables.map(([title, detail, tools]) => (
            <div key={title} className="grid grid-cols-[1fr_2fr_1.1fr] items-center gap-4 px-5 py-4 border-t border-gray-100">
              <p className="text-sm font-black text-gray-900">{title}</p>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{detail}</p>
              <p className="text-sm font-bold" style={{ color: ACCENT }}>{tools}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-gray-500 font-medium">Semua angka, kutipan, dan klaim harus bisa ditelusuri ke data atau sumber yang digunakan.</p>
      </div>
    </div>
  );
}
MarketingResearchGroupDeliverables.displayName = 'MarketingResearchGroupDeliverables';

export function MarketingResearchGroupPresentation() {
  const slides = [
    ['01', 'Masalah & tujuan', 'Apa yang ingin dipahami dan keputusan apa yang akan dibantu?'],
    ['02', 'Metode & responden', 'Siapa yang menjawab, bagaimana kuesioner dibuat, dan apa batasannya?'],
    ['03', 'Temuan utama', 'Tampilkan angka, segmen, tema, dan kutipan yang paling penting.'],
    ['04', 'Insight & implikasi', 'Apa arti temuan tersebut bagi kebutuhan atau pengalaman konsumen?'],
    ['05', 'Konsep produk', 'Tampilkan gambar konsep produk yang menggambarkan bentuk, kemasan, atau cara penggunaan.'],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Group Work · Presentation</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Presentasikan dari bukti ke konsep.</h2>
          </div>
          <p className="text-sm text-gray-500 font-medium max-w-xs leading-relaxed">Durasi: 3 menit presentasi + 1 menit feedback. Fokus pada keputusan, bukan banyaknya slide.</p>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {slides.map(([number, title, detail]) => (
            <div key={number} className="rounded-2xl border-2 bg-white p-4 min-h-[190px]" style={{ borderColor: ACCENT_BORDER }}>
              <span className="text-3xl font-black" style={{ color: ACCENT }}>{number}</span>
              <p className="text-base font-black text-gray-900 leading-tight mt-7">{title}</p>
              <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-800">
          Checklist sebelum presentasi: insight punya bukti · konsep menjawab kebutuhan · asumsi dan pertanyaan validasi disebutkan.
        </div>
      </div>
    </div>
  );
}
MarketingResearchGroupPresentation.displayName = 'MarketingResearchGroupPresentation';
