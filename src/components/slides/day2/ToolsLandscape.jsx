import React, { useEffect, useState } from 'react';
import { MessageSquare, BookOpen, Presentation, Image as ImageIcon, Film, Megaphone } from 'lucide-react';
import { ACCENT } from '../../../theme';

const categories = [
  { Icon: MessageSquare, color: '#6366f1', label: 'Chat & Writing',  tools: 'ChatGPT · Claude · Gemini' },
  { Icon: BookOpen,      color: '#0ea5e9', label: 'Knowledge',       tools: 'NotebookLM' },
  { Icon: Presentation,  color: '#a855f7', label: 'Slides',          tools: 'Gamma' },
  { Icon: ImageIcon,     color: '#00c4cc', label: 'Design & UI',     tools: 'Canva AI · Google Stitch' },
  { Icon: Film,          color: '#111827', label: 'Audio & Video',   tools: 'ElevenLabs · VEED' },
  { Icon: Megaphone,     color: '#f97316', label: 'Campaign',        tools: 'Pomelli' },
];

export default function ToolsLandscape() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    categories.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 100 + i * 90));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
            Tools Mastery · Overview
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            6 Kategori.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map(({ Icon, color, label, tools }, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-6 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: `${color}30`,
                boxShadow: `0 8px 20px ${color}15`,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{ backgroundColor: color, boxShadow: `0 6px 14px ${color}40` }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-black text-gray-900 leading-tight mb-1">{label}</p>
                <p className="text-sm font-bold" style={{ color }}>{tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ToolsLandscape.displayName = 'ToolsLandscape';
