const RenderInfoShort = ({ playerData, teamID }) => {
  return (
    <h3 className="player-info-short">
      {playerData.primaryPosition.abbreviation} | {playerData.height} |{" "}
      {playerData.weight} lb | Age: {playerData.currentAge} |
      <img
        src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamID}.svg`}
        alt="logo"
        width="50px"
      />
      {playerData.currentTeam.name}
    </h3>
  );
};

export default RenderInfoShort;

//https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/23.svg
