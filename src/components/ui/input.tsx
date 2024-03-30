import * as React from "react";

import { cn } from "lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: React.ReactNode;
  onEndIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onEndIconClick, type, endIcon, ...props }, ref) => (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      {endIcon && (
        <div
          onClick={onEndIconClick}
          className="ml-2 absolute right-0 top-[50%]  transform -translate-y-1/2 -translate-x-1/2 text-muted-foreground"
        >
          {endIcon}
        </div>
      )}
    </div>
  )
);

Input.displayName = "Input";

export { Input };
