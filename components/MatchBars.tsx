import summary from "../data/summary.json";

export default function MatchBars() {
  const matches = summary.matches;
  const W = 700;
  const H = 260;
  const max = Math.max(...matches.map((m) => Math.max(m.xg, m.goals)), 1);
  const bw = 52;
  const gap = (W - 40 - matches.length * bw) / (matches.length - 1);
  const scale = (v: number) => (v / max) * (H - 70);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="bars" role="img" aria-label="xG vs goals by match">
      {matches.map((m, i) => {
        const x = 20 + i * (bw + gap);
        const h = scale(m.xg);
        return (
          <g key={m.match_id}>
            <rect x={x} y={H - 40 - h} width={bw} height={h} fill="#8fc1f5" rx={2}>
              <title>{`${m.label}: ${m.xg.toFixed(2)} xG`}</title>
            </rect>
            <text x={x + bw / 2} y={H - 45 - h} textAnchor="middle" className="barval">
              {m.xg.toFixed(2)}
            </text>
            <circle cx={x + bw / 2} cy={H - 40 - scale(m.goals)} r={5} fill="#8bd450">
              <title>{`${m.goals} goal${m.goals === 1 ? "" : "s"}`}</title>
            </circle>
            <text x={x + bw / 2} y={H - 24} textAnchor="middle" className="barlabel">
              {m.label.replace("vs ", "")}
            </text>
            <text x={x + bw / 2} y={H - 12} textAnchor="middle" className="barstage">
              {m.stage}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
