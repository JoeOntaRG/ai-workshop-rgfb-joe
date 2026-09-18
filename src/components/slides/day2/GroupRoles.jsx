import React, { useEffect, useState } from 'react';
import { Crown, PenTool, Search, MessageSquare } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../../theme';

const roles = [
  { Icon: Crown,         label: 'Lead',       detail: 'Pegang waktu & arahkan diskusi.' },
  { Icon: Search,        label: 'Researcher', detail: 'Cari fakta. Cek sumber.' },
  { Icon: PenTool,       label: 'Builder',    detail: 'Eksekusi di tool — chat / slide / image.' },
  { Icon: MessageSquare, label: 'Presenter',  detail: 'Sampaikan hasil 2 menit.' },
];

export default function GroupRoles() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    roles.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 150 + i * 180));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-10">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>Group Work · Roles</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">4 peran.</h2>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {roles.map(({ Icon, label, detail }, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-6 rounded-2xl border-2 bg-white transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                   style={{ backgroundColor: ACCENT }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xl font-black text-gray-900 mb-1">{label}</p>
                <p className="text-sm text-gray-500 font-medium leading-snug">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
GroupRoles.displayName = 'GroupRoles';
