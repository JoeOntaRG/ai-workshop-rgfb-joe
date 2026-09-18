import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { ACCENT, ACCENT_BORDER, ACCENT_DARK } from '../../../theme';

const portrait1 = 'https://cdn-web.ruangguru.com/file-uploader/944ec341-32f2-4133-9b26-7357bb1e09e9.mp4';
const portrait2 = 'https://cdn-web.ruangguru.com/file-uploader/61f56088-fe79-4789-a48f-d12b524a7e49.mp4';

const fullPrompt = `Buatkan saya video marketing produk untuk keyboard ini. Buat videonya dalam resolusi portrait 1920×1080 (16:9). Detailnya adalah sebagai berikut:

Konsep 1 — "Kerja Jadi Mood Booster"

Style: aesthetic, cozy, Gen Z
Durasi: 30–45 detik
Target: mahasiswa, content creator, pekerja WFH

Opening (0–5s)
Visual:
- Meja kerja berantakan
- Mood kerja terlihat malas
- Close-up tangan buka laptop
Text on screen: "Kerja tapi mood hilang?"

Scene 2 (5–12s)
Visual:
- Produk consumer care KAO Indonesia diletakkan di meja
- Lighting berubah lebih warm & aesthetic
- Suara keyboard soft typing ASMR
Voice over: "Kadang yang bikin semangat itu… setup yang nyaman dipandang."

Scene 3 (12–22s)
Visual:
- Typing cepat
- Bluetooth connect ke tablet/laptop
- Close-up tombol dan desain pastel
Text overlay:
- Wireless
- Compact
- Quiet typing
- Cute aesthetic

Scene 4 (22–35s)
Visual:
- Orang kerja sambil minum kopi
- Desk setup full pink aesthetic
Voice over: "Minimalis, manis, dan bikin meja kerja kelihatan lebih premium."

Closing (35–45s)
Visual:
- Hero shot keyboard
- Lampu aesthetic
Text: "Upgrade mood kerja kamu ✨"
CTA: "Checkout sekarang sebelum kehabisan warna favoritmu."`;

function PortraitCard({ src, label }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border-2 shadow-2xl bg-black"
      style={{ borderColor: ACCENT_BORDER, aspectRatio: '9 / 16', height: '500px' }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-sm pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">{label}</span>
      </div>
    </div>
  );
}

export default function DesignVideoPortraits() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* no-op */ }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10 py-6">
      <div className="text-center mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT_DARK }}>
          Design · Use Case 5 of 6
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.05]">
          Video Vertikal untuk <span style={{ color: ACCENT }}>Reels & TikTok</span>.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-6">
        <PortraitCard src={portrait1} label="Portrait · 9:16" />
        <PortraitCard src={portrait2} label="Portrait · 9:16" />
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border bg-white hover:shadow-md transition-all"
        style={{ borderColor: `${ACCENT}40`, color: ACCENT_DARK }}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? 'Prompt tersalin' : 'Copy prompt video'}
      </button>
    </div>
  );
}
DesignVideoPortraits.displayName = 'DesignVideoPortraits';
