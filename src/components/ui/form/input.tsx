import * as React from "react";

import { cn } from "lib/utils";
import { Icon, IconProps } from "../icon";
import { icons } from "lucide-react";

interface InputIconProps extends IconProps {
  position: "end" | "start";
  onIconCLick?: () => void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: InputIconProps;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const { onIconCLick, name, position, ...restIconProps } = icon || {};
    return (
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
        {icon && (
          <div
            onClick={onIconCLick}
            className={cn(
              "ml-2 absolute  top-[50%] transform -translate-y-1/2 -translate-x-1/2",
              {
                "left-0": position === "start",
                "right-0": position === "end",
              }
            )}
          >
            <Icon name={name as keyof typeof icons} {...restIconProps} />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
