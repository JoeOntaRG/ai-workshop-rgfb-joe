import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function MarketingSEO() {
  return (
    <UseCaseTemplate
      kicker="Marketing · Use Case 4 of 4"
      title="Riset Keyword & Outline Blog."
      scenario="Riset keyword + nulis meta tag + outline blog biasanya makan setengah hari kerja. Dengan AI, satu prompt menghasilkan cluster keyword, meta title/description, dan outline lengkap — tinggal review."
      outcomes={[
        { title: 'Long-tail keywords',   desc: 'AI menggali kata kunci dengan search intent yang spesifik, bukan keyword umum yang sudah ramai.' },
        { title: 'Meta tag siap pakai',  desc: 'Title 60 karakter & description 155 karakter — sudah optimal untuk SERP.' },
        { title: 'Outline blog terstruktur', desc: 'H1, H2, H3 lengkap dengan poin pembahasan tiap section. Tinggal di-fill in.' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Saya mau bikin blog post untuk produk consumer care KAO Indonesia, target konsumen Indonesia. Buatkan: (1) 10 long-tail keyword dengan search intent, (2) meta title + description, (3) outline H1-H3 lengkap.',
        image: 'https://cdn-web.ruangguru.com/file-uploader/aefd41ae-3ff4-498b-b445-c440a527aa39.png',
      }}
    />
  );
}
MarketingSEO.displayName = 'MarketingSEO';
