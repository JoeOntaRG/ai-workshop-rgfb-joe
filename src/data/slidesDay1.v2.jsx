import React from 'react';
import {
  Stethoscope, ShoppingCart, Banknote, GraduationCap, Factory, Plane,
  MessageSquare, BookOpen, Presentation, Image as ImageIcon, Film, Megaphone,
} from 'lucide-react';
import { ChapterSlide } from '../components/slides/ChapterSlide';
import QuizSlide from '../components/slides/QuizSlide';
import QnASlide from '../components/slides/QnASlide';

// Cover & Intro
import Day1Cover from '../components/slides/intro/Day1Cover';
import SpeakerProfile from '../components/slides/intro/SpeakerProfile';
import { Day1Rundown, Day2Rundown } from '../components/slides/intro/TwoDayRundown';
import Day1Agenda from '../components/slides/intro/Day1Agenda';
import ResourcesSlide from '../components/slides/intro/ResourcesSlide';

// Sesi 2: AI Demystified
import WhyAILiteracy from '../components/slides/sesi2/WhyAILiteracy';
import AIvsMLvsGenAI from '../components/slides/sesi2/AIvsMLvsGenAI';
import AITimeline from '../components/slides/sesi2/AITimeline';
import TypesOfModels from '../components/slides/sesi2/TypesOfModels';
import TextModel from '../components/slides/sesi2/TextModel';
import ImageModel from '../components/slides/sesi2/ImageModel';
import VideoModel from '../components/slides/sesi2/VideoModel';
import AudioModel from '../components/slides/sesi2/AudioModel';
import MultimodalModel from '../components/slides/sesi2/MultimodalModel';
import IndustriesIntro from '../components/slides/sesi2/IndustriesIntro';
import IndustrySlide from '../components/slides/sesi2/IndustrySlide';

// Sesi 3: Prompt Engineering
import WhyPromptMatters from '../components/slides/sesi3/WhyPromptMatters';
import AnatomyOfGoodPrompt from '../components/slides/sesi3/AnatomyOfGoodPrompt';
import PromptMarked from '../components/slides/sesi3/PromptMarked';
import RoleBasedPrompting from '../components/slides/sesi3/RoleBasedPrompting';
import CommonMistakes from '../components/slides/sesi3/CommonMistakes';
import PromptTemplateDetail from '../components/slides/sesi3/PromptTemplateDetail';
import { Mark } from '../components/slides/sesi3/promptMarks';

// Sesi 6: Wrap-up
import KeyTakeaways from '../components/slides/sesi6/KeyTakeaways';
import Day2Preview from '../components/slides/sesi6/Day2Preview';
import Closing from '../components/slides/sesi6/Closing';

import ToolsLandscape from '../components/slides/day2/ToolsLandscape';
import ToolPromptExample from '../components/slides/day2/ToolPromptExample';

