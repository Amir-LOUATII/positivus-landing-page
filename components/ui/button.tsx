"use client";
import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "outline-primary"
  | "outline-secondary";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  icon?: ReactElement;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled,
  isLoading,
  loadingText,
  className,
  variant = "primary",
  size = "md",
  icon,
  ...props
}) => {
  const baseClasses =
    "relative rounded-lg font-medium transition-all focus:outline-none text-sm flex items-center justify-center gap-0.5 text-nowrap";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:brightness-110 ",
    secondary: "bg-secondary text-white hover:brightness-110 ",
    dark: "bg-dark text-white hover:brightness-110",
    "outline-primary":
      "text-primary border border-primary hover:bg-primary hover:text-white",
    "outline-secondary":
      "text-secondary border border-secondary hover:bg-secondary hover:text-white",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-0.5 py-0.5 text-xs min-w-[80px] text-xs ",
    md: " px-1 py-1 md:px-2 md:py-1.5 text-sm min-w-[100px] text-xs sm:text-sm md:text-base md:text-baseline ",
    lg: "px-7 py-4 text-base min-w-[110px] text-xs ",
  };

  const buttonClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 pointer-events-none" : "",
    className
  );

  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      className={buttonClasses}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>{loadingText && <span>{loadingText}</span>}</>
      ) : (
        <>
          {icon && (
            <span className="  flex justify-center items-center !text-xs">
              {icon}
            </span>
          )}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
