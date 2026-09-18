import React, { useState, useEffect, useRef } from 'react';
import { ClipboardCheck, Play, Pause, RotateCcw, Link as LinkIcon, QrCode } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER, DANGER, SUCCESS } from '../../../theme';

const TOTAL_SECONDS = 10 * 60;
const PRETEST_URL = 'https://bit.ly/pretest_AI_KAO';
const QR_IMAGE = 'https://cdn-web.ruangguru.com/file-uploader/0c5061f0-3911-4450-90ab-2ee0eac46687.png';

const formatTime = (totalSeconds) => {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export default function Day1Pretest() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleStart = () => {
    if (secondsLeft === 0) setSecondsLeft(TOTAL_SECONDS);
    setRunning(true);
  };
  const handlePause = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;
  const isLowTime = secondsLeft <= 60 && secondsLeft > 0;
  const isDone = secondsLeft === 0;

  const timerColor = isDone ? SUCCESS : isLowTime ? DANGER : ACCENT_DARK;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-12 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: title, instructions, timer */}
        <div className="flex flex-col gap-7">
          <div
            className="w-fit inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-[0.24em] uppercase shadow-sm"
            style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
          >
            <ClipboardCheck className="w-3.5 h-3.5" />
            Pretest · 10 menit
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.02]">
            Pretest <span style={{ color: ACCENT }}>AI Literacy</span>.
          </h2>

          {/* URL */}
          <a
            href={PRETEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit inline-flex items-center gap-3 bg-white border-2 px-5 py-3 rounded-2xl font-mono text-base font-bold transition-all hover:shadow-md group"
            style={{ borderColor: ACCENT_BORDER, color: ACCENT_DARK }}
          >
            <LinkIcon className="w-4 h-4" />
            {PRETEST_URL}
          </a>

          {/* Timer */}
          <div
            className="rounded-3xl border-2 p-6 bg-white shadow-sm"
            style={{ borderColor: ACCENT_BORDER }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-gray-400">
                Sisa Waktu
              </span>
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: isDone ? '#dcfce7' : running ? ACCENT_BG : '#f3f4f6',
                  color: isDone ? '#15803d' : running ? ACCENT_DARK : '#6b7280',
                }}
              >
                {isDone ? 'Selesai' : running ? 'Berjalan' : secondsLeft === TOTAL_SECONDS ? 'Siap' : 'Jeda'}
              </span>
            </div>

            <div
              className="font-mono text-7xl md:text-8xl font-black tracking-tighter tabular-nums leading-none transition-colors"
              style={{ color: timerColor }}
            >
              {formatTime(secondsLeft)}
            </div>

            {/* Progress bar */}
            <div className="h-2 mt-5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${progress}%`, backgroundColor: timerColor }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-5">
              {!running ? (
                <button
                  onClick={handleStart}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: ACCENT_DARK }}
                >
                  <Play className="w-4 h-4 fill-white" />
                  {secondsLeft === TOTAL_SECONDS ? 'Mulai' : isDone ? 'Mulai Ulang' : 'Lanjutkan'}
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-gray-900 bg-white border-2 shadow-sm hover:shadow-md transition-all"
                  style={{ borderColor: ACCENT_BORDER }}
                >
                  <Pause className="w-4 h-4" />
                  Jeda
                </button>
              )}

              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Right: QR */}
        <div
          className="flex flex-col items-center gap-4 bg-white p-8 rounded-[2.5rem] border-2 shadow-sm relative overflow-hidden"
          style={{ borderColor: ACCENT_BORDER }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"
            style={{ backgroundColor: ACCENT_BG }}
          />
          <div
            className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold tracking-[0.24em] uppercase relative z-10"
            style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
          >
            <QrCode className="w-3 h-3" />
            Scan QR
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 relative z-10 w-full aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={QR_IMAGE}
              alt="QR Pretest AI KAO Indonesia"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center relative z-10">
            Arahkan kamera HP Anda ke QR
          </p>
        </div>
      </div>
    </div>
  );
}
Day1Pretest.displayName = 'Day1Pretest';
