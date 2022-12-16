import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  const [teamsData, setTeamsData] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://statsapi.web.nhl.com/api/v1/teams/"
      );
      const data = await response.json();

      setTeamsData(data.teams);
    };

    fetchTeams();
  }, []);

  const renderList = () => {
    return teamsData.map((team) => {
      return (
        <div className="teams-page-column">
          <div className="teams-page-team">
            <p key={team.id}>
              <a href={"/team/" + team.id}>
                <img
                  src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`}
                  alt="logo"
                  width="200px"
                />
              </a>
              <Link to={"/team/" + team.id} className="teams-page-list">
                <b>{team.name}</b>
              </Link>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    teamsData && (
      <div>
        <h1 className="page-title">NHL Fantasy Comparison Tool</h1>
        <div className="teams-page-select">
          <p>
            <u>Select an NHL Team</u>
          </p>
        </div>
        <div className="teams-list">
          <div className="teams-page-row">{renderList()}</div>
        </div>
      </div>
    )
  );
};

export default Teams;
