import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardVariant = "default" | "primary" | "secondary" | "dark";

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;

  shadow?: boolean;
  shadowIntensity?: "soft" | "medium" | "strong";
};
const colorVariants: Record<CardVariant, string> = {
  default: "bg-white",
  primary: "bg-primary",
  secondary: "bg-secondary",
  dark: "bg-dark text-white",
};

export default function Card({
  variant = "default",
  className,
  children,

  shadow = true,
}: CardProps) {
  return (
    <div className="relative">
      <article
        className={twMerge(
          `${colorVariants[variant]} w-full p-8 rounded-3xl relative`,
          shadow ? "border-b-8 border-dark shadow-dark shadow-sm" : "shadow-md",

          className
        )}
      >
        {children}
      </article>
    </div>
  );
}
