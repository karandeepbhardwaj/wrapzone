export function Card({ children, className, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  return <div className={`card ${className ?? ''}`} {...props}>{children}</div>;
}
