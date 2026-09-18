import React from 'react';

const IMG = 'https://cdn-web.ruangguru.com/file-uploader/bd1d3fef-b855-422d-bba0-2942181806a2.png';

export default function ContentPlanCalendar() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <img
        src={IMG}
        alt=""
        className="max-w-full max-h-full w-auto h-auto rounded-2xl shadow-2xl border border-gray-200 object-contain"
      />
    </div>
  );
}
ContentPlanCalendar.displayName = 'ContentPlanCalendar';
