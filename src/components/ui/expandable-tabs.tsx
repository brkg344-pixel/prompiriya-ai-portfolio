"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  title: string;
  icon: LucideIcon;
  type?: never;
}

export interface Separator {
  type: "separator";
  id?: never;
  title?: never;
  icon?: never;
}

export type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  activeId?: string;
  className?: string;
  activeColor?: string;
  onChange?: (tabId: string) => void;
  ariaLabel?: string;
}

const buttonVariants = {
  initial: { gap: 0, paddingLeft: ".6rem", paddingRight: ".6rem" },
  animate: (selected: boolean) => ({
    gap: selected ? ".45rem" : 0,
    paddingLeft: selected ? ".9rem" : ".6rem",
    paddingRight: selected ? ".9rem" : ".6rem",
  }),
};

const labelVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { type: "spring" as const, bounce: 0, duration: 0.4 };

export function ExpandableTabs({
  tabs,
  activeId,
  className,
  activeColor = "bg-emerald text-void font-bold",
  onChange,
  ariaLabel = "Main portfolio navigation",
}: ExpandableTabsProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const rootRef = React.useRef<HTMLElement>(null);

  useOnClickOutside(rootRef, () => {
    setHoveredIndex(null);
  });

  return (
    <nav
      ref={rootRef}
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-1 rounded-2xl border border-white/10 bg-surface/90 p-1.5 shadow-lg backdrop-blur-xl",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <span
              key={`sep-${index}`}
              aria-hidden="true"
              className="mx-1 h-5 w-px bg-white/15"
            />
          );
        }

        const Icon = tab.icon;
        const isExpanded = activeId === tab.id || hoveredIndex === index;
        const isActive = activeId === tab.id;

        return (
          <motion.button
            key={tab.id}
            type="button"
            aria-pressed={isActive}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            custom={isExpanded}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onChange?.(tab.id)}
            transition={transition}
            className={cn(
              "relative flex h-9 items-center rounded-xl text-xs font-medium transition-colors",
              isActive
                ? activeColor
                : "text-ink-secondary hover:bg-white/10 hover:text-ink"
            )}
          >
            <Icon size={16} aria-hidden="true" />
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.span
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
            <span className="sr-only">{tab.title}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
