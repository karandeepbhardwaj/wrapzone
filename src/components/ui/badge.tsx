export function Badge({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`badge ${className ?? ''}`} {...props}>{children}</div>;
}
