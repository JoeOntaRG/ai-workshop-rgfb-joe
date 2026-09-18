import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function FinanceReports() {
  return (
    <UseCaseTemplate
      kicker="Finance · Use Case 1 of 5"
      title="Ringkas Data Penjualan dalam 1 Menit."
      scenario="Punya data penjualan bulanan dalam Excel/CSV tapi bingung lihat tren? Upload ke AI, satu prompt, langsung dapat ringkasan: produk terlaris, channel paling profit, dan rekomendasi action."
      outcomes={[
        { title: 'Total & breakdown',  desc: 'Total revenue, jumlah unit terjual, dan distribusi per kategori produk.' },
        { title: 'Top performer',      desc: 'Produk paling laku, channel paling produktif, hari paling rame.' },
        { title: 'Action items',       desc: '2-3 rekomendasi: produk yang perlu di-restock, channel yang perlu diperkuat.' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Saya upload data penjualan KAO Indonesia bulan Mei. Tolong: (1) hitung total revenue bulan ini, (2) identifikasi produk terlaris, (3) bandingkan performa channel, (4) berikan rekomendasi action. Jangan mengarang angka dan sebutkan kolom yang digunakan.',
        response: '**Total revenue Mei: Rp 10,648 juta** dari 32 transaksi.\n\n**Top 3 kategori**: Household care (Rp 4,608 jt), Personal care (Rp 3,420 jt), dan Beauty care (Rp 2,620 jt).\n\n**Channel dengan revenue tertinggi**: Reseller (Rp 4,384 jt — 41,2% total).\n\n**Action**: (1) cek ketersediaan SKU household care dengan demand tinggi. (2) Uji promo bundle personal care di marketplace.',
      }}
      sampleData={{ url: '/finance-sample-sales.csv', label: 'Download data penjualan (CSV)' }}
    />
  );
}
FinanceReports.displayName = 'FinanceReports';
