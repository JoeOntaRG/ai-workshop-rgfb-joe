import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function HRScreening() {
  return (
    <UseCaseTemplate
      kicker="HR · Use Case 2 of 3"
      title="Screening Bias-Aware."
      scenario="Screening manual menghabiskan 8–10 jam per posisi dan rawan bias. Dengan AI, upload semua CV sekaligus dan minta analisis kontekstual yang abaikan nama, usia, gender, dan foto."
      outcomes={[
        { title: 'Skor + bukti dari CV', desc: 'Setiap kandidat mendapat skor per kriteria, lengkap kutipan dari CV-nya sebagai bukti.' },
        { title: 'Bias guardrails',      desc: 'Prompt eksplisit meminta AI mengabaikan info demografis dan latar belakang personal.' },
        { title: 'Pertanyaan interview',  desc: 'AI sekaligus mengusulkan pertanyaan interview relevan berdasarkan CV.' },
      ]}
      chat={{
        prompt: 'Anda Senior HR Recruiter. Analisis kesesuaian kandidat untuk role digital di KAO Indonesia. Output: skor 0–100 per kriteria, bukti dari CV, gap kandidat, dan 5 pertanyaan interview. Abaikan info demografis.',
        response: '**Candidate Match Analysis**\n\n| Kriteria | Skor | Bukti |\n|---|---|---|\n| Web stack & CMS | 86/100 | "Migrasi WordPress + Shopify untuk 3 brand retail" |\n| SEO + Core Web Vitals | 78/100 | "Naikkan LCP dari 4,2s ke 1,8s di e-commerce..." |\n\n**Rekomendasi: Direkomendasikan** — match kuat di stack dan performa, perlu verifikasi pengalaman manajemen vendor saat interview.',
      }}
      demoLink={{ url: 'https://claude.ai/share/5675a0e6-92a2-4670-a967-d548858eee39', label: 'Lihat hasil screening' }}
      sampleData={{ url: 'https://drive.google.com/drive/folders/1jd8QmB7wlH2DBAcHOFWT1mbXdPwWZv23?usp=sharing', label: 'CV dummy (folder)' }}
    />
  );
}
HRScreening.displayName = 'HRScreening';
