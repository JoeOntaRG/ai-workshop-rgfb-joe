import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../theme';

/**
 * QuizSlide — interactive quiz for engagement check-ins.
 *
 * Props:
 *  - kicker: small uppercase label (e.g. "Quick Check · After AI Demystified")
 *  - title: main quiz prompt / question
 *  - options: [{ id, label, isCorrect, explain }]
 *  - context: optional case study snippet shown above the question
 */
export default function QuizSlide({ kicker, title, options, context, contextLabel = 'Studi Kasus' }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (id) => {
    if (revealed) return;
    setSelected(id);
  };

  const reveal = () => {
    if (selected !== null) setRevealed(true);
  };

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  const correctOption = options.find(o => o.isCorrect);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4" style={{ color: ACCENT }} />
            <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              {kicker || 'Quick Check'}
            </p>
          </div>
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
              {title}
            </h2>
          )}
        </div>

        {context && (
          <div className="mb-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{contextLabel}</p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium italic">{context}</p>
          </div>
        )}

        <div className="flex flex-col gap-3 mb-6">
          {options.map((opt, i) => {
            const isSelected = selected === opt.id;
            const isCorrect = opt.isCorrect;
            const showState = revealed && (isSelected || isCorrect);
            let bg = 'white', border = '#e5e7eb', textCol = '#374151', icon = null;

            if (revealed) {
              if (isCorrect) {
                bg = '#ecfdf5'; border = '#10b981'; textCol = '#065f46';
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
              } else if (isSelected && !isCorrect) {
                bg = '#fef2f2'; border = '#ef4444'; textCol = '#991b1b';
                icon = <XCircle className="w-5 h-5 text-rose-600" />;
              }
            } else if (isSelected) {
              bg = ACCENT_BG; border = ACCENT; textCol = ACCENT_DARK;
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={revealed}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl border-2 text-left transition-all duration-300"
                style={{
                  backgroundColor: bg, borderColor: border, color: textCol,
                  cursor: revealed ? 'default' : 'pointer',
                  transform: isSelected && !revealed ? 'scale(1.01)' : 'scale(1)',
                }}
              >
                <span className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-sm"
                      style={{
                        backgroundColor: isSelected || (revealed && isCorrect) ? border : '#f3f4f6',
                        color: isSelected || (revealed && isCorrect) ? 'white' : '#9ca3af',
                      }}>
                  {opt.id}
                </span>
                <span className="text-lg font-medium leading-snug flex-1">{opt.label}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {!revealed ? (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400 font-medium italic">
              {selected === null ? 'Pilih jawaban yang menurut Anda benar.' : 'Siap melihat jawabannya?'}
            </p>
            <button
              onClick={reveal}
              disabled={selected === null}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all"
              style={{
                backgroundColor: selected === null ? '#e5e7eb' : ACCENT,
                color: selected === null ? '#9ca3af' : 'white',
                cursor: selected === null ? 'not-allowed' : 'pointer',
              }}
            >
              Lihat jawaban <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border p-5"
               style={{ backgroundColor: ACCENT_BG, borderColor: ACCENT_BORDER }}>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ACCENT_DARK }} />
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-widest mb-1" style={{ color: ACCENT_DARK }}>
                  Jawaban · {correctOption?.id}
                </p>
                <p className="text-base text-gray-800 leading-relaxed font-medium">
                  {correctOption?.explain}
                </p>
              </div>
              <button onClick={reset}
                      className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition">
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
QuizSlide.displayName = 'QuizSlide';
