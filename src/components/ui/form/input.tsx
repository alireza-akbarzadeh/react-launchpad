import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { icons } from 'lucide-react';
import * as React from 'react';

import { Label } from './label';
import { Icon, IconProps } from '../icon';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-primary text-primary-foreground hover:border-primary/90 placeholder-primary-foreground focus-visible:ring-ring',
        destructive:
          'border-rose-600 focus:ring ring-rose-600 border-rose-400 hover:border-rose-600/90',
        outline: 'border-none',
        secondary: 'border-secondary  hover:border-secondary/80',
        info: 'border-sky-500/100 text-sky-foreground hover:ring-sky-600 placeholder-sky-500/100',
        ghost: 'border-b',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

interface InputIconProps extends IconProps {
  position: 'end' | 'start';
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
      variant,
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
          className={cn(inputVariants({ className, fullWidth, variant }))}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            onClick={onIconCLick}
            className={cn(
              'ml-2 absolute  top-[50%] transform -translate-y-1/2 -translate-x-1/2',
              {
                'left-0': position === 'start',
                'right-0': position === 'end',
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

Input.displayName = 'Input';

export { Input };
