const ClearStorage = () => {
  localStorage.removeItem("team1");
  localStorage.removeItem("team1Name");
  localStorage.removeItem("player1");
  localStorage.removeItem("player1Name");
  localStorage.removeItem("player1Position");
  localStorage.removeItem("player2Position");
};

export default ClearStorage;
