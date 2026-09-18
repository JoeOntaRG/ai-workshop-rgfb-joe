import React, { useEffect, useState } from 'react';
import { ExternalLink, FileSpreadsheet, Copy, Check } from 'lucide-react';
import { ACCENT, ACCENT_BORDER } from '../../theme';

/**
 * UseCaseTemplate — visual-first use case slide.
 *
 * Layout:
 *   LEFT (45%): kicker, big title, scenario (1-2 sentences), outcomes (max 3), tool chips
 *   RIGHT (55%): big stat card + chat mockup
 */
export function UseCaseTemplate({
  kicker,
  title,
  scenario,
  outcomes = [],
  tools = [],
  stat,
  color = ACCENT,
  chat,          // { prompt, response, image } — for the mock chat UI
  demoLink,      // { url, label? } — optional external link to live demo (Claude/Gemini share, artifact, etc.)
  sampleData,    // { url, label? } — optional link to sample data (Google Sheet / Drive folder)
  copyPrompt,    // optional string — long prompt the user can copy to clipboard
}) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const handleCopy = async () => {
    if (!copyPrompt) return;
    try {
      await navigator.clipboard.writeText(copyPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* no-op */ }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-10 flex flex-col md:flex-row gap-12 items-center">

        <div className={`w-full md:w-[44%] flex flex-col gap-5 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
            {kicker}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.05]">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {scenario}
          </p>

          {outcomes.length > 0 && (
            <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl font-black flex-shrink-0 leading-none w-6" style={{ color }}>{i + 1}</span>
                  <div className="flex-1 -mt-0.5">
                    <p className="text-base font-bold text-gray-900">{o.title}</p>
                    <p className="text-sm text-gray-500 font-medium leading-snug">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tools.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">Tools</span>
              {tools.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-bold border bg-white"
                      style={{ borderColor: `${color}40`, color }}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={`w-full md:w-[56%] flex flex-col gap-4 transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          {chat && <ChatMockup prompt={chat.prompt} response={chat.response} image={chat.image} color={color} />}

          {(demoLink?.url || sampleData?.url || copyPrompt) && (
            <div className="flex flex-wrap items-center gap-2">
              {copyPrompt && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: `${color}40`, color }}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Tersalin' : 'Copy prompt'}
                </button>
              )}
              {demoLink?.url && (
                <a
                  href={demoLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: `${color}40`, color }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {demoLink.label || 'Lihat demo asli'}
                </a>
              )}
              {sampleData?.url && (
                <a
                  href={sampleData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: '#e5e7eb', color: '#374151' }}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  {sampleData.label || 'Sample data'}
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export function ChatMockup({ prompt, response, image, color = ACCENT }) {
  return (
    <div className="bg-white border-2 rounded-2xl overflow-hidden shadow-xl"
         style={{ borderColor: ACCENT_BORDER }}>
      <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-200">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-[10px] font-mono text-gray-400">ai.chat</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[88%]"
               style={{ backgroundColor: color, color: 'white' }}>
            <p className="text-xs leading-relaxed">{prompt}</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-2 max-w-[92%]">
            {image ? (
              <img
                src={image}
                alt="AI output"
                className="rounded-xl w-full h-auto block"
              />
            ) : (
              <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line px-2 py-1">{response}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
