import { Link } from 'wouter';
import { ArrowRight, ChevronRight, CircleDot, CloudRain, Compass, HeartPulse, ShieldCheck, Wifi } from 'lucide-react';
import { BrandMark } from '@/components/shell';

const impact = [
  ['08', 'states connected', 'From Sikkim to Tripura'],
  ['1,247', 'routes monitored', 'Road, rail and last-mile'],
  ['94.6%', 'route readiness', 'Across active corridors'],
];

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <BrandMark />
        <nav><a href="#why-ner">Why NER</a><a href="#capabilities">Capabilities</a><a href="#field-notes">Field notes</a></nav>
        <div className="landing-nav-actions"><button className="text-button" onClick={() => undefined} data-testid="button-login">Log in</button><Link href="/dashboard" className="landing-cta" data-testid="link-register">Request access <ArrowRight size={15} /></Link></div>
      </header>
      <main>
        <section className="landing-hero">
          <div className="hero-ambient" />
          <div className="hero-copy">
            <div className="eyebrow accent-eyebrow hero-eyebrow"><span className="eyebrow-dot" /> OPERATIONS, GROUNDED IN PLACE</div>
            <h1>Move what<br /><em>matters.</em></h1>
            <p className="hero-lede">A shared intelligence layer for the people keeping India’s North Eastern Region connected — when terrain, weather and time refuse to cooperate.</p>
            <div className="hero-actions"><Link href="/dashboard" className="button button-primary" data-testid="link-explore-command-center">Explore command center <ArrowRight size={16} /></Link><a href="#why-ner" className="button button-ghost" data-testid="link-see-how-it-works">See how it works <ChevronRight size={16} /></a></div>
            <div className="hero-proof"><span><ShieldCheck size={16} /> Built for high-consequence decisions</span><span><CircleDot size={12} fill="currentColor" /> Live regional view</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-map">
              <div className="hero-map-lines" /><div className="hero-map-land land-main" /><div className="hero-map-land land-east" />
              <div className="hero-route route-1" /><div className="hero-route route-2" /><div className="hero-route route-3" />
              <span className="hero-pin pin-one"><i /></span><span className="hero-pin pin-two"><i /></span><span className="hero-pin pin-three"><i /></span><span className="hero-pin pin-four"><i /></span>
              <div className="hero-map-card"><span className="status-badge status-good"><i /> NETWORK NOMINAL</span><strong>East-west corridor</strong><small>Guwahati → Imphal</small><div className="hero-card-line"><span>READINESS</span><b>92.4%</b></div><div className="tiny-bar"><span className="bar-teal" style={{ width: '92%' }} /></div></div>
              <div className="hero-coordinates">25°34' N&nbsp;&nbsp; 91°53' E</div>
            </div>
          </div>
        </section>
        <section className="impact-strip" id="why-ner">{impact.map(([number, label, detail]) => <div className="impact-stat" key={label}><strong>{number}</strong><div><b>{label}</b><span>{detail}</span></div></div>)}<div className="impact-aside">The region is not a blank space<br /><em>between</em> places. It is the work.</div></section>
        <section className="landing-section capability-section" id="capabilities">
          <div className="section-intro"><div className="eyebrow">ONE OPERATING PICTURE</div><h2>Clarity for the<br /><em>long way round.</em></h2><p>NER Logistics Intelligence brings the variables of a complex region into one calm, legible view.</p></div>
          <div className="capability-grid">
            <article className="capability-feature feature-dark"><div className="feature-number">01 / 04</div><Compass size={24} /><h3>Know the route<br />before the route.</h3><p>Trace readiness across mountain passes, river crossings and the last ten miles — not just between two pins.</p><Link href="/routes" data-testid="link-capability-routes">Open route planner <ArrowRight size={14} /></Link><div className="feature-route-art"><span /><span /><span /></div></article>
            <article className="capability-feature"><div className="feature-number">02 / 04</div><CloudRain size={24} /><h3>Read the weather<br />as a network.</h3><p>See when rainfall in one district becomes a delay two valleys away. Plan with the pattern, not the alert.</p><Link href="/risks" data-testid="link-capability-risks">See risk intelligence <ArrowRight size={14} /></Link><div className="rain-art"><i /><i /><i /><i /><i /></div></article>
            <article className="capability-feature feature-wide"><div className="feature-number">03 / 04</div><HeartPulse size={24} /><div><h3>Leave no one<br />behind the map.</h3><p>Facility-level accessibility intelligence for coordinators who need to move people safely, not simply efficiently.</p><Link href="/accessibility" data-testid="link-capability-accessibility">Explore accessibility view <ArrowRight size={14} /></Link></div><div className="access-art"><span>92</span><small>AVG. ACCESS SCORE</small><div className="access-rings" /></div></article>
          </div>
        </section>
        <section className="field-note" id="field-notes"><div className="field-note-quote">“The best plan is the one that already knows where the road disappears.”</div><div className="field-note-meta"><span className="note-rule" /><div><b>OPERATIONS PRINCIPLE 03</b><small>For teams moving through the NER</small></div></div><div className="field-note-aside"><Wifi size={20} /><p>Designed for imperfect connectivity, shared desks, and decisions made before sunrise.</p></div></section>
        <section className="landing-bottom"><div><div className="eyebrow">SEE THE REGION CLEARLY</div><h2>Start with a better<br /><em>operating picture.</em></h2></div><Link href="/dashboard" className="button button-primary button-large" data-testid="link-open-platform">Open the platform <ArrowRight size={17} /></Link></section>
      </main>
      <footer className="landing-footer"><BrandMark /><span>© 2024 NER Logistics Intelligence</span><span>Built for the North Eastern Region</span></footer>
    </div>
  );
}