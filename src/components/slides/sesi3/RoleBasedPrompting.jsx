import React from 'react';
import { Briefcase, GraduationCap, Drama, Stethoscope } from 'lucide-react';
import { ACCENT } from '../../../theme';

const task = 'Jelaskan manfaat produk consumer care untuk konsumen baru.';

const roles = [
  {
    Icon: Briefcase,
    color: '#6366f1',
    bg: '#eef2ff',
    short: 'Product manager',
    role: 'Product manager · product brief',
    output: 'Contoh output: “Untuk konsumen baru, produk ini membantu [target konsumen] mendapatkan [manfaat utama dari product brief]. Kebutuhan yang dijawab: [kebutuhan]. Cara penggunaan: [langkah]. Klaim yang masih perlu divalidasi: [klaim].”',
  },
  {
    Icon: GraduationCap,
    color: '#0ea5e9',
    bg: '#f0f9ff',
    short: 'Consumer educator',
    role: 'Edukator konsumen · bahasa sederhana',
    output: 'Contoh output: “Produk ini membantu kamu [manfaat utama]. Gunakan dengan cara [langkah sederhana] dalam rutinitas [konteks]. Jika masih bingung, baca petunjuk pada kemasan.”',
  },
  {
    Icon: Drama,
    color: '#10b981',
    bg: '#ecfdf5',
    short: 'Copywriter',
    role: 'Copywriter campaign · tone hangat',
    output: 'Contoh output: “Headline: [manfaat utama] untuk rutinitas yang lebih nyaman. Body: Kenali cara mudah menggunakan produk ini sesuai kebutuhanmu. CTA: Pelajari selengkapnya.”',
  },
  {
    Icon: Stethoscope,
    color: '#f59e0b',
    bg: '#fffbeb',
    short: 'Field trainer',
    role: 'Trainer toko · membantu konsumen memilih',
    output: 'Contoh output: “Apa kebutuhan utama Anda? Jika kebutuhannya [kebutuhan], produk ini memiliki manfaat [manfaat dari product brief]. Cara pakainya [langkah]. Untuk detail lain, mari cek informasi resmi.”',
  },
];

export default function RoleBasedPrompting() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
            Role for AI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Choose the <span style={{ color: ACCENT }}>right hat</span> for AI.
          </h2>
          <p className="text-base text-gray-500 font-medium mt-2">
            1 pertanyaan · 4 role · 4 output yang sangat berbeda.
          </p>
        </div>

        {/* Tree */}
        <div className="flex flex-col items-center">
          {/* Root: Task */}
          <div
            className="rounded-2xl border-2 px-8 py-4 bg-white shadow-md text-center"
            style={{ borderColor: ACCENT }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Task</p>
            <p className="text-xl font-bold text-gray-900 italic">"{task}"</p>
          </div>

          {/* Trunk */}
          <div className="w-px h-6 bg-gray-300" />

          {/* Branch container */}
          <div className="w-full relative">
            {/* Top horizontal connector */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gray-300" />

            <div className="grid grid-cols-4 gap-3">
              {roles.map((r, i) => {
                const Icon = r.Icon;
                return (
                  <div key={i} className="flex flex-col items-center">
                    {/* Vertical drop from spine */}
                    <div className="w-px h-6 bg-gray-300" />

                    {/* Role node */}
                    <div
                      className="rounded-2xl border-2 px-4 py-3 w-full flex flex-col items-center gap-2 shadow-sm"
                      style={{ borderColor: r.color, backgroundColor: 'white' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: r.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <p
                        className="text-lg font-black tracking-tight text-center leading-tight"
                        style={{ color: r.color }}
                      >
                        {r.short}
                      </p>
                      <p className="text-xs text-gray-500 font-medium text-center leading-tight">
                        {r.role}
                      </p>
                    </div>

                    {/* Connector to output */}
                    <div className="w-px h-3 bg-gray-200" />

                    {/* Output node */}
                    <div
                      className="rounded-xl px-4 py-3 w-full border"
                      style={{ borderColor: `${r.color}40`, backgroundColor: r.bg }}
                    >
                      <p
                        className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                        style={{ color: r.color }}
                      >
                        Output
                      </p>
                      <p className="text-sm text-gray-700 font-medium leading-snug">
                        {r.output}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
RoleBasedPrompting.displayName = 'RoleBasedPrompting';