const categoryPromptSlides = [
  {
    tool: 'Chat & Writing · ChatGPT · Claude · Gemini', color: '#6366f1', Icon: MessageSquare,
    useCase: 'Menyusun brief dan komunikasi kerja',
    output: 'Dari konteks mentah menjadi draft, ringkasan, atau komunikasi yang siap direview.',
    chips: ['Draft', 'Ringkasan', 'Tone', 'CTA'],
    prompt: `ROLE
Anda adalah business writing partner.

TASK
Ubah konteks berikut menjadi draft komunikasi kerja yang jelas dan siap direview.

CONTEXT
Tujuan: [TUJUAN KOMUNIKASI]
Audiens: [SIAPA YANG MEMBACA]
Informasi utama: [TEMPEL CATATAN / DATA]

FORMAT
Berikan: subject atau headline, draft utama, 3 poin penting, dan CTA.

CONSTRAINT
Gunakan Bahasa Indonesia profesional dan ringkas. Tandai informasi yang belum tersedia. Jangan mengarang fakta atau angka.`,
  },
  {
    tool: 'Knowledge · NotebookLM', color: '#0ea5e9', Icon: BookOpen,
    useCase: 'Membaca sumber dan menemukan insight',
    output: 'Dari dokumen yang diunggah menjadi ringkasan, tema, dan pertanyaan yang bisa ditelusuri ke sumber.',
    chips: ['Source only', 'Tema', 'Kutipan', 'Pertanyaan'],
    prompt: `ROLE
Anda adalah research librarian.

TASK
Baca sumber yang saya unggah dan bantu saya menemukan informasi yang relevan dengan pertanyaan berikut.

CONTEXT
Pertanyaan utama: [PERTANYAAN]
Keputusan yang sedang disiapkan: [KEPUTUSAN]
Sumber: [UPLOAD DOKUMEN / TRANSKRIP]

FORMAT
Buat tabel: Temuan | Sumber / halaman | Kutipan pendukung | Implikasi sementara.
Tambahkan 3 pertanyaan lanjutan yang masih perlu dijawab.

CONSTRAINT
Jawab hanya berdasarkan sumber. Jangan membuat kutipan atau fakta baru. Jika informasi tidak tersedia, tulis "source belum cukup".`,
  },
  {
    tool: 'Slides · Gamma', color: '#a855f7', Icon: Presentation,
    useCase: 'Mengubah insight menjadi alur presentasi',
    output: 'Dari brief dan temuan tervalidasi menjadi storyline, headline, visual, dan rekomendasi yang mudah dipresentasikan.',
    chips: ['Storyline', 'Headline', 'Visual brief', 'Insight'],
    prompt: `ROLE
Anda adalah presentation strategist.

TASK
Ubah temuan yang sudah tervalidasi menjadi storyline presentasi yang membantu audience mengambil keputusan.

CONTEXT
Audience: [SIAPA YANG MELIHAT]
Keputusan yang dibutuhkan: [KEPUTUSAN]
Temuan dan batasan: [TEMPEL TEMUAN, ANGKA, DAN KUTIPAN]

FORMAT
Buat outline [JUMLAH] slide dalam tabel: No | Headline | Bukti | Visual yang disarankan | Implikasi.

CONSTRAINT
Satu slide satu pesan utama. Jangan mengubah angka atau menambahkan klaim di luar temuan. Sertakan catatan sumber dan metodologi bila relevan.`,
  },
  {
    tool: 'Design & UI · Canva AI · Google Stitch', color: '#00a9b5', Icon: ImageIcon,
    useCase: 'Membuat konsep visual dan prototype awal',
    output: 'Dari insight pengguna menjadi konsep gambar, user flow, dan layar awal yang siap didiskusikan.',
    chips: ['Konsep visual', 'User flow', 'Wireframe', 'Asumsi'],
    prompt: `ROLE
Anda adalah product concept designer.

TASK
Terjemahkan insight pengguna menjadi konsep visual dan prototype awal yang dapat diuji.

CONTEXT
Insight pengguna: [TEMPEL INSIGHT DAN BUKTINYA]
Masalah yang ingin diselesaikan: [MASALAH]
Target pengguna: [SIAPA]
Konteks penggunaan: [KAPAN DAN DI MANA]

FORMAT
Berikan: konsep utama, satu gambar yang perlu dibuat, user flow singkat, daftar layar atau elemen visual, dan asumsi.

CONSTRAINT
Hubungkan insight ke kebutuhan dan konsep. Tandai asumsi yang belum terbukti. Jangan menyebut konsep sebagai solusi final atau bukti product-market fit.`,
  },
  {
    tool: 'Audio & Video · ElevenLabs · VEED', color: '#0d9488', Icon: Film,
    useCase: 'Mengubah pesan menjadi script dan production brief',
    output: 'Dari pesan utama menjadi script voiceover, urutan scene, subtitle, dan arahan produksi.',
    chips: ['Script', 'Scene plan', 'Subtitle', 'Pacing'],
    prompt: `ROLE
Anda adalah content producer.

TASK
Ubah pesan utama berikut menjadi script dan production brief untuk konten video pendek.

CONTEXT
Tujuan konten: [TUJUAN]
Audience: [TARGET AUDIENCE]
Pesan utama: [PESAN / BENEFIT YANG SUDAH DIVALIDASI]
Asset tersedia: [DAFTAR ASSET]
Durasi: [DURASI]

FORMAT
Buat tabel per scene: Waktu | Visual | Voiceover | Teks layar | Audio / transisi | CTA.

CONSTRAINT
Gunakan hanya fakta dari brief. Buat bahasa mudah dipahami, pacing realistis, dan tandai asset yang masih kurang.`,
  },
  {
    tool: 'Campaign · Pomelli', color: '#f97316', Icon: Megaphone,
    useCase: 'Mengembangkan konsep kampanye dari insight',
    output: 'Dari target dan kebutuhan konsumen menjadi big idea, message pillars, ide konten, dan aktivasi.',
    chips: ['Audience', 'Big idea', 'Message pillars', 'Activation'],
    prompt: `ROLE
Anda adalah campaign strategist.

TASK
Kembangkan konsep kampanye berdasarkan insight konsumen yang sudah divalidasi.

CONTEXT
Target audience: [TARGET]
Kebutuhan atau hambatan: [INSIGHT]
Produk / layanan: [PRODUK]
Tujuan kampanye: [TUJUAN]
Kanal dan batasan: [KANAL / BUDGET / PERIODE]

FORMAT
Berikan: audience insight, big idea, 3 message pillars, 5 ide konten, 2 ide aktivasi, asset list, dan CTA.

CONSTRAINT
Jaga agar ide relevan dengan insight dan positioning. Bedakan fakta, asumsi, dan ide kreatif. Hindari klaim yang belum dibuktikan.`,
  },
];

