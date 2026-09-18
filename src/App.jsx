import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Calendar, Sparkles } from 'lucide-react';
import classNames from 'classnames';

const SLIDE_DESIGN_WIDTH = 1280;
const SLIDE_DESIGN_HEIGHT = 720;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

function MobileSlideView({ module, slidesData, onHome }) {
  const widthRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!widthRef.current) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(widthRef.current);
    return () => ro.disconnect();
  }, []);

  const scale = containerWidth > 0 ? containerWidth / SLIDE_DESIGN_WIDTH : 0;

  return (
    <div className="min-h-screen w-full bg-slate-100">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <button
            onClick={onHome}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 active:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600">
              {module?.label}
            </span>
            <span className="text-[10px] font-bold text-slate-500 max-w-[60vw] truncate">
              {slidesData.length} slides
            </span>
          </div>
        </div>
      </div>

      {/* Slides — fixed 16:9 design, scaled to fit container width */}
      <div ref={widthRef} className="px-3 py-4 flex flex-col gap-5">
        {scale > 0 && slidesData.map((slideObj, i) => (
          <div key={i} className="w-full">
            <div className="flex items-center justify-between px-1 mb-1.5">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Slide {i + 1} / {slidesData.length}
              </span>
            </div>
            <div
              className="relative w-full bg-white rounded-xl shadow-md overflow-hidden border border-slate-200"
              style={{
                aspectRatio: `${SLIDE_DESIGN_WIDTH} / ${SLIDE_DESIGN_HEIGHT}`,
              }}
            >
              <div
                className="mobile-slide-wrapper absolute top-0 left-0"
                style={{
                  width: `${SLIDE_DESIGN_WIDTH}px`,
                  height: `${SLIDE_DESIGN_HEIGHT}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  backgroundColor: slideObj.isDark ? '#0f172a' : '#FAFAFA',
                  color: slideObj.isDark ? '#F9FAFB' : '#111827',
                }}
              >
                {slideObj.component}
              </div>
            </div>
          </div>
        ))}
        <div className="text-center py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          End of {module?.label}
        </div>
      </div>
    </div>
  );
}

import { slidesDataDay1 } from './data/slidesDay1.v2';
import { slidesDataDay2 } from './data/slidesDay2';

const MODULES = [
  { id: 'home', label: null },
  {
    id: 'day1',
    label: 'Day 1',
    title: 'Foundation, Prompt, and Tools',
    desc: 'Pengenalan AI, teknik prompt engineering dan tool AI di setiap lingkup pekerjaan.',
    icon: Sparkles,
    data: slidesDataDay1,
  },
  {
    id: 'day2',
    label: 'Day 2',
    title: 'Market Research, Ethics & Real-World Application',
    desc: 'AI for Marketing Research · Ethics & Risks · Group Work · Key Takeaways.',
    icon: Calendar,
    data: slidesDataDay2,
  },
];

function HomeScreen({ onSelect }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: 'radial-gradient(#312e81 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-500/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-10 flex flex-col items-center justify-center z-10">
        <div className="text-center mb-6 sm:mb-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-5 max-w-full">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.28em] text-slate-500 truncate">KAO INDONESIA · AI LITERACY WORKSHOP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 max-w-3xl leading-[1.1]">
            A Two-Day Workshop on <span className="text-indigo-600">AI Literacy</span> for Modern Teams.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-medium max-w-2xl px-2">
            Understand AI. Master prompt engineering. Apply AI to everyday work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          {MODULES.filter(m => m.id !== 'home').map(({ id, label, title, desc, icon: Icon, data }, i) => {
            const ready = data.length > 0;
            return (
              <button
                key={id}
                onClick={() => ready && onSelect(id)}
                disabled={!ready}
                className={classNames(
                  "group relative flex flex-col items-start p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 text-left overflow-hidden transition-all duration-500",
                  ready
                    ? "shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
                )}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-indigo-500/10 relative z-10 bg-indigo-600">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="relative z-10 flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-1.5 text-indigo-600">{label}</p>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug mb-1.5">{title}</h2>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 leading-relaxed font-medium mb-3">{desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm font-black w-full justify-between relative z-10 text-indigo-700">
                  <span className="uppercase tracking-widest text-[11px]">
                    {ready ? 'Start Workshop' : 'Coming Soon'}
                  </span>
                  {ready && (
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="block sm:hidden mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] text-center px-4">
          Tap a card to start · scroll through slides like a PDF
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeModule, setActiveModule] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const module = MODULES.find(m => m.id === activeModule);
  const slidesData = module?.data || [];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  const selectModule = (id) => { setActiveModule(id); setCurrentSlide(0); };
  const goHome = () => { setActiveModule('home'); setCurrentSlide(0); };

  useEffect(() => {
    if (activeModule === 'home' || isMobile) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') goHome();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModule, slidesData.length, isMobile]);

  const isDark = activeModule !== 'home' && !isMobile && (slidesData[currentSlide]?.isDark || false);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#0f172a' : '#FAFAFA';
  }, [isDark]);

  if (activeModule === 'home') return <HomeScreen onSelect={selectModule} />;

  if (isMobile) {
    return <MobileSlideView module={module} slidesData={slidesData} onHome={goHome} />;
  }

  const toc = slidesData.reduce((acc, slide, index) => {
    if (index === 0) acc.push({ index, label: 'Cover & Agenda' });
    else if (slide.component?.props?.chapter) acc.push({ index, label: slide.component.props.chapter });
    return acc;
  }, []);

  const slideObj = slidesData[currentSlide];
  const slideKind = slideObj?.component?.type?.displayName || slideObj?.component?.type?.name;
  const hideRGLogo = slideKind === 'Day1Cover' || slideKind === 'Closing';

  return (
    <div className={classNames(
      "w-screen h-screen relative overflow-hidden transition-colors duration-700",
      { 'bg-[#0f172a] text-[#F9FAFB]': isDark, 'bg-[#FAFAFA] text-gray-900': !isDark }
    )}>
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] z-50 bg-black/5">
        <div
          className={classNames(
            "h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]",
            isDark ? "bg-white/40" : "bg-indigo-600"
          )}
          style={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
        />
      </div>

      {/* Hoverable TOC */}
      <div className="absolute top-0 left-0 h-full w-[320px] -translate-x-[290px] hover:translate-x-0 transition-transform duration-500 z-[60] flex group">
        <div className="flex-1 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-gray-200 p-6 flex flex-col h-full overflow-hidden">
          <div className="mb-8 pt-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-600 mb-1 block">Table of Contents</span>
            <h3 className="font-black text-gray-900 text-xl leading-tight">{module?.label} — {module?.title}</h3>
          </div>
          <div className="flex flex-col gap-1 overflow-y-auto pb-10 custom-scrollbar pr-2">
            {toc.map((item, i) => {
              const nextIndex = toc[i + 1]?.index || slidesData.length;
              const isActive = currentSlide >= item.index && currentSlide < nextIndex;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(item.index)}
                  className={`text-left text-sm px-4 py-3 rounded-xl transition-all duration-300 font-bold border-l-4 ${isActive ? 'bg-indigo-50 text-indigo-800 border-indigo-500' : 'text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300'}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-[30px] h-full flex items-center justify-center bg-transparent cursor-pointer">
          <div className={`w-1.5 h-16 rounded-full transition-colors duration-300 ${isDark ? 'bg-white/20 group-hover:bg-white/50' : 'bg-gray-300 group-hover:bg-indigo-500'}`} />
        </div>
      </div>

      {/* Home button */}
      <button
        onClick={goHome}
        className={classNames(
          "absolute top-5 left-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all hover:scale-105 active:scale-95",
          isDark ? "bg-white/10 border-white/10 text-zinc-300 hover:bg-white/20" : "bg-white border-gray-200 text-gray-600 shadow-sm hover:shadow-md"
        )}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </button>

      {/* Ruangguru logo */}
      {!hideRGLogo && (
        <div className="pointer-events-none absolute top-8 right-16 z-40">
          <img
            src="/ruangguru-logo.svg"
            alt="Ruangguru"
            className={classNames(
              "h-10 w-auto object-contain transition-opacity duration-700",
              isDark ? "brightness-0 invert opacity-85" : "opacity-90"
            )}
          />
        </div>
      )}

      {/* Slides */}
      <div className="relative w-full h-full">
        {slidesData.map((slideObj, i) => (
          <div
            key={i}
            className={classNames(
              "absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              {
                "opacity-100 z-10 translate-y-0 scale-100": currentSlide === i,
                "opacity-0 z-0 translate-y-12 scale-95 pointer-events-none": currentSlide > i,
                "opacity-0 z-0 -translate-y-12 scale-105 pointer-events-none": currentSlide < i,
              }
            )}
          >
            {slideObj.component}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 z-50">
        <div className={classNames(
          "flex items-center gap-3 px-3 py-1.5 rounded-full border transition-all duration-700",
          isDark ? "bg-white/10 border-white/10 text-zinc-300" : "bg-white border-gray-200 text-gray-800 shadow-xl shadow-gray-200/50"
        )}>
          <button onClick={prevSlide} className="hover:scale-110 active:scale-95 transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-bold tracking-widest min-w-[2rem] text-center font-mono">
            {currentSlide + 1} <span className="opacity-50">/ {slidesData.length}</span>
          </span>
          <button onClick={nextSlide} className="hover:scale-110 active:scale-95 transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
