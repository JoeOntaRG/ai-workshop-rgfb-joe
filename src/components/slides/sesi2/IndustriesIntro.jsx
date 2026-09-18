import React, { useEffect, useState } from 'react';
import { Stethoscope, ShoppingCart, Banknote, GraduationCap, Factory, Plane } from 'lucide-react';
import { ACCENT } from '../../../theme';

const INDUSTRIES = [
  { Icon: Stethoscope,    label: 'Healthcare',    color: '#f43f5e' },
  { Icon: ShoppingCart,   label: 'Retail',        color: '#f59e0b' },
  { Icon: Banknote,       label: 'Finance',       color: '#10b981' },
  { Icon: GraduationCap,  label: 'Education',     color: '#0ea5e9' },
  { Icon: Factory,        label: 'Manufacturing', color: '#6366f1' },
  { Icon: Plane,          label: 'Logistics',     color: '#8b5cf6' },
];

export default function IndustriesIntro() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none"
           style={{ backgroundColor: ACCENT }} />

      <div className="w-full max-w-6xl mx-auto px-10 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>
            Industry Tour
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            6 Industri.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.label}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-white"
              style={{
                borderColor: `${ind.color}30`,
                boxShadow: `0 8px 20px ${ind.color}15`,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: ind.color, boxShadow: `0 6px 14px ${ind.color}40` }}>
                <ind.Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-base font-black text-gray-900 leading-tight truncate">
                  {ind.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
IndustriesIntro.displayName = 'IndustriesIntro';
