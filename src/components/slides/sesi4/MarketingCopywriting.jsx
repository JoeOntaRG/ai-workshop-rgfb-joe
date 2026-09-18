import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function MarketingCopywriting() {
  return (
    <UseCaseTemplate
      kicker="Marketing · Use Case 1 of 4"
      title="Marketing Ideation."
      scenario="Punya produk baru tapi mentok di brainstorm? Cukup kasih nama produk + daftar fitur, AI keluarkan tabel campaign theme, tagline, dan audience persona dalam hitungan detik — tinggal pilih yang paling cocok."
      outcomes={[
        { title: 'Campaign theme',  desc: 'Tema besar yang menyatukan seluruh aset konten dalam satu narasi.' },
        { title: 'Tagline siap',    desc: 'Beberapa opsi tagline dengan tone berbeda untuk A/B testing.' },
        { title: 'Audience persona', desc: 'Profil target berdasarkan fitur produk — siapa yang paling butuh.' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Saya akan membuat content marketing baru untuk produk consumer care KAO Indonesia. Jabarkan dalam bentuk tabel apa saja yang bisa saya lakukan untuk campaign seperti campaign theme, tagline, dan audience persona. Fitur produk: [MASUKKAN FAKTA PRODUK YANG SUDAH DIVALIDASI].',
        response: '| Theme | Tagline | Persona |\n|---|---|---|\n| "Selalu On" | "Listrik padam? Kerja lanjut." | UMKM kasir & WFH |\n| "Lindungi Data" | "Save sebelum mati lampu." | Freelancer & designer |\n| "Setup 1 Kabel" | "Plug, lupakan, kerja." | IT corporate |',
      }}
    />
  );
}
MarketingCopywriting.displayName = 'MarketingCopywriting';
