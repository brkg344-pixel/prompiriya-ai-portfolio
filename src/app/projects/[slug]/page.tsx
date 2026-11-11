"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Target,
  AlertTriangle,
  Eye,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { SpatialCard } from "@/components/ui/spatial-card";
import { SyntropicBackground } from "@/components/three/syntropic-background";
import { DcaInteractiveSandbox } from "@/components/dca-interactive-sandbox";
import { LightboxModal, type LightboxPayload } from "@/components/lightbox-modal";
import { AuditModal } from "@/components/audit-modal";
import { useLanguage } from "@/context/language-context";
import { PROJECTS_CASE_STUDIES } from "@/data/portfolio-data";

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const { lang, dict } = useLanguage();
  const isTh = lang === "th";
  const [lightboxItem, setLightboxItem] = useState<LightboxPayload | null>(null);
  const [auditOpen, setAuditOpen] = useState(false);

  const project =
    PROJECTS_CASE_STUDIES.find((p) => p.slug === params?.slug) || PROJECTS_CASE_STUDIES[0];
  const pd = project[lang];

  return (
    <div className="relative min-h-screen bg-canvas text-ink bg-syntropic-grid selection:bg-emerald selection:text-void">
      <SyntropicBackground />
      <Navbar activeSection="projects" onOpenAudit={() => setAuditOpen(true)} />

      <main className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-28 space-y-8 sm:space-y-10">
        {/* Top Case Study Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <Link
            href="/#projects"
            className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/15 text-xs sm:text-sm font-semibold text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-emerald shrink-0" />
            <span>{dict.nav.backHome}</span>
          </Link>

          <div className="flex overflow-x-auto no-scrollbar max-w-full items-center gap-2 pb-1 sm:pb-0">
            {PROJECTS_CASE_STUDIES.map((p, idx) => {
              const active = p.slug === project.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className={`px-3 py-2 sm:py-1.5 rounded-xl text-xs font-mono whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? "bg-emerald text-void font-bold"
                      : "bg-surface-elevated hover:bg-surface-hover border border-white/10 text-ink-secondary hover:text-ink"
                  }`}
                >
                  #0{idx + 1} {p[lang].category}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 1. Overview Hero Banner */}
        <SpatialCard glowColor="emerald" tiltIntensity={2.5} className="p-5 sm:p-10 space-y-4 sm:space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald/15 border border-emerald/35 text-emerald font-mono text-[11px] sm:text-xs font-semibold">
              {pd.badge}
            </span>
            <span className="text-xs font-mono text-ink-muted">{pd.date}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            {pd.title}
          </h1>

          <p className="text-[13.5px] sm:text-base text-ink-secondary leading-[1.8] sm:leading-relaxed max-w-4xl">
            {pd.overview}
          </p>

          {pd.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {pd.metrics.map((m: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-void/80 border border-white/10"
                >
                  <div className="text-[11px] font-mono text-ink-muted">{m.label}</div>
                  <div className="font-display font-bold text-lg text-emerald mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {pd.links && pd.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {pd.links.map((lk: any, idx: number) => (
                <a
                  key={idx}
                  href={lk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-techblue/15 hover:bg-techblue/25 border border-techblue/35 text-xs font-mono text-techblue transition-colors"
                >
                  <span>{lk.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          )}
        </SpatialCard>

        {/* 2. Background & Problem + 3. Objectives + 4. Target Users */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpatialCard glowColor="purple" index={0} className="p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-rose-300">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="font-display font-bold text-xl text-ink">
                {isTh ? "02 / ที่มาและปัญหา" : "02 / Background & Problem"}
              </h2>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed">{pd.backgroundProblem}</p>
            <div className="pt-3 border-t border-white/10 space-y-1.5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple font-semibold">
                {isTh ? "04 / กลุ่มเป้าหมายของผลงาน" : "04 / Target Users & Audience"}
              </h3>
              <p className="text-sm text-ink leading-relaxed">{pd.targetUsers}</p>
            </div>
          </SpatialCard>

          <SpatialCard glowColor="emerald" index={1} className="p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-emerald">
              <Target className="w-5 h-5" />
              <h2 className="font-display font-bold text-xl text-ink">
                {isTh ? "03 / วัตถุประสงค์ของโครงงาน" : "03 / Project Objectives"}
              </h2>
            </div>
            <ul className="space-y-2.5 text-sm text-ink-secondary">
              {pd.objectives.map((o: string) => (
                <li key={o} className="flex items-start gap-2.5 p-3 rounded-xl bg-void/60 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </SpatialCard>
        </section>

        {/* 5. Actual Role & Responsibilities */}
        <SpatialCard
          glowColor="purple"
          tiltIntensity={2}
          className="p-6 sm:p-8 space-y-4 border-l-4 border-l-purple"
        >
          <div className="flex items-center gap-2 text-purple">
            <Layers className="w-5 h-5" />
            <h2 className="font-display font-bold text-xl text-ink">
              {isTh
                ? "05 / บทบาทและหน้าที่ที่รับผิดชอบจริง (Grounded Role Verification)"
                : "05 / My Actual Role & Responsibilities"}
            </h2>
          </div>
          <p className="text-sm font-semibold text-emerald">{pd.roleAndResponsibilities.groupNotice}</p>
          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            {pd.roleAndResponsibilities.groupScope}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {pd.roleAndResponsibilities.individualFocus.map((r: string) => (
              <li
                key={r}
                className="p-3.5 rounded-2xl bg-void/75 border border-white/10 text-xs sm:text-sm text-ink flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </SpatialCard>

        {/* 6. Process & 7. Technologies + 8. Design Implementation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpatialCard glowColor="techblue" index={0} className="p-6 sm:p-7 space-y-3.5">
            <h2 className="font-display font-bold text-xl text-ink">
              {isTh ? "06 / กระบวนการพัฒนา (Step-by-Step)" : "06 / Development Process"}
            </h2>
            <div className="space-y-2.5">
              {pd.process.map((step: string, idx: number) => (
                <div
                  key={step}
                  className="p-3.5 rounded-xl bg-void/75 border border-white/10 text-xs sm:text-sm text-ink-secondary flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-bold text-techblue shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </SpatialCard>

          <SpatialCard glowColor="emerald" index={1} className="p-6 sm:p-7 space-y-3.5">
            <div className="flex items-center gap-2 text-emerald">
              <Cpu className="w-5 h-5" />
              <h2 className="font-display font-bold text-xl text-ink">
                {isTh ? "07 / เครื่องมือ เทคโนโลยี และ AI" : "07 / Technologies & AI Tools Used"}
              </h2>
            </div>
            <div className="space-y-2.5">
              {pd.technologies.map((t: any) => (
                <div
                  key={t.name}
                  className="p-3.5 rounded-xl bg-void/75 border border-white/10 space-y-1"
                >
                  <div className="font-mono font-bold text-xs text-emerald">{t.name}</div>
                  <div className="text-xs text-ink-secondary leading-relaxed">{t.reason}</div>
                </div>
              ))}
            </div>
            {pd.designImplementation && (
              <div className="p-3.5 rounded-xl bg-emerald/10 border border-emerald/25 text-xs text-ink-secondary">
                <span className="font-mono text-emerald font-semibold block mb-1">
                  {isTh ? "08 / การออกแบบและสถาปัตยกรรม" : "08 / Architecture & Design"}
                </span>
                {pd.designImplementation}
              </div>
            )}
          </SpatialCard>
        </section>

        {/* Live DCA Simulator if applicable */}
        {project.hasLiveSimulator && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald">
              <Sparkles className="w-4 h-4" />
              <span>
                {isTh
                  ? "LIVE INTERACTIVE SIMULATOR • ทดลองปรับค่าตัวแปรคณิตศาสตร์อนุกรมเรขาคณิตแบบเรียลไทม์"
                  : "LIVE INTERACTIVE SIMULATOR • REAL-TIME GEOMETRIC SERIES & STRESS-TEST ENGINE"}
              </span>
            </div>
            <DcaInteractiveSandbox />
          </div>
        )}

        {/* 9. Authentic Gallery */}
        <SpatialCard glowColor="techblue" tiltIntensity={2} className="p-6 sm:p-8 space-y-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-techblue">
              AUTHENTIC EVIDENCE ARCHIVE
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink mt-1">
              {isTh
                ? "09 / ภาพผลงานและหลักฐานจริงจากแฟ้มสะสมผลงาน"
                : "09 / Authentic Project Evidence"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((g: any, i: number) => (
              <div
                key={i}
                onClick={() =>
                  setLightboxItem({
                    certImg: g.img,
                    title: pd.title,
                    desc: isTh ? g.captionTh : g.captionEn,
                    meta: pd.date,
                  })
                }
                className="p-3.5 rounded-2xl bg-void/80 border border-white/10 hover:border-emerald/40 space-y-2.5 cursor-pointer group/gal transition-colors"
              >
                <div className="relative rounded-xl overflow-hidden aspect-video bg-surface">
                  <img
                    src={g.img}
                    alt={g.captionEn}
                    className="w-full h-full object-contain group-hover/gal:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-void/80 text-[10px] font-mono text-emerald flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{isTh ? "ขยายภาพ" : "Inspect"}</span>
                  </div>
                </div>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {isTh ? g.captionTh : g.captionEn}
                </p>
              </div>
            ))}
          </div>
        </SpatialCard>

        {/* 10. Challenges, 11. Results, 12. Lessons, 13. Future */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpatialCard glowColor="purple" index={0} className="p-6 sm:p-7 space-y-3">
            <h3 className="font-display font-bold text-lg text-ink">
              {isTh ? "10 / ปัญหา อุปสรรค และวิธีแก้ไข" : "10 / Challenges & Solutions"}
            </h3>
            <div className="p-3.5 rounded-xl bg-void/75 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-rose-300 uppercase">
                {isTh ? "ความท้าทาย" : "Challenge"}
              </span>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {pd.challengesSolutions.challenge}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald/10 border border-emerald/25 space-y-1">
              <span className="text-[11px] font-mono text-emerald uppercase">
                {isTh ? "แนวทางแก้ไข" : "Solution"}
              </span>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                {pd.challengesSolutions.solution}
              </p>
            </div>
          </SpatialCard>

          <SpatialCard glowColor="emerald" index={1} className="p-6 sm:p-7 space-y-3">
            <h3 className="font-display font-bold text-lg text-ink">
              {isTh
                ? "11–13 / ผลลัพธ์ สิ่งที่ได้เรียนรู้ และการต่อยอด"
                : "11–13 / Results, Lessons & Future Roadmap"}
            </h3>
            <div className="p-3 rounded-xl bg-void/75 border border-white/10 text-xs sm:text-sm text-ink leading-relaxed">
              <span className="text-emerald font-mono text-[11px] block mb-0.5">
                {isTh ? "11 / ผลลัพธ์และการประเมินผล" : "11 / Results & Evaluation"}
              </span>
              {pd.resultsEvaluation}
            </div>
            <div className="p-3 rounded-xl bg-void/75 border border-white/10 text-xs sm:text-sm text-ink-secondary leading-relaxed">
              <span className="text-purple font-mono text-[11px] block mb-0.5">
                {isTh ? "12 / สิ่งที่ได้เรียนรู้" : "12 / Key Takeaways"}
              </span>
              {pd.lessonsLearned}
            </div>
            <div className="p-3 rounded-xl bg-void/75 border border-white/10 text-xs sm:text-sm text-ink-secondary leading-relaxed">
              <span className="text-techblue font-mono text-[11px] block mb-0.5">
                {isTh ? "13 / แนวทางการพัฒนาต่อยอด" : "13 / Future Roadmap"}
              </span>
              {pd.futureImprovements}
            </div>
          </SpatialCard>
        </section>
      </main>

      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
}
