import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function MarketingAnalytics() {
  return (
    <UseCaseTemplate
      kicker="Marketing · Use Case 3 of 4"
      title="Moodboard dari 1 Baris Prompt."
      scenario="Sebelum brief ke designer atau eksekusi konten, AI image-gen bikin moodboard yang menyatukan vision tim — palet warna, gaya foto, dan vibe produk. Cukup upload foto produk, sisanya AI urus."
      outcomes={[
        { title: 'Visual reference instan', desc: 'Palet warna, lighting, dan setting siap pakai sebelum sesi foto produk dimulai.' },
        { title: 'Selaras tim & vendor',    desc: 'Designer, fotografer, dan content creator paham vibe yang dimaksud tanpa ratusan revisi.' },
        { title: 'Variasi cepat',           desc: 'Cobain 5 mood berbeda dalam 5 menit; pilih yang paling sesuai brand.' },
      ]}
      tools={['Gemini Imagen', 'Midjourney', 'DALL-E', 'Ideogram']}
      chat={{
        prompt: 'Buatkan saya gambar moodboard untuk produk ini agar saya bisa membuat konten marketing yang baik',
        image: 'https://cdn-web.ruangguru.com/file-uploader/3ba9e6f9-0e71-4822-84b1-3a4d23cf78e7.png',
      }}
    />
  );
}
MarketingAnalytics.displayName = 'MarketingAnalytics';
