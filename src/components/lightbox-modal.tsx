"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export interface LightboxPayload {
  certImg: string;
  actImg?: string;
  showingAct?: boolean;
  title: string;
  desc: string;
  meta: string;
}

export function LightboxModal({
  item,
  onClose,
}: {
  item: LightboxPayload | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const [showAct, setShowAct] = useState(false);

  useEffect(() => {
    if (item) setShowAct(Boolean(item.showingAct));
  }, [item]);

  if (!item) return null;

  const activeSrc = showAct && item.actImg ? item.actImg : item.certImg;

  return (
    <div
      className="fixed inset-0 z-50 bg-void/90 backdrop-blur-2xl flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-3 bg-surface/90">
          <div className="min-w-0">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald block">
              {lang === "th" ? "หลักฐานจากแฟ้มสะสมผลงานจริง" : "VERIFIED PORTFOLIO EVIDENCE"}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-ink truncate">
              {item.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {item.actImg && (
              <button
                type="button"
                onClick={() => setShowAct((v) => !v)}
                className="px-3 py-1.5 rounded-xl bg-purple/20 border border-purple/40 text-purple text-xs font-semibold hover:bg-purple/30 transition-colors"
              >
                {showAct
                  ? lang === "th"
                    ? "สลับดูเกียรติบัตร"
                    : "Switch to Certificate Scan"
                  : lang === "th"
                  ? "สลับดูภาพกิจกรรมจริง"
                  : "Switch to Activity Photo"}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-ink-secondary hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-void/70">
          <img
            src={activeSrc}
            alt={item.title}
            className="max-h-[58vh] w-auto max-w-full object-contain rounded-xl border border-white/10"
          />
        </div>

        <div className="px-5 py-4 border-t border-white/10 bg-surface/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">{item.desc}</p>
          <span className="text-xs font-mono text-emerald shrink-0">{item.meta}</span>
        </div>
      </div>
    </div>
  );
}
