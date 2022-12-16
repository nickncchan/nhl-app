import { Fragment } from "react";
import { nanoid } from "nanoid";

const RenderTeamStats = ({ teamStats }) => {
  return (
    <div className="team-stats-table">
      <table>
        <thead>
          <tr>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>OTL</th>
            <th>PTS</th>
            <th>PTS%</th>
            <th>G/GP</th>
            <th>GA/GP</th>
            <th>PP%</th>
            <th>PPG</th>
            <th>PPO</th>
            <th>PK%</th>
            <th>PKGA</th>
            <th>S/GP</th>
            <th>SA/GP</th>
            <th>FO%</th>
            <th>S%</th>
            <th>SV%</th>
          </tr>
        </thead>
        <tbody>
          {teamStats.map((stats) => {
            let num = stats.splits[0].stat;
            let rank = stats.splits[1].stat;

            return (
              <Fragment key={nanoid()}>
                <tr>
                  <td>{num.gamesPlayed}</td>
                  <td>{num.wins}</td>
                  <td>{num.losses}</td>
                  <td>{num.ot}</td>
                  <td>{num.pts}</td>
                  <td>{num.ptPctg}</td>
                  <td>{num.goalsPerGame}</td>
                  <td>{num.goalsAgainstPerGame}</td>
                  <td>{num.powerPlayPercentage}</td>
                  <td>{num.powerPlayGoals}</td>
                  <td>{num.powerPlayOpportunities}</td>
                  <td>{num.penaltyKillPercentage}</td>
                  <td>{num.powerPlayGoalsAgainst}</td>
                  <td>{Math.round(num.shotsPerGame)}</td>
                  <td>{Math.round(num.shotsAllowed)}</td>
                  <td>{num.faceOffWinPercentage}</td>
                  <td>{num.shootingPctg}</td>
                  <td>{num.savePctg}</td>
                </tr>
                <tr>
                  <td>
                    <b>Rank:</b>
                  </td>
                  <td>{rank.wins}</td>
                  <td>{rank.losses}</td>
                  <td>{rank.ot}</td>
                  <td>{rank.pts}</td>
                  <td>{rank.ptPctg}</td>
                  <td>{rank.goalsPerGame}</td>
                  <td>{rank.goalsAgainstPerGame}</td>
                  <td>{rank.powerPlayPercentage}</td>
                  <td>{rank.powerPlayGoals}</td>
                  <td>{rank.powerPlayOpportunities}</td>
                  <td>{rank.penaltyKillPercentage}</td>
                  <td>{rank.powerPlayGoalsAgainst}</td>
                  <td>{rank.shotsPerGame}</td>
                  <td>{rank.shotsAllowed}</td>
                  <td>{rank.faceOffWinPercentage}</td>
                  <td>{rank.shootingPctRank}</td>
                  <td>{rank.savePctRank}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderTeamStats;
