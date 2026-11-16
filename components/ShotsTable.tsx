import summary from "../data/summary.json";

export default function ShotsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Match</th>
          <th>Stage</th>
          <th>Min</th>
          <th>xG</th>
          <th>Outcome</th>
          <th>Nearest defender</th>
        </tr>
      </thead>
      <tbody>
        {summary.shots.map((s, i) => (
          <tr key={i} className={s.goal ? "goalrow" : ""}>
            <td>{s.match}</td>
            <td>{s.stage}</td>
            <td>{s.minute}&apos;</td>
            <td>{s.xg.toFixed(3)}</td>
            <td>{s.outcome}</td>
            <td>{s.defender_m != null ? `${s.defender_m} m` : "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
