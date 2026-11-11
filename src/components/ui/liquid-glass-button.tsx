"use client";

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-emerald text-void font-bold hover:bg-emerald/90",
        outline: "border border-white/15 bg-surface hover:bg-surface-elevated text-ink",
        secondary: "bg-surface-elevated text-ink hover:bg-surface-hover",
        ghost: "hover:bg-white/10 text-ink-secondary hover:text-ink",
        link: "text-emerald underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-emerald to-[#1EB97D] text-void hover:scale-[1.02] active:scale-[0.99]",
        outline: "border border-emerald/40 bg-emerald/10 text-emerald hover:bg-emerald/20",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 gap-1.5 px-3.5 text-xs",
        lg: "h-11 px-6",
        xl: "h-12 px-7",
      },
    },
    defaultVariants: { variant: "default", size: "lg" },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        data-slot="liquid-button"
        className={cn("relative isolate overflow-hidden rounded-xl shadow-lg shadow-emerald/20", liquidbuttonVariants({ variant, size, className }))}
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
        />
        <Slottable>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Slottable>
      </Comp>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

type ColorVariant = "default" | "primary" | "success";

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const colorVariants: Record<ColorVariant, { outer: string; inner: string; button: string; textColor: string }> = {
  default: {
    outer: "bg-gradient-to-b from-purple/40 to-surface",
    inner: "bg-gradient-to-b from-white/15 via-surface to-white/10",
    button: "bg-gradient-to-b from-surface-elevated to-surface",
    textColor: "text-ink",
  },
  primary: {
    outer: "bg-gradient-to-b from-techblue/50 to-surface",
    inner: "bg-gradient-to-b from-techblue/25 via-surface to-techblue/10",
    button: "bg-gradient-to-b from-surface-elevated to-surface",
    textColor: "text-ink",
  },
  success: {
    outer: "bg-gradient-to-b from-emerald/50 to-surface",
    inner: "bg-gradient-to-b from-emerald/25 via-surface to-emerald/10",
    button: "bg-gradient-to-b from-surface-elevated to-surface",
    textColor: "text-emerald",
  },
};

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", type = "button", ...props }, ref) => {
    const colors = colorVariants[variant];
    return (
      <span className={cn("relative inline-flex rounded-xl p-[1px] transition-transform duration-200 hover:-translate-y-0.5", colors.outer)}>
        <span aria-hidden="true" className={cn("absolute inset-[1px] rounded-xl", colors.inner)} />
        <button
          ref={ref}
          type={type}
          className={cn(
            "relative z-10 m-px inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-2 text-xs sm:text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-purple",
            colors.button,
            colors.textColor,
            className
          )}
          {...props}
        >
          <span className="relative flex items-center gap-2">{children}</span>
        </button>
      </span>
    );
  }
);
MetalButton.displayName = "MetalButton";

export { buttonVariants, liquidbuttonVariants };
