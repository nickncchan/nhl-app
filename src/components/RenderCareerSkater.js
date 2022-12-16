import { nanoid } from "nanoid";

const RenderCareerSkater = ({ career }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
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
            <th>TOI/GP</th>
            <th>PP TOI/GP</th>
            <th>SH TOI/GP</th>
            <th>ES TOI/GP</th>
          </tr>
        </thead>
        <tbody>
          {career.map((stats) => {
            return (
              <tr key={nanoid()}>
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
                <td>
                  {stats.stat.timeOnIcePerGame
                    ? stats.stat.timeOnIcePerGame
                    : "-"}
                </td>
                <td>
                  {stats.stat.powerPlayTimeOnIcePerGame
                    ? stats.stat.powerPlayTimeOnIcePerGame
                    : "-"}
                </td>
                <td>
                  {stats.stat.shortHandedTimeOnIcePerGame
                    ? stats.stat.shortHandedTimeOnIcePerGame
                    : "-"}
                </td>
                <td>
                  {stats.stat.evenTimeOnIcePerGame
                    ? stats.stat.evenTimeOnIcePerGame
                    : "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderCareerSkater;
