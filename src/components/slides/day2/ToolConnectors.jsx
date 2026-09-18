import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Bot, CheckCircle2, FileText, Link2, MessageSquare,
  Search, ShieldCheck, Sparkles,
} from 'lucide-react';
import { ACCENT } from '../../../theme';

function AppIcon({ app, size = 'lg' }) {
  const dims = size === 'sm' ? 'w-10 h-10 rounded-xl' : 'w-14 h-14 rounded-2xl';
  const cls = `${dims} bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden`;

  const icons = {
    gmail: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#fff" />
        <path d="M10 17v19h7V23l7 5 7-5v13h7V17L24 27 10 17z" fill="#ea4335" />
        <path d="M10 17l14 10 14-10v-5H10v5z" fill="#fbbc04" />
        <path d="M10 17v19h7V23l-7-6z" fill="#34a853" />
        <path d="M38 17v19h-7V23l7-6z" fill="#4285f4" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#fff" />
        <rect x="10" y="12" width="28" height="27" rx="4" fill="#4285f4" />
        <path d="M10 20h28v15a4 4 0 01-4 4H14a4 4 0 01-4-4V20z" fill="#fff" />
        <path d="M17 27h14v3H17v-3zm0 6h10v3H17v-3z" fill="#4285f4" />
      </svg>
    ),
    drive: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#fff" />
        <path d="M19 10h10l11 19H30L19 10z" fill="#fbbc04" />
        <path d="M8 29l11-19 5 9-11 19L8 29z" fill="#34a853" />
        <path d="M13 38l6-9h21l-5 9H13z" fill="#4285f4" />
      </svg>
    ),
    sheets: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#0f9d58" />
        <path d="M17 10h12l6 6v22H17V10z" fill="#fff" />
        <path d="M29 10v7h6" fill="#d9ead3" />
        <path d="M21 24h10v9H21v-9zm5 0v9M21 29h10" stroke="#0f9d58" strokeWidth="1.8" />
      </svg>
    ),
    docs: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#4285f4" />
        <path d="M17 10h12l6 6v22H17V10z" fill="#fff" />
        <path d="M29 10v7h6" fill="#dbeafe" />
        <path d="M21 24h10M21 29h10M21 34h7" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    slides: (
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <rect width="48" height="48" rx="13" fill="#f4b400" />
        <path d="M16 11h13l5 5v21H16V11z" fill="#fff" />
        <path d="M29 11v6h5" fill="#fde68a" />
        <rect x="20" y="24" width="10" height="7" rx="1.4" fill="#f4b400" />
      </svg>
    ),
    github: (
      <div className={`${cls} bg-gray-900 border-gray-900`}>
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <circle cx="24" cy="24" r="16" fill="#fff" />
          <path d="M17 26c0-5 3-8 7-8s7 3 7 8c0 3-1 5-3 6v4h-8v-4c-2-1-3-3-3-6z" fill="#111827" />
          <path d="M19 18l-2-5 5 2m7 3l2-5-5 2" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    notion: (
      <div className={cls}>
        <span className={`${size === 'sm' ? 'text-2xl' : 'text-3xl'} font-black text-black font-serif`}>N</span>
      </div>
    ),
  };

  if (app === 'github' || app === 'notion') return icons[app];
  return <div className={cls}>{icons[app] || <FileText className="w-5 h-5 text-gray-500" />}</div>;
}

function ToolPill({ name, Icon, color }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-2 shadow-sm">
      <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <Icon className="w-3.5 h-3.5 text-white" />
      </span>
      <span className="text-sm font-black text-gray-900">{name}</span>
    </div>
  );
}

const tools = [
  { name: 'ChatGPT', Icon: MessageSquare, color: '#10a37f' },
  { name: 'Claude', Icon: Bot, color: '#cc785c' },
  { name: 'Gemini', Icon: Sparkles, color: '#4285f4' },
];

