import summary from "../data/summary.json";
import ShotMap from "../components/ShotMap";
import MatchBars from "../components/MatchBars";
import PressureMap from "../components/PressureMap";
import ShotsTable from "../components/ShotsTable";

export default function Home() {
  const t = summary.totals;
  const kpis = [
    { label: "Shots", value: String(t.shots) },
    { label: "Goals", value: String(t.goals), highlight: true },
    { label: "Total xG", value: t.xg.toFixed(2) },
    { label: "Goals − xG", value: `+${(t.goals - t.xg).toFixed(2)}`, highlight: true },
    { label: "xG per shot", value: t.xg_per_shot.toFixed(3) },
    { label: "Nearest defender at shot", value: `${t.mean_defender_m} m` },
    { label: "Pressure events", value: String(t.pressure_events) },
    { label: "Receipts under pressure", value: `${t.receipts_under_pressure_pct}%` },
  ];
  return (
    <main>
      <header>
        <h1>{summary.player.name}</h1>
        <p className="sub">
          {summary.player.team} · {summary.player.tournament} · {summary.player.position}
        </p>
      </header>

      <section className="kpis">
        {kpis.map((k) => (
          <div key={k.label} className={k.highlight ? "card highlight" : "card"}>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </section>

      <section className="panel">
        <h2>Shot map</h2>
        <p className="hint">
          size = xG · green = goal · orange = saved · grey = other · hover a shot for details
        </p>
        <ShotMap />
      </section>

      <div className="grid2">
        <section className="panel">
          <h2>xG vs goals by match</h2>
          <p className="hint">bar = xG · red dot = goals</p>
          <MatchBars />
        </section>
        <section className="panel">
          <h2>Pressure events</h2>
          <p className="hint">each dot = one pressure action</p>
          <PressureMap />
        </section>
      </div>

      <section className="panel">
        <h2>Every shot</h2>
        <ShotsTable />
      </section>

      <footer>
        {summary.credit} · open data:{" "}
        <a href="https://github.com/hudl/open-data">github.com/hudl/open-data</a>
      </footer>
    </main>
  );
}
