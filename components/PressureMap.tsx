import summary from "../data/summary.json";

export default function PressureMap() {
  const pts = summary.pressure_points;
  return (
    <svg viewBox="0 0 120 80" className="pitch" role="img" aria-label="Pressure events map">
      <rect x={0} y={0} width={120} height={80} fill="#151a2d" />
      <g stroke="#3a4560" strokeWidth={0.35} fill="none">
        <rect x={0} y={0} width={120} height={80} />
        <line x1={60} y1={0} x2={60} y2={80} />
        <circle cx={60} cy={40} r={9.15} />
        <rect x={0} y={18} width={18} height={44} />
        <rect x={102} y={18} width={18} height={44} />
        <rect x={0} y={30} width={6} height={20} />
        <rect x={114} y={30} width={6} height={20} />
      </g>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={80 - p.y} r={0.9} fill="#ff7f0e" fillOpacity={0.35}>
          <title>{`pressure at (${p.x}, ${p.y})`}</title>
        </circle>
      ))}
    </svg>
  );
}
