import data from "../data/argentina.json";

const AMBER = "#ffd84d";
const RED = "#e5484d";

export default function DibuChart() {
  const max = Math.max(...data.dibu.map((d) => Math.max(d.xg_faced, d.goals_conceded)), 1);
  const W = 700;
  const rowH = 46;
  const labelW = 160;
  const barW = W - labelW - 110;
  const H = data.dibu.length * rowH + 26;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="dibu" role="img" aria-label="Goals conceded vs expected, by match">
      <text x={labelW} y={13} className="runhead" fill={AMBER}>xG faced</text>
      {data.dibu.map((d, i) => {
        const y = 22 + i * rowH;
        const w = (d.xg_faced / max) * barW;
        const diff = d.xg_faced - d.goals_conceded;
        return (
          <g key={d.match}>
            <text x={labelW - 8} y={y + 16} textAnchor="end" className="runlabel">
              {d.label.replace("vs ", "")}
            </text>
            <rect x={labelW} y={y + 5} width={Math.max(w, 2)} height={12} fill={AMBER} fillOpacity={0.7} rx={2}>
              <title>{`${d.xg_faced.toFixed(2)} xG faced`}</title>
            </rect>
            {[...Array(d.goals_conceded)].map((_, k) => (
              <circle key={k} cx={labelW + 8 + k * 16} cy={y + 27} r={5.5} fill={RED}>
                <title>goal conceded</title>
              </circle>
            ))}
            <text x={W - 4} y={y + 16} textAnchor="end" className="runxg">
              {diff >= 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
