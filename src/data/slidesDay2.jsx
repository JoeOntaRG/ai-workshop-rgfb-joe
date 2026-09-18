import React from 'react';
import {
  MessageSquare, Bot, Sparkles, BookOpen, Presentation, Image as ImageIcon,
  Mic2, Film, Code2,
  Megaphone,
} from 'lucide-react';

import { ChapterSlide } from '../components/slides/ChapterSlide';
import QuizSlide from '../components/slides/QuizSlide';
import QnASlide from '../components/slides/QnASlide';

// Intro & Recap
import Day2Cover from '../components/slides/day2/Day2Cover';
import Day2Agenda from '../components/slides/day2/Day2Agenda';
import Day1Recap from '../components/slides/day2/Day1Recap';

// Reusable Day 1 block: AI Tools Mastery
import ToolsLandscape from '../components/slides/day2/ToolsLandscape';
import ToolShowcase from '../components/slides/day2/ToolShowcase';
import ToolPromptExample from '../components/slides/day2/ToolPromptExample';
import ToolPickerMatrix from '../components/slides/day2/ToolPickerMatrix';
import NotebookLMCapabilities from '../components/slides/day2/NotebookLMCapabilities';
import NotebookLMSourcesPrompt, { notebookLMPractices } from '../components/slides/day2/NotebookLMSourcesPrompt';
import GammaPromptExample from '../components/slides/day2/GammaPromptExample';
import {
  MarketingResearchIntro,
  MarketingResearchToolMap,
  MarketingResearchWorkflow,
  MarketingResearchPrompt,
  MarketingResearchTaskPrompt,
  taskPromptSlides,
  MarketingResearchGuardrails,
} from '../components/slides/day2/MarketingResearchAI';
import {
  MarketingResearchGroupFlow,
  MarketingResearchGroupDeliverables,
  MarketingResearchGroupPresentation,
} from '../components/slides/day2/MarketingResearchGroupWork';

// Sesi 2: Ethics & Risks
import EthicsWhy from '../components/slides/day2/EthicsWhy';
import Hallucination from '../components/slides/day2/Hallucination';
import FactCheckFlow from '../components/slides/day2/FactCheckFlow';
import DataPrivacy from '../components/slides/day2/DataPrivacy';
import PrivacyChecklist from '../components/slides/day2/PrivacyChecklist';
import AIBias from '../components/slides/day2/AIBias';
import HumanInTheLoop from '../components/slides/day2/HumanInTheLoop';
import AIRedFlags from '../components/slides/day2/AIRedFlags';
import AuditTrail from '../components/slides/day2/AuditTrail';

// Closing
import KeyTakeawaysDay2 from '../components/slides/day2/KeyTakeawaysDay2';
import Day2Closing from '../components/slides/day2/Day2Closing';
import ResourcesSlide from '../components/slides/intro/ResourcesSlide';
import PostTestSlide from '../components/slides/day2/PostTestSlide';

