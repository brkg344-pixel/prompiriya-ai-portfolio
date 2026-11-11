"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function AuditModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { dict, reducedMotion } = useLanguage();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-void/90 backdrop-blur-2xl flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl w-full glass-panel rounded-3xl overflow-hidden border border-emerald/30 shadow-2xl flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-3 bg-surface/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald/15 border border-emerald/35 flex items-center justify-center text-emerald">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald block">
                    GROUNDEDNESS & PRIVACY SHIELD AUDIT
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                    {dict.auditModal.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close audit modal"
                className="p-2 rounded-xl bg-surface-elevated hover:bg-surface-hover text-ink-secondary hover:text-ink transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {dict.auditModal.sections.map((sec: any, idx: number) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-void/75 border border-white/10 space-y-3"
                >
                  <h4 className="font-display font-bold text-sm sm:text-base text-emerald">
                    {sec.heading}
                  </h4>
                  <ul className="space-y-2.5">
                    {sec.items.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
