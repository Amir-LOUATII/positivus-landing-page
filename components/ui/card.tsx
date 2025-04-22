import { CardVariant } from "@/utils/types";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  shadow?: boolean;
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
    <article
      className={twMerge(
        `${colorVariants[variant]} w-full p-8 rounded-3xl relative`,
        shadow ? "border-b-4 border-dark shadow-dark shadow-sm" : "",

        className
      )}
    >
      {children}
    </article>
  );
}
