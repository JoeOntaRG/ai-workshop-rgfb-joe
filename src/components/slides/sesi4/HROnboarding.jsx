import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function HROnboarding() {
  return (
    <UseCaseTemplate
      kicker="HR · Use Case 3 of 3"
      title="Employee Engagement Dashboard."
      scenario="Survei engagement bulanan biasanya berakhir di spreadsheet yang tidak pernah dibuka lagi. Dengan satu prompt, data engagement, burnout risk, dan sentiment berubah jadi dashboard interaktif siap dibagikan ke leadership."
      outcomes={[
        { title: 'KPI HR lengkap',         desc: 'Engagement, burnout risk, sentiment, dan job satisfaction dalam satu tampilan.' },
        { title: 'One-on-One ready',       desc: 'AI menyiapkan agenda 1-on-1 berdasarkan kondisi tiap karyawan, lengkap pertanyaan empatik.' },
        { title: 'Rekomendasi actionable', desc: 'Bukan sekadar angka, AI memberi rekomendasi langkah konkret untuk HR dan manager.' },
      ]}
      tools={['Claude (Artifacts)', 'ChatGPT', 'NotebookLM']}
      chat={{
        prompt: 'Buat dashboard Employee Engagement untuk tim HR non-teknis. Fitur: ringkasan engagement, statistik burnout, sentiment analysis, grafik per departemen, daftar karyawan risiko tinggi, dan rekomendasi AI. Tampilan clean, bahasa Indonesia.',
        response: '**Dashboard ready** — 5 kartu KPI (Avg Engagement 7,2/10 · Burnout High 8 orang · Sentiment +0,42)\n\n**AI Recommendation:**\n• 8 karyawan risiko burnout tinggi mayoritas dari tim Technical Support — pertimbangkan rotasi shift\n• Skor work-life balance turun 12% di bulan ini — usulkan no-meeting Wednesday',
      }}
      demoLink={{ url: 'https://claude.ai/public/artifacts/4416a0a4-0f8c-48ee-9c25-b9cb4ffeb3fa', label: 'Buka dashboard interaktif' }}
      sampleData={{ url: 'https://docs.google.com/spreadsheets/d/1f66k0Jk9e_Ysa3Ru4K3bjVwwz0jjsqrqFtU328QrCYA/edit?usp=sharing', label: 'Data engagement' }}
    />
  );
}
HROnboarding.displayName = 'HROnboarding';