const toolPrompts = {
  chatgpt: `Bantu saya membuat email follow-up setelah meeting dengan distributor.

Konteks:
- Tim komersial ingin menguji bundle produk personal care untuk segmen keluarga muda
- Mereka minta materi produk, harga indikatif, dan skema support
- Next step: kirim proposal ringkas dan ajak meeting lanjutan minggu depan

Output:
- Subject email
- Email Bahasa Indonesia profesional
- 3 bullet value proposition
- CTA untuk jadwal meeting lanjutan

Tone:
Ramah, jelas, B2B, tidak terlalu panjang.`,

  claude: `Saya akan upload/copy dokumen produk KAO Indonesia: datasheet, FAQ, dan catatan training.

Buat sales enablement pack untuk tim sales.
Output:
- Ringkasan positioning produk
- Target customer yang paling cocok
- 5 fitur utama dan benefit bisnisnya
- Tabel comparison vs produk lama
- 8 objection handling reseller
- Battlecard 1 halaman

Aturan:
- Jangan mengarang fitur yang tidak ada di dokumen.
- Tandai bagian yang perlu validasi ke tim produk.
- Gunakan Bahasa Indonesia profesional.`,

  gemini: `Analisis data penjualan Q2 KAO Indonesia dari Google Sheets.

Kolom data:
Tanggal, Produk, Kategori, Channel, Qty, Harga Satuan, Total

Output:
- Executive summary 5 bullet
- Produk dengan revenue tertinggi
- Channel dengan pertumbuhan terbaik
- Risiko stok atau demand yang perlu diperhatikan
- Rekomendasi action untuk sales manager
- Draft update singkat untuk email internal

Aturan:
- Jangan mengarang angka.
- Sebutkan sheet/tab atau range yang dipakai.
- Buat output mudah dipindahkan ke Google Docs.`,

  notebooklm: `Saya upload dummy Q2 Business Review KAO Indonesia.

Buat audio overview/podcast summary 4-5 menit untuk leadership.
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

  canva: `Buat konsep visual campaign untuk produk consumer care KAO Indonesia.

Format:
- Instagram feed 1:1
- Instagram story 9:16
- Marketplace banner

Isi wajib:
- Headline: Rutinitas Nyaman, Hari Lebih Ringan
- 3 benefit singkat
- Area harga/promo
- CTA: Hubungi tim KAO Indonesia

Style:
Consumer care, clean, modern, warna mengikuti product brief, produk terlihat jelas, tidak terlalu ramai.`,

  elevenlabs: `Ubah script ini menjadi voiceover Bahasa Indonesia 60 detik untuk video training partner.

Script sumber:
"Produk consumer care KAO Indonesia membantu konsumen dalam rutinitas sehari-hari. Jelaskan manfaat utama dengan bahasa sederhana, gunakan fakta dari product brief, dan arahkan customer ke kanal resmi jika membutuhkan informasi lanjutan."

Output:
- Final voiceover script
- Versi pendek 20 detik
- Pronunciation notes untuk istilah teknis
- Arahan tone dan pacing

Tone:
Ramah, tenang, instruksional, mudah dipahami sales toko.`,

  veed: `Buat arahan editing video launch produk consumer care KAO Indonesia berdurasi 30 detik.

Asset yang tersedia:
- Footage produk consumer care di meja kerja
- Voiceover Bahasa Indonesia
- Logo KAO Indonesia
- 3 benefit dari product brief yang sudah divalidasi

Output:
- Urutan scene per 5 detik
- Teks overlay tiap scene
- Subtitle ringkas
- Transisi yang cocok
- Music direction
- CTA akhir

Style:
Clean consumer care, tempo cepat, cocok untuk WhatsApp partner dan social media.`,

  stitch: `Buat konsep UI partner portal KAO Indonesia untuk desktop.

Audience:
Distributor dan reseller B2B.

Fitur wajib:
- Dashboard KPI order
- Tabel order dan status pengiriman
- Status klaim garansi
- Katalog produk
- Materi marketing yang bisa didownload
- Kontak support

Output:
- Struktur halaman utama
- Komponen UI utama
- Empty state, loading state, dan warning state
- Copy microtext untuk tombol dan label

Style:
B2B, clean, dense tapi mudah discan, bukan landing page marketing.`,

  pomelli: `Buat campaign platform untuk launch produk KAO Indonesia ke target konsumen yang relevan.

Target audience:
Toko komputer, kantor kecil, cafe, reseller, dan pemilik usaha yang butuh koneksi stabil.

Output:
- Audience insight
- Big idea campaign
- 3 message pillars
- 5 ide konten sosial
- 2 promo activation
- Landing page angle
- Asset list yang perlu dibuat
- CTA utama

Aturan:
Praktis, sesuai konteks KAO Indonesia, tidak terlalu generic, dan tetap sesuai positioning produk.`,
};

const marketingResearchSlides = [
  { component: <ChapterSlide number="1" chapter="AI for Marketing Research" time="110 minutes"
      title="Dari Jawaban ke Keputusan."
      subtitle="Gunakan AI untuk merancang kuesioner, membaca respons, menyusun paparan data, dan membuat prototype konsep yang siap divalidasi."
    />, isDark: true },
  { component: <MarketingResearchIntro />, isDark: false },
  { component: <MarketingResearchWorkflow />, isDark: false },
  { component: <MarketingResearchPrompt />, isDark: false },
  { component: <MarketingResearchTaskPrompt config={taskPromptSlides[0]} />, isDark: false },
  { component: <MarketingResearchTaskPrompt config={taskPromptSlides[1]} />, isDark: false },
  { component: <MarketingResearchTaskPrompt config={taskPromptSlides[2]} />, isDark: false },
  { component: <MarketingResearchTaskPrompt config={taskPromptSlides[3]} />, isDark: false },
  { component: <MarketingResearchToolMap />, isDark: false },
  { component: <MarketingResearchGuardrails />, isDark: false },
];

const allSlidesDataDay2 = [
  // ── Cover & Intro ──────────────────────────────────────────
  { component: <Day2Cover />, isDark: false },
  { component: <Day2Agenda />, isDark: false },
  { component: <Day1Recap />, isDark: false },

  // ── Session 3: AI Tools Mastery (09.10 – 11.00) ────────────
  { component: <ChapterSlide number="3" chapter="AI Tools Mastery" time="45 minutes"
      title="Tools Worth Practicing."
      subtitle="A focused toolkit for daily work, content, and team collaboration."
    />, isDark: true },
  { component: <ToolsLandscape />, isDark: false },

  // 10 tool showcases — each one slide, minimal text
  { component: <ToolShowcase
      index={1} total={10}
      name="ChatGPT" color="#10a37f" Mark={MessageSquare}
      tagline="Asisten kerja untuk ide, draft, dan review."
      bestFor={['Brainstorm', 'Draft', 'Review']}
      example="Draft email follow-up setelah meeting."
      url="chatgpt.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="ChatGPT" color="#10a37f" Icon={MessageSquare}
      useCase="Email follow-up distributor"
      output="Dari konteks meeting menjadi email profesional, value proposition, dan CTA meeting lanjutan."
      chips={['Konteks meeting', 'Output format', 'Tone B2B', 'CTA']}
      prompt={toolPrompts.chatgpt}
    />, isDark: false },

  { component: <ToolShowcase
      index={2} total={10}
      name="Claude" color="#cc785c" Mark={Bot}
      tagline="Membantu analisis dokumen dan penulisan rapi."
      bestFor={['Dokumen', 'Ringkasan', 'Struktur']}
      example="Ringkas product brief untuk tim commercial."
      url="claude.ai"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="Claude" color="#cc785c" Icon={Bot}
      useCase="Sales enablement pack"
      output="Dari datasheet, FAQ, dan notes training menjadi battlecard dan objection handling."
      chips={['Upload dokumen', 'Battlecard', 'Comparison', 'Validasi klaim']}
      prompt={toolPrompts.claude}
    />, isDark: false },

  { component: <ToolShowcase
      index={3} total={10}
      name="Gemini" color="#4285f4" Mark={Sparkles}
      tagline="AI yang dekat dengan Google Workspace."
      bestFor={['Docs', 'Sheets', 'Gmail']}
      example="Bantu susun insight dari data spreadsheet."
      url="gemini.google.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="Gemini" color="#4285f4" Icon={Sparkles}
      useCase="Revenue review dari Sheets"
      output="Dari data penjualan menjadi summary, risiko, rekomendasi action, dan draft update internal."
      chips={['Google Sheets', 'Revenue insight', 'Action list', 'No fake numbers']}
      prompt={toolPrompts.gemini}
    />, isDark: false },

  { component: <ToolShowcase
      index={4} total={10}
      name="NotebookLM" color="#1e88e5" Mark={BookOpen}
      tagline="Tanya jawab berbasis sumber yang diunggah."
      bestFor={['Manual', 'Q&A', 'Audio overview']}
      example="Upload product manual untuk materi training."
      media={{ type: 'video', src: '/notebooklm-listen-learn.mp4' }}
      url="notebooklm.google.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="NotebookLM" color="#1e88e5" Icon={BookOpen}
      useCase="Audio overview dari report"
      output="Dari source report menjadi naskah podcast leadership yang tetap berbasis citation."
      chips={['Upload source', 'Podcast script', 'Citation', 'Source only']}
      prompt={toolPrompts.notebooklm}
    />, isDark: false },
  { component: <NotebookLMCapabilities />, isDark: false },
  ...notebookLMPractices.map((practice) => ({
    component: <NotebookLMSourcesPrompt practice={practice} />,
    isDark: false,
  })),

  { component: <ToolShowcase
      index={5} total={10}
      name="Gamma" color="#a855f7" Mark={Presentation}
      tagline="Membuat deck dari outline singkat."
      bestFor={['Deck', 'Brief', 'Report']}
      example="Outline product update menjadi slide."
      url="gamma.app"
    />, isDark: false },
  { component: <GammaPromptExample />, isDark: false },

  { component: <ToolShowcase
      index={6} total={10}
      name="Canva AI" color="#00c4cc" Mark={ImageIcon}
      tagline="Desain visual untuk konten, deck, dan materi promosi."
      bestFor={['Poster', 'Deck', 'Social']}
      example="Buat visual campaign produk."
      url="canva.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="Canva AI" color="#00c4cc" Icon={ImageIcon}
      useCase="Campaign visual bundle"
      output="Dari brief promo menjadi konsep visual feed, story, dan marketplace banner."
      chips={['Format asset', 'Headline', 'Benefits', 'Brand style']}
      prompt={toolPrompts.canva}
    />, isDark: false },

  { component: <ToolShowcase
      index={7} total={10}
      name="ElevenLabs" color="#0d9488" Mark={Mic2}
      tagline="Membuat voiceover untuk audio dan video."
      bestFor={['Voiceover', 'Audio', 'Narration']}
      example="Voiceover video tutorial produk."
      url="elevenlabs.io"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="ElevenLabs" color="#0d9488" Icon={Mic2}
      useCase="Voiceover training partner"
      output="Dari script kasar menjadi voiceover final, versi pendek, pronunciation notes, dan arahan pacing."
      chips={['Script source', 'Tone', 'Pacing', 'Pronunciation']}
      prompt={toolPrompts.elevenlabs}
    />, isDark: false },

  { component: <ToolShowcase
      index={8} total={10}
      name="VEED" color="#111827" Mark={Film}
      tagline="Edit video cepat untuk materi komunikasi."
      bestFor={['Video', 'Subtitles', 'Clips']}
      example="Edit video singkat untuk launching."
      url="veed.io"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="VEED" color="#111827" Icon={Film}
      useCase="Launch video editing brief"
      output="Dari asset video menjadi scene plan, overlay text, subtitle, music direction, dan CTA."
      chips={['Scene timing', 'Overlay', 'Subtitle', 'CTA']}
      prompt={toolPrompts.veed}
    />, isDark: false },

  { component: <ToolShowcase
      index={9} total={10}
      name="Google Stitch" color="#34a853" Mark={Code2}
      tagline="Membantu membuat konsep UI dari prompt."
      bestFor={['UI draft', 'Prototype', 'Layout']}
      example="Mockup halaman partner portal."
      url="stitch.withgoogle.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="Google Stitch" color="#34a853" Icon={Code2}
      useCase="Partner portal UI"
      output="Dari brief produk menjadi konsep dashboard B2B lengkap dengan state UI."
      chips={['Audience', 'Feature list', 'UI states', 'Desktop-first']}
      prompt={toolPrompts.stitch}
    />, isDark: false },

  { component: <ToolShowcase
      index={10} total={10}
      name="Pomelli" color="#f97316" Mark={Megaphone}
      tagline="Membantu ide kampanye dan materi brand."
      bestFor={['Campaign', 'Copy', 'Assets']}
      example="Ide konten untuk launch produk."
      url="pomelli.googlelabs.com"
    />, isDark: false },
  { component: <ToolPromptExample
      tool="Pomelli" color="#f97316" Icon={Megaphone}
      useCase="Campaign platform UMKM"
      output="Dari audience brief menjadi big idea, message pillars, content ideas, activation, dan asset list."
      chips={['Audience', 'Big idea', 'Message pillars', 'Asset list']}
      prompt={toolPrompts.pomelli}
    />, isDark: false },

  { component: <ToolPickerMatrix />, isDark: false },

  { component: <QnASlide moduleName="AI Tools Mastery" duration="10 menit"
      topics={['ChatGPT', 'Claude', 'Gemini', 'NotebookLM', 'Gamma', 'Canva AI', 'ElevenLabs', 'VEED', 'Google Stitch', 'Pomelli']}
    />, isDark: false },

  // ── Day 2 Session 2: Ethics & Risks (15 minutes) ────────
  { component: <ChapterSlide number="2" chapter="Ethics & Risks" time="15 minutes"
      title="Use It Responsibly."
      subtitle="Hallucinations, privacy, bias — and when AI should not be used."
    />, isDark: true },

  { component: <EthicsWhy />, isDark: false },
  { component: <Hallucination />, isDark: false },
  { component: <FactCheckFlow />, isDark: false },
  { component: <DataPrivacy />, isDark: false },
  { component: <PrivacyChecklist />, isDark: false },
  { component: <AIBias />, isDark: false },
  { component: <HumanInTheLoop />, isDark: false },
  { component: <AuditTrail />, isDark: false },
  { component: <AIRedFlags />, isDark: false },

  { component: <QuizSlide
      kicker="Quick Check · After Ethics"
      title="Anda mau pakai ChatGPT untuk draft proposal ke partner. Mana yang TIDAK boleh masuk prompt?"
      context="Tim sales sedang menyiapkan proposal untuk distributor baru."
      options={[
        { id: 'A', label: 'Daftar produk yang sudah ada di website publik.', isCorrect: false, explain: '' },
        { id: 'B', label: 'Margin dan harga partner internal.', isCorrect: true,
          explain: 'Harga partner dan margin adalah informasi sensitif. Data ini bisa bocor lewat training model atau log. Untuk angka internal, gunakan tool enterprise atau redact dulu.' },
        { id: 'C', label: 'Outline section proposal yang umum.', isCorrect: false, explain: '' },
        { id: 'D', label: 'Nama produk dan kategori.', isCorrect: false, explain: '' },
      ]}
    />, isDark: false },

  { component: <QnASlide moduleName="Ethics & Risks" duration="10 menit"
      topics={['Halusinasi', 'Privasi data', 'Bias', 'Human-in-the-loop', 'Red flags']}
    />, isDark: false },

  // ── Session 3: Group Work (45 minutes) ──────────────────
  { component: <ChapterSlide number="3" chapter="Group Work" time="45 minutes"
      title="Time to Execute."
      subtitle="30 minutes of teamwork, 15 minutes of presentations."
    />, isDark: true },

  { component: <MarketingResearchGroupFlow />, isDark: false },
  { component: <MarketingResearchGroupDeliverables />, isDark: false },
  { component: <MarketingResearchGroupPresentation />, isDark: false },

  { component: <ChapterSlide number="4" chapter="Presentation & Key Takeaways" time="15 minutes"
      title="Make the Learning Stick."
      subtitle="Present the work, capture the key lessons, and choose one next step to apply."
    />, isDark: true },

  // ── Closing ─────────────────────────────────────────────────
  { component: <KeyTakeawaysDay2 />, isDark: false },
  { component: <ResourcesSlide />, isDark: false },
  { component: <PostTestSlide />, isDark: false },
  { component: <Day2Closing />, isDark: false },
];

// Day 1 now hosts the Tools Mastery block after Prompt Engineering.
export const slidesDataDay2Full = allSlidesDataDay2;
export const slidesDataDay2 = [
  ...allSlidesDataDay2.slice(0, 3),
  ...marketingResearchSlides,
  ...allSlidesDataDay2.slice(32),
];
