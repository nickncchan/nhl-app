import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RenderTeamStats from "../components/RenderTeamStats";
import ClearStorage from "../components/ClearStorage";

const CompareTeams = () => {
  const [team1Stats, setTeam1Stats] = useState(null);
  const [team2Stats, setTeam2Stats] = useState(null);
  const { team1, team2 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam1 = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${team1}?expand=team.stats`
      );
      const data = await response.json();

      setTeam1Stats(data.teams[0].teamStats);
    };

    fetchTeam1();
  }, [team1]);

  useEffect(() => {
    const fetchTeam2 = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/teams/${team2}?expand=team.stats`
      );
      const data = await response.json();

      setTeam2Stats(data.teams[0].teamStats);
    };

    fetchTeam2();
  }, [team2]);

  const startOver = () => {
    ClearStorage();
    navigate({
      pathname: `/team`,
    });
  };

  return (
    team1Stats &&
    team2Stats && (
      <div>
        <h1>Team Comparison</h1>
        <div className="player-info">
          <button onClick={startOver}>Start Over</button>
          <h2>{team1Stats[0].splits[0].team.name}</h2>
          <img
            src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team1}.svg`}
            alt="logo"
            width="500px"
            height="380px"
          />
          <RenderTeamStats teamStats={team1Stats} />
          <h2>{team2Stats[0].splits[0].team.name}</h2>
          <img
            src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team2}.svg`}
            alt="logo"
            width="500px"
            height="380px"
          />
          <RenderTeamStats teamStats={team2Stats} />
        </div>
      </div>
    )
  );
};

export default CompareTeams;
