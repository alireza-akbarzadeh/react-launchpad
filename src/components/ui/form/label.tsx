import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { Slot } from "@radix-ui/react-slot";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Define props interface for the Label component
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  asChild?: boolean; // Indicate if the label should be rendered as a child element
}

// ForwardRefExoticComponent allows the component to receive a ref
const Label: React.ForwardRefExoticComponent<
  LabelProps &
    VariantProps<typeof labelVariants> &
    React.RefAttributes<HTMLLabelElement>
> = React.forwardRef(({ className, asChild, htmlFor, ...props }, ref) => {
  const Comp = asChild ? Slot : "label";
  const labelProps = htmlFor ? { htmlFor } : {};

  return (
    <Comp
      ref={ref}
      className={cn(labelVariants(), className)}
      {...labelProps}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };
