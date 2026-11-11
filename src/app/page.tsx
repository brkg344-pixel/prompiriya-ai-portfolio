"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  Send,
  ShieldCheck,
  BookOpen,
  FileText,
  ExternalLink,
  ChevronUp,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { SpatialCard } from "@/components/ui/spatial-card";
import { SyntropicBackground } from "@/components/three/syntropic-background";
import { InteractiveHoloCore } from "@/components/three/interactive-holo-core";
import { LightboxModal, type LightboxPayload } from "@/components/lightbox-modal";
import { AuditModal } from "@/components/audit-modal";
import { useLanguage } from "@/context/language-context";
import { PROJECTS_CASE_STUDIES } from "@/data/portfolio-data";

export default function HomePage() {
  const { lang, dict, reducedMotion } = useLanguage();
  const isTh = lang === "th";

  const [activeSection, setActiveSection] = useState<string>("hero");
  const [skillFilter, setSkillFilter] = useState<"all" | "applied" | "exploring">("all");
  const [certFilter, setCertFilter] = useState<string>("all");
  const [showPreface, setShowPreface] = useState(false);
  const [showVerbatim, setShowVerbatim] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<LightboxPayload | null>(null);
  const [auditOpen, setAuditOpen] = useState(false);

  // Admissions Quick Inquiry Composer State
  const [inquiryTopic, setInquiryTopic] = useState<"interview" | "code" | "docs">("interview");
  const [inquirySender, setInquirySender] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  // Register GSAP ScrollTrigger for section tracking
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = [
      "hero",
      "about",
      "education",
      "projects",
      "skills",
      "activities",
      "certificates",
      "statement",
      "contact",
    ];

    const triggers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  const generatedMessage = useMemo(() => {
    const senderText = inquirySender.trim()
      ? inquirySender.trim()
      : isTh
      ? "คณะกรรมการพิจารณาแฟ้มสะสมผลงาน คณะ ICT มหาวิทยาลัยศิลปากร"
      : "Admissions Committee, Faculty of ICT, Silpakorn University";

    if (isTh) {
      if (inquiryTopic === "interview") {
        return `เรียน นายพรหมพิริยะ เพชรยังพูล (บูม),\n\nจาก: ${senderText}\nเรื่อง: สอบถามข้อมูลการสมัครและการสัมภาษณ์ สาขาวิชาปัญญาประดิษฐ์สำหรับเทคโนโลยีประสบการณ์ดิจิทัล คณะ ICT ม.ศิลปากร\n\nทางคณะกรรมการได้ตรวจสอบแฟ้มสะสมผลงานออนไลน์ของคุณแล้ว และต้องการติดต่อประสานงานเพิ่มเติมเกี่ยวกับการสัมภาษณ์ครับ`;
      }
      if (inquiryTopic === "code") {
        return `เรียน นายพรหมพิริยะ เพชรยังพูล (บูม),\n\nจาก: ${senderText}\nเรื่อง: ขอดูโค้ดต้นฉบับและรายละเอียดโครงงาน DCA Investment Simulator เพิ่มเติม\n\nรบกวนส่งลิงก์ไฟล์โครงงานฉบับเต็มและโค้ดต้นฉบับเพื่อประกอบการพิจารณาเพิ่มเติมครับ`;
      }
      return `เรียน นายพรหมพิริยะ เพชรยังพูล (บูม),\n\nจาก: ${senderText}\nเรื่อง: ขอเอกสารใบแสดงผลการเรียน (ปพ.1) และเกียรติบัตรฉบับจริงเพื่อตรวจสอบเพิ่มเติม`;
    } else {
      if (inquiryTopic === "interview") {
        return `Dear Mr. Prompiriya Phetyangphul (Boom),\n\nFrom: ${senderText}\nSubject: Silpakorn University ICT (AI for Digital Experience Technology) Admission & Interview Inquiry\n\nWe have reviewed your interactive portfolio website and would like to follow up regarding your application and interview details.`;
      }
      if (inquiryTopic === "code") {
        return `Dear Mr. Prompiriya Phetyangphul (Boom),\n\nFrom: ${senderText}\nSubject: Request for DCA Investment Simulator Source Code & Project Report\n\nPlease share any additional documentation or repository links for review.`;
      }
      return `Dear Mr. Prompiriya Phetyangphul (Boom),\n\nFrom: ${senderText}\nSubject: Request for Official Academic Transcripts & Original Certificates`;
    }
  }, [inquiryTopic, inquirySender, isTh]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("brkg344@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard?.writeText(generatedMessage);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(
      isTh
        ? "[Silpakorn ICT Portfolio] ติดต่อนายพรหมพิริยะ เพชรยังพูล"
        : "[Silpakorn ICT Portfolio] Inquiry for Mr. Prompiriya Phetyangphul"
    );
    const body = encodeURIComponent(generatedMessage);
    window.location.href = `mailto:brkg344@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-canvas text-ink bg-syntropic-grid selection:bg-emerald selection:text-void">
      {/* Layer 0: Interactive Three.js 3D Neural Lattice & Constellation */}
      <SyntropicBackground />

      <Navbar
        activeSection={activeSection}
        onOpenAudit={() => setAuditOpen(true)}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-28 space-y-14 sm:space-y-20">
        {/* ================================================================= */}
        {/* 1. HERO SECTION — SPATIAL AI LABORATORY                           */}
        {/* ================================================================= */}
        <section id="hero" className="scroll-mt-20 sm:scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left 7 Cols: Identity, Value Proposition & Primary Actions */}
          <SpatialCard
            glowColor="emerald"
            tiltIntensity={3.5}
            className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6"
          >
            <div className="space-y-4">
              {/* Top Telemetry Status Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald/15 border border-emerald/35 text-emerald text-[11px] sm:text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald animate-ping shrink-0" />
                    <span>{dict.hero.badgeTarget}</span>
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple/15 border border-purple/35 text-purple text-[11px] sm:text-xs font-medium">
                    {dict.hero.badgeMajor}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-ink-muted hidden sm:inline">
                  TCAS70 // SILPAKORN.ICT
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-emerald flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>{dict.hero.greeting}</span>
                </p>
                <h1 className="font-display font-extrabold text-[1.85rem] sm:text-5xl lg:text-[3.35rem] leading-[1.15] sm:leading-[1.08] tracking-tight text-ink">
                  {dict.hero.namePrimary}
                  <span className="text-syntropic-gradient">{dict.hero.nameLast}</span>
                </h1>
                <p className="text-xs sm:text-sm font-mono text-ink-secondary leading-relaxed">
                  {dict.hero.nameSub} •{" "}
                  <span className="text-emerald font-semibold">{dict.hero.schoolTag}</span>
                </p>
              </div>

              {/* Role Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {dict.hero.roles.map((r: string, idx: number) => (
                  <span
                    key={r}
                    className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium border transition-colors ${
                      idx < 3
                        ? "bg-emerald/10 border-emerald/30 text-emerald"
                        : "bg-surface-elevated border-white/10 text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="text-[13.5px] sm:text-base text-ink-secondary leading-[1.75] sm:leading-relaxed">
                {dict.hero.intro}
              </p>

              {/* Academic Highlight Callout Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-void/80 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald block">
                    {dict.hero.interestsLabel}
                  </span>
                  <span className="font-semibold text-ink mt-0.5 block leading-snug">
                    {dict.hero.badgeMajor}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple block">
                    {dict.hero.portraitTop}
                  </span>
                  <span className="font-semibold text-ink mt-0.5 block leading-snug">
                    {dict.hero.authenticBadge}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a href="#projects" className="w-full sm:w-auto">
                <LiquidButton className="w-full sm:w-auto justify-center">{dict.hero.ctaPrimary}</LiquidButton>
              </a>
              <Link href="/projects/dca-simulator" className="w-full sm:w-auto">
                <MetalButton variant="success" className="w-full sm:w-auto">{dict.hero.ctaSecondary}</MetalButton>
              </Link>
              <button
                type="button"
                onClick={() => setAuditOpen(true)}
                className="w-full sm:w-auto justify-center px-3.5 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 text-xs font-mono text-ink-secondary hover:text-emerald flex items-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald" />
                <span>{dict.nav.auditBtn}</span>
              </button>
            </div>
          </SpatialCard>

          {/* Right 5 Cols: Authentic Candidate Portrait + 3D Interactive Holo Core */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            <SpatialCard glowColor="purple" tiltIntensity={4} className="p-4 sm:p-5 space-y-4">
              <div className="grid grid-cols-12 gap-3.5 sm:gap-4 items-center">
                {/* Portrait with Lightbox Trigger — Compact 5-col on mobile & desktop for eye comfort */}
                <div
                  onClick={() =>
                    setLightboxItem({
                      certImg: "/images/profile-boom.jpg",
                      actImg: "/images/profile-standing.jpg",
                      title: dict.hero.portraitName,
                      desc: dict.hero.intro,
                      meta: dict.hero.schoolTag,
                    })
                  }
                  className="col-span-5 relative rounded-2xl overflow-hidden bg-void aspect-[4/5] border border-white/15 group/img cursor-pointer"
                >
                  <img
                    src="/images/profile-boom.jpg"
                    alt="Prompiriya Phetyangphul"
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent flex items-end p-2 sm:p-2.5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-emerald flex items-center gap-1 leading-tight">
                      <Eye className="w-3 h-3 shrink-0" />
                      <span className="truncate">{dict.hero.portraitRole}</span>
                    </span>
                  </div>
                </div>

                {/* Candidate Telemetry & 5-Semester GPA Grid */}
                <div className="col-span-7 space-y-2.5 sm:space-y-3">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-emerald">
                      CANDIDATE PROFILE // VERIFIED
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-ink mt-0.5 leading-snug">
                      {dict.hero.portraitName}
                    </div>
                    <div className="text-[11px] sm:text-xs text-ink-secondary leading-snug">{dict.hero.schoolTag}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-void/85 border border-emerald/30">
                      <div className="text-[10px] font-mono text-ink-muted truncate">
                        {dict.hero.metricGpax}
                      </div>
                      <div className="font-display font-extrabold text-lg sm:text-xl text-emerald">3.58</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-void/85 border border-white/10">
                      <div className="text-[10px] font-mono text-ink-muted truncate">
                        {dict.hero.metricSci}
                      </div>
                      <div className="font-display font-bold text-base sm:text-lg text-emerald">3.56</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-void/85 border border-white/10">
                      <div className="text-[10px] font-mono text-ink-muted truncate">
                        {dict.hero.metricLang}
                      </div>
                      <div className="font-display font-bold text-base sm:text-lg text-purple">3.50</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-void/85 border border-white/10">
                      <div className="text-[10px] font-mono text-ink-muted truncate">
                        {dict.hero.metricMath}
                      </div>
                      <div className="font-display font-bold text-base sm:text-lg text-techblue">3.40</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Three.js 3D Hologram Core */}
              <InteractiveHoloCore />
            </SpatialCard>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. ABOUT ME — IDENTITY & PERSONAL STORY                           */}
        {/* ================================================================= */}
        <section id="about" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald">
              {dict.about.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {dict.about.title}
            </h2>
            <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-3xl leading-relaxed">{dict.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            <SpatialCard glowColor="emerald" index={0} className="lg:col-span-7 p-5 sm:p-8 space-y-4">
              <h3 className="font-display font-bold text-lg sm:text-xl text-emerald leading-snug">
                {dict.about.storyHeading}
              </h3>
              <p className="text-[13.5px] sm:text-base text-ink-secondary leading-[1.8] sm:leading-relaxed">
                {dict.about.p1}
              </p>
              <p className="text-[13.5px] sm:text-base text-ink-secondary leading-[1.8] sm:leading-relaxed">
                {dict.about.p2}
              </p>
              <blockquote className="p-4 rounded-2xl bg-void/80 border-l-4 border-emerald text-[13.5px] sm:text-sm text-ink space-y-1.5 leading-relaxed">
                <p className="font-medium italic">{dict.about.quote}</p>
                <footer className="text-xs font-mono text-emerald">
                  {dict.about.quoteCaption}
                </footer>
              </blockquote>
            </SpatialCard>

            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <SpatialCard glowColor="purple" index={1} className="p-5 sm:p-6 space-y-3">
                <h3 className="font-display font-bold text-base text-ink">
                  {dict.about.factsTitle}
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {dict.about.facts.map((f: any) => (
                    <div
                      key={f.k}
                      className="p-3 rounded-xl bg-void/75 border border-white/10"
                    >
                      <dt className="font-mono text-[11px] text-ink-muted">{f.k}</dt>
                      <dd className="font-semibold text-ink mt-0.5 leading-snug">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </SpatialCard>

              <SpatialCard glowColor="techblue" index={2} className="p-5 sm:p-6 space-y-3">
                <h3 className="font-display font-bold text-base text-ink">
                  {dict.about.hobbiesTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dict.about.hobbies.map((h: any) => (
                    <div
                      key={h.title}
                      className="p-3 rounded-xl bg-void/75 border border-white/10 hover:border-emerald/30 transition-colors"
                    >
                      <div className="font-semibold text-xs text-emerald">{h.title}</div>
                      <div className="text-xs text-ink-secondary mt-0.5 leading-relaxed">{h.desc}</div>
                    </div>
                  ))}
                </div>
              </SpatialCard>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. EDUCATION — ACADEMIC RECORD & CORE SUBJECT GPAs                */}
        {/* ================================================================= */}
        <section id="education" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald">
              {dict.education.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {dict.education.title}
            </h2>
            <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-3xl leading-relaxed">{dict.education.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            <div className="lg:col-span-7 space-y-4">
              <SpatialCard
                glowColor="emerald"
                index={0}
                className="p-5 sm:p-7 space-y-3 border-l-4 border-l-emerald"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald/15 border border-emerald/35 text-emerald text-[11px] sm:text-xs font-mono font-semibold">
                    {dict.education.highBadge}
                  </span>
                  <span className="font-display font-extrabold text-emerald text-lg sm:text-xl">
                    GPAX 3.58
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                  {dict.education.highSchool}
                </h3>
                <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-[1.75] sm:leading-relaxed">
                  {dict.education.highDesc}
                </p>
              </SpatialCard>

              <SpatialCard
                glowColor="techblue"
                index={1}
                className="p-5 sm:p-7 space-y-3 border-l-4 border-l-techblue"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-techblue/15 border border-techblue/35 text-techblue text-[11px] sm:text-xs font-mono font-semibold">
                    {dict.education.jrBadge}
                  </span>
                  <span className="font-display font-extrabold text-techblue text-lg sm:text-xl">
                    GPAX 3.45
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                  {dict.education.jrSchool}
                </h3>
                <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-[1.75] sm:leading-relaxed">
                  {dict.education.jrDesc}
                </p>
              </SpatialCard>
            </div>

            <SpatialCard glowColor="purple" index={2} className="lg:col-span-5 p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-base text-ink leading-snug">
                  {dict.education.subjectsTitle}
                </h3>
                <p className="text-xs text-ink-secondary mt-1 leading-relaxed">{dict.education.noteText}</p>
              </div>

              <div className="space-y-3.5">
                {dict.education.subjects.map((s: any, idx: number) => {
                  const barStyles = [
                    {
                      textClass: "text-emerald",
                      barClass: "bg-emerald",
                      bgHex: "linear-gradient(90deg, #35E6A1 0%, #6BFFCA 100%)",
                      glow: "0 0 12px rgba(53, 230, 161, 0.45)",
                    },
                    {
                      textClass: "text-purple",
                      barClass: "bg-purple",
                      bgHex: "linear-gradient(90deg, #9B7BFF 0%, #BBA4FF 100%)",
                      glow: "0 0 12px rgba(155, 123, 255, 0.45)",
                    },
                    {
                      textClass: "text-techblue",
                      barClass: "bg-techblue",
                      bgHex: "linear-gradient(90deg, #4D8DFF 0%, #7FB0FF 100%)",
                      glow: "0 0 12px rgba(77, 141, 255, 0.45)",
                    },
                  ][idx % 3];

                  return (
                    <div
                      key={s.name}
                      className="p-3.5 rounded-2xl bg-void/80 border border-white/10 space-y-2.5"
                    >
                      <div className="flex justify-between items-center gap-2 text-xs font-semibold">
                        <span className="text-ink leading-snug">{s.name}</span>
                        <span className={`font-mono text-sm font-bold shrink-0 ${barStyles.textClass}`}>
                          {s.gpa} <span className="text-[10px] text-ink-muted">/ 4.00</span>
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-surface-elevated p-0.5 overflow-hidden border border-white/5">
                        <div
                          style={{
                            width: `${s.pct}%`,
                            background: barStyles.bgHex,
                            boxShadow: barStyles.glow,
                          }}
                          className={`${barStyles.barClass} h-full rounded-full transition-all duration-700`}
                        />
                      </div>
                      <p className="text-[11px] sm:text-xs text-ink-secondary leading-snug">{s.sub}</p>
                    </div>
                  );
                })}
              </div>
            </SpatialCard>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. FEATURED PROJECTS — 4 DEEP CASE STUDIES                        */}
        {/* ================================================================= */}
        <section id="projects" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                {dict.projectsSection.eyebrow}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                {dict.projectsSection.title}
              </h2>
              <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-3xl leading-relaxed">
                {dict.projectsSection.subtitle}
              </p>
            </div>
            <Link
              href="/projects/dca-simulator"
              className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-emerald/15 border border-emerald/40 text-emerald text-xs font-mono font-bold hover:bg-emerald/25 transition-colors inline-flex items-center gap-1.5"
            >
              <span>{dict.projectsSection.trySimBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {PROJECTS_CASE_STUDIES.map((proj, idx) => {
              const pd = proj[lang];
              return (
                <SpatialCard
                  key={proj.slug}
                  index={idx}
                  glowColor={idx % 2 === 0 ? "emerald" : "purple"}
                  tiltIntensity={4}
                  className="p-5 sm:p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-void border border-white/10 group/proj">
                      <img
                        src={proj.thumb}
                        alt={pd.title}
                        className="w-full h-full object-cover group-hover/proj:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-void/90 backdrop-blur-md border border-emerald/40 text-emerald font-mono text-[10px] sm:text-[11px] font-semibold">
                          #0{idx + 1} • {pd.category}
                        </span>
                        {proj.hasLiveSimulator && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald text-void font-mono text-[10px] sm:text-[11px] font-bold">
                            LIVE SIMULATOR
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-xs font-mono text-purple">{pd.badge}</div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                        {pd.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-[1.75] sm:leading-relaxed">
                        {pd.shortDesc}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-void/75 border border-white/10 text-xs space-y-1">
                      <span className="text-emerald font-mono text-[10px] uppercase block">
                        {dict.projectsSection.roleLabel}
                      </span>
                      <span className="text-ink font-medium block leading-snug">{pd.roleBadge}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-mono text-ink-muted">{pd.date}</span>
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="w-full sm:w-auto justify-center inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald text-void font-bold text-xs sm:text-sm hover:bg-emerald-soft transition-colors"
                    >
                      <span>{dict.projectsSection.readMoreBtn}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SpatialCard>
              );
            })}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. SKILLS & CAPABILITIES — WITH SHARED LAYOUT FILTER PILLS        */}
        {/* ================================================================= */}
        <section id="skills" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                {dict.skillsSection.eyebrow}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                {dict.skillsSection.title}
              </h2>
              <p className="text-[13px] sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
                {dict.skillsSection.honestyNote}
              </p>
            </div>

            <div className="flex overflow-x-auto no-scrollbar max-w-full p-1 rounded-xl bg-surface-elevated border border-white/10">
              {(
                [
                  { id: "all", label: dict.skillsSection.filterAll },
                  { id: "applied", label: dict.skillsSection.filterApplied },
                  { id: "exploring", label: dict.skillsSection.filterExploring },
                ] as const
              ).map((tab) => {
                const active = skillFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSkillFilter(tab.id)}
                    className={`relative px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      active ? "text-void" : "text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="skillFilterPill"
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 rounded-lg bg-emerald"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {dict.skillsSection.categories.map((cat: any, idx: number) => (
              <SpatialCard
                key={cat.title}
                index={idx}
                glowColor={idx % 2 === 0 ? "emerald" : "techblue"}
                className="p-5 space-y-3"
              >
                <div>
                  <h3 className="font-display font-bold text-base text-ink leading-snug">{cat.title}</h3>
                  <p className="text-xs text-ink-secondary mt-1 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="space-y-2">
                  <AnimatePresence mode="popLayout">
                    {cat.items
                      .filter((i: any) => skillFilter === "all" || i.level === skillFilter)
                      .map((i: any) => (
                        <motion.div
                          layout
                          key={i.name}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="p-2.5 rounded-xl bg-void/75 border border-white/10 space-y-1"
                        >
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-semibold text-ink">{i.name}</span>
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-mono shrink-0 ${
                                i.level === "applied"
                                  ? "bg-emerald/15 text-emerald border border-emerald/30"
                                  : "bg-purple/15 text-purple border border-purple/30"
                              }`}
                            >
                              {i.tag}
                            </span>
                          </div>
                          {i.evidence && (
                            <p className="text-[11px] text-ink-muted leading-snug">{i.evidence}</p>
                          )}
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </SpatialCard>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. ACTIVITIES & EXPERIENCE TIMELINE                               */}
        {/* ================================================================= */}
        <section id="activities" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald">
              {dict.activitiesSection.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {dict.activitiesSection.title}
            </h2>
            <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-3xl leading-relaxed">
              {dict.activitiesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {dict.activitiesSection.items.map((act: any, idx: number) => (
              <SpatialCard
                key={act.title}
                index={idx}
                glowColor={idx % 2 === 0 ? "emerald" : "purple"}
                className="p-5 sm:p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald/15 border border-emerald/35 text-emerald">
                      {act.date}
                    </span>
                    <span className="text-purple text-[11px] sm:text-xs">{act.role}</span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink leading-snug">{act.title}</h3>
                  <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-[1.75] sm:leading-relaxed">
                    {act.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-end">
                  <Link
                    href={`/projects/${act.projectSlug}`}
                    className="text-xs font-mono font-bold text-emerald hover:underline inline-flex items-center gap-1 py-1"
                  >
                    <span>{dict.projectsSection.readMoreBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpatialCard>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 7. CERTIFICATES & AWARDS GALLERY                                  */}
        {/* ================================================================= */}
        <section id="certificates" className="scroll-mt-20 sm:scroll-mt-24 space-y-5 sm:space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                {dict.certificatesSection.eyebrow}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                {dict.certificatesSection.title}
              </h2>
              <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
                {dict.certificatesSection.subtitle}
              </p>
            </div>

            <div className="flex overflow-x-auto no-scrollbar max-w-full p-1 rounded-xl bg-surface-elevated border border-white/10 gap-1">
              {dict.certificatesSection.filters.map((f: any) => {
                const active = certFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setCertFilter(f.id)}
                    className={`relative px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      active ? "text-void" : "text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="certFilterPill"
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 rounded-lg bg-emerald"
                      />
                    )}
                    <span className="relative z-10">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {dict.certificatesSection.items
                .filter((c: any) => certFilter === "all" || c.category === certFilter)
                .map((c: any, idx: number) => (
                  <SpatialCard
                    key={c.id}
                    index={idx}
                    glowColor={idx % 3 === 0 ? "emerald" : idx % 3 === 1 ? "purple" : "techblue"}
                    className="p-5 flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div
                        onClick={() =>
                          setLightboxItem({
                            certImg: c.certImg,
                            actImg: c.actImg,
                            showingAct: false,
                            title: c.title,
                            desc: c.desc,
                            meta: `${c.issuer} • ${c.date}`,
                          })
                        }
                        className="relative rounded-xl overflow-hidden aspect-[4/3] bg-void border border-white/10 cursor-pointer group/cert"
                      >
                        <img
                          src={c.certImg}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover/cert:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-void/90 backdrop-blur-md border border-emerald/40 text-[10px] font-mono text-emerald">
                          {dict.certificatesSection.certBadge}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-emerald leading-snug">
                          {c.issuer} • <span className="text-purple">{c.date}</span>
                        </div>
                        <h3 className="font-display font-bold text-base text-ink leading-snug">{c.title}</h3>
                        <p className="text-[13px] sm:text-xs text-ink-secondary leading-[1.7] sm:leading-relaxed">{c.desc}</p>
                      </div>

                      {c.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {c.skills.map((sk: string) => (
                            <span
                              key={sk}
                              className="px-2 py-0.5 rounded-md bg-void/80 border border-white/10 text-[10px] font-mono text-ink-secondary"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxItem({
                            certImg: c.certImg,
                            actImg: c.actImg,
                            showingAct: false,
                            title: c.title,
                            desc: c.desc,
                            meta: `${c.issuer} • ${c.date}`,
                          })
                        }
                        className="py-2.5 px-3 rounded-xl bg-emerald/15 hover:bg-emerald/25 border border-emerald/35 text-emerald text-xs font-semibold transition-colors"
                      >
                        {dict.certificatesSection.viewCertBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxItem({
                            certImg: c.certImg,
                            actImg: c.actImg,
                            showingAct: true,
                            title: c.title,
                            desc: c.desc,
                            meta: `${c.issuer} • ${c.date}`,
                          })
                        }
                        className="py-2.5 px-3 rounded-xl bg-purple/15 hover:bg-purple/25 border border-purple/35 text-purple text-xs font-semibold transition-colors"
                      >
                        {dict.certificatesSection.viewPhotoBtn}
                      </button>
                    </div>
                  </SpatialCard>
                ))}
            </AnimatePresence>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 8. PERSONAL STATEMENT & PREFACE (SILPAKORN ICT)                   */}
        {/* ================================================================= */}
        <section id="statement" className="scroll-mt-20 sm:scroll-mt-24">
          <SpatialCard glowColor="purple" tiltIntensity={2.5} className="p-5 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                  {dict.statementSection.eyebrow}
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink leading-snug">
                  {dict.statementSection.title}
                </h2>
                <p className="text-[13.5px] sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
                  {dict.statementSection.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowPreface((v) => !v)}
                  className={`flex-1 sm:flex-initial justify-center px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    showPreface
                      ? "bg-purple text-void border-purple"
                      : "bg-surface-elevated border-purple/35 text-purple hover:bg-purple/15"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>{dict.statementSection.prefaceBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowVerbatim((v) => !v)}
                  className={`flex-1 sm:flex-initial justify-center px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                    showVerbatim
                      ? "bg-emerald text-void border-emerald"
                      : "bg-surface-elevated border-emerald/35 text-emerald hover:bg-emerald/15"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>{dict.statementSection.toggleBtn}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dict.statementSection.pillars.map((p: any) => (
                <div
                  key={p.num}
                  className="p-4 sm:p-5 rounded-2xl bg-void/75 border border-white/10 space-y-2"
                >
                  <div className="text-xs font-mono text-emerald">
                    {dict.statementSection.pillarPrefix} #{p.num}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink leading-snug">{p.title}</h3>
                  <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-[1.8] sm:leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {showPreface && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-void border border-purple/35 space-y-3 text-[13.5px] sm:text-sm text-ink-secondary leading-[1.85] sm:leading-relaxed">
                    <div className="text-xs font-mono text-purple uppercase tracking-wider">
                      {dict.statementSection.prefaceHeader}
                    </div>
                    {dict.statementSection.prefaceParagraphs.map((para: string, idx: number) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showVerbatim && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-void border border-emerald/35 space-y-3 text-[13.5px] sm:text-sm text-ink-secondary leading-[1.85] sm:leading-relaxed">
                    <div className="text-xs font-mono text-emerald uppercase tracking-wider">
                      {dict.statementSection.verbatimHeader}
                    </div>
                    {dict.statementSection.verbatimParagraphs.map((para: string, idx: number) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SpatialCard>
        </section>

        {/* ================================================================= */}
        {/* 9. CONTACT & ADMISSIONS QUICK INQUIRY COMPOSER                    */}
        {/* ================================================================= */}
        <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left 6 Cols: Verified Channels & Privacy Notice */}
          <SpatialCard
            glowColor="emerald"
            tiltIntensity={3}
            className="lg:col-span-6 p-5 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald">
                  {dict.contact.eyebrow}
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-1">
                  {dict.contact.title}
                </h2>
                <p className="text-[13.5px] sm:text-sm text-ink-secondary mt-2 leading-relaxed">
                  {dict.contact.desc}
                </p>
              </div>

              {/* Primary Verified Email Card */}
              <div className="p-4 rounded-2xl bg-void/80 border border-emerald/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald/15 border border-emerald/35 text-emerald flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-ink-muted">
                      {dict.contact.emailLbl}
                    </div>
                    <a
                      href="mailto:brkg344@gmail.com"
                      className="font-mono font-bold text-sm sm:text-base text-ink hover:text-emerald transition-colors truncate block"
                    >
                      brkg344@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-3.5 py-2.5 sm:py-2 rounded-xl bg-emerald text-void font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 hover:bg-emerald-soft transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>
                    {copiedEmail ? (isTh ? "คัดลอกแล้ว" : "Copied") : dict.contact.copyBtn}
                  </span>
                </button>
              </div>

              {/* Verified Facebook & LINE ID Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dict.contact.channels?.map((ch: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-void/75 border border-white/10 flex flex-col justify-between gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-muted">{ch.label}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald/15 text-emerald font-mono text-[10px]">
                        VERIFIED
                      </span>
                    </div>
                    {ch.url ? (
                      <a
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-sm text-ink hover:text-emerald transition-colors inline-flex items-center gap-1.5"
                      >
                        <span className="truncate">{ch.val}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald shrink-0" />
                      </a>
                    ) : (
                      <div className="font-mono font-bold text-sm text-emerald">{ch.val}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple/10 border border-purple/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-purple shrink-0 mt-0.5" />
              <p className="text-xs text-ink-secondary leading-relaxed">
                {dict.contact.privacyNote}
              </p>
            </div>
          </SpatialCard>

          {/* Right 6 Cols: Interactive Admissions Committee Quick Inquiry Composer */}
          <SpatialCard
            glowColor="techblue"
            tiltIntensity={3}
            className="lg:col-span-6 p-5 sm:p-8 flex flex-col justify-between gap-5"
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                  {dict.contact.composerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary mt-1 leading-relaxed">
                  {dict.contact.composerSubtitle}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-ink-secondary mb-1">
                    {dict.contact.lblTopic}
                  </label>
                  <select
                    value={inquiryTopic}
                    onChange={(e) => setInquiryTopic(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-void border border-white/15 text-base sm:text-sm text-ink focus:outline-none focus:border-emerald"
                  >
                    <option value="interview">{dict.contact.optInterview}</option>
                    <option value="code">{dict.contact.optCode}</option>
                    <option value="docs">{dict.contact.optDocs}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-secondary mb-1">
                    {dict.contact.lblSender}
                  </label>
                  <input
                    type="text"
                    value={inquirySender}
                    onChange={(e) => setInquirySender(e.target.value)}
                    placeholder={dict.contact.senderPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-void border border-white/15 text-base sm:text-sm text-ink focus:outline-none focus:border-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-secondary mb-1">
                    {dict.contact.lblMsg}
                  </label>
                  <textarea
                    rows={4}
                    readOnly
                    value={generatedMessage}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-void/90 border border-white/10 text-[13.5px] sm:text-sm text-ink-secondary font-sans leading-relaxed focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleMailto}
                className="flex-1 sm:flex-initial justify-center px-5 py-2.5 rounded-xl bg-emerald text-void font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-emerald-soft transition-colors"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>{dict.contact.btnMailto}</span>
              </button>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex-1 sm:flex-initial justify-center px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/15 text-xs sm:text-sm font-semibold text-ink flex items-center gap-2 transition-colors"
              >
                {copiedMsg ? (
                  <Check className="w-4 h-4 text-emerald shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-emerald shrink-0" />
                )}
                <span>
                  {copiedMsg ? (isTh ? "คัดลอกข้อความแล้ว" : "Message Copied") : dict.contact.btnCopyMsg}
                </span>
              </button>
            </div>
          </SpatialCard>
        </section>

        {/* ================================================================= */}
        {/* 10. FOOTER                                                        */}
        {/* ================================================================= */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-secondary">
          <div>
            <div className="font-display font-bold text-ink">{dict.footer.name}</div>
            <div className="text-ink-muted mt-0.5">{dict.footer.target}</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects/dca-simulator"
              className="hover:text-emerald transition-colors font-mono"
            >
              {dict.footer.dca}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={() => setAuditOpen(true)}
              className="hover:text-emerald transition-colors font-mono"
            >
              {dict.footer.audit}
            </button>
            <span>•</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/10 text-emerald transition-colors"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              <span>{dict.footer.top}</span>
            </a>
          </div>
        </footer>
      </main>

      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
}
