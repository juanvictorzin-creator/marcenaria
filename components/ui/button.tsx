import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-body text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-premium disabled:pointer-events-none disabled:opacity-50 sm:text-[12px]",
  {
    variants: {
      variant: {
        primary:
          "bg-copper px-7 py-3.5 text-ink shadow-[0_12px_30px_rgba(168,102,58,0.24)] hover:-translate-y-0.5 hover:bg-[#d9925f]",
        outline:
          "border border-foreground/25 px-7 py-3.5 text-foreground hover:-translate-y-0.5 hover:border-foreground/60 hover:bg-foreground/5",
        ghost: "px-3 py-2 text-foreground/75 hover:text-foreground",
      },
      size: {
        default: "",
        sm: "min-h-10 px-5 py-2.5 text-[10px]",
        lg: "min-h-12 px-6 py-3 sm:min-h-14 sm:px-8 sm:py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
