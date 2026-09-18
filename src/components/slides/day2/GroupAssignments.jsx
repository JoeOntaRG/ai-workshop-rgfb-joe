import React, { useEffect, useState } from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { ACCENT, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const groups = [
  {
    num: 1,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.uoctlrz2y4ws',
    members: ['Mela Komalasari', 'Riza Pratiwi Putri', 'Ricky Suryadi', 'Bagas Doppert', 'Fedry Ridson', 'Michelle Yang'],
  },
  {
    num: 2,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.79kzptnvvqf2',
    members: ['Keke Lutfiyani', 'George', 'Herlina', 'Lim Yoedih', 'Florensia Yang', 'Febryan Purwanto'],
  },
  {
    num: 3,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.6bdz0zfuvfym',
    members: ['Tunas Lumban Tobing', 'Haryono', 'Ida Ayu Armini', 'Johan Wahyudi', 'Maya Lastian Tanu', 'Defiant Kusnandar', 'Faisal Abdul Aziz'],
  },
  {
    num: 4,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.njhsghl2jyv9',
    members: ['Yuni Purwanti', 'Swanny', 'Yuriko', 'Masse', 'Nita Irene', 'Yoshua Chandra'],
  },
  {
    num: 5,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.3ce5n3lpd6y9',
    members: ['Ripai', 'Edwardy Sadli', 'Anita', 'Erwina Lestari', 'Ekawati Wijaya', 'Suhanda'],
  },
  {
    num: 6,
    taskUrl: 'https://docs.google.com/document/d/1hUMfZ4G5RYH1Ybq2EvWyBR0PMljDG5Jo4C_2TBKKPss/edit?tab=t.cpxi6t7jchyx',
    members: ['Rivan Hidayatulloh', 'Revina Adelia', 'Megan Mashella', 'Rina Septiani', 'Lauw Linda Permana', 'Artyani Suraesta'],
  },
];

export default function GroupAssignments() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    groups.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 100 + i * 80));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
            Case Study · Team
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Pembagian kelompok.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {groups.map(({ num, taskUrl, members }, i) => (
            <div
              key={num}
              className="rounded-2xl border-2 bg-white p-4 transition-all duration-500"
              style={{
                borderColor: ACCENT_BORDER,
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(14px)',
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: ACCENT }}>
                    <Users className="h-4.5 w-4.5 text-white" />
                  </div>
                  <p className="text-xl font-black text-gray-900">Kel {num}</p>
                </div>

                {taskUrl ? (
                  <a
                    href={taskUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-black"
                    style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
                  >
                    Tugas
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="rounded-lg px-2.5 py-1.5 text-[11px] font-black text-gray-400" style={{ backgroundColor: '#f3f4f6' }}>
                    Link menyusul
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {members.map((member) => (
                  <p key={member} className="truncate text-[13px] font-bold leading-tight text-gray-700">
                    {member}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
GroupAssignments.displayName = 'GroupAssignments';
