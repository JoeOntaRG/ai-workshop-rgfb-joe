import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SlideShell, Pill } from '../SlideShell';

const templates = [
  {
    cat: 'HR',
    title: 'Tulis Job Description',
    template: `Bertindaklah sebagai HR senior. Tulis job description untuk posisi [JABATAN] di perusahaan [TIPE_BISNIS].

Konteks:
- Level: [Junior/Mid/Senior]
- Lokasi: [Kota/Hybrid/Remote]
- Anggaran range: [Range]

Format: Responsibilities (5 bullet), Requirements (5 bullet), Nice-to-have (3 bullet). Tone profesional tapi hangat. Hindari jargon klise “team player”, “fast-paced”.`,
  },
  {
    cat: 'Marketing',
    title: 'Buat Konten Sosmed Mingguan',
    template: `Sebagai social media strategist B2B, buatkan 5 ide post LinkedIn untuk minggu ini.

Konteks: [PERUSAHAAN] di industri [INDUSTRI], target audiens [PERSONA].
Tujuan: [Brand awareness / lead gen / thought leadership].

Output: tabel kolom [Hari, Hook, Body, CTA, Image idea]. Tone: [Tone]. Hindari clickbait.`,
  },
  {
    cat: 'Finance',
    title: 'Ringkasan Laporan Keuangan',
    template: `Sebagai CFO advisor, analisis laporan keuangan ini dan buat executive summary 1 halaman.

[PASTE_DATA_LAPORAN_DI_SINI]

Format: 3 poin highlight, 3 poin perhatian, 2 rekomendasi action. Pakai bahasa untuk non-akuntan. Sertakan angka kunci.`,
  },
  {
    cat: 'Operations',
    title: 'Bikin SOP dari Workflow Manual',
    template: `Saya akan ceritakan workflow saat ini. Tugasmu: ubah jadi SOP terstruktur.

Workflow saat ini: [DESKRIPSI_BEBAS_BAHASA_SEHARI_HARI]

Format SOP: Tujuan, Lingkup, Peran & Tanggung Jawab, Langkah-langkah (numbered), Indikator Sukses, Eskalasi.`,
  },
  {
    cat: 'Design',
    title: 'Brief Aset Visual ke AI Image Gen',
    template: `Buatkan prompt Midjourney untuk: [DESKRIPSI_VISUAL].

Style: [Photography / Illustration / 3D / Flat design]
Mood: [Mood adjectives]
Aspect ratio: [16:9 / 1:1 / 9:16]
Reference style: [Brand atau seniman]

Output: 3 variasi prompt yang siap di-paste ke Midjourney.`,
  },
  {
    cat: 'Universal',
    title: 'Ringkasan Meeting → Action Items',
    template: `Berikut transkrip meeting:
[PASTE_TRANSKRIP]

Tugas:
1. Buat ringkasan 5 kalimat
2. List action items dalam tabel (Apa, Siapa PIC, Deadline)
3. List keputusan yang sudah diambil
4. List pertanyaan yang masih open`,
  },
];

export default function PromptTemplateLibrary() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (i, text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(i);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  return (
    <SlideShell
      kicker="Cheat Sheet"
      title="6 Template Prompt Siap-Pakai."
      subtitle="Klik ikon copy untuk salin. Ganti [TEXT] dengan info kalian sendiri. Bawa pulang sebagai senjata pertama."
      maxWidth="7xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {templates.map((t, i) => (
          <div key={i} className="bg-white border border-indigo-100 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Pill tone="indigo">{t.cat}</Pill>
                <h3 className="text-base font-black text-gray-900 mt-2 leading-tight">{t.title}</h3>
              </div>
              <button
                onClick={() => handleCopy(i, t.template)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${copied === i ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500 hover:bg-indigo-100 hover:text-indigo-700'}`}
                aria-label="Copy"
              >
                {copied === i ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 font-mono text-[10px] text-gray-600 leading-relaxed flex-1 whitespace-pre-line max-h-[180px] overflow-y-auto custom-scrollbar">
              {t.template}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-gray-400 font-medium italic">
        Template ini akan kita pakai lagi di Sesi 4 & 5 — AI at Work.
      </p>
    </SlideShell>
  );
}
