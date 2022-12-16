import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Player from "./pages/Player";
import ComparePlayers from "./pages/ComparePlayers";
import CompareTeams from "./pages/CompareTeams";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/team/:id" element={<Team />} />
      <Route path="/team/:id/:playerID" element={<Player />} />
      <Route path="/compare/:player1/:player2" element={<ComparePlayers />} />
      <Route path="/compare/teams/:team1/:team2" element={<CompareTeams />} />
    </Routes>
  );
};

export default Router;
