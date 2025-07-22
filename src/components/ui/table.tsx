export function Table({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`table ${className ?? ''}`} {...props}>{children}</div>;
}
