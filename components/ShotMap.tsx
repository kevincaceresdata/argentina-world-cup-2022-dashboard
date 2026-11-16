import summary from "../data/summary.json";

type Shot = {
  match: string;
  stage: string;
  minute: number;
  x: number;
  y: number;
  xg: number;
  outcome: string;
  goal: boolean;
  defender_m: number | null;
};

const GOAL = "#7CFC00";
const SAVED = "#ff7f0e";
const OTHER = "#9e9e9e";

function PitchLines() {
  const line = "#5a6b60";
  return (
    <g stroke={line} strokeWidth={0.35} fill="none">
      <rect x={0} y={0} width={120} height={80} />
      <line x1={60} y1={0} x2={60} y2={80} />
      <circle cx={60} cy={40} r={9.15} />
      <rect x={0} y={18} width={18} height={44} />
      <rect x={102} y={18} width={18} height={44} />
      <rect x={0} y={30} width={6} height={20} />
      <rect x={114} y={30} width={6} height={20} />
      <path d="M 18 30 A 9.15 9.15 0 0 0 18 50" />
      <path d="M 102 30 A 9.15 9.15 0 0 1 102 50" />
      <circle cx={12} cy={40} r={0.4} fill={line} />
      <circle cx={108} cy={40} r={0.4} fill={line} />
      <circle cx={60} cy={40} r={0.4} fill={line} />
    </g>
  );
}

export default function ShotMap() {
  const shots = summary.shots as Shot[];
  return (
    <svg viewBox="0 0 120 80" className="pitch" role="img" aria-label="Shot map">
      <rect x={0} y={0} width={120} height={80} fill="#1d2b25" />
      <PitchLines />
      {shots.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={80 - s.y}
          r={1 + 5 * s.xg}
          fill={s.goal ? GOAL : s.outcome === "Saved" || s.outcome === "Saved To Post" ? SAVED : OTHER}
          fillOpacity={0.8}
          stroke="#fff"
          strokeWidth={0.25}
        >
          <title>{`${s.minute}' ${s.match} — xG ${s.xg} — ${s.outcome}${
            s.defender_m != null ? ` — nearest defender ${s.defender_m} m` : ""
          }`}</title>
        </circle>
      ))}
    </svg>
  );
}
