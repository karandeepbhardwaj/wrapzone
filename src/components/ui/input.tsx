export function Input({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`input ${className ?? ''}`} {...props}>{children}</div>;
}
