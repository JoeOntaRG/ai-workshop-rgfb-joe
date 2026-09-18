import React from 'react';

export const MARK_COLORS = {
  role:       { bg: '#eef2ff', strong: '#6366f1', text: '#3730a3', label: 'Role' },
  task:       { bg: '#f0f9ff', strong: '#0ea5e9', text: '#075985', label: 'Task' },
  context:    { bg: '#ecfdf5', strong: '#10b981', text: '#065f46', label: 'Context' },
  format:     { bg: '#fffbeb', strong: '#f59e0b', text: '#92400e', label: 'Format' },
  constraint: { bg: '#fef2f2', strong: '#ef4444', text: '#991b1b', label: 'Constraint' },
};

export function Mark({ kind, children }) {
  const c = MARK_COLORS[kind];
  if (!c) return <>{children}</>;
  return (
    <span
      className="relative inline px-2 py-0.5 rounded-md font-semibold mx-0.5"
      style={{ backgroundColor: c.bg, color: c.text, boxShadow: `inset 0 -2px 0 ${c.strong}55` }}
    >
      <span
        className="absolute -top-[22px] left-0 text-[9px] font-black uppercase tracking-[0.15em] px-1.5 py-0.5 rounded text-white whitespace-nowrap shadow-sm"
        style={{ backgroundColor: c.strong }}
      >
        {c.label}
      </span>
      {children}
    </span>
  );
}
