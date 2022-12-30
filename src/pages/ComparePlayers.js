import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RenderCareerSkater from "../components/RenderCareerSkater";
import RenderCareerGoalie from "../components/RenderCareerGoalie";
import RenderGoalie from "../components/RenderGoalie";
import RenderInfoShort from "../components/RenderInfoShort";
import RenderSkater from "../components/RenderSkater";

const ComparePlayers = () => {
  const [player1Data, setPlayer1Data] = useState(null);
  const [player1Stats, setPlayer1Stats] = useState(null);
  const [player1Playoffs, setPlayer1Playoffs] = useState(null);
  const [player1Career, setPlayer1Career] = useState(null);
  const [player1CareerPlayoffs, setPlayer1CareerPlayoffs] = useState(null);
  const [player2Data, setPlayer2Data] = useState(null);
  const [player2Stats, setPlayer2Stats] = useState(null);
  const [player2Playoffs, setPlayer2Playoffs] = useState(null);
  const [player2Career, setPlayer2Career] = useState(null);
  const [player2CareerPlayoffs, setPlayer2CareerPlayoffs] = useState(null);
  const navigate = useNavigate();
  const { player1, player2 } = useParams();
  const player1Position = localStorage.getItem("player1Position");
  const player2Position = localStorage.getItem("player2Position");

  useEffect(() => {
    const fetchPlayer1Data = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player1}`
      );
      const data = await response.json();

      setPlayer1Data(data.people[0]);
    };

    const fetchPlayer1Stats = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player1}/stats?stats=yearByYear`
      );
      const data = await response.json();

      setPlayer1Stats(data.stats[0].splits);
    };

    const fetchPlayer1Playoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player1}/stats?stats=yearByYearPlayoffs`
      );
      const data = await response.json();

      setPlayer1Playoffs(data.stats[0].splits);
    };

    const fetchPlayer1Career = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player1}/stats?stats=careerRegularSeason`
      );
      const data = await response.json();

      setPlayer1Career(data.stats[0].splits);
    };

    const fetchPlayer1CareerPlayoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player1}/stats?stats=careerPlayoffs`
      );
      const data = await response.json();

      setPlayer1CareerPlayoffs(data.stats[0].splits);
    };

    fetchPlayer1Data();
    fetchPlayer1Stats();
    fetchPlayer1Playoffs();
    fetchPlayer1Career();
    fetchPlayer1CareerPlayoffs();
  }, [player1]);

  useEffect(() => {
    const fetchPlayer2Data = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player2}`
      );
      const data = await response.json();

      setPlayer2Data(data.people[0]);
    };

    const fetchPlayer2Stats = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player2}/stats?stats=yearByYear`
      );
      const data = await response.json();

      setPlayer2Stats(data.stats[0].splits);
    };

    const fetchPlayer2Playoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player2}/stats?stats=yearByYearPlayoffs`
      );
      const data = await response.json();

      setPlayer2Playoffs(data.stats[0].splits);
    };

    const fetchPlayer2Career = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player2}/stats?stats=careerRegularSeason`
      );
      const data = await response.json();

      setPlayer2Career(data.stats[0].splits);
    };

    const fetchPlayer2CareerPlayoffs = async () => {
      const response = await fetch(
        `https://statsapi.web.nhl.com/api/v1/people/${player2}/stats?stats=careerPlayoffs`
      );
      const data = await response.json();

      setPlayer2CareerPlayoffs(data.stats[0].splits);
    };

    fetchPlayer2Data();
    fetchPlayer2Stats();
    fetchPlayer2Playoffs();
    fetchPlayer2Career();
    fetchPlayer2CareerPlayoffs();
  }, [player2]);

  const renderPlayer1Stats = () => {
    if (player1Position === "G") {
      return (
        <>
          <h3>NHL Career Regular Season Totals</h3>
          <RenderCareerGoalie career={player1Career} />
          <h3>NHL Career Playoff Totals</h3>
          <RenderCareerGoalie career={player1CareerPlayoffs} />
          <h3>Regular Season Stats</h3>
          <RenderGoalie playerStats={player1Stats} />
          <h3>Playoff Stats</h3>
          <RenderGoalie playerStats={player1Playoffs} />
        </>
      );
    } else {
      return (
        <>
          <h3>NHL Career Regular Season Totals</h3>
          <RenderCareerSkater career={player1Career} />
          <h3>NHL Career Playoff Totals</h3>
          <RenderCareerSkater career={player1CareerPlayoffs} />
          <h3>Regular Season Stats</h3>
          <RenderSkater playerStats={player1Stats} />
          <h3>Playoff Stats</h3>
          <RenderSkater playerStats={player1Playoffs} />
        </>
      );
    }
  };

  const renderPlayer2Stats = () => {
    if (player2Position === "G") {
      return (
        <>
          <h3>NHL Career Regular Season Totals</h3>
          <RenderCareerGoalie career={player2Career} />
          <h3>NHL Career Playoff Totals</h3>
          <RenderCareerGoalie career={player2CareerPlayoffs} />
          <h3>Regular Season Stats</h3>
          <RenderGoalie playerStats={player2Stats} />
          <h3>Playoff Stats</h3>
          <RenderGoalie playerStats={player2Playoffs} />
        </>
      );
    } else {
      return (
        <>
          <h3>NHL Career Regular Season Totals</h3>
          <RenderCareerSkater career={player2Career} />
          <h3>NHL Career Playoff Totals</h3>
          <RenderCareerSkater career={player2CareerPlayoffs} />
          <h3>Regular Season Stats</h3>
          <RenderSkater playerStats={player2Stats} />
          <h3>Playoff Stats</h3>
          <RenderSkater playerStats={player2Playoffs} />
        </>
      );
    }
  };

  const newPlayers = () => {
    localStorage.removeItem("team1");
    localStorage.removeItem("player1");
    navigate({
      pathname: `/team`,
    });
  };

  return (
    player1Data &&
    player1Stats &&
    player1Playoffs &&
    player1Career &&
    player1CareerPlayoffs &&
    player2Data &&
    player2Stats &&
    player2Playoffs &&
    player2Career &&
    player2CareerPlayoffs && (
      <div>
        <h1>Player Comparison</h1>
        <div className="player-info">
          <button onClick={newPlayers}>Choose New Players</button>
          <h2>{player1Data.fullName}</h2>
          <img
            src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player1}@2x.jpg`}
            alt="player"
          />
          <RenderInfoShort
            playerData={player1Data}
            teamID={player1Data.currentTeam.id}
          />
          {renderPlayer1Stats()}
        </div>
        <div className="player-info">
          <h2>{player2Data.fullName}</h2>
          <img
            src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player2}@2x.jpg`}
            alt="player"
          />
          <RenderInfoShort
            playerData={player2Data}
            teamID={player2Data.currentTeam.id}
          />
          {renderPlayer2Stats()}
        </div>
      </div>
    )
  );
};

export default ComparePlayers;
