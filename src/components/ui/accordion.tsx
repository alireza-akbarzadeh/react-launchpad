import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "lib/utils";

const Accordion = AccordionPrimitive.Root;

type AccordionPrimitiveItem = typeof AccordionPrimitive.Item;
const AccordionItem = React.forwardRef<
  React.ElementRef<AccordionPrimitiveItem>,
  React.ComponentPropsWithoutRef<AccordionPrimitiveItem>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    className={cn("border-b", className)}
    ref={ref}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

type AccordionPrimitiverigger = typeof AccordionPrimitive.Trigger;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<AccordionPrimitiverigger>,
  React.ComponentPropsWithoutRef<AccordionPrimitiverigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentPrimitive = typeof AccordionPrimitive.Content;

const AccordionContent = React.forwardRef<
  React.ElementRef<AccordionContentPrimitive>,
  React.ComponentPropsWithoutRef<AccordionContentPrimitive>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
