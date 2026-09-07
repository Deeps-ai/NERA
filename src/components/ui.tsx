import { ArrowUpRight, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';
import type { ReactNode } from 'react';

export function StatusBadge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'good' | 'watch' | 'critical' | 'info' }) {
  return <span className={`status-badge status-${tone}`}><i />{children}</span>;
}

export function Button({ children, kind = 'primary', icon: Icon, ...props }: { children: ReactNode; kind?: 'primary' | 'secondary' | 'ghost'; icon?: typeof ArrowUpRight } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button button-${kind}`} {...props}>{children}{Icon && <Icon size={15} />}</button>;
}

export function SearchBox({ placeholder = 'Search the region' }: { placeholder?: string }) {
  return <label className="search-box"><Search size={16} /><input placeholder={placeholder} data-testid="input-search" /><kbd>⌘ K</kbd></label>;
}

export function FilterButton({ children = 'Filters' }: { children?: React.ReactNode }) {
  return <button className="filter-button" onClick={() => undefined} data-testid="button-filters"><SlidersHorizontal size={15} />{children}</button>;
}

export function TableLink({ children }: { children: React.ReactNode }) {
  return <button className="table-link" onClick={() => undefined} data-testid="button-table-link">{children}<ChevronRight size={14} /></button>;
}

export function Donut({ value, label, tone = 'amber' }: { value: string; label: string; tone?: string }) {
  return <div className={`donut donut-${tone}`}><div><strong>{value}</strong><span>{label}</span></div></div>;
}