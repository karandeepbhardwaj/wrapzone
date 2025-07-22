export function Button({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`button ${className ?? ''}`} {...props}>{children}</div>;
}
