import "./index.scss";
import Ape from "../../../../../../assets/images/pictures/my apes/ape-vipers.svg";
import CollapsableItem from "./collapsableItem/collapsableItem";
export default function CollapsableApePic(): JSX.Element {
  return (
    <div className="collapsable-pics">
      <CollapsableItem Ape={Ape} />
      <CollapsableItem Ape={Ape} />
      <CollapsableItem Ape={Ape} />
    </div>
  );
}
