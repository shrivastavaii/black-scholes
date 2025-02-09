
import React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={cn("block text-sm font-medium", className)} {...props}>
      {children}
    </label>
  );
};
