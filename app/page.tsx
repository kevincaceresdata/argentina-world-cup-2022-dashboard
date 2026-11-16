"use client";

import { useState } from "react";
import arg from "../data/argentina.json";
import ShotMap from "../components/ShotMap";
import ShotsTable from "../components/ShotsTable";
import PressureMap from "../components/PressureMap";
import TournamentRun from "../components/TournamentRun";
import PlayersChart from "../components/PlayersChart";
import DibuChart from "../components/DibuChart";
import { STR, type Lang } from "./i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = STR[lang];
  const tot = arg.totals;
  const hero = [
    { v: String(tot.goals_for), l: t.stats[0] },
    { v: String(tot.goals_against), l: t.stats[1] },
    { v: tot.xg_for.toFixed(1), l: t.stats[2] },
    { v: tot.xg_against.toFixed(2), l: t.stats[3], accent: true },
  ];

  return (
    <main>
      <nav className="langnav">
        <button onClick={() => setLang("en")} className={lang === "en" ? "on" : ""}>EN</button>
        <span className="sep">/</span>
        <button onClick={() => setLang("es")} className={lang === "es" ? "on" : ""}>ES</button>
      </nav>

      <header className="hero">
        <p className="kicker">{t.kicker}</p>
        <h1>Argentina</h1>
        <p className="lede">{t.lede}</p>
        <div className="hero-stats">
          {hero.map((h) => (
            <div key={h.l}>
              <span className={h.accent ? "hero-num accent" : "hero-num"}>{h.v}</span>
              <span className="hero-label">{h.l}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="insights">
        {t.insights.map((it) => (
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
        <h3 className="section-title">{t.roadTitle}</h3>
        <TournamentRun lang={lang} />
      </section>

      <div className="duo">
        <section>
          <h3 className="section-title">{t.playersTitle}</h3>
          <PlayersChart lang={lang} />
        </section>
        <section>
          <h3 className="section-title">{t.dibuTitle}</h3>
          <DibuChart lang={lang} />
          <p className="caption">{t.dibuCaption}</p>
        </section>
      </div>

      <section className="julian">
        <h3 className="section-title">{t.julianTitle}</h3>
        <div className="julian-grid">
          {t.julianInsights.map((it) => (
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
            <p className="caption">{t.mapCaption}</p>
          </div>
          <div>
            <PressureMap />
            <p className="caption">{t.pressureCaption}</p>
          </div>
        </div>
        <ShotsTable />
      </section>

      <footer>{t.footer}</footer>
    </main>
  );
}
