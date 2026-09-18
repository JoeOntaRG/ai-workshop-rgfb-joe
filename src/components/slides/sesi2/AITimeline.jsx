import React, { useState, useEffect } from 'react';
import { Cpu, Snowflake, Settings, TrendingUp, Sparkles } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG } from '../../../theme';

const eras = [
  { year: '1950s', title: 'Lahirnya AI',    desc: 'Turing Test & Logika Awal',       Icon: Cpu },
  { year: '1970s', title: 'AI Winter',      desc: 'Musim Dingin Pendanaan AI',       Icon: Snowflake },
  { year: '1990s', title: 'Sistem Pakar',   desc: 'IBM Deep Blue & Catur',           Icon: Settings },
  { year: '2010s', title: 'Deep Learning',  desc: 'Neural Network & ImageNet',       Icon: TrendingUp },
  { year: '2020s', title: 'Era Generatif',  desc: 'ChatGPT & AI Kreatif',            Icon: Sparkles },
];

export default function AITimeline() {
  const [activeEra, setActiveEra] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEra(p => (p + 1) % eras.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-10 relative overflow-hidden">
      {/* Glow Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] blur-[150px] rounded-full pointer-events-none opacity-20 transition-all duration-1000"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="text-center mb-20 z-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
          AI Demystified
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
          Peta Waktu Evolusi AI
        </h2>
        <p className="text-xl text-gray-500 font-medium">
          Perjalanan 70 tahun dari sekadar teori hingga menjadi asisten super cerdas.
        </p>
      </div>

      <div className="w-full max-w-6xl relative z-10 flex items-center justify-center">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-100 -translate-y-1/2 z-0" />

        {/* Active Progress Line */}
        <div
          className="absolute top-1/2 left-10 h-1 -translate-y-1/2 z-0 transition-all duration-1000 ease-out"
          style={{ backgroundColor: ACCENT, width: `calc(${(activeEra / (eras.length - 1)) * 100}% - 20px)` }}
        />

        <div className="flex justify-between w-full relative z-10 px-4">
          {eras.map((era, i) => {
            const isActive = i === activeEra;
            const isPast = i < activeEra;

            return (
              <button
                key={era.year}
                onClick={() => setActiveEra(i)}
                className="flex flex-col items-center w-40 cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 border-4 shadow-lg ${isActive ? 'scale-125' : 'scale-100'}`}
                  style={{
                    backgroundColor: isActive || isPast ? 'white' : '#f9fafb',
                    borderColor: isActive ? ACCENT : isPast ? ACCENT_BG : '#e5e7eb',
                    color: isActive || isPast ? ACCENT_DARK : '#9ca3af',
                  }}
                >
                  <era.Icon className="w-7 h-7" />
                </div>

                <div
                  className={`text-center transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}
                >
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{era.year}</h3>
                  <p className="text-sm font-bold text-gray-800 mb-1">{era.title}</p>
                  <p className="text-xs text-gray-500 font-medium leading-tight">{era.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
AITimeline.displayName = 'AITimeline';
