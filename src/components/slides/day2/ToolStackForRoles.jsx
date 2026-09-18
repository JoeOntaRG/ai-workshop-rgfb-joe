import React, { useEffect, useState } from 'react';
import { Headphones, BarChart3, Megaphone, Wrench } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const roles = [
  { Icon: Headphones, color: '#0ea5e9', role: 'Customer Support',    stack: ['NotebookLM', 'Claude', 'ElevenLabs'] },
  { Icon: BarChart3,  color: '#10b981', role: 'Sales / Distribusi',  stack: ['ChatGPT', 'Gemini', 'Gamma'] },
  { Icon: Megaphone,  color: '#f43f5e', role: 'Marketing',           stack: ['Pomelli', 'Canva AI', 'VEED'] },
  { Icon: Wrench,     color: '#6366f1', role: 'Operations / IT',     stack: ['Claude', 'NotebookLM', 'Google Stitch'] },
];

export default function ToolStackForRoles() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    roles.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Stack untuk Tim KAO Indonesia</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Mulai dari 2.</h2>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {roles.map(({ Icon, color, role, stack }, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-6 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: `${color}30`,
                boxShadow: `0 8px 20px ${color}15`,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: color }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-black text-gray-900 mb-2">{role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.map((t, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-md text-xs font-bold border bg-white"
                          style={{ borderColor: `${color}40`, color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
ToolStackForRoles.displayName = 'ToolStackForRoles';
