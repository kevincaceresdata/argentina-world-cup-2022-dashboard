import data from "../data/argentina.json";

const GRASS = "#8bd450";
const SKY = "#8fc1f5";

export default function PlayersChart() {
  const top = data.players.slice(0, 8);
  const W = 760;
  const rowH = 40;
  const nameW = 210;
  const barW = W - nameW - 120;
  const max = Math.max(...top.map((p) => Math.max(p.goals, p.xg)), 1);
  const H = top.length * rowH + 26;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="players" role="img" aria-label="Goals and xG by player">
      <text x={nameW} y={13} className="runhead" fill={GRASS}>goals</text>
      <text x={nameW + 14} y={13} className="runhead" fill={SKY}>expected</text>
      {top.map((p, i) => {
        const y = 22 + i * rowH;
        const wg = (p.goals / max) * barW;
        const wx = (p.xg / max) * barW;
        const short = p.name.split(" ").filter((w) => w.length > 2).slice(-2).join(" ");
        return (
          <g key={p.name}>
            <text x={nameW - 8} y={y + 14} textAnchor="end" className="runlabel">
              {short}
            </text>
            <rect x={nameW} y={y + 4} width={Math.max(wg, 2)} height={11} fill={GRASS} rx={2}>
              <title>{`${p.goals} goals`}</title>
            </rect>
            <rect x={nameW} y={y + 17} width={Math.max(wx, 2)} height={11} fill={SKY} fillOpacity={0.55} rx={2}>
              <title>{`${p.xg.toFixed(2)} xG`}</title>
            </rect>
            <text x={nameW + Math.max(wg, wx) + 10} y={y + 16} className="runassist">
              {p.assists > 0 ? `${p.assists} shot assists` : ""}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
