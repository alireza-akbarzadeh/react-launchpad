import { cn } from 'lib/utils';
import * as React from 'react';
import { Button, ButtonProps, buttonVariants } from './button';
import { Icon, IconProps } from '../icon';

// TODO: see if you combine size props to one with this patterns
//  IconProps["size"] | (string & {})
export interface IconButtonProps extends ButtonProps {
  iconName: IconProps['name'];
  iconSize?: IconProps['size'] | (string & {});
  iconClassName?: IconProps['className'];
  sizes?: IconProps['sizes'];
  iconProps?: Omit<IconProps, 'name' | 'size' | 'sizes'>;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, iconName, iconClassName, iconProps, variant, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      <Icon
        name={iconName}
        className={cn('text-white', iconClassName)}
        size={props.iconSize}
        sizes={props.sizes}
        {...iconProps}
      />
    </Button>
  ),
);

IconButton.displayName = 'IconButton';
