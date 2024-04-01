import * as React from "react";
import { Button, ButtonProps, buttonVariants } from "./button";
import { Icon, IconProps } from "../icon";
import { cn } from "lib/utils";

export interface IconButtonProps extends ButtonProps {
  iconName: IconProps["name"];
  iconSize: IconProps["size"];
  sizes: IconProps["sizes"];
  iconProps: Omit<IconProps, "name" | "size" | "sizes">;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, iconName, iconProps, variant, ...props }, ref) => (
    <Button
      asChild
      size={"icon"}
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      <Icon
        name={iconName}
        size={props.iconSize}
        sizes={props.sizes}
        {...iconProps}
      />
    </Button>
  ),
);

IconButton.displayName = "IconButton";
