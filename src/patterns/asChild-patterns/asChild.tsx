import { type AsChildProps, Slot } from './slot';

type ButtonProps = AsChildProps<
React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
};

export function AsChildPatterns({ asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp {...props} />;
}
