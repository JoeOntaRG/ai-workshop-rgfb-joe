import React from 'react';
import { Brain, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { ACCENT } from '../../../theme';

const layers = [
  {
    id: 'ai',
    label: 'AI',
    title: 'Artificial Intelligence',
    desc: 'Sistem komputer yang dapat mengambil keputusan layaknya manusia.',
    examples: ['NPC catur', 'Robot vacuum', 'Google Maps'],
    since: '1956',
    color: '#6366f1',
    bg: '#eef2ff',
    Icon: Brain,
  },
  {
    id: 'ml',
    label: 'ML',
    title: 'Machine Learning',
    desc: 'Bagian dari AI yang belajar otomatis dari data, bukan dari aturan yang ditulis programmer.',
    examples: ['Netflix', 'Deteksi fraud', 'Spam filter'],
    since: '2010-an',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    Icon: Cpu,
  },
  {
    id: 'dl',
    label: 'DL',
    title: 'Deep Learning',
    desc: 'Bagian dari ML yang menggunakan neural network berlapis untuk memproses gambar, suara, dan video.',
    examples: ['FaceID', 'Voice recognition', 'Self-driving'],
    since: 'Mid-2010s',
    color: '#06b6d4',
    bg: '#ecfeff',
    Icon: Layers,
  },
  {
    id: 'gen',
    label: 'GenAI',
    title: 'Generative AI',
    desc: 'Bagian dari DL yang menghasilkan konten baru: teks, gambar, audio, video, atau kode.',
    examples: ['ChatGPT', 'Midjourney', 'Sora'],
    since: '2022',
    color: '#10b981',
    bg: '#ecfdf5',
    Icon: Sparkles,
  },
];

export default function AIvsMLvsGenAI() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] mb-3" style={{ color: ACCENT }}>
            AI Demystified
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-tight">
            AI <span className="text-gray-300">⊃</span> ML <span className="text-gray-300">⊃</span> DL <span className="text-gray-300">⊃</span> GenAI.
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-4 gap-3">
          {layers.map((l, i) => {
            const Icon = l.Icon;
            return (
              <div key={l.id} className="relative">
                {/* Subset arrow */}
                {i > 0 && (
                  <div
                    className="absolute -left-2.5 top-[68px] z-10 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-md border-2"
                    style={{ borderColor: l.color, color: l.color }}
                  >
                    <ArrowRight className="w-3 h-3" strokeWidth={3} />
                  </div>
                )}

                <div
                  className="h-full rounded-2xl border-2 p-5 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col bg-white"
                  style={{ borderColor: `${l.color}33` }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md mb-4"
                    style={{ backgroundColor: l.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {l.title}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mt-1 mb-4">
                    Sejak {l.since}
                  </span>

                  {/* Description */}
                  <p className="text-[14px] text-gray-700 font-medium leading-relaxed mb-5">
                    {l.desc}
                  </p>

                  {/* Examples */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Contoh
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {l.examples.map((ex, j) => (
                        <span
                          key={j}
                          className="text-[12px] font-semibold px-2.5 py-1 rounded-md"
                          style={{ color: l.color, backgroundColor: l.bg }}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
AIvsMLvsGenAI.displayName = 'AIvsMLvsGenAI';
