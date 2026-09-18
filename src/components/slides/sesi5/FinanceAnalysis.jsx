import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function FinanceAnalysis() {
  return (
    <UseCaseTemplate
      kicker="Finance · Use Case 1 of 5"
      title="Stock Management Dashboard dari Excel."
      scenario="Data stok dengan 20 produk dan ratusan transaksi biasanya berakhir di pivot table yang sulit dibaca. Upload Excel ke Claude, satu prompt dashboard, lalu insight low-stock dan best seller muncul dalam hitungan menit."
      outcomes={[
        { title: 'KPI cards otomatis',   desc: 'Revenue, profit, stock value, low-stock alert, overstock alert dalam satu glance.' },
        { title: 'Drill-down per produk', desc: 'Status stok, turnover, dan margin per SKU; sortable & filterable.' },
        { title: 'Action recommendation', desc: 'AI menandai produk yang harus segera di-reorder dan yang slow-moving.' },
      ]}
      tools={['Claude (Artifacts)', 'ChatGPT', 'NotebookLM']}
      chat={{
        prompt: 'Berdasarkan file Excel stock management ini (6 sheets: Products, Current_Stock, transaksi masuk/keluar, statistics), buat dashboard interaktif untuk tim non-teknis. Section: KPI cards, status stok, sales analysis, inventory analytics, supplier analysis, dengan filter & search.',
        response: '**Dashboard siap.** 5 produk Low Stock (perlu reorder), Mouse Gaming RGB Pro best seller (180 unit terjual), kategori Mouse menyumbang 35% revenue, TechSupply Co supplier paling aktif (120 transaksi).',
      }}
      demoLink={{ url: 'https://claude.ai/public/artifacts/5befc8bd-c464-4ce3-b14e-0b4a923e6c94', label: 'Buka dashboard interaktif' }}
      sampleData={{ url: 'https://docs.google.com/spreadsheets/d/1IQc8WC3tr6sBAu7tAl6E839QkrtRHjnB/edit?usp=sharing', label: 'Data stok (Excel)' }}
    />
  );
}
FinanceAnalysis.displayName = 'FinanceAnalysis';
