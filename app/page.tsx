import summary from "../data/summary.json";
import ShotMap from "../components/ShotMap";
import MatchBars from "../components/MatchBars";
import PressureMap from "../components/PressureMap";
import ShotsTable from "../components/ShotsTable";

const INSIGHTS = [
  {
    n: "1.91 → 4",
    title: "He out-finished his chances",
    body: "Four goals from 1.91 expected goals. Every goal came from a situation an average striker converts about half the time — the hottest finishing run of the tournament.",
  },
  {
    n: "2.28 m",
    title: "He shoots through contact",
    body: "The nearest defender stood 2.28 metres away when he pulled the trigger, and three of his nine tracked shots had a marker inside two metres. His finishes came through bodies, not around them.",
  },
  {
    n: "118",
    title: "He was the first defender",
    body: "Pressure events, concentrated in the opponent's half. Argentina's high block ran through the number nine — the map below is a striker's defensive shift.",
  },
  {
    n: "11%",
    title: "Nobody pressed him back",
    body: "Only eleven percent of his ball receptions came under pressure. Argentina owned the ball, Julián owned the effort — the running was his to give, not his to suffer.",
  },
];

export default function Home() {
  const t = summary.totals;
  return (
    <main>
      <header className="hero">
        <p className="kicker">Argentina, 2022 FIFA World Cup, forward</p>
        <h1>Julián Álvarez</h1>
        <p className="lede">
          Four goals from <strong>1.91 xG</strong> — the tournament&rsquo;s most
          efficient striker, measured with event data and 360 freeze frames.
        </p>
        <div className="hero-stats">
          <div>
            <span className="hero-num">{t.shots}</span>
            <span className="hero-label">shots</span>
          </div>
          <div>
            <span className="hero-num accent">{t.goals}</span>
            <span className="hero-label">goals</span>
          </div>
          <div>
            <span className="hero-num">+{(t.goals - t.xg).toFixed(2)}</span>
            <span className="hero-label">goals minus xG</span>
          </div>
        </div>
      </header>

      <section className="insights">
        {INSIGHTS.map((it) => (
          <article key={it.title} className="insight">
            <div className="insight-n">{it.n}</div>
            <div>
              <h2>{it.title}</h2>
              <p>{it.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="map-wrap">
        <ShotMap />
        <p className="caption">
          Every shot of the tournament. Size is expected goals; green finished
          in a goal, orange was saved, grey missed or was blocked. Hover any
          dot for the minute, the match and the defender&rsquo;s distance.
        </p>
      </section>

      <div className="duo">
        <section>
          <h3 className="section-title">Expected goals against actual goals, by match</h3>
          <MatchBars />
        </section>
        <section>
          <h3 className="section-title">Where he pressed</h3>
          <PressureMap />
        </section>
      </div>

      <section>
        <h3 className="section-title">All eleven shots</h3>
        <ShotsTable />
      </section>

      <footer>
        Data: StatsBomb, open data. Analysis and dashboard: see repository.
      </footer>
    </main>
  );
}
