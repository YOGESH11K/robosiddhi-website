import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-background shadow-[0_0_0_1px_oklch(1_0_0/0.15)_inset,0_8px_28px_-8px_oklch(0.75_0.14_210/0.55)] hover:shadow-[0_0_0_1px_oklch(1_0_0/0.2)_inset,0_10px_36px_-6px_oklch(0.75_0.14_210/0.7)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "glass-strong text-foreground hover:border-primary/40 hover:bg-white/[0.07] active:scale-[0.98]",
  ghost:
    "text-muted hover:text-foreground hover:bg-white/[0.05] active:scale-[0.98]",
  danger:
    "bg-danger/15 text-danger border border-danger/30 hover:bg-danger/25",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-8 text-base sm:h-12",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = CommonProps &
  React.ComponentPropsWithoutRef<typeof Link>;

export const buttonClasses = ({
  variant = "primary",
  size = "md",
  className,
}: Pick<CommonProps, "variant" | "size" | "className">) =>
  cn(base, variants[variant], sizes[size], className);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant, size, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={buttonClasses({ variant, size, className })}
        {...props}
      />
    );
  },
);

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
