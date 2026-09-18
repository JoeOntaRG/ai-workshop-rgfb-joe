import React, { useState } from 'react';
import {
  BarChart3, CheckCircle2, ClipboardList, Database,
  FileBarChart, FileSearch, LayoutTemplate, Presentation,
  ShieldCheck,
} from 'lucide-react';

import { ACCENT, ACCENT_BORDER } from '../../../theme';

const stages = [
  { Icon: ClipboardList, number: '01', label: 'Kuesioner', detail: 'Pertanyaan yang bisa diuji', color: '#6366f1' },
  { Icon: Database, number: '02', label: 'Data responden', detail: 'Jawaban konsumen', color: '#0ea5e9' },
  { Icon: BarChart3, number: '03', label: 'Analisis survei', detail: 'Angka, teks, dan segmen', color: '#10b981' },
  { Icon: FileBarChart, number: '04', label: 'Insight & PPT', detail: 'Bukti menjadi cerita data', color: '#f59e0b' },
  { Icon: LayoutTemplate, number: '05', label: 'Prototype konsep', detail: 'Ide untuk diuji lagi', color: '#a855f7' },
];

const toolRows = [
  { Icon: ClipboardList, task: 'Merancang kuesioner', tools: 'ChatGPT · Claude', output: 'Tujuan riset, hipotesis, pertanyaan netral, dan skala jawaban.', color: '#6366f1' },
  { Icon: BarChart3, task: 'Menganalisis data survei', tools: 'Gemini · ChatGPT', output: 'Pembersihan data, tabulasi silang, segmentasi, dan pola awal.', color: '#10b981' },
  { Icon: FileSearch, task: 'Membaca jawaban terbuka', tools: 'NotebookLM · Claude', output: 'Tema, kutipan pendukung, dan perbedaan suara konsumen.', color: '#0ea5e9' },
  { Icon: Presentation, task: 'Menyusun paparan data', tools: 'Gamma', output: 'Alur cerita, headline insight, chart brief, dan rekomendasi.', color: '#a855f7' },
  { Icon: LayoutTemplate, task: 'Membuat prototype konsep', tools: 'Google Stitch', output: 'User flow, wireframe, dan konsep layar untuk divalidasi.', color: '#34a853' },
];

const analysisFlow = [
  { Icon: Database, label: 'Respons survei', tool: 'Gemini', detail: 'Pola kuantitatif & segmen', color: '#10b981' },
  { Icon: BarChart3, label: 'Analisis angka', tool: 'Gemini · ChatGPT', detail: 'Pola & perbedaan segmen', color: '#f59e0b' },
  { Icon: FileSearch, label: 'Analisis teks', tool: 'NotebookLM · Claude', detail: 'Tema & bukti jawaban', color: '#0ea5e9' },
  { Icon: Presentation, label: 'Insight & PPT', tool: 'Claude · Gamma', detail: 'Cerita data untuk keputusan', color: '#a855f7' },
  { Icon: LayoutTemplate, label: 'Prototype', tool: 'Google Stitch', detail: 'Konsep untuk diuji', color: '#34a853' },
];

const researchPrompt = `ROLE
Anda adalah research strategist.

TASK
Ubah masalah bisnis menjadi kuesioner yang bisa menguji hipotesis.

CONTEXT
Masalah bisnis: [MASALAH YANG INGIN DIPAHAMI]
Keputusan yang harus dibuat: [KEPUTUSAN]
Target responden: [SIAPA YANG AKAN MENJAWAB]

FORMAT
Berikan tabel: No | Pertanyaan | Tipe jawaban | Alasan ditanyakan.
Kelompokkan pertanyaan menjadi screening, perilaku, kebutuhan, dan hambatan.

CONSTRAINT
Gunakan bahasa netral, tidak menggiring, dan mudah dipahami. Tandai pertanyaan untuk segmentasi. Jangan menambahkan asumsi tentang responden yang belum diberikan.`;

