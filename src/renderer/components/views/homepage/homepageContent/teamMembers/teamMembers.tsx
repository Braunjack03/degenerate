import "./index.scss";
import Ape from "../../../../../../assets/images/pictures/my apes/ape-vipers.svg";

export default function TeamMembers(): JSX.Element {
  return (
    <>
      <div className="member-pics">
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">@MONOLIFF</h1>
            <h2 className="member-info_role">Art & Design</h2>
          </div>
        </div>
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">OBO1</h1>
            <h2 className="member-info_role">Project Managment</h2>
          </div>
        </div>
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">CONORHOLDS</h1>
            <h2 className="member-info_role">Development</h2>
          </div>
        </div>
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">@MONOLIFF</h1>
            <h2 className="member-info_role">Art & Design</h2>
          </div>
        </div>
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">@MONOLIFF</h1>
            <h2 className="member-info_role">Art & Design</h2>
          </div>
        </div>
        <div className="member-container">
          <img className="member-pic" src={Ape} alt="" />
          <div className="member-info_container">
            <h1 className="member-info_name">@MONOLIFF</h1>
            <h2 className="member-info_role">Art & Design</h2>
          </div>
        </div>
      </div>
    </>
  );
}