export const slidesDataDay1 = [
  // ── Cover & Agenda ──────────────────────────────────────────
  { component: <Day1Cover />, isDark: false },
  { component: <SpeakerProfile />, isDark: false },
  { component: <Day1Rundown />, isDark: false },
  { component: <Day2Rundown />, isDark: false },
  { component: <Day1Agenda />, isDark: false },

  // ── Session 1: AI Demystified ───────────────────────────────
  { component: <ChapterSlide number="1" chapter="AI Demystified" time="45 minutes"
      title="What AI Actually Is."
      subtitle="Memahami perbedaan AI, Machine Learning, dan Generative AI."
    />, isDark: true },
  { component: <WhyAILiteracy />, isDark: false },
  { component: <AIvsMLvsGenAI />, isDark: false },
  { component: <AITimeline />, isDark: false },
  { component: <TypesOfModels />, isDark: false },
  { component: <TextModel />, isDark: false },
  { component: <ImageModel />, isDark: false },
  { component: <VideoModel />, isDark: false },
  { component: <AudioModel />, isDark: false },
  { component: <MultimodalModel />, isDark: false },

  // Bridge: intro to the 6-industry tour
  { component: <IndustriesIntro />, isDark: false },

  // 6 Industries — one slide each with hero image + examples
  { component: <IndustrySlide
      index={1} Icon={Stethoscope} industry="Healthcare" color="#f43f5e"
      headline=""
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200' }}
      caption="Contoh: AI bisa mendeteksi tanda-tanda awal kanker payudara pada mamografi yang mungkin terlewatkan oleh mata manusia."
      examples={[
        { title: 'Diagnosis dan Radiologi yang Lebih Akurat', desc: 'Contoh: deteksi tanda awal kanker payudara di mamografi yang terlewat oleh mata manusia.' },
        { title: 'Operasi dengan Bantuan Robot (Robotic Surgery)', desc: 'Contoh: bedah robotik presisi tinggi — sayatan kecil, risiko infeksi rendah.' },
        { title: 'Perawatan Personal (Personalized Medicine)', desc: 'Contoh: rencana pengobatan tailor-made dari analisis DNA, gaya hidup, dan riwayat medis.' },
        { title: 'Administrasi Rumah Sakit dan Chatbot Medis', desc: 'Contoh: percakapan dokter-pasien langsung jadi catatan medis otomatis.' },
      ]}
    />, isDark: false },
  { component: <IndustrySlide
      index={2} Icon={ShoppingCart} industry="Retail" color="#f59e0b"
      headline=""
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200' }}
      caption="Sekitar 35% pendapatan Amazon datang dari rekomendasi produk berbasis AI (McKinsey)."
      examples={[
        { title: 'Rekomendasi Produk yang Dipersonalisasi', desc: 'Contoh: halaman utama e-commerce penuh barang yang "kebetulan" Anda butuhkan — hasil analisis riwayat klik & pembelian.' },
        { title: 'Penentuan Harga Dinamis (Dynamic Pricing)', desc: 'Contoh: harga tiket pesawat & marketplace berubah real-time mengikuti permintaan, kompetitor, dan sisa stok.' },
        { title: 'Visual Search & Virtual Try-On', desc: 'Contoh: foto baju orang di jalan lalu cari di app, atau coba lipstik & kacamata lewat kamera HP sebelum beli.' },
      ]}
    />, isDark: false },
  { component: <IndustrySlide
      index={3} Icon={Banknote} industry="Finance" color="#10b981"
      headline=""
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200' }}
      caption="Sistem fraud detection AI Mastercard memblokir ~$3 miliar transaksi mencurigakan per tahun."
      examples={[
        { title: 'Fraud detection',      desc: 'Setiap transaksi kartu di-score dalam <100 ms, yang mencurigakan langsung diblokir.' },
        { title: 'Credit scoring',       desc: 'Model mengevaluasi ratusan sinyal untuk menyetujui pinjaman dalam hitungan detik.' },
        { title: 'AI advisors',          desc: 'Chatbot menangani cek saldo, transfer, dan perencanaan keuangan dasar.' },
      ]}
    />, isDark: false },
  { component: <IndustrySlide
      index={4} Icon={GraduationCap} industry="Education" color="#0ea5e9"
      headline=""
      media={{ type: 'video', src: '/notebooklm-listen-learn.mp4' }}
      caption="Google NotebookLM mengubah dokumen apa pun menjadi audio overview interaktif, seperti podcast personal."
      examples={[
        { title: 'Adaptive learning',    desc: 'Tingkat kesulitan menyesuaikan peserta, relevan untuk program corporate L&D.' },
        { title: 'Auto-summarization',   desc: 'Materi pelatihan diringkas menjadi audio briefing atau executive summary yang mudah dicerna.' },
        { title: 'Personalized content', desc: 'Soal latihan dan skenario disusun untuk membidik area lemah tiap peserta.' },
      ]}
    />, isDark: false },
  { component: <IndustrySlide
      index={5} Icon={Factory} industry="Manufacturing" color="#6366f1"
      headline=""
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200' }}
      caption="GE melaporkan ~30% penurunan downtime peralatan berkat predictive maintenance berbasis AI."
      examples={[
        { title: 'Predictive maintenance', desc: 'Sensor + AI memprediksi kapan mesin akan rusak sehingga bisa diperbaiki sebelum line berhenti.' },
        { title: 'Computer vision QC',     desc: 'Kamera mendeteksi defect di production line lebih cepat dari inspektor manual.' },
        { title: 'Supply chain optimization', desc: 'AI mengatur ulang rute pengiriman saat ada gangguan dan mengelola stok antar pabrik.' },
      ]}
    />, isDark: false },
  { component: <IndustrySlide
      index={6} Icon={Plane} industry="Logistics" color="#8b5cf6"
      headline=""
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200' }}
      caption="AI dapat mengoptimalkan rute pengiriman, memperkirakan kebutuhan stok, dan membantu koordinasi gudang."
      examples={[
        { title: 'Route optimization',   desc: 'AI menyusun rute tercepat untuk ribuan titik perhentian, diperbarui setiap menit.' },
        { title: 'Demand prediction',    desc: 'Memprediksi gudang mana yang akan butuh stok apa beberapa minggu ke depan.' },
        { title: 'Warehouse robotics',   desc: 'Robot memilih, mengemas, dan memindahkan barang, dikoordinasi AI secara real time.' },
      ]}
    />, isDark: false },

  // Quick check after Session 1
  { component: <QuizSlide
      kicker="Quick Check · After AI Demystified"
      title="Mana yang BUKAN kemampuan AI?"
      options={[
        { id: 'A', label: 'Meringkas dokumen panjang jadi beberapa poin utama.', isCorrect: false, explain: '' },
        { id: 'B', label: 'Membuat draft email dalam berbagai gaya bahasa.', isCorrect: false, explain: '' },
        { id: 'C', label: 'Akses sistem internal perusahaan secara langsung.', isCorrect: true,
          explain: 'AI publik tidak bisa fetch data dari ERP/CRM/database Anda. Datanya harus di-upload atau paste dulu — kecuali pakai integrasi khusus.' },
        { id: 'D', label: 'Menerjemahkan teks ke puluhan bahasa.', isCorrect: false, explain: '' },
      ]}
    />, isDark: false },

  // QnA after Session 1
  { component: <QnASlide moduleName="AI Demystified" duration="10 menit"
      topics={['AI vs ML vs GenAI', 'AI timeline', '5 model types', 'Industry use cases']}
    />, isDark: false },

  // ── Session 2: Prompt Engineering ───────────────────────────
  { component: <ChapterSlide number="2" chapter="Prompt Engineering" time="65 minutes"
      title="Talking to AI So It Understands."
      subtitle="Skill paling penting untuk mendapatkan output yang berguna dari model AI mana pun."
    />, isDark: true },
  { component: <WhyPromptMatters />, isDark: false },
  { component: <AnatomyOfGoodPrompt />, isDark: false },
  { component: <PromptMarked />, isDark: false },
  { component: <RoleBasedPrompting />, isDark: false },
  { component: <CommonMistakes />, isDark: false },
  // ── Template Prompt Siap-Pakai (1 slide per template) ─────
  { component: <PromptTemplateDetail
      index={1} total={6} cat="Universal" title="Meringkas Dokumen"
      rawText={`Anda adalah asisten analisis. Ringkas dokumen berikut menjadi poin-poin utama.

Dokumen:
[PASTE_DOKUMEN]

Format: 5 poin ringkasan, temuan atau keputusan penting, action items, dan pertanyaan terbuka. Pertahankan angka dan nama penting. Tandai informasi yang belum jelas.`}
    >
      <Mark kind="role">Anda adalah asisten analisis</Mark>.
      {' '}
      <Mark kind="task">Ringkas dokumen berikut menjadi poin-poin utama</Mark>.
      {'\n\n'}
      <Mark kind="context">Dokumen: [PASTE_DOKUMEN]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: 5 poin ringkasan, temuan atau keputusan penting, action items, dan pertanyaan terbuka</Mark>.
      {' '}
      <Mark kind="constraint">Pertahankan angka dan nama penting. Tandai informasi yang belum jelas</Mark>.
    </PromptTemplateDetail>, isDark: false },

  { component: <PromptTemplateDetail
      index={2} total={6} cat="Universal" title="Menulis Email Profesional"
      rawText={`Anda adalah penulis komunikasi profesional. Tulis email berdasarkan konteks berikut.

Konteks: [TUJUAN, PENERIMA, FAKTA PENTING, DAN CTA]

Format: subject dan email maksimal 150 kata. Tone: [FORMAL / HANGAT / SANTAI]. Akhiri dengan satu next step yang jelas. Jangan mengarang fakta.`}
    >
      <Mark kind="role">Anda adalah penulis komunikasi profesional</Mark>.
      {' '}
      <Mark kind="task">Tulis email berdasarkan konteks berikut</Mark>.
      {'\n\n'}
      <Mark kind="context">Konteks: [TUJUAN, PENERIMA, FAKTA PENTING, DAN CTA]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: subject dan email maksimal 150 kata. Tone: [FORMAL / HANGAT / SANTAI]</Mark>.
      {' '}
      <Mark kind="constraint">Akhiri dengan satu next step yang jelas. Jangan mengarang fakta</Mark>.
    </PromptTemplateDetail>, isDark: false },

  { component: <PromptTemplateDetail
      index={3} total={6} cat="Universal" title="Mengubah Ide Menjadi Rencana Aksi"
      rawText={`Sebagai project planner, ubah ide berikut menjadi rencana aksi yang bisa dijalankan.

Ide atau tujuan:
[PASTE_IDE]

Format: tabel berisi Task, Owner, Deadline, Dependency, dan Success metric. Susun dalam urutan yang realistis dan tandai informasi yang masih kurang.`}
    >
      <Mark kind="role">Sebagai project planner</Mark>,
      {' '}
      <Mark kind="task">ubah ide berikut menjadi rencana aksi yang bisa dijalankan</Mark>.
      {'\n\n'}
      <Mark kind="context">Ide atau tujuan: [PASTE_IDE]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: tabel berisi Task, Owner, Deadline, Dependency, dan Success metric</Mark>.
      {' '}
      <Mark kind="constraint">Susun dalam urutan yang realistis dan tandai informasi yang masih kurang</Mark>.
    </PromptTemplateDetail>, isDark: false },

  { component: <PromptTemplateDetail
      index={4} total={6} cat="Universal" title="Membandingkan Beberapa Opsi"
      rawText={`Sebagai decision-making assistant, bandingkan opsi berikut berdasarkan kriteria yang tersedia.

Opsi: [PASTE_OPSI]
Kriteria: [PASTE_KRITERIA]

Format: tabel berisi kelebihan, kekurangan, effort, risiko, dan rekomendasi. Bedakan fakta dari asumsi.`}
    >
      <Mark kind="role">Sebagai decision-making assistant</Mark>,
      {' '}
      <Mark kind="task">bandingkan opsi berikut berdasarkan kriteria yang tersedia</Mark>.
      {'\n\n'}
      <Mark kind="context">Opsi: [PASTE_OPSI]. Kriteria: [PASTE_KRITERIA]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: tabel berisi kelebihan, kekurangan, effort, risiko, dan rekomendasi</Mark>.
      {' '}
      <Mark kind="constraint">Bedakan fakta dari asumsi</Mark>.
    </PromptTemplateDetail>, isDark: false },

  { component: <PromptTemplateDetail
      index={5} total={6} cat="Universal" title="Membuat Checklist dari Proses"
      rawText={`Sebagai process assistant, ubah proses berikut menjadi checklist langkah demi langkah.

Proses:
[DESKRIPSI_PROSES]

Format: checklist bernomor dengan PIC, waktu pelaksanaan, dan cara verifikasi. Tandai langkah yang masih ambigu.`}
    >
      <Mark kind="role">Sebagai process assistant</Mark>,
      {' '}
      <Mark kind="task">ubah proses berikut menjadi checklist langkah demi langkah</Mark>.
      {'\n\n'}
      <Mark kind="context">Proses: [DESKRIPSI_PROSES]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: checklist bernomor dengan PIC, waktu pelaksanaan, dan cara verifikasi</Mark>.
      {' '}
      <Mark kind="constraint">Tandai langkah yang masih ambigu</Mark>.
    </PromptTemplateDetail>, isDark: false },

  { component: <PromptTemplateDetail
      index={6} total={6} cat="Universal" title="Ringkasan Meeting → Action Items"
      rawText={`Sebagai chief of staff, ringkas transkrip meeting ini menjadi summary + action items.

Berikut transkrip meeting:
[PASTE_TRANSKRIP]

Format:
1. Ringkasan 5 kalimat
2. Action items dalam tabel (Apa, Siapa PIC, Deadline)
3. List keputusan yang sudah diambil
4. List pertanyaan yang masih open`}
    >
      <Mark kind="role">Sebagai chief of staff</Mark>,
      {' '}
      <Mark kind="task">ringkas transkrip meeting ini menjadi summary + action items</Mark>.
      {'\n\n'}
      <Mark kind="context">Berikut transkrip meeting: [PASTE_TRANSKRIP]</Mark>
      {'\n\n'}
      <Mark kind="format">Format: (1) Ringkasan 5 kalimat, (2) Action items dalam tabel (Apa, Siapa PIC, Deadline), (3) Keputusan yang sudah diambil, (4) Pertanyaan yang masih open</Mark>.
    </PromptTemplateDetail>, isDark: false },

  // Quick check after Session 2
  { component: <QuizSlide
      kicker="Quick Check · After Prompt Engineering"
      title="Which prompt is the strongest?"
      context="Brief: Anda perlu mendorong pendaftaran ke program AI Literacy untuk working professionals di Indonesia. Tone: praktis dan non-teknis."
      options={[
        { id: 'A', label: '"Act as a B2B copywriter. Write a LinkedIn post promoting our AI Literacy program to working professionals in Indonesia. Make it clear and engaging, then end with a CTA."', isCorrect: false,
          explain: 'Sudah punya role, task, context, dan CTA, tetapi belum menetapkan format output maupun batasan yang cukup spesifik.' },
        { id: 'B', label: '"Act as a B2B copywriter. Write a 200-word LinkedIn post announcing our AI Literacy program for working professionals in Indonesia. Include a hook, 3 bullets, and a CTA."', isCorrect: false,
          explain: 'Strukturnya jelas, tetapi belum memberi arahan tone dan constraint—hasilnya masih bisa terlalu teknis atau tidak sesuai gaya komunikasi.' },
        { id: 'C', label: '"Act as a B2B copywriter. Write a 200-word LinkedIn post to drive registrations for our AI Literacy program among working professionals in Indonesia. Format: hook + 3-bullet body + soft CTA. Tone: practical, non-technical, light humor. Use only facts from the brief."', isCorrect: true,
          explain: 'Ini paling lengkap: Role (B2B copywriter), Task (mendorong pendaftaran), Context (program dan audiens), Format (hook + 3 bullets + CTA), serta Constraint (tone, panjang, dan hanya memakai fakta dari brief).' },
      ]}
    />, isDark: false },

  // QnA after Session 2
  { component: <QnASlide moduleName="Prompt Engineering" duration="10 menit"
      topics={['RICE', 'Chain-of-Thought', 'Few-shot', 'Role-based', 'Iteration', 'Common mistakes']}
    />, isDark: false },

  // ── Session 3: AI Tools Mastery — category-based prompts ───
  { component: <ChapterSlide number="3" chapter="AI Tools Mastery" time="45 minutes"
      title="Tools Worth Practicing."
      subtitle="Pilih kategori sesuai pekerjaan, lalu bawa prompt yang sama ke tool yang paling cocok."
    />, isDark: true },
  { component: <ToolsLandscape />, isDark: false },
  ...categoryPromptSlides.map(({ tool, color, Icon, useCase, output, chips, prompt }) => ({
    component: <ToolPromptExample
      tool={tool} color={color} Icon={Icon}
      useCase={useCase} output={output} chips={chips} prompt={prompt}
    />,
    isDark: false,
  })),
  { component: <QnASlide moduleName="AI Tools Mastery" duration="10 menit"
      topics={['Chat & Writing', 'Knowledge', 'Slides', 'Design & UI', 'Audio & Video', 'Campaign']}
    />, isDark: false },

  // ── Closing ─────────────────────────────────────────────────
  { component: <ChapterSlide number="4" chapter="Reflection & Next Steps" time="45 minutes"
      title="Reflect. Then Apply."
      subtitle="Pilih satu pekerjaan nyata, satu prompt yang bisa dicoba, dan satu cara untuk mengukur hasilnya."
    />, isDark: true },
  { component: <KeyTakeaways />, isDark: false },
  { component: <Day2Preview />, isDark: false },
  { component: <ResourcesSlide />, isDark: false },
  { component: <Closing />, isDark: false },
];
