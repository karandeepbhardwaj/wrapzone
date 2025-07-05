export function cn(...classes: (string | false | undefined | null)[]): string { return classes.filter(Boolean).join(' '); }
export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount); }
export function formatDate(date: string): string { return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); }