export function ConnectorIntro() {
  const [shown, setShown] = useState(false);
  useEffect(() => { setTimeout(() => setShown(true), 100); }, []);

  const appPositions = [
    { app: 'gmail', className: 'left-[8%] top-[16%]' },
    { app: 'calendar', className: 'right-[10%] top-[18%]' },
    { app: 'drive', className: 'left-[14%] bottom-[18%]' },
    { app: 'sheets', className: 'right-[16%] bottom-[18%]' },
    { app: 'docs', className: 'left-[43%] top-[4%]' },
    { app: 'slides', className: 'left-[44%] bottom-[4%]' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-[0.82fr_1.18fr] gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
              Topic Baru · Connectors
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 leading-none">
              AI tidak kerja sendirian.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mt-5">
              Connector membuat AI bisa membaca konteks dari app kerja yang diizinkan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map(t => <ToolPill key={t.name} {...t} />)}
            </div>
          </div>

          <div className={`relative h-[430px] transition-all duration-700 ${shown ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'}`}>
            <div className="absolute inset-0 rounded-[2.5rem] bg-white border-2 border-gray-200 shadow-sm" />
            <div className="absolute inset-10 rounded-full border-2 border-dashed border-indigo-100" />
            <div className="absolute inset-20 rounded-full border border-gray-100" />

            {appPositions.map(({ app, className }) => (
              <div key={app} className={`absolute ${className}`}>
                <AppIcon app={app} />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-[2.25rem] flex flex-col items-center justify-center shadow-xl"
                   style={{ backgroundColor: ACCENT }}>
                <Link2 className="w-11 h-11 text-white mb-2" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Connector</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-[76px] h-[280px] w-px bg-indigo-100 -translate-x-1/2" />
            <div className="absolute top-1/2 left-[96px] right-[96px] h-px bg-indigo-100 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConnectorFlow() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    [0, 1, 2, 3].forEach((n, i) => setTimeout(() => setShown(p => [...p, n]), 120 + i * 220));
  }, []);

  const reveal = n => shown.includes(n) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
            Connector Simulation
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Simulasi: meeting brief.
          </h2>
        </div>

        <div className="grid grid-cols-[0.92fr_80px_1.08fr_80px_1fr] gap-3 items-center">
          <div className={`rounded-[2rem] bg-gray-900 p-6 h-[335px] flex flex-col transition-all duration-500 ${reveal(0)}`}>
            <div className="flex items-center gap-2 mb-5">
              <ToolPill name="ChatGPT" Icon={MessageSquare} color="#10a37f" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-4">Prompt</p>
            <p className="font-mono text-[17px] text-white leading-relaxed">
              Cari konteks partner dari Gmail dan Calendar. Buat brief untuk meeting jam 15.00.
            </p>
          </div>

          <ArrowRight className={`w-8 h-8 mx-auto text-gray-300 transition-all duration-500 ${reveal(1)}`} />

          <div className={`relative rounded-[2rem] bg-white border-2 border-gray-200 p-6 h-[335px] transition-all duration-500 ${reveal(1)}`}>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5">Connector retrieves</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <AppIcon app="gmail" />
              <AppIcon app="calendar" />
              <AppIcon app="drive" />
            </div>

            <div className="space-y-3">
              {[
                ['Email thread', '3 sources'],
                ['Meeting invite', 'today'],
                ['Proposal file', 'latest'],
              ].map(([label, meta], i) => (
                <div key={label} className={`flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 px-4 py-3 transition-all duration-500 ${shown.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                     style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="text-sm font-black text-gray-800">{label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{meta}</span>
                </div>
              ))}
            </div>
          </div>

          <ArrowRight className={`w-8 h-8 mx-auto text-gray-300 transition-all duration-500 ${reveal(2)}`} />

          <div className={`rounded-[2rem] bg-white border-2 border-emerald-100 p-6 h-[335px] transition-all duration-500 ${reveal(3)}`}>
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-5">Output</p>
            <div className="space-y-4">
              {['Context summary', 'Open issues', 'Meeting agenda', 'Follow-up draft'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg font-black text-gray-900">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
              <p className="text-xs font-bold text-emerald-700">Includes source links</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5" style={{ color: ACCENT }} />
          <p className="text-sm font-bold text-gray-500">Akses mengikuti permission user, plan, dan admin setting.</p>
        </div>
      </div>
    </div>
  );
}

const scenarioRows = [
  {
    tool: 'ChatGPT',
    Icon: MessageSquare,
    color: '#10a37f',
    apps: ['gmail', 'calendar', 'drive'],
    output: ['Account brief', 'Meeting prep', 'Follow-up'],
  },
  {
    tool: 'Claude',
    Icon: Bot,
    color: '#cc785c',
    apps: ['drive', 'docs', 'github'],
    output: ['Battlecard', 'SOP review', 'Knowledge pack'],
  },
  {
    tool: 'Gemini',
    Icon: Sparkles,
    color: '#4285f4',
    apps: ['sheets', 'drive', 'slides'],
    output: ['Revenue review', 'Action list', 'Update deck'],
  },
];

export default function ToolConnectors() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    scenarioRows.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), 120 + i * 140));
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
            Connector Examples
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Skenario yang worth it.
          </h2>
        </div>

        <div className="rounded-[2rem] bg-white border-2 border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-[220px_280px_1fr] bg-gray-50 border-b border-gray-200 px-6 py-3">
            {['Tool', 'Connected apps', 'Output'].map(h => (
              <p key={h} className="text-[10px] font-black uppercase tracking-widest text-gray-400">{h}</p>
            ))}
          </div>

          {scenarioRows.map(({ tool, Icon, color, apps, output }, i) => (
            <div
              key={tool}
              className="grid grid-cols-[220px_280px_1fr] items-center px-6 py-5 border-b border-gray-100 last:border-b-0 transition-all duration-500"
              style={{
                opacity: shown.includes(i) ? 1 : 0,
                transform: shown.includes(i) ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl font-black text-gray-900">{tool}</p>
              </div>

              <div className="flex items-center gap-3">
                {apps.map(app => <AppIcon key={app} app={app} size="sm" />)}
              </div>

              <div className="flex flex-wrap gap-2">
                {output.map(item => (
                  <span key={item} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-black text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4">
          <Search className="w-5 h-5" style={{ color: ACCENT }} />
          <p className="text-sm font-bold text-indigo-900">
            Prompt rule: sebut app-nya, sebut folder/thread/sheet-nya, minta source.
          </p>
        </div>
      </div>
    </div>
  );
}

ConnectorIntro.displayName = 'ConnectorIntro';
ConnectorFlow.displayName = 'ConnectorFlow';
ToolConnectors.displayName = 'ToolConnectors';
