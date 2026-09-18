import React, { useEffect, useState } from 'react';

export default function SpeakerProfile() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white text-gray-900 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 px-10">
        <div className={`relative w-[320px] md:w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden flex-shrink-0 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10" />
          <img
            src="/speaker-profile-johannes.jpeg"
            alt="Johannes Jonathan"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://ui-avatars.com/api/?name=Johannes+Jonathan&size=800&background=f3f4f6&color=111827&font-size=0.33';
            }}
          />
        </div>

        <div className={`flex flex-col flex-1 transition-all duration-1000 delay-200 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">
            Speaker Profile
          </p>
          <h1 className="text-6xl md:text-[5rem] font-black tracking-tighter leading-[1.05] text-gray-900 mb-6">
            Johannes<br/>Jonathan
          </h1>
          <p className="text-2xl text-gray-500 font-medium tracking-tight mb-10">
            Product Manager at <span className="text-gray-900 font-bold">Ruangguru</span>
          </p>
          <div className="w-12 h-1 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
SpeakerProfile.displayName = 'SpeakerProfile';
