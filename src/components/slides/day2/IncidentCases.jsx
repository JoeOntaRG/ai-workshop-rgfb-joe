import React, { useEffect, useState } from 'react';
import { Building2, Shield, Plane } from 'lucide-react';
import { ACCENT } from '../../../theme';

const cases = [
  {
    Icon: Building2, color: '#ef4444', year: '2023',
    title: 'Samsung Code Leak',
    detail: 'Engineer paste source code ke ChatGPT untuk debug. Data masuk training set. Samsung banned AI tools internally.',
  },
  {
    Icon: Plane, color: '#f59e0b', year: '2024',
    title: 'Air Canada Chatbot',
    detail: 'Chatbot janji refund yang tidak ada di policy. Pengadilan: chatbot = perusahaan. Airline harus bayar.',
  },
  {
    Icon: Shield, color: '#0ea5e9', year: '2023',
    title: 'Lawyer Fake Citation',
    detail: 'Pengacara NY pakai ChatGPT untuk riset case. AI mengarang 6 case law. Hakim denda + sanksi.',
  },
];

export default function IncidentCases() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    cases.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 200 + i * 220));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Real Incidents</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">Pelajaran mahal.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {cases.map(({ Icon, color, year, title, detail }, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-5 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: `${color}40`,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: color }}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <p className="text-base font-black text-gray-900">{title}</p>
                  <span className="text-xs font-mono font-bold text-gray-400">{year}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
IncidentCases.displayName = 'IncidentCases';
