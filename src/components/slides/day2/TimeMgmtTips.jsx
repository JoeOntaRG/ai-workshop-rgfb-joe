import React, { useEffect, useState } from 'react';
import { ListChecks, Pause, Play, RotateCcw, Target, Timer, Zap } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const TOTAL_SECONDS = 30 * 60;

const tips = [
  { Icon: Timer,      label: 'Set 5-menit chunks',  detail: 'Pasang timer. Jangan terjebak iterasi tanpa akhir.' },
  { Icon: Zap,        label: 'Pakai output buruk',  detail: 'Draft jelek > kosong. Polish nanti, mulai dulu.' },
  { Icon: ListChecks, label: 'Pegang rubric',       detail: 'Cek balik ke 4 kriteria penilaian secara berkala.' },
  { Icon: Target,     label: 'Cut scope, bukan kualitas', detail: 'Lebih baik 1 slide bagus dari 5 slide medioker.' },
];

export default function TimeMgmtTips() {
  const [shown, setShown] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    tips.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 160));
  }, []);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return undefined;
    const interval = setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setIsRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;
  const isDone = secondsLeft === 0;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Time Management</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">30 menit ≠ banyak.</h2>
        </div>

        <div className="grid grid-cols-[0.92fr_1.08fr] gap-5 items-stretch">
          <div className="rounded-3xl border-2 bg-white p-7 shadow-sm flex flex-col justify-between"
               style={{ borderColor: ACCENT_BORDER }}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: ACCENT }}>
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>Group timer</p>
                  <p className="text-sm font-bold text-gray-400">Eksekusi tim</p>
                </div>
              </div>

              <p className="font-mono text-[96px] font-black tracking-tighter leading-none text-gray-900">
                {minutes}:{seconds}
              </p>
              <div className="mt-6 h-3 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: isDone ? '#10b981' : ACCENT }}
                />
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setIsRunning((value) => !value)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-4 text-sm font-black text-white transition-all hover:bg-gray-800"
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setSecondsLeft(TOTAL_SECONDS);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 bg-white px-5 py-4 text-sm font-black transition-all hover:bg-gray-50"
                style={{ borderColor: ACCENT_BORDER, color: ACCENT }}
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {tips.map(({ Icon, label, detail }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border bg-white transition-all duration-500"
                style={{
                  borderColor: ACCENT_BORDER,
                  opacity: shown.includes(i) ? 1 : 0,
                  transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: ACCENT }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-black text-gray-900 mb-1">{label}</p>
                  <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
TimeMgmtTips.displayName = 'TimeMgmtTips';
