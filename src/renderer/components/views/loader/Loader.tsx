import "./index.scss";
import { ReactComponent as Banana } from "../../../../assets/images/pictures/backgrounds/banana.svg";

export default function Loader({ display }: { display: boolean }): JSX.Element {
  return (
    <div className={`loader ${display ? "" : "loader-fade-out"}`}>
      <div className="l-content">
        <Banana />
      </div>
    </div>
  );
}
