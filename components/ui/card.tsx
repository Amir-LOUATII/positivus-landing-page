import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardVariant = "default" | "primary" | "secondary" | "dark";

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  concave?: boolean;
  shadow3D?: boolean;
  shadowIntensity?: "soft" | "medium" | "strong";
};

const colorVariants: Record<CardVariant, string> = {
  default: "bg-white",
  primary: "bg-primary",
  secondary: "bg-secondary",
  dark: "bg-dark text-white",
};

const shadow3DEffects = {
  soft: "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
  medium: "shadow-[0_0_25px_rgba(0,0,0,0.4)]",
  strong: "shadow-[0_0_35px_rgba(0,0,0,0.5)]",
};

const concaveEffect = "shadow-[inset_0_-8px_0_0_rgba(0,0,0,0.2)]";

export default function Card({
  variant = "default",
  className,
  children,
  concave = false,
  shadow3D = false,
  shadowIntensity = "medium",
}: CardProps) {
  return (
    <div className="relative">
      <article
        className={twMerge(
          `${colorVariants[variant]} w-full p-8 rounded-3xl relative`,
          shadow3D ? shadow3DEffects[shadowIntensity] : "shadow-md",
          concave ? concaveEffect : "",
          "transition-all duration-300 hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]",
          className
        )}
      >
        {children}
      </article>

      {/* Optional 3D border effect */}
      {shadow3D && (
        <div
          className={twMerge(
            "absolute inset-0 rounded-3xl border-2 border-black/10 pointer-events-none",
            shadowIntensity === "strong" ? "border-black/15" : "",
            shadowIntensity === "soft" ? "border-black/5" : ""
          )}
        />
      )}
    </div>
  );
}
