import { nanoid } from "nanoid";

const RenderGoalie = ({ career }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>GP</th>
            <th>GS</th>
            <th>W</th>
            <th>L</th>
            <th>Tie</th>
            <th>OTL</th>
            <th>SO</th>
            <th>SV%</th>
            <th>GAA</th>
            <th>SV</th>
            <th>SA</th>
            <th>GA</th>
            <th>PP SV%</th>
            <th>SH SV%</th>
            <th>ES SV%</th>
            <th>TOI</th>
          </tr>
        </thead>
        <tbody>
          {career.map((stats) => {
            return (
              <tr key={nanoid()}>
                <td>{stats.stat.games ? stats.stat.games : "-"}</td>
                <td>
                  {stats.stat.gamesStarted ? stats.stat.gamesStarted : "-"}
                </td>
                <td>{stats.stat.wins ? stats.stat.wins : "-"}</td>
                <td>{stats.stat.losses ? stats.stat.losses : "-"}</td>
                <td>{stats.stat.ties ? stats.stat.ties : "0"}</td>
                <td>{stats.stat.ot ? stats.stat.ot : "0"}</td>
                <td>{stats.stat.shutouts ? stats.stat.shutouts : "0"}</td>
                <td>
                  {stats.stat.savePercentage
                    ? Math.round(stats.stat.savePercentage * 1000) / 1000
                    : "-"}
                </td>
                <td>
                  {stats.stat.goalAgainstAverage
                    ? Math.round(stats.stat.goalAgainstAverage * 100) / 100
                    : "-"}
                </td>
                <td>{stats.stat.saves ? stats.stat.saves : "-"}</td>
                <td>
                  {stats.stat.shotsAgainst ? stats.stat.shotsAgainst : "-"}
                </td>
                <td>
                  {stats.stat.goalsAgainst ? stats.stat.goalsAgainst : "-"}
                </td>
                <td>
                  {stats.stat.powerPlaySavePercentage
                    ? Math.round(stats.stat.powerPlaySavePercentage * 10) / 10
                    : "-"}
                </td>
                <td>
                  {stats.stat.shortHandedSavePercentage
                    ? Math.round(stats.stat.shortHandedSavePercentage * 10) / 10
                    : "-"}
                </td>
                <td>
                  {stats.stat.evenStrengthSavePercentage
                    ? Math.round(stats.stat.evenStrengthSavePercentage * 10) /
                      10
                    : "-"}
                </td>
                <td>{stats.stat.timeOnIce ? stats.stat.timeOnIce : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderGoalie;
