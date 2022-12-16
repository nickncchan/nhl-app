import { nanoid } from "nanoid";

const RenderSkater = ({ playerStats }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Team</th>
            <th>League</th>
            <th>GP</th>
            <th>G</th>
            <th>A</th>
            <th>PTS</th>
            <th>+/-</th>
            <th>PIM</th>
            <th>Hits</th>
            <th>SB</th>
            <th>SOG</th>
            <th>S%</th>
            <th>PPG</th>
            <th>PPP</th>
            <th>SHG</th>
            <th>SHP</th>
            <th>GWG</th>
            <th>OTG</th>
            <th>TOI</th>
            <th>PP TOI</th>
            <th>SH TOI</th>
            <th>ES TOI</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((stats) => {
            let year = stats.season.split("");
            year.splice(4, 0, "-").join("");

            return (
              <tr key={nanoid()}>
                <td>{year}</td>
                <td>{stats.team.name ? stats.team.name : "N/A"}</td>
                <td>
                  {stats.league.name
                    ? stats.league.name === "National Hockey League"
                      ? "NHL"
                      : stats.league.name
                    : "N/A"}
                </td>
                <td>{stats.stat.games ? stats.stat.games : "-"}</td>
                <td>{stats.stat.goals ? stats.stat.goals : "-"}</td>
                <td>{stats.stat.assists ? stats.stat.assists : "-"}</td>
                <td>
                  <b>{stats.stat.points ? stats.stat.points : "-"}</b>
                </td>
                <td>{stats.stat.plusMinus ? stats.stat.plusMinus : "-"}</td>
                <td>{stats.stat.pim ? stats.stat.pim : "-"}</td>
                <td>{stats.stat.hits ? stats.stat.hits : "-"}</td>
                <td>{stats.stat.blocked ? stats.stat.blocked : "-"}</td>
                <td>{stats.stat.shots ? stats.stat.shots : "-"}</td>
                <td>
                  {stats.stat.shotPct
                    ? Math.round(stats.stat.shotPct * 10) / 10
                    : "-"}
                </td>
                <td>
                  {stats.stat.powerPlayGoals ? stats.stat.powerPlayGoals : "-"}
                </td>
                <td>
                  {stats.stat.powerPlayPoints
                    ? stats.stat.powerPlayPoints
                    : "-"}
                </td>
                <td>
                  {stats.stat.shortHandedGoals
                    ? stats.stat.shortHandedGoals
                    : "-"}
                </td>
                <td>
                  {stats.stat.shortHandedPoints
                    ? stats.stat.shortHandedPoints
                    : "-"}
                </td>
                <td>
                  {stats.stat.gameWinningGoals
                    ? stats.stat.gameWinningGoals
                    : "-"}
                </td>
                <td>
                  {stats.stat.overTimeGoals ? stats.stat.overTimeGoals : "-"}
                </td>
                <td>{stats.stat.timeOnIce ? stats.stat.timeOnIce : "-"}</td>
                <td>
                  {stats.stat.powerPlayTimeOnIce
                    ? stats.stat.powerPlayTimeOnIce
                    : "-"}
                </td>
                <td>
                  {stats.stat.shortHandedTimeOnIce
                    ? stats.stat.shortHandedTimeOnIce
                    : "-"}
                </td>
                <td>
                  {stats.stat.evenTimeOnIce ? stats.stat.evenTimeOnIce : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderSkater;
