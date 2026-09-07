import { AlertTriangle, CloudRain, ExternalLink, HeartPulse, MoreHorizontal, Route, Sparkles, Wind } from 'lucide-react';
import { Link } from 'wouter';
import { MapPanel } from '@/components/map-panel';
import { AppShell, MetricCard, PageTitle, SectionHeading, TinyBar } from '@/components/shell';
import { Button, StatusBadge } from '@/components/ui';

export default function Dashboard() {
  return <AppShell><PageTitle kicker="MONDAY · 17 JUNE 2024 · 08:42 IST" title="Good morning, Ananya." description="The region is moving. Here is what deserves your attention first." actions={<><Button kind="secondary" icon={ExternalLink} onClick={() => undefined} data-testid="button-export-brief">Export brief</Button><Button icon={Sparkles} onClick={() => undefined} data-testid="button-generate-brief">Generate brief</Button></>} />
    <div className="metric-grid">
      <MetricCard label="Routes monitored" value="1,247" detail="38 need attention" icon={Route} tone="navy" trend="+4.8%" />
      <MetricCard label="Active alerts" value="12" detail="4 high priority" icon={AlertTriangle} tone="red" trend="-2 today" />
      <MetricCard label="Weather index" value="Moderate" detail="Rainfall · 3 districts" icon={CloudRain} tone="teal" />
      <MetricCard label="Access coverage" value="89.2%" detail="156 facilities mapped" icon={HeartPulse} tone="amber" trend="+1.6%" />
    </div>
    <div className="dashboard-grid">
      <section className="panel panel-map dashboard-map"><SectionHeading title="Regional operating picture" meta="All active network layers" action={<button className="panel-more" onClick={() => undefined} data-testid="button-map-options"><MoreHorizontal size={17} /></button>} /><MapPanel points={[{ x: 48, y: 29, tone: 'red', label: '12' }, { x: 35, y: 42, tone: 'amber' }, { x: 53, y: 49, tone: 'teal' }, { x: 69, y: 61, tone: 'amber' }, { x: 41, y: 66, tone: 'red' }]} /></section>
      <section className="panel alerts-panel"><SectionHeading title="Risk alerts" meta="Requires review" action={<Link href="/risks" className="panel-link" data-testid="link-view-all-alerts">View all <ExternalLink size={13} /></Link>} /><div className="alert-list">
        {[['NH-10 · Rangpo–Gangtok', 'Landslide watch · 2h ago', 'critical'], ['NH-37 · Jorhat–Imphal', 'Heavy rainfall forecast · 4h ago', 'watch'], ['SH-9 · Aizawl bypass', 'Roadway restriction · 6h ago', 'info'], ['NH-6 · Shillong–Silchar', 'Visibility below 2 km · 7h ago', 'watch']].map(([route, detail, tone], index) => <div className="alert-row" key={route}><span className={`alert-severity severity-${tone}`}><AlertTriangle size={14} /></span><div><strong>{route}</strong><span>{detail}</span></div><button className="row-arrow" onClick={() => undefined} aria-label={`Open ${route}`} data-testid={`button-alert-${index}`}><ExternalLink size={13} /></button></div>)}
      </div></section>
    </div>
    <div className="dashboard-lower">
      <section className="panel readiness-panel"><SectionHeading title="Route readiness" meta="By state · active corridors" action={<Link href="/routes" className="panel-link" data-testid="link-route-readiness">Planner <ExternalLink size={13} /></Link>} /><div className="readiness-rows">{[['Assam', '94.8%', 95, 'teal'], ['Meghalaya', '91.2%', 91, 'amber'], ['Tripura', '89.6%', 89, 'teal'], ['Mizoram', '86.4%', 86, 'amber'], ['Manipur', '78.9%', 79, 'red']].map(([state, score, value, tone]) => <div className="readiness-row" key={state as string}><span>{state}</span><TinyBar value={Number(value)} color={tone as string} /><b>{score}</b></div>)}</div></section>
      <section className="panel weather-panel"><SectionHeading title="Weather window" meta="Next 12 hours" action={<button className="panel-more" onClick={() => undefined} data-testid="button-weather-options"><MoreHorizontal size={17} /></button>} /><div className="weather-summary"><div><Wind size={21} /><strong>SW 18 km/h</strong><span>Monsoon flow</span></div><div className="weather-temp"><b>28°</b><span>GUWAHATI</span></div></div><div className="weather-bars">{['09', '11', '13', '15', '17', '19'].map((time, index) => <div key={time}><span className={index > 1 && index < 5 ? 'rain-high' : ''} style={{ height: `${26 + index * 9}px` }} /><small>{time}</small></div>)}</div></section>
      <section className="panel ai-panel"><div className="ai-kicker"><Sparkles size={15} /> NER AI BRIEF</div><h3>Two decisions to make before 10:00.</h3><ol><li><span>01</span><p>Pre-position 3 accessible vehicles near <b>Sonapur</b> before the NH-37 rainfall window.</p></li><li><span>02</span><p>Keep the <b>Shillong–Silchar</b> alternate corridor open through the evening shift.</p></li></ol><button className="text-action" onClick={() => undefined} data-testid="button-view-ai-reasoning">View reasoning <ExternalLink size={13} /></button></section>
    </div>
  </AppShell>;
}