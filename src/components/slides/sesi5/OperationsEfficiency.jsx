import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function OperationsEfficiency() {
  return (
    <UseCaseTemplate
      kicker="Operations · Use Case 3 of 5"
      title="Pilih Proses yang Harus Diotomasi Pertama."
      scenario="Punya 10 proses manual tapi nggak tahu mulai dari mana? Upload list-nya ke AI, langsung dapat scoring impact vs effort, plus tandai mana yang BERISIKO kalau diotomasi penuh."
      outcomes={[
        { title: 'Scoring objektif',     desc: 'Impact (1-5), effort (1-5), risk (rendah/sedang/tinggi) — bukan tebak-tebakan.' },
        { title: 'Top 3 yang prioritas', desc: 'AI rangking 3 proses yang paling worth diotomasi pertama berdasarkan ROI.' },
        { title: 'Risk awareness',       desc: 'Menandai proses yang sebaiknya TETAP manual (mis. approval expense besar).' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Saya upload daftar 10 proses manual di tim ops (frekuensi, durasi, status). Tolong: (1) scoring impact/effort/risk per proses, (2) ranking top 3 yang harus diotomasi pertama, (3) tandai mana yang SEBAIKNYA tidak diotomasi penuh.',
        response: '**Top 3 untuk otomasi:**\n1. **Cek status pengiriman** (Impact 5, Effort 2, Risk Rendah) — hemat 8 jam/bulan, integrasikan dengan API kurir\n2. **Update stok marketplace** (Impact 4, Effort 3) — pakai sync tool ke Tokopedia/Shopee\n3. **Generate invoice reseller** (Impact 5, Effort 3) — template + Zapier\n\n**JANGAN otomasi penuh:**\n• Approval expense >5jt — tetap perlu review manusia\n• Onboarding distributor baru — relasi tidak bisa di-template',
      }}
      sampleData={{ url: '/ops-sample-processes.csv', label: 'Download daftar proses (CSV)' }}
    />
  );
}
OperationsEfficiency.displayName = 'OperationsEfficiency';
