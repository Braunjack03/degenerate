import "./index.scss";
import Ape from "../../../../../../assets/images/pictures/my apes/ape-vipers.svg";
import TeamMember from "./teamMember/TeamMember";
export default function Team(): JSX.Element {
  return (
    <div id="team" className="hp-team">
      <h1>Team</h1>
      <div className="hp-team-list">
        <TeamMember ape={Ape} name="MONOLIFF" role="Art & Design" />
        <TeamMember ape={Ape} name="Obo1" role="Project Managment" />
        <TeamMember ape={Ape} name="ConorHolds" role="Development" />
      </div>
    </div>
  );
}
