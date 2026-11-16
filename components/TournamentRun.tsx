import data from "../data/argentina.json";

const SKY = "#8fc1f5";
const RED = "#e5484d";

export default function TournamentRun() {
  const max = Math.max(...data.matches.map((m) => Math.max(m.xg_for, m.xg_against)), 1);
  const W = 760;
  const rowH = 56;
  const labelW = 168;
  const barW = W - labelW - 90;
  const H = data.matches.length * rowH + 30;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="run" role="img" aria-label="Tournament run by expected goals">
      <text x={labelW} y={14} className="runhead" fill={SKY}>xG for</text>
      <text x={labelW + barW} y={14} textAnchor="end" className="runhead" fill={RED}>xG against</text>
      {data.matches.map((m, i) => {
        const y = 24 + i * rowH;
        const wf = (m.xg_for / max) * (barW / 2 - 30);
        const wa = (m.xg_against / max) * (barW / 2 - 30);
        const cx = labelW + barW / 2;
        const won = m.goals_for > m.goals_against;
        const draw = m.goals_for === m.goals_against;
        return (
          <g key={m.match_id}>
            <text x={0} y={y + 17} className="runlabel">{m.label.replace("vs ", "")}</text>
            <text x={labelW - 8} y={y + 17} textAnchor="end" className="runstage">{m.stage}</text>
            <rect x={cx - wf} y={y + 6} width={wf} height={13} fill={SKY} rx={2}>
              <title>{`${m.xg_for.toFixed(2)} xG for`}</title>
            </rect>
            <rect x={cx} y={y + 6} width={wa} height={13} fill={RED} rx={2}>
              <title>{`${m.xg_against.toFixed(2)} xG against`}</title>
            </rect>
            <text x={cx} y={y + 17} textAnchor="middle" className={won ? "runscore won" : draw ? "runscore draw" : "runscore lost"}>
              {m.goals_for}–{m.goals_against}
            </text>
            <text x={W - 4} y={y + 17} textAnchor="end" className="runxg">
              {m.xg_for.toFixed(2)}–{m.xg_against.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
