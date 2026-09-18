import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function HRJobDescription() {
  return (
    <UseCaseTemplate
      kicker="HR · Use Case 1 of 3"
      title="JD + Poster Rekrutmen dalam Satu Alur."
      scenario="JD biasanya butuh 2–3 hari revisi; poster rekrutmen butuh sehari lagi di tim desain. Dengan alur ChatGPT → Canva AI, JD profesional dan poster siap publish selesai dalam satu jam."
      outcomes={[
        { title: 'JD outcome-based',     desc: 'Struktur lengkap: ringkasan, tanggung jawab, kualifikasi wajib, KPI, dan benefit.' },
        { title: 'Bias-aware language',  desc: 'Prompt instruksi netral gender dan inklusif sejak draft pertama.' },
        { title: 'Poster langsung jadi', desc: 'Hasil JD di-paste ke Canva AI untuk generate poster rekrutmen siap edit.' },
      ]}
      tools={['ChatGPT', 'Claude', 'Canva AI']}
      chat={{
        prompt: 'Bertindaklah sebagai HR Professional & Talent Acquisition Specialist. Buat JD untuk posisi Webmaster di KAO Indonesia. Output: ringkasan, tanggung jawab, kualifikasi, KPI, benefit. Gunakan bahasa inklusif, hindari bias.',
        response: '**Ringkasan posisi** — Webmaster bertanggung jawab atas keandalan, performa, dan keamanan website KAO Indonesia serta katalog produk online...\n\n**Tanggung jawab utama**\n• Mengelola uptime website dan halaman produk\n• Mengoptimasi performa halaman untuk SEO\n• Berkoordinasi dengan tim Marketing untuk landing page campaign...',
      }}
      demoLink={{ url: 'https://chatgpt.com/share/6a0492d4-3694-83ec-8ab1-da2f077f58f1', label: 'Lihat hasil JD asli' }}
    />
  );
}
HRJobDescription.displayName = 'HRJobDescription';