export function MarketingResearchIntro() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>AI for marketing research · End-to-end flow</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Mulai dari masalah, berakhir di konsep yang bisa diuji.</h2>
          <p className="mt-4 text-lg text-gray-500 font-medium max-w-4xl leading-relaxed">AI membantu merancang pertanyaan, membaca jawaban, menemukan pola, menyusun paparan data, dan membuat prototype awal — manusia tetap memvalidasi setiap keputusan.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {stages.map(({ Icon, number, label, detail, color }) => (
            <div key={number} className="rounded-2xl border-2 bg-white p-4 flex items-center gap-4" style={{ borderColor: `${color}35` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}><Icon className="w-5 h-5 text-white" /></div>
              <div><p className="text-[10px] font-black tracking-widest" style={{ color }}>{number}</p><p className="text-base font-black text-gray-900 leading-tight">{label}</p><p className="text-xs text-gray-500 font-medium mt-1">{detail}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
MarketingResearchIntro.displayName = 'MarketingResearchIntro';

export function MarketingResearchToolMap() {
  return (
    <div className="w-full h-full flex items-center justify-center"><div className="w-full max-w-6xl mx-auto px-10">
      <div className="mb-7"><p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Marketing research · AI product map</p><h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Pilih AI product sesuai tahap riset.</h2></div>
      <div className="overflow-hidden rounded-2xl border-2 bg-white" style={{ borderColor: ACCENT_BORDER }}>
        <div className="grid grid-cols-[1.05fr_1fr_1.65fr] bg-indigo-50 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-indigo-700"><span>Pekerjaan riset</span><span>AI product</span><span>Hasil yang diharapkan</span></div>
        {toolRows.map(({ Icon, task, tools, output, color }) => <div key={task} className="grid grid-cols-[1.05fr_1fr_1.65fr] items-center gap-4 px-5 py-3 border-t border-gray-100"><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}><Icon className="w-4 h-4 text-white" /></div><p className="text-sm font-black text-gray-900">{task}</p></div><p className="text-sm font-bold" style={{ color }}>{tools}</p><p className="text-sm text-gray-500 font-medium">{output}</p></div>)}
      </div>
      <p className="mt-4 text-xs text-gray-400 font-medium">Canva AI dapat dipakai sebagai pilihan tambahan untuk merapikan visual; bukan sumber validasi insight.</p>
    </div></div>
  );
}
MarketingResearchToolMap.displayName = 'MarketingResearchToolMap';

export function MarketingResearchWorkflow() {
  return (
    <div className="w-full h-full flex items-center justify-center"><div className="w-full max-w-6xl mx-auto px-10">
      <div className="mb-9"><p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>From survey to concept</p><h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Lima langkah dari survei ke keputusan.</h2><p className="mt-3 text-lg text-gray-500 font-medium">Mulai dari kuesioner, baca data kuantitatif dan kualitatif, susun paparan, lalu buat prototype konsep untuk diuji.</p></div>
      <div className="grid grid-cols-5 gap-3">{analysisFlow.map(({ Icon, label, tool, detail, color }, i) => <div key={label} className="rounded-2xl border-2 bg-white p-4" style={{ borderColor: `${color}40` }}><div className="flex items-center justify-between mb-7"><span className="text-3xl font-black" style={{ color }}>{String(i + 1).padStart(2, '0')}</span><Icon className="w-5 h-5" style={{ color }} /></div><p className="text-lg font-black text-gray-900 leading-tight">{label}</p><p className="text-[10px] font-black uppercase tracking-wider mt-2" style={{ color }}>{tool}</p><p className="text-sm text-gray-500 font-medium mt-2 leading-snug">{detail}</p></div>)}</div>
      <div className="mt-8 rounded-2xl bg-gray-900 text-white px-6 py-4 flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" /><p className="text-sm font-medium">Output setiap tahap menjadi input tahap berikutnya: respons → analisis → insight → PPT → prototype untuk validasi.</p></div>
    </div></div>
  );
}
MarketingResearchWorkflow.displayName = 'MarketingResearchWorkflow';

export function MarketingResearchPrompt() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { if (!navigator.clipboard) return; await navigator.clipboard.writeText(researchPrompt); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div className="w-full h-full flex items-center justify-center"><div className="w-full max-w-6xl mx-auto px-10">
      <div className="mb-7"><p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>01 · Questionnaire design</p><h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Ubah masalah bisnis menjadi kuesioner.</h2><p className="mt-3 text-lg text-gray-500 font-medium">Minta AI membantu struktur berpikir — bukan mengarang jawaban responden.</p></div>
      <div className="grid grid-cols-[0.85fr_1.65fr] gap-5 items-stretch"><div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}><p className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>Input → output</p><div className="mt-6 space-y-4">{[['Masalah bisnis', 'Apa yang belum kita pahami?'], ['Tujuan riset', 'Informasi apa yang dibutuhkan?'], ['Kuesioner', 'Pertanyaan apa yang bisa menguji?']].map(([title, detail], i) => <div key={title} className="flex gap-3 items-start"><span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center flex-shrink-0">{i + 1}</span><div><p className="font-black text-gray-900">{title}</p><p className="text-sm text-gray-500 font-medium mt-1">{detail}</p></div></div>)}</div><div className="mt-7 rounded-xl bg-amber-50 p-3 text-xs text-amber-800 font-semibold leading-relaxed">Cek manusia: apakah setiap pertanyaan membantu menjawab masalah atau mengambil keputusan?</div></div><div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}><div className="flex items-center justify-between mb-4"><p className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>Prompt siap copy</p><button onClick={handleCopy} className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700">{copied ? 'Tersalin' : 'Copy prompt'}</button></div><pre className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-[11px] leading-[1.45] text-gray-700 whitespace-pre-wrap font-mono h-[285px] overflow-hidden">{researchPrompt}</pre></div></div>
    </div></div>
  );
}
MarketingResearchPrompt.displayName = 'MarketingResearchPrompt';

export const taskPromptSlides = [
  {
    eyebrow: '02 · Survey data analysis',
    title: 'Temukan pola dari data survei.',
    subtitle: 'Gunakan data responden sebagai sumber analisis, lalu minta AI menunjukkan pola yang perlu diperiksa.',
    tool: 'Gemini · ChatGPT',
    color: '#10b981',
    steps: [['Data survei', 'File CSV atau spreadsheet yang sudah dirapikan'], ['Pertanyaan analisis', 'Pola apa yang perlu diketahui?'], ['Temuan awal', 'Angka, perbandingan, dan anomali untuk dicek']],
    check: 'Cek manusia: apakah jumlah responden, filter, dan pembagi segmen sudah tepat?',
    prompt: `ROLE
Anda adalah survey data analyst.

TASK
Analisis data survei untuk menemukan pola yang relevan dengan pertanyaan bisnis.

CONTEXT
Tujuan riset: [TUJUAN RISET]
Pertanyaan bisnis: [PERTANYAAN YANG INGIN DIJAWAB]
Data: [LAMPIRKAN FILE CSV / SPREADSHEET]
Definisi kolom: [JELASKAN KOLOM DAN KODE JAWABAN]

FORMAT
Berikan tabel: Temuan | Angka / filter | Makna sementara | Perlu divalidasi.
Sertakan kolom, filter, dan jumlah responden yang dipakai.

CONSTRAINT
Cek data kosong, duplikat, outlier, dan jawaban tidak valid. Bandingkan [SEGMENTASI YANG RELEVAN]. Jangan mengarang angka atau menyamakan korelasi dengan sebab-akibat.`,
  },
  {
    eyebrow: '03 · Open-ended analysis',
    title: 'Ubah jawaban terbuka menjadi tema.',
    subtitle: 'Baca suara konsumen secara sistematis. Tema harus tetap dapat ditelusuri ke jawaban aslinya.',
    tool: 'NotebookLM · Claude',
    color: '#0ea5e9',
    steps: [['Jawaban terbuka', 'Komentar konsumen dari kuesioner'], ['Coding tema', 'Kelompokkan alasan, kebutuhan, dan hambatan'], ['Bukti', 'Kutipan anonim dan jumlah kemunculan']],
    check: 'Cek manusia: apakah tema berasal dari jawaban konsumen, bukan dari asumsi AI?',
    prompt: `ROLE
Anda adalah qualitative research analyst.

TASK
Kelompokkan jawaban terbuka menjadi tema yang menjelaskan kebutuhan dan hambatan konsumen.

CONTEXT
Tujuan riset: [TUJUAN RISET]
Pertanyaan bisnis: [PERTANYAAN YANG INGIN DIJAWAB]
Sumber: [UPLOAD JAWABAN TERBUKA / TRANSKRIP]

FORMAT
Berikan tabel: Tema | Penjelasan | Jumlah / proporsi | Kutipan anonim | Batasan.
Tambahkan coding awal dan suara yang berbeda jika ditemukan.

CONSTRAINT
Pisahkan isi sumber dari interpretasi. Hapus identitas pribadi. Jangan membuat kutipan baru dan jangan menyimpulkan di luar sumber.`,
  },
  {
    eyebrow: '04 · Insight to presentation',
    title: 'Susun insight menjadi PPT keputusan.',
    subtitle: 'Berikan Gamma temuan yang sudah diverifikasi agar deck berisi cerita data, bukan sekadar ringkasan.',
    tool: 'Gamma',
    color: '#a855f7',
    steps: [['Temuan tervalidasi', 'Angka, tema, kutipan, dan batasan'], ['Storyline', 'Urutan masalah, bukti, dan implikasi'], ['PPT', 'Headline, chart brief, dan rekomendasi']],
    check: 'Cek manusia: apakah setiap headline dan chart benar-benar didukung data survei?',
    prompt: `ROLE
Anda adalah presentation strategist.

TASK
Ubah temuan riset yang sudah tervalidasi menjadi storyline PPT untuk membantu keputusan.

CONTEXT
Tujuan presentasi: [KEPUTUSAN YANG PERLU DIAMBIL]
Audience: [SIAPA YANG AKAN MELIHAT PPT]
Temuan tervalidasi: [TEMPEL INSIGHT, ANGKA, KUTIPAN, DAN BATASAN]

FORMAT
Buat outline sebanyak [JUMLAH] slide dengan tabel: No | Headline | Bukti | Visual | Implikasi.
Sertakan sumber dan catatan metodologi pada slide yang relevan.

CONSTRAINT
Gunakan chart yang sesuai tanpa mengubah angka. Jangan menambahkan angka atau kesimpulan yang tidak ada di temuan.`,
  },
  {
    eyebrow: '05 · Product concept prototype',
    title: 'Terjemahkan kebutuhan menjadi prototype.',
    subtitle: 'Prototype awal membantu tim melihat konsep dan menyiapkan validasi berikutnya.',
    tool: 'Google Stitch',
    color: '#34a853',
    steps: [['Insight pengguna', 'Kebutuhan dan hambatan yang terbukti'], ['Konsep solusi', 'Hipotesis produk yang menjawab kebutuhan'], ['Prototype', 'Flow dan layar untuk diuji']],
    check: 'Cek manusia: apakah prototype menjawab insight dan sudah diberi label sebagai konsep yang perlu diuji?',
    prompt: `ROLE
Anda adalah product concept designer.

TASK
Terjemahkan insight pengguna menjadi konsep prototype yang siap dipakai untuk validasi awal.

CONTEXT
Insight pengguna tervalidasi: [TEMPEL INSIGHT DAN BUKTINYA]
Masalah yang ingin diselesaikan: [MASALAH PENGGUNA]
Target pengguna: [SIAPA PENGGUNANYA]
Konteks penggunaan: [KAPAN DAN DI MANA PRODUK DIPAKAI]

FORMAT
Output: konsep | user flow | daftar layar | komponen utama | asumsi yang perlu diuji.
Sertakan CTA, empty state, copy sederhana, dan pertanyaan usability test.

CONSTRAINT
Jelaskan hubungan insight → kebutuhan → fitur. Tandai asumsi yang belum terbukti. Jangan menyebut konsep sebagai solusi final atau bukti product-market fit.`,
  },
];

export function MarketingResearchTaskPrompt({ config }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => { if (!navigator.clipboard) return; await navigator.clipboard.writeText(config.prompt); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div className="w-full h-full flex items-center justify-center"><div className="w-full max-w-6xl mx-auto px-10">
      <div className="mb-7"><p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: config.color }}>{config.eyebrow} · {config.tool}</p><h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">{config.title}</h2><p className="mt-3 text-lg text-gray-500 font-medium">{config.subtitle}</p></div>
      <div className="grid grid-cols-[0.85fr_1.65fr] gap-5 items-stretch"><div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}><p className="text-[10px] font-black uppercase tracking-widest" style={{ color: config.color }}>Input → output</p><div className="mt-6 space-y-4">{config.steps.map(([title, detail], i) => <div key={title} className="flex gap-3 items-start"><span className="w-7 h-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0" style={{ backgroundColor: config.color }}>{i + 1}</span><div><p className="font-black text-gray-900">{title}</p><p className="text-sm text-gray-500 font-medium mt-1">{detail}</p></div></div>)}</div><div className="mt-7 rounded-xl p-3 text-xs font-semibold leading-relaxed" style={{ backgroundColor: `${config.color}12`, color: config.color }}>{config.check}</div></div><div className="rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}><div className="flex items-center justify-between mb-4"><p className="text-[10px] font-black uppercase tracking-widest" style={{ color: config.color }}>Prompt siap copy</p><button onClick={handleCopy} className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700">{copied ? 'Tersalin' : 'Copy prompt'}</button></div><pre className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-[11px] leading-[1.45] text-gray-700 whitespace-pre-wrap font-mono h-[285px] overflow-hidden">{config.prompt}</pre></div></div>
    </div></div>
  );
}
MarketingResearchTaskPrompt.displayName = 'MarketingResearchTaskPrompt';

