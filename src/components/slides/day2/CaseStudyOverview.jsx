import React, { useEffect, useState } from 'react';
import {
  BookOpen, Bot, Code2, Film, Image as ImageIcon, Megaphone,
  MessageSquare, Mic2, Presentation, Sparkles,
} from 'lucide-react';
import { ACCENT } from '../../../theme';

const cases = [
  { num: '01', Icon: MessageSquare, color: '#10a37f', title: 'ChatGPT',       hint: 'Gmail + Calendar' },
  { num: '02', Icon: Bot,           color: '#cc785c', title: 'Claude',        hint: 'Drive knowledge pack' },
  { num: '03', Icon: Sparkles,      color: '#4285f4', title: 'Gemini',        hint: 'Sheets + Drive' },
  { num: '04', Icon: BookOpen,      color: '#1e88e5', title: 'NotebookLM',    hint: 'Manual source base' },
  { num: '05', Icon: Presentation,  color: '#a855f7', title: 'Gamma',         hint: 'Docs to deck' },
  { num: '06', Icon: ImageIcon,     color: '#00c4cc', title: 'Canva AI',      hint: 'Brand Kit + assets' },
  { num: '07', Icon: Mic2,          color: '#0d9488', title: 'ElevenLabs',    hint: 'Script to narration' },
  { num: '08', Icon: Film,          color: '#111827', title: 'VEED',          hint: 'Assets to launch cut' },
  { num: '09', Icon: Code2,         color: '#34a853', title: 'Google Stitch', hint: 'Brief to portal UI' },
  { num: '10', Icon: Megaphone,     color: '#f97316', title: 'Pomelli',       hint: 'Brand + website scan' },
];

export default function CaseStudyOverview() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    cases.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Case Study · Briefing</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">10 tool practices.</h2>
          <p className="text-lg text-gray-500 font-medium mt-3">Semua tool dibahas lewat satu studi kasus dan prompt siap copy.</p>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {cases.map(({ num, Icon, color, title, hint }, i) => (
            <div
              key={i}
              className="flex flex-col gap-2.5 p-4 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: `${color}30`,
                boxShadow: `0 8px 20px ${color}15`,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <p className="text-xs font-black tracking-widest" style={{ color }}>{num}</p>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ backgroundColor: color }}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-black text-gray-900 leading-tight">{title}</p>
              <p className="text-xs text-gray-500 font-medium leading-snug">{hint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
CaseStudyOverview.displayName = 'CaseStudyOverview';
