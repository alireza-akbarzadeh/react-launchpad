import * as React from "react";

import { cn } from "lib/utils";
import { Icon, IconProps } from "../icon";
import { icons } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "./label";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "ring-primary text-primary-foreground hover:ring-primary/90 placeholder-primary-foreground",
        destructive:
          "ring-destructive text-destructive-foreground hover:ring-destructive/90",
        outline:
          "ring ring-input ring-background hover:ring-accent hover:text-accent-foreground placeholder-accent-foreground",
        secondary:
          "ring-secondary text-secondary-foreground hover:ring-secondary/80 placeholder-secondary-foreground",
        info: "ring-sky-500/100 text-primary-foreground hover:ring-sky-600 placeholder-sky-500/100",
        ghost: "hover:ring-accent hover:text-accent-foreground",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

interface InputIconProps extends IconProps {
  position: "end" | "start";
  onIconCLick?: () => void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: InputIconProps;
  fullWidth?: boolean;
  label?: string | React.ReactNode;
  labelClassName?: string;
  labelStyles?: React.CSSProperties;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      fullWidth,
      type,
      icon,
      label,
      labelClassName,
      labelStyles,
      ...props
    },
    ref,
  ) => {
    const { onIconCLick, name, position, ...restIconProps } = icon || {};
    return (
      <div className="relative">
        {label && (
          <Label
            className={labelClassName}
            style={labelStyles}
            htmlFor={props.id}
          >
            {label}
          </Label>
        )}
        <input
          type={type}
          className={cn(inputVariants({ className, fullWidth }))}
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
              },
            )}
          >
            <Icon name={name as keyof typeof icons} {...restIconProps} />
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
