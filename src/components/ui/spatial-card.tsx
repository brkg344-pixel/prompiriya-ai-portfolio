"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface SpatialCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "emerald" | "purple" | "techblue";
  tiltIntensity?: number;
  index?: number;
  onClick?: () => void;
}

const GLOW_MAP = {
  emerald: "rgba(53, 230, 161, 0.16)",
  purple: "rgba(155, 123, 255, 0.16)",
  techblue: "rgba(77, 141, 255, 0.16)",
};

const BORDER_MAP = {
  emerald: "rgba(53, 230, 161, 0.42)",
  purple: "rgba(155, 123, 255, 0.42)",
  techblue: "rgba(77, 141, 255, 0.42)",
};

export function SpatialCard({
  children,
  className,
  glowColor = "emerald",
  tiltIntensity = 6,
  index = 0,
  onClick,
}: SpatialCardProps) {
  const { reducedMotion } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [hovered, setHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * tiltIntensity * 2;
    const rotateX = (0.5 - y) * tiltIntensity * 2;

    setTilt({
      rotateX,
      rotateY,
      glareX: x * 100,
      glareY: y * 100,
    });
  };

  const handlePointerLeave = () => {
    setHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.32),
        ease: [0.2, 0, 0, 1],
      }}
      onPointerEnter={() => setHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        transformPerspective: 1100,
        rotateX: reducedMotion ? 0 : tilt.rotateX,
        rotateY: reducedMotion ? 0 : tilt.rotateY,
        borderColor: hovered ? BORDER_MAP[glowColor] : undefined,
      }}
      className={cn(
        "relative group glass-panel rounded-3xl overflow-hidden transition-[border-color,box-shadow] duration-300 will-change-transform",
        hovered && "shadow-[0_24px_54px_-12px_rgba(0,0,0,0.78)]",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Dynamic Radial Specular Spotlight */}
      {!reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(520px circle at ${tilt.glareX}% ${tilt.glareY}%, ${GLOW_MAP[glowColor]}, transparent 65%)`,
          }}
        />
      )}

      {/* Subtle Corner Architectural Hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-6 h-6 border-t border-l border-white/15 rounded-tl-3xl opacity-50 group-hover:opacity-100 group-hover:border-emerald/50 transition-all duration-300"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/15 rounded-br-3xl opacity-50 group-hover:opacity-100 group-hover:border-emerald/50 transition-all duration-300"
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