export function MarketingResearchGuardrails() {
  const checks = [['Tepat sasaran', 'Mulai dari keputusan bisnis dan pastikan target responden sesuai masalah.'], ['Data dapat dipercaya', 'Cek duplikasi, jawaban kosong, bias sampel, dan definisi tiap kolom.'], ['Insight punya bukti', 'Pisahkan fakta, pola, interpretasi, dan rekomendasi; sertakan pertanyaan atau kutipan sumber.'], ['Prototype bukan final', 'Uji konsep dengan pengguna dan revisi sebelum dianggap sebagai solusi produk.']];
  return (
    <div className="w-full h-full flex items-center justify-center"><div className="w-full max-w-6xl mx-auto px-10"><div className="mb-10"><p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>Research quality check</p><h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">AI mempercepat proses. Tim menjaga kualitasnya.</h2><p className="mt-3 text-lg text-gray-500 font-medium max-w-4xl">Output AI baru berguna ketika dapat ditelusuri kembali ke data survei dan membantu keputusan yang jelas.</p></div><div className="grid grid-cols-2 gap-4">{checks.map(([title, detail]) => <div key={title} className="flex items-start gap-4 rounded-2xl border-2 bg-white p-5" style={{ borderColor: ACCENT_BORDER }}><CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" /><div><p className="text-lg font-black text-gray-900">{title}</p><p className="text-sm text-gray-500 font-medium leading-relaxed mt-1">{detail}</p></div></div>)}</div></div></div>
  );
}
MarketingResearchGuardrails.displayName = 'MarketingResearchGuardrails';
