import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function MarketingStrategy() {
  return (
    <UseCaseTemplate
      kicker="Marketing · Use Case 2 of 4"
      title="Content Planning ke Google Calendar."
      scenario="Bikin kalender konten 30 hari yang biasanya makan 1-2 hari kerja, sekarang selesai dalam hitungan menit. Output sudah dalam format tabel — siap di-import ke Google Calendar lengkap dengan reminder H-1."
      outcomes={[
        { title: 'Plan 30 hari sekali jadi', desc: 'Tabel lengkap: Date, Time, Platform, Content Type, Topic, Caption, CTA, Reminder.' },
        { title: 'Multi-platform sekaligus', desc: 'Atur Instagram, TikTok, LinkedIn dalam satu kalender — variasi konten otomatis.' },
        { title: 'Siap di-import ke kalender', desc: 'Format kompatibel Google Calendar — tinggal upload, semua reminder ter-set otomatis.' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Buatkan content planning 7 hari untuk KAO Indonesia. Target: konsumen produk personal care dan household di Indonesia. Platform: Instagram + TikTok, 1 post/hari. Kategori: edukasi, penggunaan produk, promosi, testimoni, dan tips. Output: tabel dengan kolom Date | Time | Platform | Content Type | Topic | Caption | CTA | Reminder.',
        image: 'https://cdn-web.ruangguru.com/file-uploader/e0441ef7-f051-4bae-bc48-c6d774ad28dd.png',
      }}
    />
  );
}
MarketingStrategy.displayName = 'MarketingStrategy';
