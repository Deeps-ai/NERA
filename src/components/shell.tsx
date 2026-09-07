import { Link, useLocation } from 'wouter';
import {
  Activity,
  Bell,
  ChevronDown,
  Gauge,
  LifeBuoy,
  Menu,
  Route as RouteIcon,
  ShieldAlert,
  UsersRound,
  X,
} from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Command center', icon: Gauge },
  { href: '/routes', label: 'Route planner', icon: RouteIcon },
  { href: '/accessibility', label: 'Accessibility', icon: LifeBuoy },
  { href: '/risks', label: 'Risks & alerts', icon: ShieldAlert, count: '04' },
];

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="brand-lockup" data-testid="link-brand-home">
      <span className={`brand-mark ${light ? 'brand-mark-light' : ''}`} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-type">
        <strong>NER</strong>
        <small>LOGISTICS INTELLIGENCE</small>
      </span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = (href: string) => location === href;

  return (
    <div className="ops-shell">
      <aside className={`ops-sidebar ${mobileOpen ? 'is-open' : ''}`}>
        <div className="sidebar-top">
          <BrandMark light />
          <button className="icon-button sidebar-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation" data-testid="button-close-navigation">
            <X size={18} />
          </button>
        </div>
        <div className="region-switcher">
          <span className="eyebrow">OPERATING REGION</span>
          <button className="region-button" data-testid="button-region-selector" onClick={() => undefined}>
            <span className="region-dot" />
            North Eastern Region
            <ChevronDown size={14} />
          </button>
          <span className="mono-text">08 STATES · 2.6M KM²</span>
        </div>
        <nav className="sidebar-nav" aria-label="Primary navigation">
          <span className="nav-label">OPERATIONS</span>
          {navItems.map(({ href, label, icon: Icon, count }) => (
            <Link
              href={href}
              key={href}
              onClick={() => setMobileOpen(false)}
              className={`nav-item ${active(href) ? 'is-active' : ''}`}
              data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
              {count && <em>{count}</em>}
            </Link>
          ))}
          <span className="nav-label nav-label-spaced">GOVERNANCE</span>
          <Link href="/admin" onClick={() => setMobileOpen(false)} className={`nav-item ${active('/admin') ? 'is-active' : ''}`} data-testid="link-nav-admin">
            <UsersRound size={17} strokeWidth={1.8} />
            <span>Admin dashboard</span>
          </Link>
        </nav>
        <div className="sidebar-status">
          <div className="status-pulse"><span />Systems nominal</div>
          <div className="sidebar-status-row"><span>Last sync</span><strong>08:42 IST</strong></div>
          <div className="sidebar-status-row"><span>Data window</span><strong>17 JUN 2024</strong></div>
        </div>
        <div className="sidebar-footer">
          <div className="user-chip">
            <span className="avatar avatar-amber">AD</span>
            <span><strong>Ananya Das</strong><small>Regional coordinator</small></span>
            <button className="icon-button icon-button-dark" onClick={() => undefined} aria-label="Open account menu" data-testid="button-account-menu"><ChevronDown size={15} /></button>
          </div>
        </div>
      </aside>
      {mobileOpen && <button className="mobile-scrim" onClick={() => setMobileOpen(false)} aria-label="Close menu" data-testid="button-mobile-scrim" />}
      <main className="ops-main">
        <header className="ops-header">
          <button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation" data-testid="button-open-navigation"><Menu size={20} /></button>
          <div className="breadcrumb"><span>NER /</span><strong>{location === '/admin' ? 'ADMINISTRATION' : navItems.find((item) => item.href === location)?.label.toUpperCase() ?? 'OVERVIEW'}</strong></div>
          <div className="header-actions">
            <span className="live-indicator"><span /> LIVE DATA</span>
            <button className="icon-button notification-button" aria-label="View notifications" data-testid="button-notifications" onClick={() => undefined}><Bell size={18} /><b>3</b></button>
            <div className="header-date"><span>MONDAY</span><strong>17 JUN 2024</strong></div>
          </div>
        </header>
        <div className="page-container page-enter">{children}</div>
      </main>
    </div>
  );
}

export function PageTitle({ kicker, title, description, actions }: { kicker: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="page-title-row">
      <div><div className="eyebrow accent-eyebrow">{kicker}</div><h1>{title}</h1>{description && <p>{description}</p>}</div>
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  );
}

export function MetricCard({ label, value, detail, tone = 'navy', icon: Icon, trend }: { label: string; value: string; detail: string; tone?: string; icon: typeof Activity; trend?: string }) {
  return (
    <div className={`metric-card metric-${tone}`}>
      <div className="metric-top"><span>{label}</span><span className="metric-icon"><Icon size={17} /></span></div>
      <div className="metric-value">{value}</div>
      <div className="metric-detail"><span>{detail}</span>{trend && <b>{trend}</b>}</div>
    </div>
  );
}

export function SectionHeading({ title, meta, action }: { title: string; meta?: string; action?: React.ReactNode }) {
  return <div className="section-heading"><div><h2>{title}</h2>{meta && <span>{meta}</span>}</div>{action}</div>;
}

export function TinyBar({ value, color = 'amber' }: { value: number; color?: string }) {
  return <div className="tiny-bar"><span className={`bar-${color}`} style={{ width: `${value}%` }} /></div>;
}