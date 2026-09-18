import React from 'react';
import { AlertTriangle, Check, ArrowDown } from 'lucide-react';
import { ACCENT } from '../../../theme';

export default function MistakeDetail({ index, total, bad, why, fix }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-12">
        {/* Eyebrow */}
        <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
          Kesalahan Prompt · {index} dari {total}
        </p>

        {/* Bad */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-7 h-7 text-rose-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight">
            {bad}
          </h2>
        </div>

        {/* Why */}
        <div className="mb-5 rounded-2xl bg-rose-50 border border-rose-200 px-6 py-4 ml-[72px]">
          <p className="text-[11px] font-bold uppercase tracking-widest text-rose-600 mb-1">
            Kenapa bermasalah
          </p>
          <p className="text-lg text-gray-800 font-medium leading-relaxed">{why}</p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <ArrowDown className="w-7 h-7 text-gray-300" strokeWidth={2.5} />
        </div>

        {/* Fix */}
        <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1.5">
                Perbaikan
              </p>
              <p className="text-lg text-emerald-900 font-medium leading-relaxed">{fix}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
MistakeDetail.displayName = 'MistakeDetail';
