export function Dialog({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`dialog ${className ?? ''}`} {...props}>{children}</div>;
}
