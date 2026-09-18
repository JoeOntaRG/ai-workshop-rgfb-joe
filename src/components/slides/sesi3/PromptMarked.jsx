import React from 'react';
import { ACCENT } from '../../../theme';
import { Mark, MARK_COLORS } from './promptMarks';

export default function PromptMarked() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
            Bedah Prompt
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-tight">
            Anatomi Prompt yang <span style={{ color: ACCENT }}>Solid</span>.
          </h2>
          <p className="text-base text-gray-500 font-medium mt-2">
            Satu prompt utuh — lima komponen yang bekerja sama.
          </p>
        </div>

        {/* Notebook-style paper with the marked prompt */}
        <div className="relative bg-white border-2 border-gray-200 rounded-3xl px-10 pt-12 pb-8 shadow-sm">
          {/* Corner tab */}
          <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Prompt
          </div>
          <div className="absolute top-4 right-6 text-[10px] font-mono text-gray-400">
            chat.openai.com
          </div>

          <p className="text-[17px] text-gray-800 leading-[2.6] font-medium">
            <Mark kind="role">Bertindaklah sebagai senior HR business partner dengan pengalaman 10 tahun di startup teknologi Indonesia.</Mark>
            {' '}
            <Mark kind="task">Tulis job description untuk posisi Marketing Manager</Mark>
            {' '}di{' '}
            <Mark kind="context">perusahaan B2B SaaS, 50 karyawan, kerja hybrid di Jakarta, target pasar UKM Indonesia</Mark>.
            {' '}Sajikan{' '}
            <Mark kind="format">dalam bullet points, maksimal 150 kata, dengan section "Tanggung Jawab" dan "Kualifikasi"</Mark>.
            {' '}
            <Mark kind="constraint">Hindari jargon, tone profesional tapi hangat, gunakan Bahasa Indonesia</Mark>.
          </p>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Legenda</span>
          {Object.entries(MARK_COLORS).map(([k, c]) => (
            <div key={k} className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: c.strong }}
              />
              <span className="text-xs font-bold text-gray-600">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
PromptMarked.displayName = 'PromptMarked';
