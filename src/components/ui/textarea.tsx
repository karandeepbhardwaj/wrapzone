export function Textarea({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`textarea ${className ?? ''}`} {...props}>{children}</div>;
}
