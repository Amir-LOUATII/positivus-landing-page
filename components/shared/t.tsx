import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CommonProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
};

type LabeledInputProps = CommonProps & InputProps;
type LabeledTextareaProps = CommonProps & TextareaProps;

export const LabeledInput = React.forwardRef<
  HTMLInputElement,
  LabeledInputProps
>(
  (
    {
      label,
      htmlFor,
      required = false,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        <Label htmlFor={htmlFor} className="text-black text-lg">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          ref={ref}
          id={htmlFor}
          className={cn(
            "rounded-xl text-black placeholder-gray-400 bg-white w-full",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

LabeledInput.displayName = "LabeledInput";

export const LabeledTextarea = React.forwardRef<
  HTMLTextAreaElement,
  LabeledTextareaProps
>(
  (
    {
      label,
      htmlFor,
      required = false,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        <Label htmlFor={htmlFor} className="text-black text-lg">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Textarea
          ref={ref}
          id={htmlFor}
          className={cn(
            "rounded-xl text-black placeholder-gray-400 bg-white w-full",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

LabeledTextarea.displayName = "LabeledTextarea";
