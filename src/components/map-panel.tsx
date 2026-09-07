import { Layers3, LocateFixed, Plus, Minus, Maximize2 } from 'lucide-react';

type MapPoint = { x: number; y: number; tone?: 'amber' | 'red' | 'teal' | 'navy'; label?: string };

export function MapPanel({ title = 'Regional route intelligence', subtitle = 'LIVE NETWORK VIEW · UPDATED 08:42 IST', points = [], className = '' }: { title?: string; subtitle?: string; points?: MapPoint[]; className?: string }) {
  return (
    <div className={`map-panel ${className}`}>
      <div className="map-grid" />
      <div className="map-contours contour-one" /><div className="map-contours contour-two" /><div className="map-contours contour-three" />
      <div className="map-river river-one" /><div className="map-river river-two" />
      <div className="map-heading"><div><div className="eyebrow">{subtitle}</div><h3>{title}</h3></div><button className="map-layer-button" onClick={() => undefined} data-testid="button-map-layers"><Layers3 size={15} /> Layers</button></div>
      <div className="map-label label-guwahati">GUWAHATI</div><div className="map-label label-shillong">SHILLONG</div><div className="map-label label-imphal">IMPHAL</div><div className="map-label label-aizawl">AIZAWL</div><div className="map-label label-agartala">AGARTALA</div><div className="map-label label-itnagar">ITANAGAR</div>
      <div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" /><div className="map-road road-d" />
      {points.map((point, index) => <span key={`${point.x}-${point.y}-${index}`} className={`map-point point-${point.tone ?? 'amber'}`} style={{ left: `${point.x}%`, top: `${point.y}%` }}><i />{point.label && <b>{point.label}</b>}</span>)}
      <div className="map-controls"><button aria-label="Zoom in" onClick={() => undefined} data-testid="button-map-zoom-in"><Plus size={15} /></button><button aria-label="Zoom out" onClick={() => undefined} data-testid="button-map-zoom-out"><Minus size={15} /></button><button aria-label="Locate region" onClick={() => undefined} data-testid="button-map-locate"><LocateFixed size={15} /></button><button aria-label="Expand map" onClick={() => undefined} data-testid="button-map-expand"><Maximize2 size={15} /></button></div>
      <div className="map-legend"><span><i className="legend-dot legend-amber" /> Monitored</span><span><i className="legend-dot legend-red" /> At risk</span><span><i className="legend-dot legend-teal" /> Accessible</span></div>
      <div className="map-scale">50 <span>km</span></div>
    </div>
  );
}