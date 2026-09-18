import React, { useEffect, useState } from 'react';
import { Type, Image as ImageIcon, Film, Music, Layers, Sparkles } from 'lucide-react';
import { ACCENT } from '../../../theme';

const branches = [
  { id: 'txt2txt',  Icon: Type,      color: '#6366f1', title: 'Text-to-Text',  io: 'Text → Text / Code',          arch: 'Transformers',           rot: -3 },
  { id: 'txt2img',  Icon: ImageIcon, color: '#0ea5e9', title: 'Text-to-Image', io: 'Text → Image',                arch: 'Diffusion · GANs',       rot: 2 },
  { id: 'txt2vid',  Icon: Film,      color: '#ec4899', title: 'Text-to-Video', io: 'Text / Image → Video',        arch: 'Diffusion · Temporal',   rot: -2 },
  { id: 'audio',    Icon: Music,     color: '#10b981', title: 'Audio / Music', io: 'Text / Audio → Speech · Sound', arch: 'Audio Transformers',   rot: 3 },
  { id: 'multi',    Icon: Layers,    color: '#f59e0b', title: 'Multimodal',    io: 'Any → Any',                   arch: 'Native Multimodal',      rot: -2 },
];

export default function TypesOfModels() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none"
           style={{ backgroundColor: ACCENT }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: '#6366f1', animation: 'floatDot 6s ease-in-out infinite' }} />
        <div className="absolute top-[70%] left-[88%] w-4 h-4 rounded-full opacity-20" style={{ backgroundColor: '#0ea5e9', animation: 'floatDot 7s ease-in-out 1s infinite' }} />
        <div className="absolute top-[30%] left-[90%] w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: '#ec4899', animation: 'floatDot 5s ease-in-out 2s infinite' }} />
        <div className="absolute top-[80%] left-[8%] w-2.5 h-2.5 rounded-full opacity-30" style={{ backgroundColor: '#f59e0b', animation: 'floatDot 8s ease-in-out 0.5s infinite' }} />
      </div>

      <div className="w-full max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>AI Demystified</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Five Types of Generative AI Models.
          </h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Dikelompokkan berdasarkan input → output yang dihasilkan.</p>
        </div>

        <div className="relative h-[360px] w-full">
          <div className={`absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
               style={{ animation: mounted ? 'rootBob 6s ease-in-out infinite' : 'none' }}>
            <div className="flex items-center gap-3 px-7 py-4 rounded-full shadow-2xl"
                 style={{ backgroundColor: ACCENT, boxShadow: `0 20px 40px ${ACCENT}40` }}>
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-base font-black text-white tracking-tight">Generative AI</span>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid meet">
            <defs>
              {branches.map(b => (
                <linearGradient key={b.id} id={`conn-${b.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor={b.color} stopOpacity="0.5" />
                </linearGradient>
              ))}
            </defs>
            {/* root ~ (500, 60). 5 branches at x: 100, 300, 500, 700, 900 ; top ~ 210 */}
            {[
              { x: 100, id: 'txt2txt' },
              { x: 300, id: 'txt2img' },
              { x: 500, id: 'txt2vid' },
              { x: 700, id: 'audio' },
              { x: 900, id: 'multi' },
            ].map((c, i) => (
              <path key={c.id}
                d={`M 500 60 C 500 130, ${c.x} 140, ${c.x} 210`}
                stroke={`url(#conn-${c.id})`} strokeWidth="2.5" fill="none"
                strokeDasharray="600"
                strokeDashoffset={mounted ? 0 : 600}
                style={{ transition: `stroke-dashoffset 1.2s ease ${0.2 + i * 0.1}s` }}
              />
            ))}
          </svg>

          {/* 5 branch cards */}
          {branches.map((b, i) => {
            const positions = [100, 300, 500, 700, 900];
            const xPct = (positions[i] / 1000) * 100;
            return (
              <div
                key={b.id}
                className="absolute flex flex-col items-center p-4 rounded-3xl border-2 bg-white"
                style={{
                  left: `${xPct}%`,
                  top: '195px',
                  width: '170px',
                  marginLeft: '-85px',
                  borderColor: `${b.color}40`,
                  boxShadow: `0 12px 28px ${b.color}20`,
                  transform: mounted ? `rotate(${b.rot}deg) translateY(0)` : `rotate(${b.rot}deg) translateY(20px)`,
                  opacity: mounted ? 1 : 0,
                  transition: `opacity 0.7s ease ${0.4 + i * 0.1}s, transform 0.7s ease ${0.4 + i * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5"
                     style={{ backgroundColor: b.color, boxShadow: `0 6px 16px ${b.color}50` }}>
                  <b.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-black text-gray-900 mb-1 text-center leading-tight">{b.title}</h3>
                <p className="text-[10px] text-gray-500 font-semibold text-center leading-snug mb-1.5">{b.io}</p>
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ color: b.color, backgroundColor: `${b.color}10` }}>
                  {b.arch}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes rootBob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(-6px); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) translateX(0); }
          50%      { transform: translateY(-14px) translateX(8px); }
        }
      `}</style>
    </div>
  );
}
TypesOfModels.displayName = 'TypesOfModels';
