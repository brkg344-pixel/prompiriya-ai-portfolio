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
  const mobileNavRef = React.useRef<HTMLElement>(null);
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

  // Auto-center active tab in the mobile/tablet bottom navigation bar
  React.useEffect(() => {
    const container = mobileNavRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLElement>(`[data-tab-id="${activeSection}"]`);
    if (activeBtn) {
      const scrollLeft =
        activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [activeSection, reducedMotion]);

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
      <header className="fixed top-0 left-0 right-0 z-40 bg-canvas/85 backdrop-blur-2xl border-b border-white/10">
        {/* Live Scroll Telemetry Bar */}
        {!reducedMotion && (
          <motion.div
            style={{ scaleX }}
            className="h-[2.5px] bg-gradient-to-r from-emerald via-purple to-techblue origin-left"
          />
        )}

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald/25 via-purple/20 to-techblue/25 border border-emerald/40 flex items-center justify-center shadow-[0_0_20px_-4px_rgba(53,230,161,0.35)] group-hover:scale-105 transition-transform shrink-0">
              <span className="font-display font-extrabold text-emerald text-sm sm:text-base">BP</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs sm:text-base text-ink group-hover:text-emerald transition-colors truncate">
                  {dict.nav.name}
                </span>
                <span className="px-1.5 py-0.5 text-[10px] sm:text-[11px] font-mono font-semibold rounded bg-emerald/15 text-emerald border border-emerald/30 shrink-0">
                  {dict.nav.nick}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-ink-secondary truncate">
                {dict.nav.subtitle}
              </p>
            </div>
          </Link>

          <div className="hidden xl:block">
            <ExpandableTabs tabs={tabs} activeId={activeSection} onChange={handleTabChange} />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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
                aria-label={dict.nav.auditBtn}
                className="h-9 px-2.5 sm:px-3 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 hover:border-techblue/40 text-xs font-medium text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-techblue shrink-0" />
                <span className="hidden sm:inline">{dict.nav.auditBtn}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setReducedMotion((prev) => !prev)}
              aria-pressed={reducedMotion}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all ${
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

            <div className="flex items-center p-0.5 rounded-xl bg-surface-elevated border border-white/15 h-9">
              <button
                type="button"
                onClick={() => setLang("th")}
                className={`px-2 sm:px-2.5 h-full rounded-lg text-xs font-bold transition-all ${
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
                className={`px-2 sm:px-2.5 h-full rounded-lg text-xs font-bold transition-all ${
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

      {/* Mobile & Tablet Floating Bottom Navigation Dock (< xl) */}
      <div className="fixed bottom-0 inset-x-0 z-40 xl:hidden pointer-events-none px-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-void/95 via-void/60 to-transparent">
        <nav
          ref={mobileNavRef}
          aria-label="Quick mobile navigation"
          className="pointer-events-auto mx-auto max-w-fit overflow-x-auto no-scrollbar px-2 py-1.5 rounded-2xl bg-surface/95 backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.85)] flex items-center gap-1"
        >
          {tabs.map((tab) => {
            if (tab.type === "separator") return null;
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                data-tab-id={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`h-9 px-3 rounded-xl text-xs font-medium flex items-center gap-1.5 shrink-0 transition-all ${
                  isActive
                    ? "bg-emerald text-void font-bold shadow-[0_0_16px_rgba(53,230,161,0.35)]"
                    : "text-ink-secondary hover:text-ink active:bg-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{tab.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
