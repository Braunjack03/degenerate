import "./index.scss";
import ApeintoshWindow from "../../../../../common/apeintosh/apeintoshWindow/ApeintoshWindow";
import { ReactComponent as Cone } from "../../../../../../../assets/images/pictures/desktop icons/traffic-cone.svg";

export default function Construction(): JSX.Element {
  return (
    <ApeintoshWindow>
      <div className="s-construction">
        <Cone />
        <h1>We are in Construction pls wait...</h1>
      </div>
    </ApeintoshWindow>
  );
}
