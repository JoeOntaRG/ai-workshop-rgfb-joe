import React from 'react';
import { Sparkles, ExternalLink, FileSpreadsheet } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1D48dudtDgd1bIx4ZoJHy8LYe2tOAVumRb99AMTOdlZg/edit?gid=0#gid=0';
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=10&color=4338CA&data=${encodeURIComponent(SHEET_URL)}`;

export default function ResourcesSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 py-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        <div className="w-full md:w-[55%] flex flex-col gap-5">
          <div
            className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{ backgroundColor: ACCENT_BG, borderColor: ACCENT_BORDER }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: ACCENT_DARK }} />
            <span className="text-[10px] font-black uppercase tracking-[0.24em]" style={{ color: ACCENT_DARK }}>
              Bonus Resource
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            Library Prompt<br />Template.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Koleksi prompt siap pakai dari workshop ini — HR, Marketing, Finance, Operations, dan Design.
            Tinggal copy, ganti variabel, langsung jalan.
          </p>

          <a
            href={SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 px-5 py-3 rounded-2xl border-2 bg-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all mt-2"
            style={{ borderColor: ACCENT }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              <FileSpreadsheet className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Google Sheet</span>
              <span className="text-base font-black text-gray-900 leading-tight">Buka Library Prompt</span>
            </div>
            <ExternalLink className="w-4 h-4 ml-3" style={{ color: ACCENT_DARK }} />
          </a>

          <p className="text-xs font-mono text-gray-400 break-all max-w-md mt-1">
            docs.google.com/spreadsheets/d/1D48d…AMTOdlZg
          </p>
        </div>

        <div className="w-full md:w-[45%] flex items-center justify-center">
          <div
            className="relative rounded-3xl border-2 bg-white p-6 shadow-2xl"
            style={{ borderColor: ACCENT_BORDER }}
          >
            <img
              src={QR_URL}
              alt="QR untuk Library Prompt"
              className="w-64 h-64 object-contain"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-center mt-3" style={{ color: ACCENT_DARK }}>
              Scan untuk buka
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
ResourcesSlide.displayName = 'ResourcesSlide';
