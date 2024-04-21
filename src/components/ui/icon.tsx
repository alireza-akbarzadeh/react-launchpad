import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { icons, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';

// Define icon variants
const iconVariants = cva('px-2', {
  variants: {
    sizes: {
      default: 'size-10',
      xs: 'size-8',
      sm: 'size-12',
      md: 'size-14',
      lg: 'size-17',
    },
    colors: {
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    sizes: 'default',
    colors: 'primary',
  },
});

export interface IconProps
  extends Omit<LucideProps, 'ref'>,
    VariantProps<typeof iconVariants> {
  name: keyof typeof icons;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, colors, className, sizes, ...props }, ref) => {
    const LucideIcon = icons[name];

    return (
      <LucideIcon
        ref={ref}
        className={cn(
          'rounded-full size-5',
          iconVariants({ sizes, colors, className })
        )}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { iconVariants, Icon };
