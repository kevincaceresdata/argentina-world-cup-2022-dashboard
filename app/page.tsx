import arg from "../data/argentina.json";
import julian from "../data/summary.json";
import ShotMap from "../components/ShotMap";
import MatchBars from "../components/MatchBars";
import PressureMap from "../components/PressureMap";
import ShotsTable from "../components/ShotsTable";
import TournamentRun from "../components/TournamentRun";
import PlayersChart from "../components/PlayersChart";
import DibuChart from "../components/DibuChart";

const TEAM_INSIGHTS = [
  {
    n: "2.49–0.15",
    title: "The defeat that made no sense",
    body: "Saudi Arabia: 2.49 expected goals against 0.15 — the most one-sided match Argentina played — and the only loss. The two shots that beat them carried 0.15 xG combined. The data says they dominated; the scoreboard disagreed.",
  },
  {
    n: "16",
    title: "Messi created everything",
    body: "Seven goals, and sixteen passes that ended in a shot for a teammate. No other player reached ten. Every attacking sequence of the tournament ran through him, one way or another.",
  },
  {
    n: "2.12 → 0",
    title: "The striker lottery",
    body: "Lautaro Martínez generated 2.12 expected goals and scored none. Julián Álvarez generated 1.91 and scored four. Same position, same team, opposite tournaments — finishing is a skill, and also a coin flip.",
  },
  {
    n: "0.61",
    title: "The wall",
    body: "Expected goals conceded per match: 0.61, four point two four across the whole tournament. Opponents needed miracles — two low-xG strikes from Saudi Arabia, two from Weghorst — or Kylian Mbappé.",
  },
  {
    n: "980",
    title: "Pressing was the system",
    body: "Nine hundred and eighty pressure events, led by a striker (Álvarez, 118) and a holding midfielder (Enzo Fernández, 107). Argentina defended from the front with the number nine, and attacked from the back with the number five.",
  },
];

const JULIAN_INSIGHTS = [
  {
    n: "1.91 → 4",
    title: "He out-finished his chances",
    body: "Four goals from 1.91 expected goals — the hottest finishing run of the tournament, worth +2.09 over average.",
  },
  {
    n: "2.28 m",
    title: "He shoots through contact",
    body: "The nearest defender stood 2.28 metres away when he pulled the trigger. His goals came through bodies, not around them.",
  },
];

export default function Home() {
  const t = arg.totals;
  return (
    <main>
      <header className="hero">
        <p className="kicker">2022 FIFA World Cup, champions</p>
        <h1>Argentina</h1>
        <p className="lede">
          Fifteen goals, eight conceded, and a title built on a wall that allowed
          0.61 expected goals per match. The full tournament, measured with event
          data and 360 freeze frames.
        </p>
        <div className="hero-stats">
          <div>
            <span className="hero-num">{t.goals_for}</span>
            <span className="hero-label">goals scored</span>
          </div>
          <div>
            <span className="hero-num">{t.goals_against}</span>
            <span className="hero-label">goals conceded</span>
          </div>
          <div>
            <span className="hero-num">{t.xg_for.toFixed(1)}</span>
            <span className="hero-label">expected goals for</span>
          </div>
          <div>
            <span className="hero-num accent">{t.xg_against.toFixed(2)}</span>
            <span className="hero-label">expected goals against</span>
          </div>
        </div>
      </header>

      <section className="insights">
        {TEAM_INSIGHTS.map((it) => (
          <article key={it.title} className="insight">
            <div className="insight-n">{it.n}</div>
            <div>
              <h2>{it.title}</h2>
              <p>{it.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section>
        <h3 className="section-title">The road to the title, match by match</h3>
        <TournamentRun />
      </section>

      <div className="duo">
        <section>
          <h3 className="section-title">Who scored, who should have</h3>
          <PlayersChart />
        </section>
        <section>
          <h3 className="section-title">The goal that was never expected</h3>
          <DibuChart />
          <p className="caption">
            What the goalkeeper faced. Gold bars are the expected goals of the
            shots he saw; red dots are the ones that went in.
          </p>
        </section>
      </div>

      <section className="julian">
        <h3 className="section-title">The number nine: Julián Álvarez</h3>
        <div className="julian-grid">
          {JULIAN_INSIGHTS.map((it) => (
            <article key={it.title} className="insight">
              <div className="insight-n">{it.n}</div>
              <div>
                <h2>{it.title}</h2>
                <p>{it.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="duo">
          <div className="map-wrap slim">
            <ShotMap />
            <p className="caption">
              Every shot of his tournament. Size is expected goals; green
              finished in a goal. Hover any dot for the match, minute and the
              defender&rsquo;s distance.
            </p>
          </div>
          <div>
            <PressureMap />
            <p className="caption">
              His 118 pressure events — the most of any Argentina player,
              from the striker position.
            </p>
          </div>
        </div>
        <ShotsTable />
      </section>

      <footer>
        Data: StatsBomb, open data. Analysis and dashboard: see repository.
      </footer>
    </main>
  );
}
