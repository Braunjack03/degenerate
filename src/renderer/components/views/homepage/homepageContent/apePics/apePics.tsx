import "./index.scss";
import Ape from "../../../../../../assets/images/pictures/my apes/ape-vipers.svg";
export default function apePics(): JSX.Element {
  return (
    <div className="apes-pics">
      <img className="ape-pic" src={Ape} alt="" />
      <img className="ape-pic" src={Ape} alt="" />
      <img className="ape-pic" src={Ape} alt="" />
    </div>
  );
}
