import React from 'react';
import { AlertTriangle, Check } from 'lucide-react';
import { SlideShell } from '../SlideShell';

const mistakes = [
  {
    bad: '“Buatkan laporan.”',
    why: 'Tidak ada konteks — AI akan menebak.',
    fix: '“Buatkan laporan progress bulanan tim Marketing — Q1 2026, dalam format executive summary 1 halaman.”',
  },
  {
    bad: '“Tolong yang bagus.” / “Buat yang menarik.”',
    why: '“Bagus” terlalu subjektif. AI tidak tahu standar kalian.',
    fix: '“Tone formal tapi tetap hangat, panjang 150 kata, hindari kata ‘inovatif’ dan ‘sinergi’.”',
  },
  {
    bad: 'Memberi 10 instruksi sekaligus dalam 1 prompt.',
    why: 'AI fokus terbagi, output jadi setengah-setengah.',
    fix: 'Pecah jadi beberapa prompt berurutan: dulu draft, lalu revisi, lalu format akhir.',
  },
  {
    bad: 'Terima output pertama tanpa cross-check.',
    why: 'AI bisa halusinasi (mengarang fakta yang terdengar meyakinkan).',
    fix: 'Cek angka, nama, dan klaim faktual. AI = asisten cerdas tapi tetap perlu review.',
  },
  {
    bad: 'Pakai bahasa terlalu pendek/SMS-style.',
    why: 'AI butuh sinyal yang cukup untuk paham nuansa.',
    fix: 'Tulis dalam kalimat lengkap, seolah memberi brief ke staf baru.',
  },
  {
    bad: 'Copy-paste data sensitif (NIK, password, gaji) ke AI publik.',
    why: 'Data bisa masuk ke training data atau bocor.',
    fix: 'Anonimkan dulu, atau pakai versi enterprise (ChatGPT Team, Claude for Work).',
  },
];

export default function CommonMistakes() {
  return (
    <SlideShell
      kicker="Hindari Jebakan Ini"
      title="6 Kesalahan Prompt yang Paling Sering Terjadi."
      subtitle="Bonus: cara memperbaikinya — supaya pulang nanti kalian tidak mengulang kesalahan ini."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        {mistakes.map((m, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
            <div className="flex items-start gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-gray-900 leading-snug">{m.bad}</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3 ml-6">{m.why}</p>
            <div className="ml-6 flex items-start gap-2 bg-emerald-50 border border-emerald-100 rounded-lg p-3">
              <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-900 leading-relaxed">{m.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
