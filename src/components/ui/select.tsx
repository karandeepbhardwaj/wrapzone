export function Select({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`select ${className ?? ''}`} {...props}>{children}</div>;
}
