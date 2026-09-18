import React, { useState, useEffect } from 'react';
import { FileText, UserCheck, BookOpen } from 'lucide-react';
import { ACCENT, ACCENT_DARK, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const tasks = [
  { Icon: FileText,  title: 'Job Descriptions', desc: 'Buat job description inklusif dan terstruktur dalam hitungan menit, bukan revisi berhari-hari.' },
  { Icon: UserCheck, title: 'CV Screening',     desc: 'Shortlist kandidat sesuai kriteria. AI membantu, recruiter yang memutuskan.' },
  { Icon: BookOpen,  title: 'Onboarding',       desc: 'Buat rencana onboarding 30-60-90 hari yang dipersonalisasi untuk setiap karyawan baru.' },
];

export default function HRIntro() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % tasks.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>AI for HR</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Three HR Tasks <span style={{ color: ACCENT }}>AI Handles Best</span>.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {tasks.map(({ Icon, title, desc }, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-8 rounded-3xl border-2 transition-all duration-500"
                style={{
                  borderColor: isActive ? ACCENT : '#e5e7eb',
                  backgroundColor: isActive ? ACCENT_BG : 'white',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isActive ? '0 16px 32px rgba(99,102,241,0.15)' : 'none',
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all"
                     style={{ backgroundColor: isActive ? ACCENT : '#f3f4f6' }}>
                  <Icon className="w-7 h-7" style={{ color: isActive ? 'white' : '#9ca3af' }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">{desc}</p>
              </button>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 font-medium italic mt-10">
          Aturan utama di HR: AI bantu draft dan ranking, keputusan akhir tetap di manusia.
        </p>
      </div>
    </div>
  );
}
HRIntro.displayName = 'HRIntro';
