import React from "react";

type LabelVariant = "primary" | "dark" | "default";
type LabelSize = "xs" | "sm" | "md" | "lg";

interface LabelProps {
  text: string;
  variant?: LabelVariant;
  size?: LabelSize;
}

export const Heading: React.FC<LabelProps> = ({
  text,
  variant = "primary",
  size = "md",
}) => {
  const variantClasses = {
    default: "bg-white text-black",
    primary: "bg-primary text-dark",
    dark: "bg-dark text-white",
  };
  const sizeClasses = {
    xs: "text-sm",
    sm: "text-lg",
    md: "text-[30px] md:text-lg",
    lg: "text-[40px]",
  };
  return (
    <span
      className={`block rounded-[7px] font-medium ${variantClasses[variant]} px-[7px]  ${sizeClasses[size]}`}
    >
      {text}
    </span>
  );
};
