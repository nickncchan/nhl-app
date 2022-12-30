import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClearStorage from "../components/ClearStorage";
import RenderCareerSkater from "../components/RenderCareerSkater";
import RenderCareerGoalie from "../components/RenderCareerGoalie";
import RenderGoalie from "../components/RenderGoalie";
import RenderInfoShort from "../components/RenderInfoShort";
import RenderSkater from "../components/RenderSkater";

const Player = () => {
  const [playerData, setPlayerData] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);
  const [playerPlayoffs, setPlayerPlayoffs] = useState(null);
  const [playerCareer, setPlayerCareer] = useState(null);
  const [playerCareerPlayoffs, setPlayerCareerPlayoffs] = useState(null);
  const { id, playerID } = useParams();
  const navigate = useNavigate();
  const player1 = localStorage.getItem("player1");
  const player1Name = localStorage.getItem("player1Name");

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerID}`
      );
      const data = await response.json();

      setPlayerData(data.people[0]);
    };

    const fetchStats = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=yearByYear`
      );
      const data = await response.json();

      setPlayerStats(data.stats[0].splits);
    };

    const fetchPlayoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=yearByYearPlayoffs`
      );
      const data = await response.json();

      setPlayerPlayoffs(data.stats[0].splits);
    };

    const fetchCareer = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=careerRegularSeason`
      );
      const data = await response.json();

      setPlayerCareer(data.stats[0].splits);
    };

    const fetchCareerPlayoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=careerPlayoffs`
      );
      const data = await response.json();

      setPlayerCareerPlayoffs(data.stats[0].splits);
    };

    fetchPlayer();
    fetchStats();
    fetchPlayoffs();
    fetchCareer();
    fetchCareerPlayoffs();
  }, [playerID]);

  const newPlayers = () => {
    ClearStorage();
    navigate({
      pathname: `/team`,
    });
  };

  const goToCompare = () => {
    if (player1 && player1 !== playerID) {
      navigate({
        pathname: `/compare/${player1}/${playerID}`,
      });
      localStorage.removeItem("team1");
      localStorage.removeItem("team1Name");
      localStorage.removeItem("player1");
      localStorage.removeItem("player1Name");
      localStorage.setItem(
        "player2Position",
        playerData.primaryPosition.abbreviation
      );
    } else {
      localStorage.setItem("player1", playerID);
      localStorage.setItem("player1Name", playerData.fullName);
      localStorage.setItem(
        "player1Position",
        playerData.primaryPosition.abbreviation
      );
      navigate({
        pathname: `/team`,
      });
    }
  };

  return (
    playerData &&
    playerStats &&
    playerPlayoffs &&
    playerCareer &&
    playerCareerPlayoffs && (
      <div>
        <h1>NHL Fantasy Comparison Tool</h1>
        <div className="player-info">
          <h2>{playerData.fullName}</h2>
          <img
            src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerID}@2x.jpg`}
            alt="player"
            width="300px"
          />
          {<RenderInfoShort playerData={playerData} teamID={id} />}
          <p>
            <button onClick={goToCompare}>
              {player1Name
                ? "Compare with " + player1Name
                : "Compare With Another Player"}
            </button>{" "}
            <button onClick={newPlayers}>Choose a New Player</button>
          </p>
          <h3>NHL Career Regular Season Totals</h3>
          {playerData.primaryPosition.abbreviation === "G" ? (
            <RenderCareerGoalie career={playerCareer} />
          ) : (
            <RenderCareerSkater career={playerCareer} />
          )}
          <h3>NHL Career Playoff Totals</h3>
          {playerData.primaryPosition.abbreviation === "G" ? (
            <RenderCareerGoalie career={playerCareerPlayoffs} />
          ) : (
            <RenderCareerSkater career={playerCareerPlayoffs} />
          )}
          <h3>Regular Season</h3>
          {playerData.primaryPosition.abbreviation === "G" ? (
            <RenderGoalie playerID={playerID} playerStats={playerStats} />
          ) : (
            <RenderSkater playerID={playerID} playerStats={playerStats} />
          )}
          <h3>Playoffs</h3>
          {playerData.primaryPosition.abbreviation === "G" ? (
            <RenderGoalie playerID={playerID} playerStats={playerPlayoffs} />
          ) : (
            <RenderSkater playerID={playerID} playerStats={playerPlayoffs} />
          )}
        </div>
      </div>
    )
  );
};

export default Player;
