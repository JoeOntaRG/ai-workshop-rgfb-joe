import React from 'react';
import { UseCaseTemplate } from '../UseCaseTemplate';

export default function OperationsSOP() {
  return (
    <UseCaseTemplate
      kicker="Operations · Use Case 2 of 5"
      title="Ubah Catatan Workflow Jadi SOP Rapi."
      scenario="Proses kerja sering cuma ada di kepala atau chat WhatsApp. Upload catatan kasarnya ke AI, satu prompt, langsung jadi SOP terstruktur — tinggal review & approve."
      outcomes={[
        { title: 'Format SOP standar',   desc: 'Tujuan, Lingkup, Roles, Langkah-langkah, KPI, Eskalasi — semua section ter-isi otomatis.' },
        { title: 'Tidak ada yang miss',  desc: 'AI menandai gap dalam catatan (siapa PIC, kapan eskalasi) yang perlu dilengkapi.' },
        { title: 'Siap di-share',        desc: 'Output bisa langsung di-paste ke Google Docs / Notion sebagai SOP resmi.' },
      ]}
      tools={['Claude', 'ChatGPT', 'Gemini']}
      chat={{
        prompt: 'Saya punya catatan workflow penanganan return barang dari reseller (ditulis kasar di WA). Tolong rapikan jadi SOP lengkap dengan format: Tujuan, Lingkup, Roles & Tanggung Jawab, Langkah-langkah (numbered), KPI Sukses, dan Eskalasi.',
        response: '**SOP-OPS-001 · Penanganan Return Reseller**\n\n**Tujuan**: Memastikan klaim return diproses konsisten dalam SLA 5 hari kerja.\n\n**Roles**:\n• Admin Ops — first responder, log kasus\n• QC — verdict (refund/replace/tolak)\n• Finance — pencairan refund\n• Manager Ops — approval kasus >Rp 5jt\n\n**Langkah-langkah**:\n1. Terima klaim via WA, minta foto + invoice\n2. Validasi: kasus harus <14 hari sejak invoice…',
      }}
      sampleData={{ url: '/ops-sample-workflow-notes.txt', label: 'Download catatan workflow' }}
    />
  );
}
OperationsSOP.displayName = 'OperationsSOP';
