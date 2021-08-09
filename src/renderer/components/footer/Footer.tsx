import "./index.scss";
import { ReactComponent as ApeLogo } from "../../../assets/images/pictures/logos/DAA_Logo-white.svg";
import { ReactComponent as Discord } from "../../../assets/images/icons/discord.svg";
import { ReactComponent as Twitter } from "../../../assets/images/icons/twitter.svg";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="foot-ape-logo">
        <ApeLogo />
        From the smooth brains of DegenLabs
        <br />
        All Rights Reserved 2021
      </div>
      <div className="foot-links">
        <Discord />
        <Twitter style={{ marginLeft: "15px" }} />
      </div>
    </footer>
  );
}
