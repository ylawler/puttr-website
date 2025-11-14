import { cn } from "../utils/cn";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div className={cn("px-5 w-full max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
}

export default Container;
