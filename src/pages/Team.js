import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RenderTeamStats from "../components/RenderTeamStats";

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const [teamStats, setTeamStats] = useState(null);
  const [rosterData, setRosterData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const team1 = localStorage.getItem("team1");
  const team1Name = localStorage.getItem("team1Name");

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${id}`
      );
      const data = await response.json();

      setTeamData(data.teams[0]);
    };

    const fetchTeamStats = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.stats`
      );
      const data = await response.json();

      setTeamStats(data.teams[0].teamStats);
    };

    fetchTeam();
    fetchTeamStats();
  }, [id]);

  useEffect(() => {
    const fetchRoster = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`
      );
      const data = await response.json();

      setRosterData(data.roster);
    };

    fetchRoster();
  }, [id]);

  const renderRoster = () => {
    return rosterData.map((players) => {
      const playerURL = `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${players.person.id}@2x.jpg`;

      console.log();
      return (
        rosterData && (
          <div className="roster-column">
            <div className="roster-info">
              <p key={players.person.id}>
                <img src={playerURL} width="120px" />
                <Link
                  to={`/team/${id}/` + players.person.id}
                  className="roster-names"
                >
                  {players.jerseyNumber ? "#" + players.jerseyNumber : "N/A"} -{" "}
                  {players.person.fullName} ({players.position.abbreviation})
                </Link>
              </p>
            </div>
          </div>
        )
      );
    });
  };

  const compareTeamsNav = () => {
    if (team1Name && team1 !== id) {
      navigate({
        pathname: `/compare/teams/${team1}/${id}`,
      });
      localStorage.removeItem("team1");
      localStorage.removeItem("team1Name");
    } else {
      localStorage.setItem("team1", id);
      localStorage.setItem("team1Name", teamData.name);
      navigate({
        pathname: `/team`,
      });
    }
  };

  return (
    teamStats &&
    teamData &&
    rosterData && (
      <div>
        <h1 className="page-title">NHL Fantasy Comparison Tool</h1>
        <h2 className="team-name">{teamData.name}</h2>
        <div className="team-logo">
          <img
            src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${id}.svg`}
            alt="logo"
            width="500px"
          />
        </div>
        <p className="roster-title">
          <u>Current Regular Season Stats</u>
        </p>
        <div className="season-table">
          <RenderTeamStats teamStats={teamStats} />
        </div>
        <br></br>
        <div className="select-compare">
          <p>
            <b>Select a player from below</b> or{" "}
            <button onClick={compareTeamsNav}>
              {team1Name
                ? "Compare with the " + team1Name
                : "Compare with Another Team"}
            </button>
          </p>
        </div>
        <p className="roster-title">
          <u>Current Roster</u>
        </p>
        <div className="roster">
          <div className="roster-row">{renderRoster()}</div>
        </div>
      </div>
    )
  );
};

export default Team;
