import React, { useEffect, useState } from 'react';
import { Clock, ExternalLink, MessageSquareText } from 'lucide-react';
import { ACCENT, ACCENT_BG, ACCENT_BORDER } from '../../../theme';

const postTestQrUrl = 'https://cdn-web.ruangguru.com/file-uploader/d3a09960-fb57-4e88-b793-831f77ff5926.png';
const postTestUrl = 'https://bit.ly/posttest_AI_KAO';
const feedbackUrl = 'https://forms.gle/jhtJJ2gY4BEyitg28';
const feedbackQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(feedbackUrl)}`;

export default function PostTestSlide() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className={`w-full max-w-6xl mx-auto px-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <section className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ color: ACCENT }}>
              Final Check
            </p>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none">
              Post-test & feedback.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl border-2 px-5 py-4" style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_BG }}>
            <Clock className="h-6 w-6" style={{ color: ACCENT }} />
            <span className="text-2xl font-black text-gray-900">10 menit</span>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[2rem] border-2 bg-white p-6 shadow-sm" style={{ borderColor: ACCENT_BORDER }}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">01</p>
                <p className="text-2xl font-black text-gray-900">Post-test</p>
              </div>
              <Clock className="h-6 w-6" style={{ color: ACCENT }} />
            </div>
            <div className="grid grid-cols-[210px_1fr] gap-5 items-center">
              <img
                src={postTestQrUrl}
                alt="QR post-test AI KAO Indonesia"
                className="h-[210px] w-[210px] object-contain"
              />
              <a
                href={postTestUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-center text-lg font-black text-white"
                style={{ backgroundColor: ACCENT }}
              >
                bit.ly/posttest_AI_KAO
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border-2 bg-white p-6 shadow-sm" style={{ borderColor: ACCENT_BORDER }}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">02</p>
                <p className="text-2xl font-black text-gray-900">Feedback</p>
              </div>
              <MessageSquareText className="h-6 w-6" style={{ color: ACCENT }} />
            </div>
            <div className="grid grid-cols-[210px_1fr] gap-5 items-center">
              <img
                src={feedbackQrUrl}
                alt="QR feedback AI KAO Indonesia"
                className="h-[210px] w-[210px] object-contain"
              />
              <a
                href={feedbackUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-center text-lg font-black"
                style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
              >
                forms.gle/jhtJJ2gY4BEyitg28
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PostTestSlide.displayName = 'PostTestSlide';
