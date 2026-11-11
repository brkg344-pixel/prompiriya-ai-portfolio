"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  FolderKanban,
  Cpu,
  Zap,
  Award,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { ExpandableTabs, type TabItem } from "@/components/ui/expandable-tabs";
import { useLanguage } from "@/context/language-context";
import { PROJECTS_CASE_STUDIES } from "@/data/portfolio-data";

export function Navbar({
  activeSection = "hero",
  onNavigateSection,
  onOpenAudit,
}: {
  activeSection?: string;
  onNavigateSection?: (id: string) => void;
  onOpenAudit?: () => void;
}) {
  const { lang, setLang, reducedMotion, setReducedMotion, dict } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const tabs: TabItem[] = [
    { id: "hero", title: dict.nav.tabs[0].label, icon: Home },
    { id: "about", title: dict.nav.tabs[1].label, icon: User },
    { id: "education", title: dict.nav.tabs[2].label, icon: GraduationCap },
    { id: "projects", title: dict.nav.tabs[3].label, icon: FolderKanban },
    { id: "skills", title: dict.nav.tabs[4].label, icon: Cpu },
    { id: "activities", title: dict.nav.tabs[5].label, icon: Zap },
    { id: "certificates", title: dict.nav.tabs[6].label, icon: Award },
    { id: "statement", title: dict.nav.tabs[7].label, icon: FileText },
    { id: "contact", title: dict.nav.tabs[8].label, icon: Mail },
  ];

  const handleTabChange = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-canvas/80 backdrop-blur-2xl border-b border-white/10">
        {/* Live Scroll Telemetry Bar */}
        {!reducedMotion && (
          <motion.div
            style={{ scaleX }}
            className="h-[2px] bg-gradient-to-r from-emerald via-purple to-techblue origin-left"
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald/25 via-purple/20 to-techblue/25 border border-emerald/40 flex items-center justify-center shadow-[0_0_20px_-4px_rgba(53,230,161,0.35)] group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-emerald text-base">BP</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm sm:text-base text-ink group-hover:text-emerald transition-colors">
                  {dict.nav.name}
                </span>
                <span className="px-1.5 py-0.5 text-[11px] font-mono font-semibold rounded bg-emerald/15 text-emerald border border-emerald/30 hidden sm:inline-block">
                  {dict.nav.nick}
                </span>
              </div>
              <p className="text-[11px] text-ink-secondary">{dict.nav.subtitle}</p>
            </div>
          </Link>

          <div className="hidden xl:block">
            <ExpandableTabs tabs={tabs} activeId={activeSection} onChange={handleTabChange} />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              {PROJECTS_CASE_STUDIES.map((p, idx) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="px-2.5 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-white/10 hover:border-emerald/40 text-xs font-mono text-ink-secondary hover:text-emerald transition-all"
                  title={p[lang].title}
                >
                  #0{idx + 1}
                </Link>
              ))}
            </div>

            {onOpenAudit && (
              <button
                type="button"
                onClick={onOpenAudit}
                className="px-2.5 py-1.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 hover:border-techblue/40 text-xs font-medium text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-techblue" />
                <span className="hidden sm:inline">{dict.nav.auditBtn}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setReducedMotion((prev) => !prev)}
              aria-pressed={reducedMotion}
              className={`p-2 rounded-xl border transition-all ${
                reducedMotion
                  ? "bg-amber-500/20 border-amber-400/40 text-amber-300"
                  : "bg-surface-elevated hover:bg-surface-hover border-white/10 text-ink-secondary hover:text-emerald"
              }`}
              title={
                lang === "th"
                  ? "สลับโหมดลดแอนิเมชัน (Reduced Motion)"
                  : "Toggle Reduced Motion"
              }
            >
              <Zap className="w-4 h-4" />
            </button>

            <div className="flex items-center p-0.5 rounded-xl bg-surface-elevated border border-white/15">
              <button
                type="button"
                onClick={() => setLang("th")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === "th"
                    ? "bg-emerald text-void shadow"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                TH
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-emerald text-void shadow"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Command Bar (< xl) */}
      <nav
        aria-label="Quick mobile navigation"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 xl:hidden max-w-[95vw] overflow-x-auto px-2.5 py-1.5 rounded-2xl bg-void/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.75)] flex items-center gap-1"
      >
        {tabs.map((tab) => {
          if (tab.type === "separator") return null;
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`px-2.5 py-1.5 rounded-xl text-[11px] font-medium flex items-center gap-1.5 shrink-0 transition-all ${
                isActive
                  ? "bg-emerald text-void font-bold shadow"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className={isActive ? "inline" : "hidden sm:inline"}>{tab.title}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
